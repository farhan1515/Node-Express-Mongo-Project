const mongoose=require("mongoose")

const contactSchema=mongoose.Schema({

    user_id:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"User"
    },
    name :{
        type:String,
        required:[true,"Please enter your Name"]
    },
    email:{
        type: String ,
        required:[true,"Please enter your email"]
    },
    phone:{
        type:Number,
        required:[true,"Please enter your phone number"]
    }
},
{
    timestamps:true
}
);

module.exports=mongoose.model("contact",contactSchema);