// import http from 'http';
// import fs from 'fs';
// const server = http.createServer((request,respons)=>
// {
//     if(request.url === '/')
//     {respons.writeHead(200,{'content-type':'text/html'});
//     fs.readFile('http.html',(error,data)=>
// {
//     if (error)
//     {
//         respons.writeHead(404);
//         respons.write('error:file not found');}
//         else{respons.write(data);}
//         respons.end();
//     });}});
// server.listen(3000,()=>{console.log('server listening on post 3000');});