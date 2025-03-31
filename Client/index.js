const express = require('express');
const axios = require('axios');
const app = express();

const API_URL = 'http://localhost:3000/productos';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const productos = response.data;

    const html = `
      <h1>Lista de Productos</h1>
      <ul>
        ${productos.map(p => `<li>${p.name} - $${p.precio}</li>`).join('')}
      </ul>
    `;

    res.send(html);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error al obtener los productos');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(\`Cliente corriendo en http://localhost:\${PORT}\`);
});
