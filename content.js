const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((request, response) => {
const filePath = path.join(__dirname, 'public', request.url === '/' ?'index.html' : request.url);
const contentType =function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
    case '.html': return 'text/html';
    case '.css': return 'text/css';
    case '.js': return 'text/javascript';
    case '.json':return 'application/json';
    getContentType(filePath) || 'text/plain' 
    fs.readFile(filePath, (error, content) => {
        if (error) {if (error.code === 'ENOENT') {
    r nse.writeHead(404);
    esponse.end('Error: File not found');
    } else {
    respowriteHead(500);
    respoend('Error: Internal server error');
    }} else {
        responwriteHead(200, {'Content-Type':  contentType});
    responend(content, 'utf-8');}});});



