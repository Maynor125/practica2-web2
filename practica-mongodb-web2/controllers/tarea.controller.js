const Tarea=require('../models/tarea.model')


const agregarTarea = async(req,res) =>{
    try {
        const tarea=new Tarea(
        {
            contenido: req.body.contenido,
            fueCompletada:req.body.fueCompletada,
            prioridad:req.body.prioridad
        })
        await tarea.save()
        res.status(200).json(tarea)
    } catch (error) {
        req.status(400).json({message:"Error por llaga"})
    }
}

module.export={
    agregarTarea,
}