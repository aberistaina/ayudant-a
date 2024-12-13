import express from "express"
import animalesRoutes from "./src/routes/animales.routes.js"
import viewRoutes from "./src/routes/views.routes.js"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Carpeta Publica
app.use("/public", express.static(path.join(__dirname, "src/views")));

app.listen(3000, () =>{
    console.log("Servidor escuchando en el puerto 3000 🚀");
})

//endpoints
app.use("/api/v1/animales", animalesRoutes)

//vistas
app.use("/", viewRoutes)


