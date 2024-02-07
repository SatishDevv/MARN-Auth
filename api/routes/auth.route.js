import express from 'express';
import { signIn, singUP } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/sign-up', singUP);
route.post('/sign-in', signIn);

export default route;
