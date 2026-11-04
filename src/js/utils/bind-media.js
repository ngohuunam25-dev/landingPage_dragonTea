import { images, videos } from "../../data/media.js";

export function bindMedia(root = document) {
  // <img data-img="founder">
  root.querySelectorAll("[data-img]").forEach((el) => {
    const src = images[el.dataset.img];
    if (src) el.src = src;
    else console.warn(`Không tìm thấy ảnh: ${el.dataset.img}`);
  });

  // <section data-bg="hero">: ảnh nền
  root.querySelectorAll("[data-bg]").forEach((el) => {
    const src = images[el.dataset.bg];
    if (src) el.style.backgroundImage = `url('${src}')`;
  });

  // <video data-video="intro">
  root.querySelectorAll("[data-video]").forEach((el) => {
    const v = videos[el.dataset.video];
    if (!v) return console.warn(`Không tìm thấy video: ${el.dataset.video}`);
    el.src = v.src;
    if (v.poster) el.poster = v.poster;
  });
}
