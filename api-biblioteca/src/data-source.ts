import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Livro } from './entities/Livro';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: process.env.DB_DATABASE || './biblioteca.db',
    synchronize: true,
    logging: false,
    entities: [Livro],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log('Banco de dados conectado!');
    })
    .catch((error) => console.log('Erro ao conectar ao banco:', error));