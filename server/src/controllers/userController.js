import { apiError } from "../utils/apiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";



export const registerUser = asyncHandler(async (req, res) => {
    
    const {fullName,email,username,password} = req.body;
    // console.log("email",email);

    // if(fullName === ""){
    //     throw new apiError(400, " Full name is required")
    // }
    if(
        [fullName,email,username,password].some((field)=>
         field?.trim() === "")
    ){
        throw new apiError(400,"All Fields are required")
    }

});

