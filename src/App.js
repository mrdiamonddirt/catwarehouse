import Navbar from "./components/Navbar";
import './App.css';
import Footer from './components/Footer';
import {Home} from './components/Home'
import {Cart} from './components/Cart';
import { useState } from "react";




function App() {
  const[displayCart, setDisplayCart] = useState(false)

  const openCart = ()=>{
    setDisplayCart(!displayCart)
  }
  
  return (

    <div >
    <Navbar showCart={openCart}></Navbar>
    <Home></Home>
    <Cart isVisible={displayCart}></Cart>
    <Footer></Footer>
    </div>
  );
}

export default App;
