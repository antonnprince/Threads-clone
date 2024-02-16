import mongoose from 'mongoose';

let isConnected = false

export const connectToDB= async()=>{

    mongoose.set('strictQuery',true)

    if(!process.env.MONGODB_URL){
        console.log("Database URL not found")
    }

    if(isConnected){
        console.log("DB connected")
    }

    try{
            await mongoose.connect(process.env.MONGODB_URL);

            isConnected = true

            console.log("Database connected")
    }catch(error){
            console.log(error)
    }
}