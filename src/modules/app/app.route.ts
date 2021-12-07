import { hello } from './app.controller';
import express from 'express';

const router = express.Router();

// Sample get route
router.get('/', hello);

//  chat messages of a receiver and sender

export default router;
