import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="/BookForm">
                    <img
                      className="bookClass"
                      src={eachBook.volumeInfo.image}
                      alt={eachBook.volumeInfo.title}
                    />
                  </Link>
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
