import express from "express";
import http from "http";
import io from "socket.io";
const app=express();
io.on('connection', socket=>
{
    console.log('user connected');
    socket.on('chatmsg',msg => { io.email('chatmsg',msg)
}); });
app.get('/',(req, res)=>
{
    res.sendFile(__dirname,'/index.html');
});
http.listen(3000,()=>{
    console.log("server runing at http://localhost:3000");

});
