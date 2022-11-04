import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart } from "./Cart";


export const Home = (props) => {

    return (
        <HomeWrapper>

            <div id="section-home">
            <Header>Welcome to Cats4Lyf!</Header>

            <Paragraph> Would you like an adorable new best friend? Well then, you've come to the right place!</Paragraph>
            <Paragraph>Here at Cats4Lyf, we have a wide selection of friendly, fluffy cats, ready to take home today.</Paragraph>
            <Paragraph>Simply enter the store choose your perfect pet!</Paragraph>


            <Link to="/Catcard"><Button >Enter Store</Button></Link>
            </div>

            <div style={ props.displayCart ? { display:'block'} : {display : 'none'} }   class="section-basket">

                 <Cart basket={props.basket} isVisible={props.displayCart} remove={props.remove} clear={props.clear}></Cart>
            </div>

        </HomeWrapper>
    )
}


const HomeWrapper = styled.div`
   
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: var(--cream);
    height: 85vh;
    font-family: var(--fontSerif);

`
const Header = styled.h1`
    margin: 0 0 1% 0;
    font-size: 40px;
    text-align: center;

`
const Paragraph = styled.p`
    margin-top: 30px;
    font-size: 26px;
`
const Button = styled.button`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px;
    background-color: var(--darkBlue);
    color: var(--white);
    padding-left: 40px;
    padding-right: 40px;
    padding-top:20px;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    font-family: var(--fontSerif);

    &:hover{
        cursor: pointer;
        color: var(--lightBlue);
    }

`
