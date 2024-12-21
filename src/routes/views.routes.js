import { Router } from "express";
import { viewHome, viewUpdate } from "../controllers/views.controller.js";

const router = Router()


router.get("/", viewHome)
router.get("/update/:id", viewUpdate )





export default router