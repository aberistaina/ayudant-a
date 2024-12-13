import {v4 as uuidv4 } from "uuid"
import { consultas } from "../database/database.js"
export class Animal {

    id
    nombre
    tipo

    constructor(nombre, tipo){
        this.id = uuidv4().slice(0, 10)
        this.nombre = nombre
        this.tipo = tipo
    }


    static async create (animal){
        try {
            const id = uuidv4().slice(0, 10)
            const { nombre , tipo } = animal
            let query = {
                text: "INSERT INTO animales VALUES ($1, $2, $3 ) RETURNING *",
                values: [id, nombre , tipo]
            }
            let resultado = await consultas(query)
            return resultado
        } catch (error) {
            console.log(error.message);
        }
        
    }

    static async getAll(){
        try {
            let query = {
                text: "SELECT * FROM animales"
            }
            const resultado = await consultas(query)
            return resultado
        } catch (error) {
            console.log(error.message);
        }
    } 

    static async delete(id){
        try {
            const query1 = {
                text: "SELECT * from animales where id = $1",
                values: [id]
            }
            const animal = await consultas(query1)
            console.log(animal)

            const query2 = {
                text: "DELETE from animales where id = $1",
                values: [id]
            }
            await consultas(query2)

            return animal
        } catch (error) {
            console.log(error.message);
        }
    }

    static async update(id, animal){
        try {
            const { nombre, tipo } = animal
            let query = {
                text: "UPDATE animales SET nombre = $1, tipo = $2 WHERE id = $3 RETURNING*",
                values: [nombre , tipo, id]
            }
            const resultado = await consultas(query)
            return resultado
        } catch (error) {
            console.log(error.message);
        }
    } 
}


