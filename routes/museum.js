var express = require('express');
var router = express.Router();
var museumController = require('../controllers/museumController');

router.get('/:resourceType', (req, res) => {
    museumController.findRecordsForType(req, res);
});

module.exports = router;