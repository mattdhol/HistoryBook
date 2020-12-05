import React, { Component } from "react";
import "./App.css";
import AppHeader from '../AppHeader/AppHeader'
import IntroBox from '../IntroBox/IntroBox'
import BookSearch from '../../pages/LibrarySearch/LibrarySearch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  HomePage from '../../pages/HomePage/HomePage'
import MyLibrary from '../../pages/MyLibrary/MyLibrary'
import LoginPage from '../../pages/Login/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage'
import userService from '../../utils/userService'
import LibrarySearch from "../../pages/LibrarySearch/LibrarySearch";
import MyBookMarks from "../MyBookMarks/MyBookMarks"
import MyNightStand from "../MyNightStand/MyNightStand"
import MyArchives from "../MyArchives/MyArchives"

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
      books: [],
    }
  }

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
};

handleSignupOrLogin = async () => {
  this.setState({ user: userService.getUser() });
}

handleBookMark = () =>{
  // this.setState({ books })
} 

render() {
  return (
<div>
  <Router>
    <AppHeader
      user={this.state.user}
      handleLogout={this.handleLogout}
    />
  <Switch>
      <Route exact path="/">
        <IntroBox />
      </Route>

    <Route exact path="/MyLibrary">
      <MyBookMarks />
      <MyNightStand />
      <MyArchives />
    </Route>

    <Route exact path="/LibrarySearch">
      <LibrarySearch 
      handleBookMark={this.handleBookMark}
      />
    </Route>

    <Route exact path="/Analytics">
    <LibrarySearch />
    </Route>

    <Route
      exact
      path="/signup"
      render={({ history }) => (
        <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
      )}
    />
    <Route
      exact
      path="/login"
      render={({ history }) => (
        <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
      )}
    />
   </Switch>
  </Router>
</div>

    );
  }
}


export default App;
