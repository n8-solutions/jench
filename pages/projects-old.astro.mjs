import { c as createComponent, r as renderComponent, a as renderTemplate, j as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_w3sW4gXL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Btr4PpF3.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="project-layout"> <div class="project-slider"> <section class="project-track"> ', ' </section> </div> </main> <script type="module" src="/jench/js/HorizontalScroll.js"><\/script> '])), maybeRenderHead(), renderSlot($$result2, $$slots["default"])) })}`;
}, "C:/Users/CristaL/Documents/Code/jench/src/layouts/Project.astro", void 0);

const $$ProjectsOld = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Project", $$Project, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="project-slide"> <div class="image-col"> <img src="/jench/projects/Caroubiers/HD-Caroubiers-JeanCharlesTomas-01.jpg" alt="Caroubiers Image 1"> </div> <div class="text-col"> <p>Overlooking the bay of Saint-Jean-Cap-Ferrat, this refined, metropolitan abode is steeped in elemental materials and natural light. The restful interiors couple burnished metal with raw wood and a lush neutral palette for a look that is classic and composed, spirited yet serene..
november 2021 © Jérôme Galland</p> </div> </div>  <div class="project-slide"> <div class="text-col"> <p>Nulla facilisi. Donec mattis libero eu cursus pharetra.</p> </div> <div class="image-col"> <img src="/jench/projects/Caroubiers/HD-Caroubiers-JeanCharlesTomas-02.jpg" alt="Caroubiers Image 2"> </div> </div> ` })}`;
}, "C:/Users/CristaL/Documents/Code/jench/src/pages/projects-old.astro", void 0);

const $$file = "C:/Users/CristaL/Documents/Code/jench/src/pages/projects-old.astro";
const $$url = "/jench/projects-old/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ProjectsOld,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
