import React from "react"
import { Button } from 'antd';

const MyNightStand = (props) => (
<>
    <br></br>
    <div className="hero-parent">
        <div className="heroBlock2">
            My Night Stand
            <div className="book-parent">
            {props.nightStand.map((eachBook) => (
                <div>
                    <div>
                        <Button type="dashed" block className="bookmark" to="/NightStand" onClick={() => props.handleArchive(eachBook)}>Book Finished!</Button>
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


export default MyNightStand