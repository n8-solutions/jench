import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_w3sW4gXL.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Btr4PpF3.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="about-section"> <div class="photo-wrapper"> <img src="/jench/about/about.jpg" alt="Jean-Charles Tomas"> </div> <div class="about-text"> <p>
Based on the french Riviera, interior designer JeanCharlesTomas’s
          eponymous studio creates imaginative residential and commercial spaces
          steeped in artful, hand-wrought detail and a singular perspective.
</p> <p>
Raised in Nice, Tomas studied design in Paris before embarking on a
          storied career as a project manager and designer for architectural and
          interior design firms in New-York, Paris and Monaco. Amassing a
          diverse worldwide network of artisans and craftspeople through his
          work creating bespoke furnishings and productions, Tomas launched his
          design studio in 2017.
</p> <p>
The designer’s exacting eye for detail would remain hallmark to his
          aesthetic. The studio offers a full spectrum of international
          services, meticulously curating all aspects of design—from concept to
          installation—for each of its projects around the globe.
</p> <p>
Tomas’ individualistic approach to interiors begets graceful,
          one-of-a-kind spaces grounded in vivid hues and handsome, natural
          elements, from heirloom woods to custom stone and metalwork. Subtle,
          sophisticated touches abound, reflecting a fluent vocabulary in
          classic, architectural reference points and revised, spirited luxury.
          The designer’s bold yet nuanced style is full of restrained elegance
          and raw expressive detail—a modern, masterful blend of confidence and
          comfort.
</p> </div> </main> ` })}`;
}, "C:/Users/CristaL/Documents/Code/jench/src/pages/about.astro", void 0);

const $$file = "C:/Users/CristaL/Documents/Code/jench/src/pages/about.astro";
const $$url = "/jench/about/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
