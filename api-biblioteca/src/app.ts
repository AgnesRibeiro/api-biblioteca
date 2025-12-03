import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './data-source';
import livroRoutes from './routes/livroRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Rota raiz para acessar pelo navegador
app.get('/', (req, res) => {
    res.json({
        message: 'API Biblioteca - CRUD Livros',
        endpoints: {
            criar: 'POST /api/livros',
            listar: 'GET /api/livros',
            buscar: 'GET /api/livros/:id',
            atualizar: 'PUT /api/livros/:id',
            excluir: 'DELETE /api/livros/:id'
        }
    });
});

app.use('/api', livroRoutes);

export default app;
