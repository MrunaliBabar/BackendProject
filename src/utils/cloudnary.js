import {v2 as cloudnary} from "cloudnary";
import fs from "fs"



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET // Click 'View Credentials' below to copy your API secret
    });

const uploadOnCloudnary=async (LocalFilePath)=>{
    try{
        if(!LocalFilePath) return null

        //upload file on cloudnary 
       const response=await cloudnary.uploader.upload(LocalFilePath,{
            resource_type:"auto"
        })

        //file has successfully uploaded

        console.log("File is uploded on Cloudnary",response.url);
        return response;
    }
    catch(error){
           fs.unlinkSync(LocalFilePath) //remove locally saved temporary file as the upload operation got failed 
           return null;
    }
}

export {uploadOnCloudnary};