const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/node_js');
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('connect fail!!!');
        console.log(error.log);
    }
}

module.exports = { connect };