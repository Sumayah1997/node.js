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
async function process()//
{
    try 
    {
        const data= await fetchData();//await the promise to resolve
        console.log("this is the date my server processed",data);

    }
    catch(error)
    {
        console.log("there was an error.");
    }
}
process();//calling the async function


    