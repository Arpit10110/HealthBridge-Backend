import {Emergency} from "../models/Emergency.js"

export const sendemergency=async(req,res)=>{
    const {name,phone,address,message} = req.body;
    await Emergency.create({
        name:name,
        phone:phone,
        address:address,
        message:message
    })
    res.json({
        success:true,
        message:"We will contact you in a few seconds"
    })
}