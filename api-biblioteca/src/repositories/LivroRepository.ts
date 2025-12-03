import { AppDataSource } from '../data-source';
import { Livro } from '../entities/Livro';
import { Repository } from 'typeorm';

export class LivroRepository {
    private repository: Repository<Livro>;

    constructor() {
        this.repository = AppDataSource.getRepository(Livro);
    }

    async findAll(): Promise<Livro[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Livro | null> {
        return await this.repository.findOneBy({ id });
    }

    async create(livroData: Partial<Livro>): Promise<Livro> {
        const livro = this.repository.create(livroData);
        const savedLivro = await this.repository.save(livro);
        return savedLivro; // Retorna o livro com ID gerado pelo banco
    }

    async update(id: number, livroData: Partial<Livro>): Promise<Livro | null> {
        await this.repository.update(id, livroData);
        return await this.findById(id);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
