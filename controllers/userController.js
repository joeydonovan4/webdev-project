var User = require('../models/user');

var userController = {};

userController.findAllUsers = (req, res) => {
    User.find({})
        .then(users => {
            res.send(users);
        }).catch(logError);
};

userController.findUserById = (req, res) => {
    var id = req.params['id'];
    User.findById(id)
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.createUser = (req, res) => {
    var user = req.body;
    User.create(user)
        .then(user => {
            req.session['currentUser'] = user;
            res.send(user);
        }).catch(logError);
};

userController.updateUser = (req, res) => {
    var id = req.params['id'];
    var updatedUser = req.body;
    User.findByIdAndUpdate(id, updatedUser)
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.addFavoriteObject = (req, res) => {
    var id = req.params['id'];
    var objectId = req.params['objectId'];
    User.findByIdAndUpdate(id, {$push: {favoriteObjects: objectId}})
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.findFavoriteObjects = (req, res) => {
    var id = req.params['id'];
    User.findById(id, 'favoriteObjects')
        .then(objects => {
            res.json(objects);
        }).catch(logError);
};

userController.addFavoriteArtist = (req, res) => {
    var id = req.params['id'];
    var artistId = req.params['artistId'];
    User.findByIdAndUpdate(id, {$push: {favoriteArtists: artistId}})
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.findFavoriteArtists = (req, res) => {
    var id = req.params['id'];
    User.findById(id, 'favoriteArtists')
        .then(artists => {
            res.json(artists);
        }).catch(logError);
};

userController.addFavoritePublication = (req, res) => {
    var id = req.params['id'];
    var publicationId = req.params['publicationId'];
    User.findByIdAndUpdate(id, {$push: {favoritePublications: publicationId}})
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.findFavoritePublications = (req, res) => {
    var id = req.params['id'];
    User.findById(id, 'favoritePublications')
        .then(publications => {
            res.json(publications);
        }).catch(logError);
};

userController.addFavoriteExhibition = (req, res) => {
    var id = req.params['id'];
    var exhibitionId = req.params['exhibitionId'];
    User.findByIdAndUpdate(id, {$push: {favoriteExhibitions: exhibitionId}})
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.findFavoriteExhibitions = (req, res) => {
    var id = req.params['id'];
    User.findById(id, 'favoriteExhibitions')
        .then(exhibitions => {
            res.json(exhibitions);
        }).catch(logError);
};

userController.addFavoriteGallery = (req, res) => {
    var id = req.params['id'];
    var galleryId = req.params['galleryId'];
    User.findByIdAndUpdate(id, {$push: {favoriteGalleries: galleryId}})
        .then(user => {
            res.json(user);
        }).catch(logError);
};

userController.findFavoriteGalleries = (req, res) => {
    var id = req.params['id'];
    User.findById(id, 'favoriteGalleries')
        .then(galleries => {
            res.json(galleries);
        }).catch(logError);
};

function logError(err) {
    console.log(err);
}

module.exports = userController;