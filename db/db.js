const mongoose = require("mongoose");
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('conectado a la base de datos...');
    } catch(error){
        console.log('no se pudo conectar...');
        console.log(error.message);
    }
};

module.exports = { connect };