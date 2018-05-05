const mongoose = require('mongoose');
const mongoDbUrl = 'mongodb://localhost/nodelab4';
module.exports = (callback) => {
    mongoose.Promise = global.Promise
    mongoose.connect(mongoDbUrl)
    var dBase = mongoose.connection;
    dBase.on('open', () => {
        callback(mongoose) 
    })
    dBase.on('error', (error) =>{
        console.log('MongoDB connection error');
        console.log(error);
    })
}