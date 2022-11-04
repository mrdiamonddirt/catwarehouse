import {useState} from "react";
import Catcard from "./Catcard";
import { Cart } from "./Cart";

function Store(props) {



  // Will be used to render componants => either inventory or inventory + basket modal 
  return(
    <div id="section-store">
      <div id="section-catInventory">
        <Catcard catInformation={props.addToCart} catsdata={props.cats}></Catcard>
      </div>
      <div style={ props.displayCart ? { display:'block'} : {display : 'none'} }   class="section-basket">
        <Cart basket={props.basket} isVisible={props.displayCart} remove={props.remove} clear={props.clear}></Cart>
      </div>
    </div>
  )


}


export default Store;