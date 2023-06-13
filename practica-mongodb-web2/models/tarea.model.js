const mongoose = require('mongoose');

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
        type:number,
        defoult:1,
    }
});

const Tarea=mongoose.model('url',TareaSchema);
 
export default Tarea;