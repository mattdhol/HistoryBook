const User = require('../models/user')


async function createUser(req, res){
    const user = new User({name: "Matt", password: "123"})
    await user.save()
    console.log(user)
    res.send(user)
}

module.exports = {createUser}