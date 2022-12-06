const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const entrenadorSchema = new Schema({
    dni:{
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
        unique: false,
    },
    activo:{
        type: Boolean,
        required:false,
    },
});


const Entrenador = mongoose.model('Entrenador', entrenadorSchema);

module.exports = { Entrenador };