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
  const user = await User.findById(req.body.id);
  const book = await new Book({ volumeInfo: req.body.volumeInfo });
  let result = await user.save();
  console.log(result);
  res.send("Book Saved!");
}

async function bookget(req, res) {
  console.log(req.user);
  const user = await User.findById(req.user._id);
}

module.exports = {
  signup,
  login,
  booksave,
  bookget,
};
