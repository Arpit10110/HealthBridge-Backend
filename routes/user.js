import express, { Router } from "express";
import {login, signup,profile} from "../controllers/usercontroller.js"
import {placedorder,myorders,detailmyorder} from "../controllers/order.js"
import {sendemergency} from "../controllers/sendemergency.js"
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to healthbridge backend")
})
router.post("/signup",signup)
router.post("/login",login)
router.post("/profile",profile)
router.post("/placedorder",placedorder)
router.post("/myorders",myorders)
router.get("/orderid/:id",detailmyorder)
router.post("/sendemergency",sendemergency)
export default router;