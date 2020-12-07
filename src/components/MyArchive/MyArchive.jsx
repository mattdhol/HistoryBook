import React from "react"
import { Link } from "react-router-dom";



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
                    <Link to="/BookForm">           
                        <img className="bookClass" src={((eachBook.volumeInfo.imageLinks) 
                        ? eachBook.volumeInfo.imageLinks.thumbnail : undefined)} alt={eachBook.volumeInfo.title}/>
                        </Link>
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