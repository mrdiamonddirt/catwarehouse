import {useState} from "react";
import Catcard from "./Catcard";
import { Cart } from "./Cart";

function Store(props) {



  // Will be used to render componants => either inventory or inventory + basket modal 
  return(
    <div id="section-store-">
      <Catcard catsdata={props.cats}></Catcard>
      <Cart isVisible={props.displayCart}></Cart>


    </div>
  )


}


export default Store;