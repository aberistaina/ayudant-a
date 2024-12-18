import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Animal = sequelize.define("Animales", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    tipo: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    tableName:"animales",
    timestamps: true
})