const http=require('http');
var server = http.createServer(
    (request,response)=>{
        response.setHeader('Content-Type','text/html');
        response.write('<!DOCTYPE html><html lang="ja">');
        response.write('<head><meta charset="UTF-8">');
        response.write('<title>Hello</title>');
        response.write('<body><h1>Hello</h1>');
        response.write('<p> Node.js sample page.</p>');
        response.write('<p>これはサンプルページだよ</p>');
        response.write('</body></html>');
        response.end();
    }
);

server.listen(3000);
console.log('server start');