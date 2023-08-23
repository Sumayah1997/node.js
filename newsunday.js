import express from 'express'
const app = express();
app.get('/hello',(req,res)=>{
    res.json({ message:'hello,world!'});

});
app.listen(3000,()=>{
    console.log('server stared on port 3000');
});