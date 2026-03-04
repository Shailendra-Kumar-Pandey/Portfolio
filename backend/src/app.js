import express from 'express';
import mailRouter from './router/mailRouter.js';
import cors from 'cors';
const app = express();

app.use(express.json())

// Handle all headers : Access-Control-Allow-Origin
app.use(cors())

// Router
app.use('/email', mailRouter);


export default app;
