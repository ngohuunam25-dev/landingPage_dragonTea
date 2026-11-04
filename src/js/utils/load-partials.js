export async function loadPartials(root = document) {
  const nodes = [...root.querySelectorAll("[data-include]")];

  await Promise.all(
    nodes.map(async (el) => {
      const url = el.dataset.include;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        el.outerHTML = await res.text();
      } catch (err) {
        console.error(`[loadPartials] Không tải được "${url}":`, err);
        el.innerHTML = `<p style="color:red;padding:16px">Lỗi tải ${url}</p>`;
      }
    }),
  );
}
