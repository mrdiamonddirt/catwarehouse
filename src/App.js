import { useState } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from './components/Footer';
import {Home} from './components/Home'


function App() {

  // State to store the array of the basket 
  // Needed here so we can pass the data to both the header and the main section
  const [basket, setBasket] = useState([])

  // Calculate the amount of items in the basket
  let basketQuanity = basket.length;

  return (

    <div >
    <Navbar basketQuanity={basketQuanity}></Navbar>
    <Home></Home>
    <Footer></Footer>
    </div>
  );
}

export default App;
