import express from 'express';
import mailRouter from './router/mailRouter.js'; ''
const app = express();

app.use(express.json())

// Router
app.use('/email', mailRouter);


export default app;
