import { Router } from "express";
import { createAnimal, getAnimals, deleteAnimal, updateAnimal } from "../controllers/animales.controller.js";

const router = Router()

router.get("/", getAnimals)
router.post("/", createAnimal)
router.delete("/:id", deleteAnimal )
router.put("/:id", updateAnimal)





export default router