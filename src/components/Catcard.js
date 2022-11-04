import styled from 'styled-components';

const Catcard = (props) => {
    console.log(props.catsdata)
    
    // renders each cat and passes props to each
    return(
        <>
        
        <div className='CatCards'>
        <CatcardWrapper >{props.catsdata.map((catObject) => {
            return(
                <div className='cat' onClick={()=>props.catInformation(catObject)}>
                <img alt='catimage' src={catObject.catimage}></img>
                <p>{catObject.catid}</p>
                <p>£{catObject.price}</p>
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
/* background-color: aqua; */
height: 80vh;
.cat{
    flex-direction: column;
    margin: 5px;
    padding: 2px;
    border: 1px solid black;
    border-radius: 5px;

}
img{
    border-radius: 5px;
    height: 100px;
}
`