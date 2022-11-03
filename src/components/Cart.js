import React from "react";
import styled from "styled-components";


export const Cart= ()=>{

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
                <h2>GBP totalprice</h2>
            </CartTotal>
        </CartWrapper>
    )
}

const CartWrapper= styled.div``

const CartItem= styled.div``

const CartTotal= styled.div``