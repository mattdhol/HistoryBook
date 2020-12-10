import React from "react";
import { Button } from "antd";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast.error("You Finished!  🤘🏻🙌🏾👑");

const MyNightStand = (props) => (
  <>
    <br></br>
    <div className="hero-parent">
      <div className="heroBlock2">
        My Night Stand
        <div className="book-parent">
          <ToastContainer />
          {props.books.map((eachBook, idx) => {
            return eachBook.bookStatus === "nightStand" ? (
              <div>
                <div>
                  <Button
                    type="dashed"
                    block
                    className="bookmark"
                    onClick={() => {
                      props.handleArchive(eachBook, idx);
                      notify();
                    }}
                  >
                    Book Finished!
                  </Button>
                </div>
                <div className="book-child">
                  <img
                    className="bookClass"
                    src={eachBook.volumeInfo.image}
                    alt={eachBook.volumeInfo.title}
                  />
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
  </>
);

export default MyNightStand;
