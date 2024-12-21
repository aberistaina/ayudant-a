import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const viewHome = (req, res) =>{
    try {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    } catch (error) {
        console.log(error.message);
    }
}

export const viewUpdate = (req, res) =>{
    try {
        res.sendFile(path.join(__dirname, "../views/editar.html"))
    } catch (error) {
        console.log(error.message);
    }
}

