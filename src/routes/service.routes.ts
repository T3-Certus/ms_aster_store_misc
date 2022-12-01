import { Router } from "express";
import { getProductCategories, getProductMedia, getVariousProductMedia } from "../controller";

const router = Router()

router.get("/categories", getProductCategories)

// router.post("/media/various", getVariousProductMedia)
// router.get("/media/:categoryId", getProductMedia)
// router.get("/media/:categoryId/:productId", getProductMedia)


export default router