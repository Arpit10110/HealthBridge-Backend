import { app } from "./app.js";
import {connectDb} from "./db/dbconnect.js"
connectDb()
app.listen(process.env.Port,()=>{
    console.log(`server listening on ${process.env.Port}`);
})