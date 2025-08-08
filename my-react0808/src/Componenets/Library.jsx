import Book from "./Book";

function Library(){
    return (
        <div>
            <Book name="HTML" numOfPage="100"/>
            <Book name="CSS" numOfPage="500"/>
            <Book name="git" numOfPage="300"/>
            <Book name="JS" numOfPage="200"/>
        </div>
    )
}

export default Library;