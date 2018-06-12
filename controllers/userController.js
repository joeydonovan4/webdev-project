var User = require('../models/user');

var userController = {};

userController.findAllUsers = (req, res) => {
    User.find({})
        .then(users => {
            res.send(users);
        });
};

userController.findUserById = (req, res) => {
    var id = req.params['id'];
    User.findById(id)
        .then(user => {
            res.json(user);
        });
};

userController.createUser = (req, res) => {
    var user = req.body;
    User.create(user)
        .then(user => {
            req.session['currentUser'] = user;
            res.send(user);
        });
};

module.exports = userController;