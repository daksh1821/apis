import express from 'express';
const userRouter = express.Router();
userRouter.post("/register", (req, res) => {
    console.log("Body received:", req.body);
    res.json({ message: "User Registered", data: req.body });
});
userRouter.post("/login",(req,res)=>{
    console.log("Login attempt:", req.body);
    res.json({ message: "User Logged In", data: req.body });
})
export default userRouter;