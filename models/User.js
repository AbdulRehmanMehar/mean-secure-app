const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({ // Creates a Schema for User
    _id: {
        type: mongoose.Schema.Types.ObjectId, // Type defines the type of data to be stored in the field 
        default: mongoose.Types.ObjectId // Value that's gonna store by default => generates id
    },
    name: {
        type: String,
        required: true // If it is required or not
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    about: {
        type: String,
        required: true
    },
    socialLinks: { // It is Just an Object in which we'll store urls
        gplus: String,
        twitter: String,
    }
});

const User = mongoose.model('User', UserSchema); // Registers Schema to Model

module.exports = User; // Exports the User