const http = require('http');

const hostname = 'nodesample.vercel.app';
const port = 4000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Helloworld\n');
});

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
