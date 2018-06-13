var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.get('/', (req, res) => {
    userController.findAllUsers(req, res);
});

router.get('/:id', (req, res) => {
    userController.findUserById(req, res);
});

router.post('/', (req, res) => {
    userController.createUser(req, res);
});

router.put('/:id', (req, res) => {
    userController.updateUser(req, res);
});

router.get('/:id/favorites/artists', (req, res) => {
    userController.findFavoriteArtists(req, res);
});

router.get('/:id/favorites/publications', (req, res) => {
    userController.findFavoritePublications(req, res);
});

router.get('/:id/favorites/exhibitions', (req, res) => {
    userController.findFavoriteExhibitions(req, res);
});

module.exports = router;