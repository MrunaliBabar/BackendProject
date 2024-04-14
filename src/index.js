// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connectDB from "./db/dbConnect.js";

dotenv.config({
    path:'./env'
})

connectDB();










/* First approach to connect Database in index.js file

import express from express;

const app= express();


( async ()=>{
    try{

       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       app.on(error,(error)=>{
        console.log("Error: ",error)
        throw error;
       })

       app.listen(process.env,PORT, ()=>{
        console.log(`App is listening On port ${process.env.PORT}`);
       })

    }catch(error){
       console.log("Error:",error);
       throw error
    }
})()
*/