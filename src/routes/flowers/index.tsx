import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// تعريف النوع الصحيح
type BasketItem = { Name: string; Price: string; URL: string };

export default component$(() => {
  const state = useStore({
    name: " ",
    Price: " ",
    URL: " ",
  });

  // استخدام useTask$ مع التحقق من وجود window
  useVisibleTask$(() => {
    if (typeof window !== "undefined") {
      const dataString = localStorage.getItem("flowers");
      const data = dataString ? JSON.parse(dataString) : {};
      if (data?.Name && data?.Price && data?.URL) {
        state.name = data.Name;
        state.Price = data.Price;
        state.URL = data.URL;
        console.log("🎯 Final State:", state);
      }
    }
  });

  return (
    <div class="flex flex-col gap-4 items-center p-4">
      <div class="rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
        <img
          src={state.URL}
          alt={state.name}
          class="w-full h-[300px] object-cover aspect-square"
        />
      </div>

      <div class="flex flex-col items-center text-center mt-4">
        <h2 class="text-2xl font-semibold text-slate-800">{state.name}</h2>
        <p class="text-lg text-slate-600">💵 Price: {state.Price} $</p>
      </div>

      <button
        onClick$={() => {
          if (typeof window !== "undefined") {
            let currBasket: { item: BasketItem[] } = { item: [] };
            const basketString = localStorage.getItem("flowBasket");
            if (basketString) {
              currBasket = JSON.parse(basketString);
            }
            currBasket.item.push({
              Name: state.name,
              Price: state.Price,
              URL: state.URL,
            });
            localStorage.setItem("flowBasket", JSON.stringify(currBasket));
          }
        }}
        class="py-2 px-6 bg-slate-900 text-white rounded-lg my-4 hover:bg-slate-700 transition-colors duration-300"
      >
        🛒 Adopt
      </button>
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
