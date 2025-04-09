const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3000;

// Ruta para mostrar los libros
app.get('/mangas', (req, res) => {
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
