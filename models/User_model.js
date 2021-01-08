const mongoose=require('mongoose')

const user=mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model('User',user)
module.exports=User