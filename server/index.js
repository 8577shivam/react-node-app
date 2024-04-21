const express=require("express");
const app=express();
const cors=require("cors");
const PORT=process.env.port || 8080;
const authController=require("../server/authController/userAuth")
app.use(cors())
app.use(express.json())
app.post("/login",authController().userLogin)
app.post("/reg",authController().userReg)
app.listen(PORT,()=>{
    console.log(`Server is  running on ${PORT}`)
})

