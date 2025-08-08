function Box(props){
    return (
        <div className={props.name}>
            <h2>{props.txt}</h2>
        </div>
    )
}

export default Box;