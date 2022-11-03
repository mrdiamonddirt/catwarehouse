import React from "react";
import styled from "styled-components";


export const Cart= (props)=>{

    return(
        
        <CartWrapper isVisible={props.isVisible}>
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

const CartWrapper= styled.div`
    position: fixed;
    top: calc(10vh + 40px);
    right: ${(props)=>props.isVisible?"0px":"-300px"};
    width:300px;
    background-color: var(--blue);
    height: 100vh;
    z-index: 100;
    transition: right 0.3s;
`

const CartItem= styled.div``

const CartTotal= styled.div``