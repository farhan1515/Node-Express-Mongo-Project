const mongoose= require("mongoose")

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"Please enter the userNmae"]      
          },
          email:{
            type : String,
            required:[true,"please enetr yiru email"],
            unique:[true,"Email already taken"]
          },
          password:{
            type:String,
            required:[true,"Enter the user password"]
          }
    },{
        timestamps:true
    }
)

module.exports= mongoose.model("User",userSchema)