const http = require('http');
const fs = require('fs').promises;

// const manifest = fs.readFileSync('./package.json', 'utf8');

const PORT = 8081;

const requestHandler = async (request, response) => {
  const manifest = await fs.readFile('./package.json', 'utf8');
  response.writeHead(200, { 'Content-type': 'text/json' });
  response.end(manifest);
};

// const requestHandler = (request, response) => {
//   if (request.url.indexOf('/home') >= 0) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     return response.end('{ url: "homepage" }');
//   }
//   response.writeHead(200, { 'Content-Type': 'text/html' });
//   return response.end('{ url: "other" }');
// };

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
  if (err) {
    console.log('Error at server launch', err);
  }
  console.log(`Server work at PORT ${PORT}!`);
});
