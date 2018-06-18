const HOST = 'https://api.harvardartmuseums.org';
const API_KEY = process.env.HARVARD_MUSEUM_API_KEY;
const API_KEY_PARAM = 'apikey=' + API_KEY;
var fetch = require('node-fetch');
var museumController = {};

museumController.findRecordsForType = (req, res) => {
    var resourceType = req.params['resource-type'];
    fetch(HOST + '/' + resourceType + '?' + API_KEY_PARAM)
        .then(handleErrors)
        .then(resources => {
            res.send(resources);
        })
        .catch(error => {
            console.log(error);
        });
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}

module.exports = museumController;