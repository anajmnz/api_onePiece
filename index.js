const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.use(cors());

// Ruta para mostrar los libros
app.get('/libros', (req, res) => {
  fs.readFile('./productos.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo' });
      return;
    }
    const libros = JSON.parse(data);
    res.json(libros);
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
