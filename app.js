import express from "express";
/* Se necesita importar para trabajar con módulos a partir de ES6. */
import path from 'path';

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 5000;
const IP = '127.0.0.1';

/* Middleware. */
app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, IP, () => {
    console.log(`El servidor está escuchando en http://${IP}:${PORT}/`);
});