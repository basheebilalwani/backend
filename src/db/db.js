const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://user1:user1@cluster0.xib1dwf.mongodb.net/test")
    console.log("Database connected")
}

module.exports = connectDB