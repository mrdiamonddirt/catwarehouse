import Navbar from "./components/Navbar";
import './App.css';
import Footer from './components/Footer';
import Catcard from './components/Catcard';
import {Home} from './components/Home';
import { useEffect , useState } from "react";
import { faker } from "@faker-js/faker";


function App() {
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

  return (
    <div >
    <Navbar></Navbar>
    <Home></Home>
    <Catcard catsdata={cats}></Catcard>
    <Footer></Footer>
    </div>
  );
}

export default App;
