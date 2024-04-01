import express from 'express';
import { createUserCon } from './userController';
const userRoutes = express.Router();
userRoutes.post('/create-user', createUserCon);
export default userRoutes;
