import { sequelize } from "./src/database/database.js";
import { app } from "./app.js";

const PORT = 3000
const main = async () =>{
    try {
        await sequelize.authenticate()
        console.log("La conexión a la base de datos fue exitosa 💾");
        await sequelize.sync({force: false, alter: false})

        app.listen(PORT, () =>{
            console.log("Servidor escuchando en el puerto 3000 🚀");
        })
    } catch (error) {
        console.log("Ha ocurrido un error")
    }
}

main()