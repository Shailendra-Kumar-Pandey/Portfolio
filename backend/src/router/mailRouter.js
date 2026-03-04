import express from 'express';
import { sendMailController } from '../Controller/emailController.js';

const router = express.Router()

router.post('/sendMail', sendMailController)

export default router