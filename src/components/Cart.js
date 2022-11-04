import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';



export const Cart = (props) => {

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


    return (

        <CartWrapper isVisible={props.isVisible}>
            <div>
            <h1>Your cart:</h1>
            {props.basket.length > 0 && (<button onClick={props.clear}>Clear All</button>
            )}
            {props.basket.map((catItem, index) => {
                return (
                    <CartItem >

                        <div>
                        <img src={catItem.catimage}></img>
                        </div>
                    <CartInfo>
                    <i onClick={() => props.remove(index)}><DeleteIcon /></i>
                    <h2>{catItem.catname}</h2>
                    <p>{`£ ${catItem.price}`}</p>
                    </CartInfo>
                </CartItem>
    
                )
            })}
            </div>
           <div>

            <CartTotal isVisible={props.isVisible}>
                <h3>Total price:</h3>
                <h4>{`£ ${totalPrice}`}</h4>
            </CartTotal>
            </div>
        </CartWrapper>
    )
}

const CartWrapper = styled.div`
    position: fixed;
    overflow: scroll;
    top: calc(10vh + 40px);
    right: ${(props) => props.isVisible ? "0px" : "-300px"};
    width:25%;
    background-color: var(--blue);
    padding: 2%;
    height: 100vh;
    z-index: 100;
    display: flex;
    flex-direction: column;
    transition: right 0.3s;
    h1{
        color:var(--white);
        text-align: center;
        font-weight: bold;
        font-family :var(--fontSansSerif) ;
    }

    button{
        margin: 20px;
        font-family :var(--fontSansSerif) ;
        font-weight: bold;

        &:hover{
            cursor: pointer;
            background-color: aliceblue;
            }
    }
`

const CartItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: scroll;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 2px solid black;
    margin-bottom: 20px;

    img{
        height: 100px;
        width: 100px;
        padding-bottom: 10px;
    };
`
const CartInfo = styled.div`
    h2,p{
        color: var(--black);
        padding-left: 30px; 
        font-family :var(--fontSansSerif) ;
        font-weight: bold;
    }
    i{
        position: absolute;
        right: 0;
        padding-right: 10px;

        &:hover{
        cursor: pointer;
    }
    }

`

const CartTotal = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: var(--darkBlue);
    width: 25%;
    height: 7vh;
    bottom: 0;
     h3{  
        padding-left: 5%; 
        font-family :var(--fontSansSerif) ;
        font-weight: bold;
        color: var(--white);
    }
    h4{
        letter-spacing: 4px;
        font-family :var(--fontSansSerif) ;
        color: var(--red);
        padding-right: 5%;
    }

`