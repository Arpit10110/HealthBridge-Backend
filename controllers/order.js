import { overwriteMiddlewareResult } from "mongoose";
import { Order } from "../models/Order.js";

export const placedorder = async (req, res) => {
  const { order, totalamount, User_id, Status, userdetails,OrderDate } = req.body;
  try {
    await Order.create({
      cart: order,
      totalamount: totalamount,
      userid: User_id,
      status: Status,
      userdetails: userdetails,
      orderDate:OrderDate
    });
    res.json({
      success: true,
      message: "Order Placed Successfully"
    });
  } catch (error) {
   console.log(error);
  }
};


export const myorders =async(req,res)=>{
  const {userid}=req.body;
  const results=  await Order.find({userid});
  if(results.length > 0){
    res.json({
      success:true,
      results: results
      })
  }else{
    res.json({
      success:false,
      message:"No orders"
    })
  }
}

export const  detailmyorder = async(req,res)=>{
  const id=req.params.id;
  const results=  await Order.findById(id);
    res.json({
      success:true,
      results: results
      })
}