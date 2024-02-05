// errorHandler() is used to handle the custom error. sent the custom message to the client side.
export const errorHandler = (statusCode, message) =>{
   const error =  new Error();
   error.statusCode = statusCode;
   error.message = message;
   return error; 
}