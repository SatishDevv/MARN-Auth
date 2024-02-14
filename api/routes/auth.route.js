import express from 'express';
import { signIn, singUP, googleOAuth, signOut } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/sign-up', singUP);
route.post('/sign-in', signIn);
route.post('/google', googleOAuth)
route.get('/sign-out', signOut);

export default route;
