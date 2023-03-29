import React from "react";
import ReactDom from "react-dom/client";

import { Enjoy,UseCard } from "./Enjoy";
import Product, {Navbar}from "./Product"

const root = ReactDom.createRoot(document.getElementById("root"));

// function Greating() {
//   const name = false;

//   return <h1>{name ? "soy un nazi 😆" : "no soy un nazi 😶"}</h1>;
// }



root.render(
  <>
  <Navbar/>
    <Enjoy />
    <UseCard />
    <Product />
  </>
);
