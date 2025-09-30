import express, { type NextFunction, type Request, type Response } from "express";
import type { HttpError } from "http-errors";
const globalerror = (err:HttpError, req:Request, res:Response, next: NextFunction)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
        status,
        message
    });
};
export default globalerror;