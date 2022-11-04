import React from "react";
import { useEffect , useState} from "react";
import styled from "styled-components";


export const Cart= (props)=>{

    // Sets the basket data from the props
    let basketData = props.basket;

    // Create variable for total price
    const [totalPrice, setTotalPrice] = useState(0)

    // useEffect for calling api
useEffect(() => {
    async function totalPriceFunc(basketData) {
        // Map over the basketData and get all of the prices 
        let allPrices = basketData.map(cat => {
            return Number(cat.price)
        })

        // Add all of the prices
        let priceAdd = allPrices.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
        // set the total Price 
        setTotalPrice(priceAdd)
    } 
    totalPriceFunc(basketData)
    // setTotalPrice(totalPriceFunc(basketData))
}, [basketData])


    return(
        
        <CartWrapper isVisible={props.isVisible}>
            <h1>Your cart:</h1>
            {props.basket.map((catItem)=>{
                return(
                    <CartItem >
                    <img src={catItem.catimage}></img>
                    <h2>{catItem.catname}</h2>
                    <p>{catItem.price}</p>
                </CartItem>
    
                )
            })}
           
            <CartTotal>
                <p>Total price:</p>
                <h2>{totalPrice}</h2>
            </CartTotal>
        </CartWrapper>
    )
}

const CartWrapper= styled.div`
    position: fixed;
    top: calc(10vh + 40px);
    right: ${(props)=>props.isVisible?"0px":"-300px"};
    width:25%;
    background-color: var(--blue);
    height: 100vh;
    z-index: 100;
    transition: right 0.3s;
`

const CartItem= styled.div``

const CartTotal= styled.div``