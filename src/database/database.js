import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("animales", "postgres", "6108", {
    host: "localhost",
    dialect: "postgres",
    pool:{
        max: 5,
        min: 0
    }
})