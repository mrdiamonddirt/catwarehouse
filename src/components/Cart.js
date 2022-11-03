import React from "react";
import styled from "styled-components";


export const Cart= (props)=>{

    // Sets the basket data from the props
    let basketData = props.basket;

    // Create variable for total price
    let totalPrice = 0;

    // Function to calculate the total price
    function totalPriceFunc (basketData){
        // Map over the basketData and get all of the prices 
        let allPrices = basketData.map(cat => {
            return cat.price
        })

        // Add all of the prices
        totalPrice = allPrices.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
        // Return the price 
        return totalPrice;
    }


    return(
        
        <CartWrapper>
            <h1>Your cart:</h1>
            <CartItem>
                <img></img>
                <h2>CatName</h2>
                <p>catprice</p>
            </CartItem>

            <CartTotal>
                <p>Total price:</p>
                <h2>{totalPrice}</h2>
            </CartTotal>
        </CartWrapper>
    )
}

const CartWrapper= styled.div``

const CartItem= styled.div``

const CartTotal= styled.div``