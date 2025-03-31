const http = require('http');

const data = [
  { id: 1, name: 'Producto A', precio: 1000 },
  { id: 2, name: 'Producto B', precio: 1500 },
  { id: 3, name: 'Producto C', precio: 2000 }
];

const server = http.createServer((req, res) => {
  if (req.url === '/productos' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
