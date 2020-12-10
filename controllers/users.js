const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Book = require("../models/book");
const SECRET = process.env.SECRET;

async function signup(req, res) {
  // password validation here...
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    console.log("login hit");
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    console.log(user);
    console.log(req.body);
    if (!user) {
      return res.status(401).json({ err: "bad credentials" });
    }
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user: { id: user.id, name: user.name } }, SECRET, {
    expiresIn: "24h",
  });
}

async function booksave(req, res) {
  console.log(req.body);
  const user = await User.findById(req.user.id);
  const book = await new Book({ volumeInfo: req.body.volumeInfo });
  user.book.push(book);
  let result = await user.save();
  console.log(result);
  res.send("Book Saved!");
}

async function bookget(req, res) {
  try {
    const user = await User.findById(req.user.id);
    res.send(user.book);
  } catch (err) {
    res.send(err.message);
  }
}

async function archivesave(req, res) {
  try {
    const user = await User.findById(req.user.id);
    console.log(req.body);
    user.book.forEach((book) => {
      if (book._id == req.body.id) {
        book.bookStatus = req.body.bookStatus;
      }
    });
    console.log(user.book);
    user
      .save()
      .then((user) => res.send(user.book))
      .catch((err) => console.log(err));
  } catch (err) {
    res.send(err.message);
  }
}

async function bookForm(req, res) {
  console.log(req.body.id);
  try {
    const user = await User.findById(req.user.id);
    const book = user.book.id(req.body.id);
    book.review = req.body.review;
    book.rating = req.body.rating;
    book.date = req.body.date;
    user
      .save()
      .then((user) => res.send(user.book))
      .catch((err) => console.log(err));
  } catch (err) {
    res.send(err.message);
  }
}

async function deleteBook(req, res) {
  try {
    const user = await User.findById(req.user.id);

    const narray = user.book.filter((book) => req.body._id != book._id);
    // console.log(narray);
    user.book = narray;
    user
      .save()
      .then((user) => res.send(user.book))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
}

async function nightsave(req, res) {
  try {
    const user = await User.findById(req.user.id);
    user.book.forEach((book) => {
      if (book._id == req.body.id) {
        book.bookStatus = req.body.bookStatus;
      }
    });
    user
      .save()
      .then((user) => res.send(user.book))
      .catch((err) => console.log(err));
  } catch (err) {
    res.send(err.message);
  }
}

module.exports = {
  signup,
  login,
  booksave,
  bookget,
  nightsave,
  archivesave,
  bookForm,
  deleteBook,
};
