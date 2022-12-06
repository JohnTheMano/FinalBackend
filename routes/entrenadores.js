const express = require ('express');
const { 
    obtenerEntrenador,
    obtenerEntrenadorPorId, 
    cargarEntrenador,
    editarEntrenador,
    eliminarEntrenador,
} = require('../controllers/entrenadorController');

const router = express.Router();

//middlewares
const {check} = require("express-validator")
const {validarIdEntrenadores} = require("../middleware/validarIdEntrenadores");

/* GET users listing. */
router.get('/lista', obtenerEntrenador);
router.get('/id/:id([0-9a-fA-F]{24})',validarIdEntrenadores, obtenerEntrenadorPorId);

//Posts (crear Recursos)

router.post(
    '/crear',
    [
    check("dni")
        .not()
        .isEmpty()
        .withMessage("El DNI debe cargarse")
        .isNumeric()
        .withMessage('El DNI debe ser numérico'),
    check("nombre")
        .not().isEmpty().withMessage("El nombre debe cargarse"),
    check("apellido")
        .not().isEmpty().withMessage("El apellido debe cargarse"),
    check("años").isNumeric()
        .withMessage("La edad debe ser un número")
        .isLength({ min: 2, max: 2 })
        .withMessage("La edad debe tener 2 cifras"),
    check("activo").isBoolean()
    .withMessage("Debe ser 'true'o 'false'"),
], cargarEntrenador);

router.put(
    '/editar/:id([0-9a-fA-F]{24})',
    validarIdEntrenadores,
    [
    check("dni")
        .not()
        .isEmpty()
        .withMessage("El dni debe cargarse")
        .isNumeric()
        .withMessage('El dni debe ser numérico'),
    check("nombre")
        .not().isEmpty().withMessage("El Nombre debe cargarse"),
    check("apellido")
        .not().isEmpty().withMessage("El apellido debe cargarse"),
    check("años").isNumeric()
        .withMessage("La edad debe ser un número")
        .isLength({ min: 2, max: 2 })
        .withMessage("La edad debe ser de 2 cifras"),
],
editarEntrenador);

router.delete('/eliminar/:id([0-9a-fA-F]{24})',validarIdEntrenadores, eliminarEntrenador);

module.exports = router;
