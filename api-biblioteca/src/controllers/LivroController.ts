import { Request, Response } from 'express';
import { LivroRepository } from '../repositories/LivroRepository';
import { QueryFailedError } from 'typeorm';

const livroRepository = new LivroRepository();

export class LivroController {
    async criarLivro(req: Request, res: Response) {
        try {
            const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;

            if (!titulo || !autor || !isbn || !anoPublicacao) {
                return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
            }

            const novoLivro = await livroRepository.create({
                titulo,
                autor,
                isbn,
                anoPublicacao,
                disponivel: disponivel !== undefined ? disponivel : true,
            });

            res.status(201).json(novoLivro);
        } catch (error) {
            // Verifica se é erro de constraint única (ISBN duplicado)
            if (error instanceof QueryFailedError && error.message.includes('UNIQUE constraint failed')) {
                return res.status(400).json({ erro: 'ISBN já cadastrado no sistema' });
            }
            res.status(500).json({ erro: 'Erro ao criar livro' });
        }
    }

    async listarLivros(req: Request, res: Response) {
        try {
            const livros = await livroRepository.findAll();
            res.json(livros);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao listar livros' });
        }
    }

    async buscarLivroPorId(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ erro: 'ID inválido' });
            }

            const livro = await livroRepository.findById(id);
            if (!livro) {
                return res.status(404).json({ erro: 'Livro não encontrado' });
            }

            res.json(livro);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao buscar livro' });
        }
    }

    async atualizarLivro(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ erro: 'ID inválido' });
            }

            const livroExistente = await livroRepository.findById(id);
            if (!livroExistente) {
                return res.status(404).json({ erro: 'Livro não encontrado' });
            }

            const livroAtualizado = await livroRepository.update(id, req.body);
            res.json(livroAtualizado);
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao atualizar livro' });
        }
    }

    async excluirLivro(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ erro: 'ID inválido' });
            }

            const livroExistente = await livroRepository.findById(id);
            if (!livroExistente) {
                return res.status(404).json({ erro: 'Livro não encontrado' });
            }

            await livroRepository.delete(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ erro: 'Erro ao excluir livro' });
        }
    }
}
