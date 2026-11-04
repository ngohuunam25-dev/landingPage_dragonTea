import { bindMedia } from "./utils/bind-media.js";
import { loadPartials } from "./utils/load-partials.js";
import { initReveal } from "./utils/reveal.js";
async function bootstrap() {
  await loadPartials();
  bindMedia();
  initReveal();
}

bootstrap();
