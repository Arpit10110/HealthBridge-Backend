import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  ProductImg: { type: String, required: true },
  ProductPrice: { type: Number, required: true },
  Productname: { type: String, required: true },
  Qty: { type: Number, required: true },
  id: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
  cart: { type: [cartSchema], required: true },
  userdetails: { type: userSchema, required: true },
  userid: { type: String, required: true },
  totalamount: { type: String, required: true },
  status: { type: String, required: true },
  orderDate:{type:String, required: true}
});

export const Order = mongoose.model("Order", orderSchema);
