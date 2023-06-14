const mongoose = require('mongoose');
const conexion = require('../data/db')

const {Schema} = mongoose;

const TareaSchema= new Schema({
    contenido:{
        type:String,
        required:true,
    },
    fueCompletada:{
        type:Boolean,
        default:false,
    },
    prioridad:{
        type:Number,
        defoult:1,
    }
});

const Tarea=mongoose.models.Tarea || mongoose.model('Tarea', TareaSchema); 
module.exports = Tarea;