import React from "react"
import { Button } from 'antd';

const MyBookMarks = (props) => (
    
<>
    <br></br>
    <div className="hero-parent">
        <div className="heroBlock2">
            My Book Marks
            <div className="book-parent">
            {props.bookMark.map((eachBook) => (
                <div>
                    <div>
                        <Button type="dashed" block className="bookmark" to="/NightStand" onClick={() => props.handleNightStand(eachBook)}>Add To Night Stand</Button>
                    </div>
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
</>
)


export default MyBookMarks