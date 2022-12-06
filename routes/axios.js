const express = require('express');
const router = express.Router();
const { consultaAxios } = require('../controllers/controllerAxios')




router.get('/lista', consultaAxios)

module.exports = router;
