function fetchData(callback){
    setTimeout(()=>
    {
        const data ="date from my server";
        callback(data);
    },10000);
}
function process(data)
{ 
    console.log("processing the date:",data);
}
fetchData(process);