const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug);

const User = new Schema({
    name: { type: String, maxlength: 255 },
    age: { type: String, maxlength: 600 },
    phone: { type: String, maxlength: 11 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', User);