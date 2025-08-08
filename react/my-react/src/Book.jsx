import Button from "./Button";

function Book(props){
    return (
        <>
            <div>
                <h1>이 책의 이름은 {props.name} 입니다.</h1>
                <h2>이 책은 총 {props.total_page} 페이지로 이뤄져 있습니다.</h2>
                <Button color={props.color} children={props.children} btnTxt={props.btnTxt}/>
            </div>
            <hr />
        </>
    );
}

export default Book;