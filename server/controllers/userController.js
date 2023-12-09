import {asyncHandler} from "../utils/asyncHandler.js";



export const registerUser = asyncHandler(async (req, res) => {
    try {
        
        res.status(200).json({
            message: "User registration successful",
        });
    } catch (err) {
        console.error("Error in registerUser:", err);
       
        throw err;
    }
});

