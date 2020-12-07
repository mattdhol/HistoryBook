import React from "react"



const MyArchive = (props) => (
<div>
    <br></br>
    <div className="hero-parent">
        <div className="heroBlock2">
            My Archive
            <div className="book-parent">
            {props.bookArchive.map((eachBook) => (
                <div>
                    <div className="book-child">
                        <img className="bookClass" src={((eachBook.volumeInfo.imageLinks) 
                        ? eachBook.volumeInfo.imageLinks.thumbnail : undefined)} alt={eachBook.volumeInfo.title}/>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
    <br></br>
</div>
)


export default MyArchive