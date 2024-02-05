import express from 'express';
import { test } from '../controllers/user.controller.js';

const route = express.Router();

route.get('/', test);


export default route;