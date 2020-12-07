import React from "react"
import {
        Form,
        Input,
        DatePicker,
        InputNumber,
      } from 'antd';
import { Link } from 'react-router-dom';


const BookForm = (props) => (

<div>
  <br></br>
    <div className="hero-parent">
    <div className="heroBlock2"> Book Review
      <form className="form-group">
        <Form.Item>
          <DatePicker 
          placeholder="Day Finished"
          />
        </Form.Item>
        <Form.Item>
          <Input 
            placeholder="Write a Review!"
          />
        </Form.Item>
        <Form.Item>
          <InputNumber
          max="10"
          min="1"
          placeholder="Rating"
           />
        </Form.Item>
        <button >Add Review</button>
        <Link to="/">Cancel</Link>
      </form>
    </div>
  </div>
</div>
)


export default BookForm