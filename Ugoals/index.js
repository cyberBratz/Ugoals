import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = 3001; // El servidor irá en el 3001, React en el 5173

app.use(cors());
app.use(express.json()); // Para que el servidor entienda cuando le envías datos en JSON

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'Ugoals Server is running! 🚀' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});