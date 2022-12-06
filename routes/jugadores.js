const express = require ('express');
const { 
    obtenerJugadores,
    obtenerJugadorPorId, 
    cargarJugador,
    editarJugador,
    eliminarJugador,
} = require('../controllers/jugadorController');

const router = express.Router();

//middlewares
const {check} = require("express-validator")
const {validarIdJugadores} = require("../middleware/validarIdJugadores");

/* GET users listing. */
router.get('/lista', obtenerJugadores);
router.get('/id/:id([0-9a-fA-F]{24})',validarIdJugadores, obtenerJugadorPorId);

//Posts (crear Recursos)

router.post(
    '/crear',
    [
        check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage('El dni debe ser numérico'),
    check("nombre")
        .not().isEmpty().withMessage("El nombre debe cargarse"),
        check("apellido")
        .not().isEmpty().withMessage("El apellido debe cargarse"),
    check("años").isNumeric()
        .withMessage("La edad debe ser un número")
        .isLength({ min: 2, max: 2 })
        .withMessage("la edad no puede ser mayor o menor a 2 cifras"),
], cargarJugador);

router.put(
    '/editar/:id([0-9a-fA-F]{24})',
    validarIdJugadores,
    [
    check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage('El dni debe ser numérico'),
    check("nombre")
        .not().isEmpty().withMessage("El nombre debe cargarse"),
        check("apellido")
        .not().isEmpty().withMessage("El apellido debe cargarse"),
    check("años").isNumeric()
        .withMessage("La edad debe ser un número")
        .isLength({ min: 2, max: 2 })
        .withMessage("la edad no puede ser mayor o menor a 2 cifras"),
],
editarJugador);

router.delete('/eliminar/:id([0-9a-fA-F]{24})',validarIdJugadores, eliminarJugador);

module.exports = router;
