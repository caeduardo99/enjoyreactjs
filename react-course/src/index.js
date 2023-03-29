import React from "react";
import ReactDom from "react-dom/client";

import { Enjoy, UseCard } from "./Enjoy";
import Product, { Navbar } from "./Product";

const root = ReactDom.createRoot(document.getElementById("root"));

// function Greating() {
//   const name = false;

//   return <h1>{name ? "soy un nazi 😆" : "no soy un nazi 😶"}</h1>;
// }

root.render(
  <>
    <UseCard
      name="Nazi"
      amount={3000}
      married={true}
      points={[12, 45, 78, 45]}
      addres={{ street: "Coronel Talbolt", city: "Cuenca" }}
      greet={function(){alert('Mostrado')}}
    />
     <UseCard
      name="Carlos Soria"
      amount={3050}
      married={false}
      points={[10, 25, 100, 45]}
      addres={{ street: "Mariscal Lamar", city: "Cuenca" }}
      greet={function(){alert('Mostrado')}}
    />
  </>
);
