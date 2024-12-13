import { Router } from "express";
import { viewHome } from "../controllers/views.controller.js";

const router = Router()


router.get("/", viewHome)




export default router