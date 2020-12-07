import React from "react"
import { Menu, tabs } from 'antd';
import { ReadOutlined } from '@ant-design/icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const AppHeader = (props) => {
  let nav = props.user ? (

<div>
  <div className="container-cover">
    <div className="container-fluid">
      <div className="header" > History Book<ReadOutlined/>
        <span className="NavBar-welcome"> {props.user && `${props.user.name}`}</span>
        <div className="logo">
        <Menu mode="horizontal" defaultActiveKey="home" className="navHeader">
          <Menu.Item key="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="MyLibrary">
            <Link to="/MyLibrary">My Library</Link>
          </Menu.Item>
          <Menu.Item key="LibrarySearch">
            <Link to="/LibrarySearch">Library Search</Link>
          </Menu.Item>
          <Menu.Item key="Analytics">
            <Link to="/Analytics">Analytics</Link>
          </Menu.Item>
          </Menu>
          <Menu.Item key="">
            <Link to="" className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
          </Menu.Item>
          </div> 
      </div>
    </div>
  </div>
<div className="container-cover">
<div className="container-fluid">
  
 ) : (

          <Menu mode="horizontal" defaultActiveKey="home" className="navHeader">
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
  )
return <div className="NavBar">{nav}</div>
}

export default AppHeader
