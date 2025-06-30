import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_w3sW4gXL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Btr4PpF3.mjs';
export { renderers } from '../renderers.mjs';

const $$Press = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {})}`;
}, "C:/Users/CristaL/Documents/Code/jench/src/pages/press.astro", void 0);

const $$file = "C:/Users/CristaL/Documents/Code/jench/src/pages/press.astro";
const $$url = "/jench/press/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Press,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
