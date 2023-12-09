import {asyncHandler} from "../utils/asyncHandler.js";



export const registerUser = asyncHandler(async (req, res) => {
    try {
        // Your registration logic here...
        res.status(200).json({
            message: "User registration successful",
        });
    } catch (err) {
        console.error("Error in registerUser:", err);
        // Pass the error to the next middleware
        throw err;
    }
});
