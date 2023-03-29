import React from "react";
import ReactDom from "react-dom";

const root = ReactDom.createRoot(document.getElementById("root"));

function Greating() {
  const name = false;

  return <h1>{name ? "soy un nazi 😆" : "no soy un nazi 😶"}</h1>;
}

function Enjoy() {
    function add(x,y){
        return x + y
    }

    return <h1>{add(10,45)}</h1>
       
    
   
  }

root.render(
  <>
    <Enjoy />
    <Enjoy />
    <Enjoy />
  </>
);
