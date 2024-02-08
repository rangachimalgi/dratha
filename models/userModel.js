import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required:true, unique:true},
    password: {type:String, required:true},
    role: { type: String, default: 'user', enum: ['user', 'admin'] } 
});

const User = mongoose.model('User', userSchema)

export default User;