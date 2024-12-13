import { Animal } from "../models/Animales.model.js";

export const createAnimal = async(req, res) =>{
    try {
        const datosAnimal = req.body
        const animal = await Animal.create(datosAnimal)
        console.log(animal)
        res.status(201).json({
            code: 201, 
            message: "Animal creado Correctamente",
            data: animal
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500, 
            message: "Hubo un error interno del servidor"
        })
    }
}

export const getAnimals = async(req, res)=>{
    try {
        const animales = await Animal.getAll()
        res.status(200).json({
            code: 200, 
            message: "Animales obtenidos de forma exitosa",
            data: animales
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500, 
            message: "Hubo un error interno del servidor"
        })
    }
}

export const deleteAnimal = async(req, res)=>{
    try {
        const { id } = req.params
        const animalEliminado = await Animal.delete(id)
        res.status(200).json({
            code: 200, 
            message: "Animal eliminado de forma exitosa",
            data: animalEliminado
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500, 
            message: "Hubo un error interno del servidor"
        })
    }
}

export const updateAnimal = async(req, res)=>{
    try {
        const { id } = req.params
        const animal = req.body
        const animalEditado = await Animal.update(id, animal)
        res.status(200).json({
            code: 200, 
            message: "Animal editado de forma exitosa",
            data: animalEditado
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            code: 500, 
            message: "Hubo un error interno del servidor"
        })
    }
}