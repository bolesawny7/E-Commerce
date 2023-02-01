import { Router } from "express";
import { addProduct } from "../controllers/productController";
import { getAllProducts } from "../controllers/productController";

export const productRouter = Router();

productRouter.get('/products', getAllProducts)
productRouter.post('/products', addProduct)







