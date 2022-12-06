const axios = require("axios");

const consultaAxios = async (req,res) => {
    try {
        const respuesta = await axios.get("https://api-sports.io/documentation/nba/v2")
        res.json({data: respuesta.data, status: respuesta.status})
    } catch (error) {
        res.json({data: error.response.data, status: error.response.status})
        console.log(error)
    }
}




module.exports = { consultaAxios }