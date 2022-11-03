import styled from 'styled-components';

const Catcard = (props) => {
    console.log(props.catsdata)
    // renders each cat and passes props to each
    return(
        <>
        <CatcardWrapper>{props.catsdata.map((catObject) => {
            return(
                <div className='cat'>
                <img src={catObject.catimage}></img>
                <p>{catObject.catid}</p>
                <p>£{catObject.price}</p>
                </div>            
                )
        })}</CatcardWrapper>
        </>
    )
}

export default Catcard;

const CatcardWrapper = styled.div`
display:flex;
.cat{
    margin: 5px;
}

img{
    height: 100px;
}
`