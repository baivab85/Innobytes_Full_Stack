import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    cname:String,
    mobile:Number,
    address:String,
    image:String,
    adate:String,
    uname:String
})

const User1 = mongoose.model('innobytes', userSchema)

export default User1