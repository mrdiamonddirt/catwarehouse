import styled from "styled-components";

const Navbar = () => {
    return(
        <NavBarWrapper>
        <HeaderImages><img></img></HeaderImages>
        <HeaderImages><img></img></HeaderImages>
        <HeaderImages><img></img></HeaderImages>
       </NavBarWrapper>
    )

}
export default Navbar

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightblue;
    padding: 20px;
`;

const HeaderImages = styled.button`
    font-size: 16px;
    margin: 0 16px;
    color: white;
    cursor: pointer;
    padding: 10px 15px;
    
    &:hover{
        background-color: aqua;
    }
    /* img{

    } */
`;
