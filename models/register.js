const mongoose=require('mongoose')

const registerSchema=new mongoose.Schema(
    {
        name:String,
        email:{
            type:String,
            unique:true
        },
        phone:Number,
        password:String
    }
 )
 module.exports=mongoose.model('RegisteredStudent',registerSchema)