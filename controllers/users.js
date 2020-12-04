const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function signup(req, res) {
  // password validation here...
  const user = new User(req.body);

  try {
    await user.save();
    console.log("secret", SECRET)
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    console.log('err =' + err);
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email }).select('+password');
    console.log(user);
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: 'bad credentials' });
      }
    });
  } catch (err) {
    return res.status(400).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user: { id: user.id, name: user.name } }, SECRET, { expiresIn: '24h' });
}

module.exports = {
    signup,
    login,
  };
  