import { Router } from 'express';
import { LivroController } from '../controllers/LivroController';

const router = Router();
const livroController = new LivroController();

router.post('/livros', (req, res) => livroController.criarLivro(req, res));
router.get('/livros', (req, res) => livroController.listarLivros(req, res));
router.get('/livros/:id', (req, res) => livroController.buscarLivroPorId(req, res));
router.put('/livros/:id', (req, res) => livroController.atualizarLivro(req, res));
router.delete('/livros/:id', (req, res) => livroController.excluirLivro(req, res));

export default router;