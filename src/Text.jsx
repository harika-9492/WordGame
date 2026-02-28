import './inputtext.css';
function Text(props){
    return(
        <>
        <div className="TextContainer">
            <h1>{props.value}</h1>
        </div>
        </>
    )
}

export default Text;