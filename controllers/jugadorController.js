const{Jugador} = require("../models/Jugador");
const {check, validationResult} =require("express-validator")

const obtenerJugadores = async (req, res) => {
    try{
    const jugadores = await Jugador.find();
    res.json({jugadores});
    }catch(error){
        console.log(error.message);
    }
};

const obtenerJugadorPorId = async (req, res) => {
    try {
        const error = validationResult(req);
        if (error.isEmpty) {
const jugador = await Jugador.findById(req.params.id);
res.status(200).json({jugador});
}else {
    res.status(501).json({ msj:error });
}
    } catch (error) {
        console.log(error.mrssage);
    }
}

const cargarJugador = async (req, res) => {
    try{
    const jugador = new Jugador(req.body);
    await jugador.save();
    
    res.status(201).json({
        msg: 'El jugador ha sido guardado exitosamente.',
        jugador: jugador,
});
    }catch(error){
        console.log(error.message);
    }
};

const editarJugador = async(req, res) => {
    try {
        const error = validationResult(req);
        if (error.isEmpty()) {
            await Jugador.findByIdAndUpdate(req.params.id, req.body);
            res.status(201).json({mesg: 'Jugador Actualizado'});
        } else {
        res.status(501).json({msg: error}); //error de la validación
    }}
    catch (error) {
        console.log(error.message); //error de la base de datos (conexión)
    }
};

const eliminarJugador = async (req, res) => {
    try{
        const jugador = await Jugador.findByIdAndDelete(req.params.id);
        res.json({msg: 'Jugador eliminado', jugador});

    }catch(error){
        console.log(error.message);
    }
}


module.exports = { obtenerJugadores, obtenerJugadorPorId, cargarJugador, editarJugador, eliminarJugador };