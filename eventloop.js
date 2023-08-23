console.log("started executions");
setTimeout (()=>
{
    console.log("settimeout callback")
},10000);
Promise.resolve().then(()=>{
console.log("promise now resolved")
});
console.log("exection ended");