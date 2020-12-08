import React, { Component } from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import IntroBox from "../IntroBox/IntroBox";
import BookSearch from "../../pages/LibrarySearch/LibrarySearch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../../pages/Login/LoginPage";
import SignupPage from "../../pages/SignupPage/SignupPage";
import userService from "../../utils/userService";
import LibrarySearch from "../../pages/LibrarySearch/LibrarySearch";
import MyBookMarks from "../MyBookMarks/MyBookMarks";
import MyNightStand from "../MyNightStand/MyNightStand";
import MyArchive from "../MyArchive/MyArchive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookForm from "../../components/BookForm/BookForm";
import Analytics from "../Analytics/Analytics";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const BASE_URL = "/api/users/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      books: [],
      bookMark: [],
      nightStand: [],
      bookArchive: [],
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = async () => {
    this.setState({ user: userService.getUser() });
  };

  componentDidMount = async (q) => {
    try {
      const res = await fetch(BASE_URL + "bookget", {
        method: "GET",
        headers: new Headers({ "Content-Type": "application/json" }),
        data: { token: localStorage.getItem("token") },
      });
      // this.setState({ bookMark: [...this.state.bookMark, q] });
    } catch (err) {
      console.log("ERROR" + err);
    }
  };

  handleBookMark = async (newBook) => {
    try {
      const res = await fetch(BASE_URL + "booksave", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify({
          id: this.state.user.id,
          volumeInfo: {
            image: newBook.volumeInfo.imageLinks.thumbnail,
            info: newBook.volumeInfo.infoLink,
          },
        }),
      });
      this.setState({ bookMark: [...this.state.bookMark, newBook] });
    } catch (err) {
      console.log(err);
    }
  };

  handleNightStand = (newBook) => {
    this.setState({ nightStand: [...this.state.nightStand, newBook] });
  };

  handleArchive = (newBook) => {
    this.setState({ bookArchive: [...this.state.bookArchive, newBook] });
  };

  render() {
    return (
      <div>
        <Router>
          <AppHeader user={this.state.user} handleLogout={this.handleLogout} />
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
                nightStand={this.state.nightStand}
              />

              <MyArchive bookArchive={this.state.bookArchive} />
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
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route exact path="/BookForm">
              <BookForm bookArchive={this.state.bookArchive} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
