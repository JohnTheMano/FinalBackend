const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jugadorSchema = new Schema({
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required:true,
    },
    apellido:{
        type: String,
        required:true,
    },
    años: {
        type: Number,
        required: true,
        
    },
    valor:{
        type: Number,
        required:true,
    },
    transferible:{
        type: Boolean,
        required:false,
    },

});


const Jugador = mongoose.model('Jugador', jugadorSchema);

module.exports = { Jugador };