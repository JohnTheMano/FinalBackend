
const {Entrenador} = require("../models/Entrenador")
const validarIdEntrenadores = async (req, res, next) => {
    const entrenador = await Entrenador.findById(req.params.id)
    if (entrenador !== null) {
        next()
    } else {
        res.status (500).json({msg: "el id es inválido"})
    }
}

module.exports = {validarIdEntrenadores}