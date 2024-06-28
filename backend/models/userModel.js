import mongoose from "mongoose";
const {Schema} = mongoose;
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    name:{
        type:String,
        required: true,
        default: null
    },
    email:{
        type:String,
        required: true,
        default: null,
        unique:true,
        lowercase: true,
        trim:true
    },
    password:{
        type:String,
        required: true,
        default: null
    },
    profileImage:{
        type:String,
        default: null
    }
},{timestamps:true});

userSchema.pre('save',async function (next) {
    // if password field has not been modified then move on
    if(!this.isModified("password")) {
        next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        next(error)
    }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};

const User = mongoose.model("user",userSchema);
export default User;