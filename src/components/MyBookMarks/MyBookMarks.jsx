import React from "react";
import { Button } from "antd";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Get Readin' 😘");

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
                <Button
                  type="dashed"
                  block
                  className="bookmark"
                  to="/NightStand"
                  onClick={() => {
                    props.handleNightStand(eachBook);

                    notify();
                  }}
                >
                  Add To Night Stand
                </Button>
                <ToastContainer />
              </div>
              <div className="book-child">
                <img
                  className="bookClass"
                  src={
                    eachBook.volumeInfo.imageLinks
                      ? eachBook.volumeInfo.imageLinks.thumbnail
                      : undefined
                  }
                  alt={eachBook.volumeInfo.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <br></br>
  </>
);

export default MyBookMarks;
