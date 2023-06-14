const e = require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/tareas', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("db conectada"))
    .catch(e => console.log("La conexion a fallado "+  e))   

module.exports = mongoose;