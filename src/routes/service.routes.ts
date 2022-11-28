import { Router } from "express";
import { getProductCategories } from "../controller";

const router = Router()

router.get("/categories", getProductCategories)


export default router