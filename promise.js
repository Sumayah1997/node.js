function fetchData()
{
    return new Promise((resolve,reject)=> 
    {
        setTimeout(()=>
        {
            const data ="date from my server";
            resolve(data);
        },3000);
    });
}
fetchData()
   .then(data=>
    {
        console.log("this is the data my server handled:",data);
    })
    .catch(error=>
        {
            console.log("sorry there was an error.")
        });
    
    
    
    
    