// // const http = require('http');
// // const fs = require('fs');
// // const path = require('path');

// const { response } = require("express");

// // const handlebars = require('handlebars');
// const server = http.createServer((request, response) => {
// respsetHeader('Content-Type', 'text/html');
// // // If the file exists, read its contents and   dreadFile(filePath, (error, content) => {
// //     if (error) {
// //         ponse.st 500;
// //         .end('500 Internal Server Error');
// //             } else {
// // // Compile the template using Handlebars
// //         const template = han
// //         compile(content.toString());
// // // Render the template with some dynamic
// // // Get the file path of the requested URL
// const filePath = path.join(__dirname, 'views',requ=== '/' ? 'home.hbs' : `${request.url}.hbs`);
// exists(filePath, (exists) => {
// if (!exists) {response.statusCode = 404; response.end('404 Not Found');}
// else {FileSystem.readFile(filePath,(console.error,content)=>{
//     if(error) {response.statusCode=500;response.end('500 internal server error!');}
//     else {
//         const template = han
//         compile(content.toString());
//         const rendered = template
//     }
 
//     const rendered = template({
//         title: 'My Website',
//         message: 'Hello, world!'
//             });
//                // Send the rendered template as the response
//     e.end(rendered);
//         }});}});});
//     se.listen(3000, () => {
//     console.log('Server listening on port 3000');
//     });


// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const handlebars = require('handlebars');
import http from 'http';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
const server = http.createServer((request, response) => {
setHeader('Content-Type', 'text/html');
const filePath = path.join(__dirname,'views',requ==='/'?'home.hbs':`${request.url}.hbs`);
exists(filePath, (exists) =>{
if (!exists) {response.statusCode=404;response.end('404 Page Not Found!');}
else {fs.readFile(filePath,(error, content) => {
if (error) {response.statusCode=500; response.end('500 Internal Server Error!');} 
    else {const template = han
    compile(content.toString());
    const rendered = template({
    title: 'My Website',message: 'Hello, world!'});
    response.end(rendered);
    }});}});});
    response.listen(3000, () => {console.log('Server listening on port 3000...');
}); 