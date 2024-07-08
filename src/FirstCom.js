
const FirstC = (props) =>
{
    return (
        <>
        <h1> First Component </h1>
        <h2> My name is {props.name} 
        I stay at {props.address} </h2>
        </>
    )
}

const SecondC = () =>
{
    return(
        <div> Second Component </div>
    )
}

export default FirstC;
export {SecondC};