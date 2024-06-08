import { json } from "express"
 const asyncHadler=(requestHandler)=>{
  (req,res,next)=>{
    Promise.resolve(requestHandler(req, res, next)).
    
    catch((err)=>next(err))
  }
 

 }

export {asyncHadler}












// using try catch block

// const asyncHadler=(fn)=>async (req,res,next)=>{
//     try{
//      await fn(req,res,next)
//     }
//     catch(error){
//         res.status(err.code || 500),json({
//             success:false,
//             message:err.message
//         })
//     }
// }