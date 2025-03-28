import { component$ } from "@builder.io/qwik";
import { Card } from "../card/Card";

export const ProductGrid = component$(() => {
  const flowers = [
    {
      Name: "Flower 1",
      Price: 1000,
      URL: "https://www.marthastewart.com/thmb/yhgiLuSTcFaN1WbwUua_W9SMHws=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/prettiest-flowers-painted-tongue-flower-lead-getty-1123-00763085ad384a9b9bf1f5cc81bee390.jpg",
    },
    {
      Name: "Flower 2",
      Price: 1500,
      URL: "https://amsterdamflowers.nl/cdn/shop/files/amsterdam-flowers.jpg?v=1709331796&width=2400",
    },
    {
      Name: "Flower 3",
      Price: 2500,
      URL: "https://bloomthis.co/cdn/shop/articles/00-how-to-care-for-fresh-flowers-feature.jpg?v=1530255311&width=2048",
    },
    {
      Name: "Flower 4",
      Price: 4400,
      URL: "https://assets.eflorist.com/site/75411691/Homepage/IMG_8708.jpg",
    },
    {
      Name: "Flower 5",
      Price: 5000,
      URL: "https://media.istockphoto.com/id/903438150/photo/beautiful-bouquet-of-mixed-flowers-in-a-vase-on-wooden-table-the-work-of-the-florist-at-a.jpg?s=612x612&w=0&k=20&c=fsB81o__5kV8wqep2vCs7n1HPmAreFc6YHDIHcCMPYE=",
    },
    {
      Name: "Flower 6",
      Price: 7850,
      URL: "https://static.wixstatic.com/media/11062b_a4a42a40ac36495abaaa03422b708b38~mv2.jpg/v1/fill/w_640,h_496,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_a4a42a40ac36495abaaa03422b708b38~mv2.jpg",
    },
  ];

  return (
    <div id="products" class="m-h-screen grid place-items-center">
      <div class="flex flex-wrap gap-4 max-w-[1400px] mx-auto justify-center mt-4 items-stretch">
        {flowers.map((flower) => (
          <Card key={flower.Name} {...flower} />
        ))}
      </div>
    </div>
  );
});
