const { string, boolean } = require('joi')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    password:{
        type: String,
        required: true
    },
    biz:{
        type: Boolean,
        required: true,
        default: false
    }
})

const User = mongoose.model('registerSchema', userSchema)

const createUser = (userName, email, password, biz)=>{
    const newUser = new User({userName, email, password, biz})
    return newUser.save()
}

const findUserByEmail = email =>{
    return User.find({email: email})
}

module.exports = {
    createUser,
    findUserByEmail
}