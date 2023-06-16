const mongoose = require('mongoose')
const {MONGODB_URI} = process.env;

if(!MONGODB_URI){
    throw new Error('MONGODB_URI es necesaria')
}

const conectDB = async () =>{
    try {
      const {connection} = await  mongoose.connect(MONGODB_URI)
    if(connection.readyState === 1)
    {
      console.log("Conectado a mongo db warro")
      return Promise.resolve(true)
    }
    } catch (error) {
      console.log(error);
      return Promise.reject(false);
    }
}
module.exports = conectDB