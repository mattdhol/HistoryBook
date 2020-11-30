import React, { Component } from "react";
import "./App.css";
import AppHeader from '../src/components/AppHeader/AppHeader'
import IntroBox from '../src/components/IntroBox/IntroBox'
import BookSearch from '../src/components/BookSearch/BookSearch'

// x


class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <layout className="main-layout">
        <AppHeader/>
        <IntroBox/>
        <BookSearch/>
        </layout>
      </div>

    );
  }
}


export default App;
