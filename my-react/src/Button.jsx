function Button(props){
    return(
        <>
            <div>
                <p>내용을 확인하셨으면 {props.btnTxt} 버튼을 눌러주세요.</p>
                <button type="button" className={`bg-${props.color}`}>{props.btnTxt}</button>
            </div>
        </>
    )
}

export default Button;