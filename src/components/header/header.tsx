import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export const Header = component$(() => {
  const store = useStore({
    scrolled: false,
  });

  useVisibleTask$(() => {
    const handleScroll = () => {
      store.scrolled = window.scrollY > 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      class={
        "shodow fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-20 " +
        (store.scrolled ? "bg-slate-900" : "bg-transparent")
      }
    >
      <h1>Images</h1>
      <div>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </header>
  );
});
