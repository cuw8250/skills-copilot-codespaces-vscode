// Create web server
// Run server
// Open browser and go to localhost:8000

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  const name = 'Jane Doe';
  html = html.replace('{name}', name);
  res.end(html);
}).listen(8000, ' localhost');