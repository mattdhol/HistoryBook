import React, { Component } from "react";
import AppHeader from '../../components/AppHeader/AppHeader'
import IntroBox from '../../components/IntroBox/IntroBox'
import LibrarySearch from '../LibrarySearch/LibrarySearch'
import { Link } from 'react-router-dom'; 


class HomePage extends Component {
    constructor() {
      super()
      this.state = {}
    }
    render() {
      return (

          <layout className="main-layout">
              <IntroBox/>   
          </layout>

      );
    }
  }
  
  
  export default HomePage;