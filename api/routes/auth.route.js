import express from 'express';
import { singUP } from '../controllers/auth.controller.js';

const route = express.Router();

route.post('/sign-up', singUP);

export default route;
