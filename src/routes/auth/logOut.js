const logOut = require('express').Router();
const dotenv = require('dotenv');
dotenv.config()

logOut.delete('/',(req,res,next)=>{
  res.clearCookie(process.env.COOKIE_NAME)
  res.send('User log out succssfully')              
})

module.exports  = logOut;

