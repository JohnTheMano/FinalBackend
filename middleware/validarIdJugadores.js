const {Jugador} = require("../models/Jugador.js")
const validarIdJugadores = async (req, res, next) => {
    const jugador = await Jugador.findById(req.params.id)
    if (jugador !== null) {
        next()
    } else {
        res.status (500).json({msg: "el id es inválido"})
    }
}

module.exports = {validarIdJugadores}