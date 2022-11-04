import styled from 'styled-components';

const Catcard = (props) => {
    console.log(props.catsdata)
    // renders each cat and passes props to each
    return(
        <>
        <div className='CatCards'>
        <CatcardWrapper >{props.catsdata.map((catObject) => {
            return(
                <div className='cat'>
                <img alt='catimage' src={catObject.catimage}></img>
                <p className='cat-name'>{catObject.catid}</p>
                <p className='cat-price'>£{catObject.price}</p>
                </div>           
                )
        })}</CatcardWrapper>
        </div>
        </>
    )
}

export default Catcard;

const CatcardWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
text-align: center;
flex-wrap: wrap;
height: 80vh;
.cat{
    flex-direction: column;
    margin: 1%;
    padding: 2px;
    border-radius: 5px;
    height: 250px;
    width:200px;
    overflow: hidden;
}

.cat:hover{
    opacity: 0.5;
    cursor: pointer;
}

img{
    border-radius: 5px;
    height: 70%;
    min-width:50%
}
`