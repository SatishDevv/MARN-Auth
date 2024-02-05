import express from 'express';
import { test } from '../controllers/user.controller.js';

const app = express.Router();

app.get('/', test);


export default app;