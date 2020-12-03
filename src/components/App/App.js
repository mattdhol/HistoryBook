import React, { Component } from "react";
import "./App.css";
import AppHeader from '../AppHeader/AppHeader'
import IntroBox from '../IntroBox/IntroBox'
import BookSearch from '../../pages/BookSearch/BookSearch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  HomePage from '../../pages/HomePage/HomePage'
import BookShelf from '../../pages/BookShelf/BookShelf'
import LoginPage from '../../pages/Login/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
<div>
  <Router>
  <AppHeader/>
  <Switch>
  <Route exact path="/">
  <IntroBox />
  </Route>

  <Route exact path="/BookShelf">
  <BookShelf />
  </Route>

  <Route exact path="/BookSearch">
  <BookSearch />
  </Route>

  <Route exact path="/Analytics">
  <BookSearch />
  </Route>
  <Route exact path='/login' render={() => 
            <LoginPage
            />
          }/>
      <Route
      exact
      path="/signup"
      render={({ history }) => (
        <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
      )}
    />
  </Switch>
  </Router>
</div>

    );
  }
}


export default App;
