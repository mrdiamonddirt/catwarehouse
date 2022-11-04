import {useState} from "react";
import Catcard from "./Catcard";
import { Cart } from "./Cart";

function Store(props) {



  // Will be used to render componants => either inventory or inventory + basket modal 
  return(
    <div id="section-store">
      <div id="section-catInventory">
        <Catcard catsdata={props.cats}></Catcard>
      </div>
      <div style={ props.displayCart ? { display:'block'} : {display : 'none'} }   id="section-basket">
        <p>Cart goes here!</p>
        <Cart isVisible={props.displayCart}></Cart>
      </div>
    </div>
  )


}


export default Store;