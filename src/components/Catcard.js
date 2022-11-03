import styled from 'styled-components';

const Catcard = (props) => {
    console.log(props.catsdata)
    const catArray= props.catData
    return(
        <>
        <CatcardWrapper></CatcardWrapper>
        </>
    )
}

export default Catcard;

const CatcardWrapper = styled.div`
display:flex;
`