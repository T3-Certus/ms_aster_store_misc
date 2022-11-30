import { Router } from "express";
import { getProductCategories, getProductMedia } from "../controller";

const router = Router()

router.get("/categories", getProductCategories)

router.get("/media/:categoryId", getProductMedia)
router.get("/media/:categoryId/:productId", getProductMedia)


export default router