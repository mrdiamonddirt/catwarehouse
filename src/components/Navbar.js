import styled from "styled-components";
import basket from '../assets/images/basket.png'
import catmidlogo from '../assets/images/catmidlogo.png'
import Cats4Lyf from '../assets/images/Cats4Lyf.png'

const Navbar = (props) => {
    return(
        <NavBarWrapper>
        <MainLogo><img alt="Logo" src={Cats4Lyf}></img></MainLogo>
        <MidLogo><img alt="MidLogo" src={catmidlogo}></img></MidLogo>
        <Basket><img alt="BasketImg" src={basket}></img><BasketCounter>{props.basketQuanity}</BasketCounter></Basket>
       </NavBarWrapper>
    )
}
export default Navbar

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--lightBlue);
    padding: 20px;
    height:10vh;
`;

const MainLogo = styled.button`
    margin: 0 16px;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    background-color: transparent;
    
    &:hover{
        transform: scale(1.2);
    }
    img{
        height: 100%;
        width: 100%;
    }
`;
const MidLogo = styled.button`
    margin: 0 16px;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    background-color: transparent;
    
    &:hover{
        transform: scale(1.2);
    }
    img{
        height: 80px;
        width: 80px;
    }
`;
const Basket = styled.button`
display: flex;
    margin: 0 16px;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    background-color: transparent;
    
    &:hover{
        transform: scale(1.2);
        p{
        transform: scale(1.2) translate(-15px, 20px);
    }
    }
    img{
        height: 50px;
        width: 50px;
    }
`;

const BasketCounter = styled.p`
position: relative;
color: white;
background-color: var(--red);
height: 15px;
width: 15px;
border-radius: 50%;
transform: translate(-15px, 20px);

`