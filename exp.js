import express from "express";
const app = express();
app.get('/',(req,res)=>
{
    res.send("hello world this is my first express app");

});
app.locals(3000,()=>
{
    console.log("server is running on https; localhost:3000");

}); 