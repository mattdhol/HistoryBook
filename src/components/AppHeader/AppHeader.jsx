import React from "react"
import { Tabs, Menu } from 'antd';
import { ReadOutlined } from '@ant-design/icons'
const { TabPane } = Tabs;


const AppHeader = () => (
    <div className="container-cover">
    <div className="container-fluid">
<div className="header" > History Book<ReadOutlined/>
    <div className="logo">
        
    <Menu mode="horizontal" defaultActiveKey="home" className="navHeader">
    <Menu.Item key="Home" key="home">
      Home
    </Menu.Item>
    <Menu.Item key="Book Shelf" key="bookList">
    Book Shelf
    </Menu.Item>
    <Menu.Item key="Book Search" key="bookSearch">
    Book Search
    </Menu.Item>
    <Menu.Item key="Analytics" key="analytics">
    Analytics
    </Menu.Item>
  </Menu>
  </div> 
  </div>
  </div>
  </div>
)


export default AppHeader