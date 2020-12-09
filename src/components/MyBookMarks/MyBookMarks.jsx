import React from "react";
import { Button } from "antd";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast.info("That's The One 😘");

const MyBookMarks = (props) => (
  <>
    <br></br>
    <div className="hero-parent">
      <div className="heroBlock2">
        My Book Marks
        <div className="book-parent">
          <ToastContainer />
          {props.books.map((eachBook, idx) => {
            return eachBook.bookStatus === "bookMark" ? (
              <div>
                <div>
                  <Button
                    type="dashed"
                    block
                    className="bookmark"
                    to="/NightStand"
                    onClick={() => {
                      props.handleNightStand(eachBook, idx);

                      notify();
                    }}
                  >
                    Add To Night Stand
                  </Button>
                </div>
                <div className="book-child">
                  <img
                    className="bookClass"
                    src={eachBook.volumeInfo.image}
                    alt={eachBook.volumeInfo.title}
                  />
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

export default MyBookMarks;
