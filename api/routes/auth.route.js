import express from 'express';
import { signIn, singUP, googleOAuth } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/sign-up', singUP);
route.post('/sign-in', signIn);
route.post('/google', googleOAuth)

export default route;
