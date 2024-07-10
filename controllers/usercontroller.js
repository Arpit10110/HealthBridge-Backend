import { User } from "../models/signup.js"

export const login=async(req,res)=>{
    const {email,password}=req.body;
    const isSignup= await User.findOne({email});
    if(isSignup){
        if(password==isSignup.password){
            res.json({
                "success":true,
                "message":`welcome back ${isSignup.name}`,
                "user_data":isSignup
            })
        }
        else{
            res.json({
                "success":false,
                "message":"Password is wrong",
            })
        }
    }
    else{
        res.json({
            "success":false,
            "message":"User not found"
        })
    }
}
export const signup=async(req,res)=>{
    const {name,email,phone,password,useraddress}=req.body;
    const isSignup= await User.findOne({email});
    if(isSignup){
        res.json({
            "success":false,
            "message":"User already exists"
        })
    }
    else{
        await User.create({
            name:name,
            phone:phone,
            email:email,
            password:password,
            address:useraddress
        })
        res.json({
            "success":true,
            "message":"User created successfully"
        })
    }
}



export const profile =async(req,res)=>{
    const {id}=req.body;
    let userdetails = await User.findById(id);
    res.json({
        success:true,
        userdetails:userdetails
    })
}