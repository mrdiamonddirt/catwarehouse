import { useState } from "react";
import Navbar from "./components/Navbar";
import './App.css';
import Footer from './components/Footer';
import {Cart} from './components/Cart';
import Catcard from './components/Catcard';
import {Home} from './components/Home';
import { useEffect , useState } from "react";
import { faker } from "@faker-js/faker";

function App() {
const[displayCart, setDisplayCart] = useState(false)

  const openCart = ()=>{
    setDisplayCart(!displayCart)
  }
const [cats, setCats] = useState([])
// useEffect for calling api
useEffect(() => {
async function getCats() {
try {
  const catData = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  const newdata = await catData.json()
  const catArray = newdata.map((cat) => {
    return{
            catid: cat.id,
            catimage: cat.url,
            price: faker.commerce.price(100, 200),
          };
  })
  setCats(catArray)
} catch (error) {
  
}} 
getCats() 
}, [])

  // State to store the array of the basket 
  // Needed here so we can pass the data to both the header and the main section
  const [basket, setBasket] = useState([{}, {}])

  // Calculate the amount of items in the basket
  let basketQuanity = basket.length;

  return (
    <div >
    <Navbar showCart={openCart} basketQuanity={basketQuanity}></Navbar>
    <Home></Home>
    <Catcard catsdata={cats}></Catcard>
    <Cart isVisible={displayCart}></Cart>
    <Footer></Footer>
    </div>
  );
}

export default App;
