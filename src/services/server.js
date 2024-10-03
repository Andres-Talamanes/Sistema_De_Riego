import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Para poder recibir datos en formato JSON

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres', 
  host: 'database-2.c16666c4uxt3.us-east-2.rds.amazonaws.com', 
  database: 'postgres', 
  password: 'sistemariego123', 
  port: 5432,
});

// Ruta para obtener datos de riego
app.get('/api/riego', async (req, res) => {
  try {
    const result = await pool.query('SELECT fecha, hora, cantidad_de_veces_regada, cantidad_de_agua_regada FROM registro_riego');
    res.json(result.rows);
  } catch (error) {
    console.error('Error al obtener datos de riego:', error);
    res.status(500).send('Error al obtener datos de riego');
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
