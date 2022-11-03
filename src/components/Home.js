import { computeHeadingLevel } from "@testing-library/react";
import React, { Component } from "react";
import styled from "styled-components";


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

            <Button>Enter Store</Button>
        </HomeWrapper>
    )
}


const HomeWrapper = styled.div`
   
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap:wrap;
    background-color: #F1FAEE;
    height: 100vh;
`
const Header = styled.h1`
    

`
const Paragraph = styled.p`
    margin-top: 100px;
    padding-left: 300px;
    padding-right: 300px;
    font-size: 26px;
`
const Button = styled.button`
    margin-top: 50px;
    border-radius: 50px;
    background-color: #1D3557;
    color: #F1FAEE;
    padding-left: 40px;
    padding-right: 40px;
    padding-top:20px;
    padding-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
`
