const {customAPIError} = require('../errors/custom-error');
const errorHandlerMiddleware = (error,req,res,next) =>{
    if(error instanceof customAPIError){
        return res.status(error.statusCode).json({msg: error.message});
    }
    console.log(error);
    return res.status(500).json({msg:`Something went wrong`})
}

module.exports = errorHandlerMiddleware