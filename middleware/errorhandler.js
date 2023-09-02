const {constants}=require("../constants")

const errorhandler=(err,req,res,next)=>{
   const statusCode= res.statusCode ? res.statusCode:500;

   switch (statusCode){
    case constants.VALIDATION_ERROR:
        res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack});
        break;
    
    case constants.NOT_FOUND:
        res.json({title:"Not found" ,message:err.message,stackTrace:err.stack});
        break;

    case constants.UNAUTHORIZED:
        res.json({title:"UNATHORIZED" ,message:err.message,stackTrace:err.stack});
        break;

    case constants.FORBIDDEN:
        res.json({title:"FORBIDDEN" ,message:err.message,stackTrace:err.stack});
        break;
    case constants.SERVICE_ERROR:
       res.json({title:"SERVICE_ERROR" ,message:err.message,stackTrace:err.stack});
       break;
    default:
        console.log("No error ALL goof!")
        break;
   }
   res.json({title:"Not found" ,message:err.message,stackTrace:err.stack});
   res.json({title:"Validation Failed",message:err.message,stackTrace:err.stack})
}

module.exports={errorhandler}