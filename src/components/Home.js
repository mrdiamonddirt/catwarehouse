import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const Home = () => {

    return (
        <HomeWrapper>
            <Header>Welcome to Cats4Lyf!</Header>

            <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>

            <Link to="/Catcard"><Button >Enter Store</Button></Link>
        </HomeWrapper>
    )
}


const HomeWrapper = styled.div`
   
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap:wrap;
    background-color: var(--cream);
    height: 85vh;
    font-family: var(--fontSerif);
    @media screen {
        
    }
`
const Header = styled.h1`
    padding-top: 50px;
    font-size: 40px;

`
const Paragraph = styled.p`
    margin-top: 30px;
    padding-left: 300px;
    padding-right: 300px;
    font-size: 26px;
`
const Button = styled.button`
    margin-top: 50px;
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
