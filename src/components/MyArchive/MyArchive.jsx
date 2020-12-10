import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const MyArchive = (props) => (
  <div>
    <br></br>
    <div className="hero-parent">
      <div className="heroBlock2">
        My Archive
        <div className="book-parent">
          {props.books.map((eachBook, idx) => {
            return eachBook.bookStatus === "bookArchive" ? (
              <div>
                <div className="book-child">
                  <Link onClick={() => props.bookIdx(idx)} to="/BookForm">
                    <img
                      className="bookClass"
                      src={eachBook.volumeInfo.image}
                      alt={eachBook.volumeInfo.title}
                    />
                  </Link>
                  <Button danger onClick={() => props.deleteBook(eachBook)}>
                    Delete
                  </Button>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
    <br></br>
  </div>
);

export default MyArchive;
