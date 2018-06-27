var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// Set up default mongoose connection
mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) throw err;
    console.log('Successfully connected');
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://webdev-project-react-jdonovan.herokuapp.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

var session = require('express-session');
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

var router = require('./routes/router');
app.use('/api', router);

var users = require('./routes/users');
app.use('/api/users', users);

var museum = require('./routes/museum');
app.use('/api/museum', museum);

app.listen(process.env.PORT || 5000)
