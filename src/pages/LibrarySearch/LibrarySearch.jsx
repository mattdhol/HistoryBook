import React, { useState, useRef } from "react";
import axios from "axios";
import { Button, Tooltip } from "antd";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const notify = () => toast.success("Book Added 👉👉👉");

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

function LibrarySearch(props) {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [API_KEY, setAPI_KEY] = useState(
    "AIzaSyCNRcC7YqRUUq2P7QCfWvK0dLMiZytcTgI"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }
  function handleSubmit(event) {
    // event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key" +
          API_KEY +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }
  <input type="text" />;
  return (
    <div>
      <div className="container">
        <ToastContainer />
        <div className="form-group">
          <Search
            type="text"
            onChange={handleChange}
            placeholder="Search By Title / Author"
            allowClear
            enterButton="Search Books"
            size="large"
            onSearch={handleSubmit}
          />
        </div>

        <div className="book-parent">
          {result.map((book) => (
            <div key={book.id}>
              <div>
                <Button
                  type="dashed"
                  block
                  className="bookmark"
                  onClick={() => {
                    notify();

                    props.handleBookMark(book);
                  }}
                >
                  Book Mark It
                </Button>
              </div>
              <div>
                <a target="_blank" href={book.volumeInfo.infoLink}>
                  <div className="book-child">
                    <img
                      className="bookClass"
                      src={
                        book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : undefined
                      }
                      alt={book.volumeInfo.title}
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LibrarySearch;
