import express from 'express';

import globalerror from "./middlewares/globalErrorHandling.ts";
const app = express();
app.get("/",(req,res)=>{
    res.json("Hello, World!");
})
// Global Error Handling Middleware
app.use(globalerror)
export default app;