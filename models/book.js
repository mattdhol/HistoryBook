const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new mongoose.Schema({
        dateFinished: Date,
        rating: { type: Number, min: 1, max: 10 },
        review: String,
        bookId: {type: String, required: true},
    }, {
        timestamps: true
    },
)

module.exports = mongoose.model('Book', bookSchema)