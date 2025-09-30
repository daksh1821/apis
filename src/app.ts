import express from 'express';

import globalerror from "./middlewares/globalErrorHandling.ts";
import userRouter from './user/userRoutes.ts';
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("Hello, World!");
})
// Global Error Handling Middleware
app.use(globalerror)
app.use("/api/user/",userRouter);
export default app;