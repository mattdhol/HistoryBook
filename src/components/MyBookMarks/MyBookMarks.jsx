import React from "react"

const MyBookMarks = (props) => (
<>
<br></br>
    <div className="hero-parent">
        <div className="heroBlock2">
            My Book Marks
            
                {props.books.map((eachBook) => (
                    <div className="book-child">
 <img className="bookClass" src={((eachBook.volumeInfo.imageLinks) 
    ? eachBook.volumeInfo.imageLinks.thumbnail : undefined)} alt={eachBook.volumeInfo.title}/>
    </div>
    ))}
            
        </div>
    </div>
    <br></br>
</>
)


export default MyBookMarks