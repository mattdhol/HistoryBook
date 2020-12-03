import React from "react"
import { Menu } from 'antd';
import { ReadOutlined } from '@ant-design/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import BookShelf from "../../pages/BookShelf/BookShelf";
import BookSearch from "../../pages/BookSearch/BookSearch";

const AppHeader = () => (
    <div className="container-cover">
    <div className="container-fluid">
    <div className="header" > History Book<ReadOutlined/>
    <div className="logo">

    <Menu mode="horizontal" defaultActiveKey="home" className="navHeader">
    <Menu.Item key="Home">
    <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="BookShelf">
    <Link to="/BookShelf">Book Shelf</Link>
    </Menu.Item>
    <Menu.Item key="BookSearch">
    <Link to="/BookSearch">Book Search</Link>
    </Menu.Item>

    <Menu.Item key="Analytics">
    <Link to="/Analytics">Analytics</Link>
    </Menu.Item>
    </Menu>
    <Menu mode="horizontal" defaultActiveKey="home" className="navHeader">

    {/* <Menu.Item key="login">
    <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
    </Menu.Item> */}

    <Menu.Item key="login">
    <Link to='/login' className='NavBar-link'>LOG IN</Link>
    </Menu.Item>

    <Menu.Item key="signup">
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </Menu.Item>

    

    </Menu>

  </div> 
  </div>
  </div>
  </div>
)


export default AppHeader