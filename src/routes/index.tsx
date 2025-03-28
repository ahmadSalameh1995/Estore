import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {ProductGrid} from "../components/products-grid/products-grid";


export default component$(() => {
  return (
    <div class="flex flex-1 flex-col ">
      <section class="min-h-screen flex relative">
        <img
          src="https://www.epicgardening.com/wp-content/uploads/2021/10/red-flower-dahlias.jpg"
          alt="this is home page"
          class="w-full "
          height="1000"
          width="1400"
        />
        <a
          href="#products"
          class="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 p-4 border-2  border-solid border-white text-white hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden px-8"
        >
          <h3 class="relative z-20 text-center">Shop Flower</h3>
        </a>
      </section>

      <ProductGrid />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Estore",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
