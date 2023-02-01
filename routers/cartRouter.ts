import { Router } from "express";
import { addProductToCart } from "../controllers/cartController";
import { getAllCarts } from "../controllers/cartController";
import { deleteProductFromCart } from "../controllers/cartController";
export const cartRouter = Router();
cartRouter.get('/users/:userId/cart', getAllCarts)
cartRouter.post('/users/:userId/carts/:productId', addProductToCart)
cartRouter.delete('/users/:userId/carts/:productId',deleteProductFromCart);
