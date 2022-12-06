const{Entrenador} = require("../models/Entrenador");
const {check, validationResult} =require("express-validator")

const obtenerEntrenador = async (req, res) => {
    try{
    const entrenadores = await Entrenador.find();
    res.json({entrenadores});
    }catch(error){
        console.log(error.message);
    }
};

const obtenerEntrenadorPorId = async (req, res) => {
    try {
        const error = validationResult(req);
        if (error.isEmpty) {
const entrenador = await Entrenador.findById(req.params.id);
res.status(200).json({entrenador});
}else {
    res.status(501).json({ msj:error });
}
    } catch (error) {
        console.log(error.message);
    }
}

const cargarEntrenador = async (req, res) => {
    try{
    const entrenador = new Entrenador(req.body);
    await entrenador.save();
    
    res.status(201).json({
        msg: 'El entrenador ha sido guardado exitosamente.',
        entrenador: entrenador,
});
    }catch(error){
        console.log(error.message);
    }
};

const editarEntrenador = async(req, res) => {
    try {
        const error = validationResult(req);
        if (error.isEmpty()) {
            await Entrenador.findByIdAndUpdate(req.params.id, req.body);
            res.status(201).json({msg: 'Entrenador Actualizado'});
        } else {
        res.status(501).json({msg: error}); //error de la validación
    }}
    catch (error) {
        console.log(error.message); //error de la base de datos (conexión)
    }
};

const eliminarEntrenador = async (req, res) => {
    try{
        const entrenador = await Entrenador.findByIdAndDelete(req.params.id);
        res.json({msg: 'Entrenador eliminado', entrenador});

    }catch(error){
        console.log(error.message);
    }
}


module.exports = { obtenerEntrenador, obtenerEntrenadorPorId, cargarEntrenador, editarEntrenador, eliminarEntrenador };