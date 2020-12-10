import React, { useState } from "react";
import { Form, Input, DatePicker, InputNumber } from "antd";
import { Link } from "react-router-dom";

const BookForm = (props) => {
  const [date, setDate] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <div>
      <br></br>
      <div className="LoginPage">
        <header className="header-footer">Book Review</header>
        {props.book ? (
          <img
            className="bookClass"
            src={props.book.volumeInfo.image}
            alt={props.book.volumeInfo.title}
          />
        ) : null}
        <form className="form-group">
          <Form.Item>
            <DatePicker
              placeholder="Day Finished"
              value={date}
              onChange={(date) => setDate(date)}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Write a Review!"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <InputNumber
              max="10"
              min="1"
              placeholder="Rating"
              value={rating}
              onChange={(val) => setRating(val)}
            />
          </Form.Item>
          <button
            onClick={() => {
              props.handleBookForm(date, review, rating, props.book._id);
            }}
            className="btn btn-default"
          >
            Add Review
          </button>
          &nbsp;&nbsp;&nbsp;
          <Link to="/">Cancel</Link>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
