import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const route = express.Router();

route.get('/', test);
route.post('/update/:id', verifyToken, updateUser);
route.delete('/delete/:id', verifyToken, deleteUser);

export default route;