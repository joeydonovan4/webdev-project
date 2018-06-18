const HOST = 'https://api.harvardartmuseums.org';
const API_KEY = process.env.HARVARD_MUSEUM_API_KEY;
const API_KEY_PARAM = 'apikey=' + API_KEY;
var fetch = require('node-fetch');
var museumController = {};

museumController.findRecordsForType = (req, res) => {
    var resourceType = req.params['resourceType'];
    var uri = '';
    if (resourceType === 'object') {
        uri = objectURI(req.query.q);
    } else if (resourceType === 'person') {
        uri = personURI(req.query.q);
    } else if (resourceType === 'publication') {
        uri = publicationURI(req.query.q);
    } else if (resourceType === 'exhibition') {
        uri = exhibitionURI(req.query.q);
    } else {
        uri = galleryURI(req.query.q);
    }
    fetch(uri + '&' + API_KEY_PARAM)
        .then(handleErrors)
        .then(resources => {
            res.send(resources);
        })
        .catch(error => {
            console.log(error);
        });
};

function objectURI(keyword) {
    return HOST + '/object?keyword=' + keyword;
}

function personURI(name) {
    return HOST + '/person?q=displayname:' + name;
}

function publicationURI(title) {
    return HOST + '/publication?q=title:' + title;
}

function exhibitionURI(title) {
    return HOST + '/exhibition?q=title:' + title;
}

function galleryURI(name) {
    return HOST + '/gallery?q=name:' + name;
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

module.exports = museumController;