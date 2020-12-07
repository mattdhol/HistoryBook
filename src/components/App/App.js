import React, { Component } from "react";
import "./App.css";
import AppHeader from '../AppHeader/AppHeader'
import IntroBox from '../IntroBox/IntroBox'
import BookSearch from '../../pages/LibrarySearch/LibrarySearch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../../pages/Login/LoginPage';
import SignupPage from '../../pages/SignupPage/SignupPage'
import userService from '../../utils/userService'
import LibrarySearch from "../../pages/LibrarySearch/LibrarySearch";
import MyBookMarks from "../MyBookMarks/MyBookMarks"
import MyNightStand from "../MyNightStand/MyNightStand"
import MyArchive from "../MyArchive/MyArchive"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import BookForm from "../../components/BookForm/BookForm"
import Analytics from "../Analytics/Analytics"

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: userService.getUser(),
      books: [],
      bookMark: [],
      nightStand: [],
      bookArchive: [],
    }
  }

createNotification = (type) => {
  return () => {
    console.log(type)
    console.log("function hit")
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Title here');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
        break;
    }
  };
};

handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
};

handleSignupOrLogin = async () => {
  this.setState({ user: userService.getUser() });
}

handleBookMark = (newBook) => {
  this.setState({bookMark : [...this.state.bookMark, newBook] })
}

handleNightStand = (newBook) => {
  this.setState({nightStand : [...this.state.nightStand, newBook] })  
}

handleArchive = (newBook) => {
  this.setState({bookArchive : [...this.state.bookArchive, newBook] })
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
      <MyBookMarks
      createNotification={this.createNotification} 
      handleNightStand={this.handleNightStand}
      bookMark={this.state.bookMark}
      />

      <MyNightStand 
      createNotification={this.createNotification}
      handleArchive={this.handleArchive}
      nightStand={this.state.nightStand}/>

      <MyArchive
      bookArchive={this.state.bookArchive}/>
    </Route>

    <Route exact path="/LibrarySearch">
      <LibrarySearch 
      createNotification={this.createNotification}
      handleBookMark={this.handleBookMark}
      />
    </Route>

    <Route exact path="/Analytics">
    <Analytics />
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
    <Route exact path="/BookForm"> 
      <BookForm 
      bookArchive={this.state.bookArchive}
      />
    </Route>

   </Switch>
  </Router>
</div>

    );
  }
}


export default App;
