import React, { useState } from "react"
import { SearchOutlined } from '@ant-design/icons'
import axios from 'axios';
import { Button, Tooltip } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
const onSearch = value => console.log(value);

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

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
<input type="text"/> 
  return (
  <div>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <Search type="text" onChange={handleChange}
          placeholder="Search By Title / Author"
          allowClear
          enterButton="Search Books"
          size="large"
          onSearch={onSearch}
        />
        </div>
      </form>
    <div className="book-parent">
      {result.map(book => (
      <a target="_blank" href={book.volumeInfo.infoLink}>
        <Button type="dashed" block className="bookmark" to="/BookShelf">Book-Shelf It</Button>
        <div className="book-child">
        <img className="bookClass" src={((book.volumeInfo.imageLinks) 
          ? book.volumeInfo.imageLinks.thumbnail : undefined)} alt={book.volumeInfo.title}/>
        </div> 
        </a>
      ))}
      </div>
    </div>
  </div>
  )
}



export default BookSearch