import http from 'node:http';
http.createServer((_request, response) => {
  response.writeHead(200);
  response.end('alpha-e64ae923');
}).listen(Number(process.env.PORT ?? 8080), '0.0.0.0');
