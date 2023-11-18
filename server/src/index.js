import mongoose from "mongoose";


( async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`Database connected succesfully`);
    } catch (error) {
        console.log("Error while with the database",error);
        console.log("error",error)
        throw err
    }
})()