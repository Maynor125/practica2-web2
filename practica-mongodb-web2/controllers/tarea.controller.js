const Tarea = require("../models/tarea.model");
//import Tarea from '../models/tarea.model';


const obtenerTareas = async (req, res) => {
  const tarea = await Tarea.find();
  res.status(200).json(tarea);
};

const obtenerUnaTarea = async (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = await Tarea.findById(id);
  res.status(200).json(tarea);
};

const agregarTarea = async (req, res) => {
  try {
    const tarea = new Tarea({
      contenido: req.body.contenido,
      fueCompletada: req.body.fueCompletada,
      prioridad: req.body.prioridad,
    });
    await tarea.save();
    res.status(200).json(tarea);
  } catch (error) {
    req.status(400).json({ message: "Error por llaga" });
  }
};

const editarTareas = async (req, res) => {
  const id = parseInt(req.params.id);
  const { origin } = req.body;

  try {
    const tarea = await Tarea.findById(id);
    const indice = tarea.findIndex((i) => i.id === id);
    if (indice !== -1) {
      await tarea.updateOne({ origin });
      res.status(200).json({ message: "La tarea ha sido actualizada" });
    } else {
      res.status(404).json({ message: "La tarea no existe" });
    }
  } catch (error) {
    req.status(400).json({ message: "Error por llaga" });
  }
};

const eliminarTareas = async (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = await Tarea.findById(id);
  try {
    const indice = tarea.findIndex((i) => i.id === id);
    if (indice !== -1) {
      await tarea.remove();
      res.status(200).json({ message: "La tarea ha sido eliminada" });
    } else {
      res.status(404).json({ message: "La tarea no existe" });
    }
  } catch (error) {
    req.status(400).json({ message: "Error por llaga" });
  }
};

module.export = {
  obtenerTareas,
  obtenerUnaTarea,
  agregarTarea,
  editarTareas,
  eliminarTareas,
};
