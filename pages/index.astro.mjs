import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, j as renderSlot } from '../chunks/astro/server_w3sW4gXL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Btr4PpF3.mjs';
export { renderers } from '../renderers.mjs';

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="home-section"> ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "C:/Users/CristaL/Documents/Code/jench/src/layouts/Home.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Home", $$Home, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<img src="/jench/home/home.jpg" alt="Caroubiers" class="logo"> ` })}`;
}, "C:/Users/CristaL/Documents/Code/jench/src/pages/index.astro", void 0);

const $$file = "C:/Users/CristaL/Documents/Code/jench/src/pages/index.astro";
const $$url = "/jench/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
