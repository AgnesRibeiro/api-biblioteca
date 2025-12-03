import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('livros')
export class Livro {
    @PrimaryGeneratedColumn()
    id!: number;  

    @Column({ length: 200 })
    titulo: string = '';

    @Column({ length: 100 })
    autor: string = '';

    @Column({ length: 20, unique: true })
    isbn: string = '';

    @Column({ name: 'ano_publicacao' })
    anoPublicacao: number = 0;

    @Column({ default: true })
    disponivel: boolean = true;
}
