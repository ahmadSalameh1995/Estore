import { component$ } from "@builder.io/qwik";

export const Card = component$(
  ({ Name, Price, URL }: { Name: string; Price: number; URL: string }) => {
    return (
      <div class="w-[250px] h-[300px] bg-white rounded-2xl shadow-md overflow-hidden p-4 border border-solid border-transparent hover:border-slate-900">
        <img src={URL} alt={Name} class="w-full h-[200px] object-cover" class="rounded-xl" />
        <div class="p-4 text-center">
          <h2 class="text-lg font-semibold">{Name}</h2>
          <p class="text-gray-500">${Price}</p>
        </div>
      </div>
    );
  }
);
