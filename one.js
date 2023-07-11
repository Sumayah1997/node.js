// const fs =require('fs')
// fs.readFile("test.txt", "utf-8", function(err,date)
// {
// if(err) throw err;
// console.log(date);
// });
// const fs = require('fs');
import fs from "fs";
console.log("being writing");
for(let i=0; i<10; i++)
{
fs.writeFile("test.txt","hi i am learing " +i, (err)=>
{
if (err) throw err;
console.log("file created and written " +i, "time");
});
}
console.log("writing finished");
console.log("begin reading");

fs.readFiles("test.txt", "utf-8", function(err,date)
{
    if(err) throw err;
    console.log(date);
});
console.log("finished reading");


