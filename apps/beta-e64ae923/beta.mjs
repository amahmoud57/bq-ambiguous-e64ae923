import http from 'node:http';
http.createServer((request, response) => {
  if (request.url === '/readyz') {
    response.writeHead(200);
    response.end('beta-e64ae923-ready');
    return;
  }
  response.writeHead(200, { 'content-type': 'application/json' });
  response.end(JSON.stringify({ case: 'beta-e64ae923', path: request.url }));
}).listen(Number(process.env.PORT ?? 8080), '0.0.0.0');
