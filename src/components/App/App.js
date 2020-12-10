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
import tokenService from "../../utils/tokenService";

const BASE_URL = "/api/users/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      books: [],
      bookIdx: null,
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
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenService.getToken()}`,
        }),
      });

      const books = await res.json();
      this.setState({ books: books });
      // this.setState({ bookMark: [...this.state.bookMark, q] });
    } catch (err) {
      console.log("ERROR" + err);
    }
  };

  handleBookMark = async (newBook) => {
    try {
      const bookData = {
        volumeInfo: {
          image: newBook.volumeInfo.imageLinks.thumbnail,
          info: newBook.volumeInfo.infoLink,
        },
        bookStatus: "bookMark",
      };
      const res = await fetch(BASE_URL + "booksave", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenService.getToken()}`,
        }),
        body: JSON.stringify(bookData),
      });
      this.setState({ books: [...this.state.books, bookData] });
    } catch (err) {
      console.log(err);
    }
  };

  handleNightStand = async (eachBook, idx) => {
    console.log(eachBook);
    try {
      const bookData = {
        id: eachBook._id,
        bookStatus: "nightStand",
      };
      const res = await fetch(BASE_URL + "nightsave", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenService.getToken()}`,
        }),
        body: JSON.stringify(bookData),
      });
      const newState = { ...this.state };
      newState.books[idx].bookStatus = "nightStand";
      this.setState(newState);
    } catch (err) {
      console.log(err);
    }
  };

  handleArchive = async (eachBook, idx) => {
    try {
      const bookData = {
        id: eachBook._id,
        bookStatus: "bookArchive",
      };
      const res = await fetch(BASE_URL + "archiveSave", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenService.getToken()}`,
        }),
        body: JSON.stringify(bookData),
      });
      const newState = { ...this.state };
      newState.books[idx].bookStatus = "bookArchive";
      this.setState(newState);
    } catch (err) {
      console.log(err);
    }
  };

  handleBookForm = async (date, review, rating, id) => {
    try {
      const bookData = {
        dateFinished: date.toISOString(),
        rating: rating,
        review: review,
        id: id,
      };
      const res = await fetch(BASE_URL + "bookForm", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenService.getToken()}`,
        }),
        body: JSON.stringify(bookData),
      });
    } catch (err) {
      console.log(err);
    }
  };

  deleteBook = async (eachBook, idx) => {
    try {
      const res = await fetch(BASE_URL + "deleteBook", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenService.getToken()}`,
        }),
        body: JSON.stringify(eachBook),
      });
      const user = await res.json();
      const newState = { ...this.state };
      this.setState(newState);
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
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
                books={this.state.books}
                deleteBook={this.deleteBook}
              />

              <MyNightStand
                createNotification={this.createNotification}
                handleArchive={this.handleArchive}
                books={this.state.books}
                deleteBook={this.deleteBook}
              />

              <MyArchive
                books={this.state.books}
                bookIdx={(idx) => this.setState({ bookIdx: idx })}
                deleteBook={this.deleteBook}
              />
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
              <BookForm
                book={this.state.books[this.state.bookIdx]}
                handleBookForm={this.handleBookForm}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
