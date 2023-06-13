const express=require('express');
const router=express.Router();
const {agregarTarea} = require('../controllers/tarea.controller')

router.post('/',agregarTarea)

module.export=router;

