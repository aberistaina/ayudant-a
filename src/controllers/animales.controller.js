import { Animal } from "../models/Animales.model.js";

export const createAnimal = async(req, res) =>{
    try {
        const { nombre, tipo } = req.body

        const nuevoAnimal = Animal.create({
            nombre,
            tipo
        })

        res.status(201).json({
            code: 201, 
            message: "Animal creado Correctamente",
            data: nuevoAnimal
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
        
        const allAnimals = await Animal.findAll()
        res.status(200).json({
            code: 200, 
            message: "Animales obtenidos de forma exitosa",
            data: allAnimals
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

        await Animal.destroy({
            where:{
                id
            }
        })

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


        const animalBuscado = await Animal.findOne({
            where:{
                id
            }
        })

        if(!animalBuscado){
            res.status(404).json({
                code: 404, 
                message: "El Animal no existe en la base de datos",
            })

        }

        await Animal.update(animal, {
            where: {
                id
            }
        })

        res.status(200).json({
            code: 200, 
            message: "Animal editado de forma exitosa",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: 500, 
            message: "Hubo un error interno del servidor"
        })
    }
}