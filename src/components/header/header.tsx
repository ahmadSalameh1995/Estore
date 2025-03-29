import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  const store = useStore({
    scrolled: false,
    numItems: 0,
  });

  useVisibleTask$(() => {
    const handleScroll = () => {
      store.scrolled = window.scrollY > 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // تحقق من أن القيمة ليست null قبل استخدام JSON.parse
    const flowBasket = localStorage.getItem("flowBasket");
    if (flowBasket !== null) {
      // تحقق إذا كانت القيمة ليست null
      const numItemsInBasket = JSON.parse(flowBasket).items.length;
      store.numItems = numItemsInBasket;
    }
  });

  return (
    <header
      class={
        "shodow fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-20 " +
        (store.scrolled ? "bg-slate-900" : "bg-transparent")
      }
    >
      <Link href="/">Flowers</Link>

      <div class="text-xl sm:text-3xl relative">
        <i class="fa-solid fa-cart-shopping"></i>
        <div class="absolute -top-2 -right-0 bg-slate-900 rounded-full h-5 w-5 text-xs grid place-items-center">
          {store.numItems}
        </div>
      </div>
    </header>
  );
});
