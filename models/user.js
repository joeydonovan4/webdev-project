const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    admin: Boolean,
    name: {
        firstName: String,
        lastName: String
    },
    email: { type: String, required: true},
    picture: Buffer,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);
module.exports = User;