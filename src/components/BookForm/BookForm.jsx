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
  <div className="LoginPage">
  <header className="header-footer">Book Review</header>
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
        <button className="btn btn-default">Add Review</button>&nbsp;&nbsp;&nbsp;
              <Link to="/">Cancel</Link>
      </form>

  </div>
</div>
)


export default BookForm