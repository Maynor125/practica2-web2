const express=require('express');
const router=express.Router();
const {agregarTarea,obtenerTareas,obtenerUnaTarea,editarTareas,eliminarTareas} = require('../controllers/tarea.controller')

router.get('/',obtenerTareas)
router.get('/:id',obtenerUnaTarea)
router.post('/',agregarTarea)
router.put('/:id',editarTareas)
router.delete('/:id',eliminarTareas)


module.export=router;

