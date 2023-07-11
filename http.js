import http from "http";
//create our http server
const server = http.createServer((req,res) => 
{//creating the http header
res.writeHead(200, {"content-type":"text/plain"});
//sending of the http respons
res.end("hello word this is my server");
});

server.listen(4000,'localhost',()=>
{//starting the server
    console.log("server is runing on http://location:4000");
})
