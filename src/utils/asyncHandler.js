import { json } from "express"
 const asyncHandler=(requestHandler)=>{
 return (req,res,next)=>{
    Promise.resolve(requestHandler(req, res, next)).
    
    catch((err)=>next(err))
  }
 

 }

export {asyncHandler}


 0










//  using try catch block

// const asyncHadler=(fn)=>async (req,res,next)=>{
     

// 
//


// try{
    //  await fn(req,res,next)
    // }
    // catch(error){
      //  res.status(err.code || 500),json({
            // success:false,
            // message:err.message
        //  })
    // }
// }