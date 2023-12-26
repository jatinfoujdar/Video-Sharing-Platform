import { User } from "../schema/userSchema.js";
import { apiError } from "../utils/apiError.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";



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
   const exiestedUser = User.findOne({
        $or:[{email},{username}]
    })
    if(exiestedUser){
        throw new apiError(409, "User Already exists")
    }

     const avatarLocalPath = req.files?.avatar[0]?.path;
     const coverImageLocalPath = req.file?.coverImage[0]?.path;

     if(!avatarLocalPath){
       throw new apiError(400, " Avatar file is required")
     }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new apiError(400, " Avatar file is required")
    }

    User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

});

