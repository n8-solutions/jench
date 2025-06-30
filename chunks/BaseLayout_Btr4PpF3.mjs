import { c as createComponent, h as renderHead, j as renderSlot, a as renderTemplate } from './astro/server_w3sW4gXL.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>JeanCharlesTomas Interior Design</title><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">${renderHead()}</head> <body> <header class="fade-in"> <div class="logo"> <a href="/jench/"> <img src="/jench/JC-TOMAS-LOGO-BASELINE.jpg" alt="JeanCharlesTomas Interior Design"> </a> </div> </header> <nav class="menu fade-in"> <a href="/jench/">home</a> <a href="/jench/projects/">projects</a> <a href="/jench/press/">press</a> <a href="/jench/about/">about</a> </nav> <!-- <main> --> ${renderSlot($$result, $$slots["default"])} <!-- </main> --> <footer></footer> </body></html>`;
}, "C:/Users/CristaL/Documents/Code/jench/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
