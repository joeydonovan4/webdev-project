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

router.post('/:id/favorites/objects/:objectId', (req, res) => {
    userController.addFavoriteObject(req, res);
});

router.get('/:id/favorites/objects', (req, res) => {
    userController.findFavoriteObjects(req, res);
});

router.post('/:id/favorites/artists/:artistId', (req, res) => {
    userController.addFavoriteArtist(req, res);
});

router.get('/:id/favorites/artists', (req, res) => {
    userController.findFavoriteArtists(req, res);
});

router.post('/:id/favorites/publications/:publicationId', (req, res) => {
    userController.addFavoritePublication(req, res);
});

router.get('/:id/favorites/publications', (req, res) => {
    userController.findFavoritePublications(req, res);
});

router.post('/:id/favorite/exhibitions/:exhibitionId', (req, res) => {
    userController.addFavoriteExhibition(req, res);
});

router.get('/:id/favorites/exhibitions', (req, res) => {
    userController.findFavoriteExhibitions(req, res);
});

router.post('/:id/favorites/galleries/:galleryId', (req, res) => {
    userController.addFavoriteGallery(req, res);
});

router.get('/:id/favorites/galleries', (req, res) => {
    userController.findFavoriteGalleries(req, res);
});

module.exports = router;