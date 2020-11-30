import React, { useState } from "react"
import { SearchOutlined } from '@ant-design/icons'
import Button from '@ant-design/icons';
import axios from 'axios';

function BookSearch (event) {



    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [API_KEY, setAPI_KEY] = useState("AIzaSyCNRcC7YqRUUq2P7QCfWvK0dLMiZytcTgI")

    function handleChange (event) {
        const book = event.target.value
         setBook(book)
    }
        
    function handleSubmit (event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key"+API_KEY+"&maxResults=40")
        .then(data => {
            setResult(data.data.items)
            console.log(data.data.items)
        })
    }

return (
    <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
              type="text" onChange={handleChange}
              className="form-control mt-10" 
              placeholder="Book Search"></input>
            </div>
            <button type="primary" icon={<SearchOutlined/>}>
      Search
    </button>
          </form>
          {result.map(book => (

              <a target="_blank" href={book.volumeInfo.infoLink}>
                {/* <h5> {book.volumeInfo.title}</h5> */}
            <img className="bookClass" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
            </a>

          ))}
        </div>
    </div>
)
}



export default BookSearch