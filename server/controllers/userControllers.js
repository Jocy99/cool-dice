const User = require("../models/User");

const userControllers = {
    // here we tap into the db to create and add users then respond to the front end 
    async createUser(req, res) {
        try {
            const createdUser = await User.create(req.body)
            res.json(createdUser)
        } catch (err) {
            console.error(err)
        }
    },
    // function that updates a User information
    // function that allows user to be deleted
};

module.exports = userControllers;