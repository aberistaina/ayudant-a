import { Router } from "express";
import { createAnimal, getAnimals, deleteAnimal, updateAnimal, getAnimalById } from "../controllers/animales.controller.js";

const router = Router()

router.get("/", getAnimals)
router.get("/:id", getAnimalById)
router.post("/", createAnimal)
router.delete("/:id", deleteAnimal )
router.put("/:id", updateAnimal)





export default router