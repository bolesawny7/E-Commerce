import { Router } from "express";

const { getAllUsers,getUsersId,addUsers,updateUsers,deleteUser } = require('../controllers/userController.js')

export const userRouter = Router();

userRouter.get('/users', getAllUsers);
userRouter.get('/users/:id', getUsersId);
userRouter.post('/users', addUsers);
userRouter.patch('/users/:id', updateUsers);
userRouter.delete('/users/:id', deleteUser);
