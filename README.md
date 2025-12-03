# 📝API Biblioteca - CRUD Livros
API RESTful para gerenciamento de livros.

# Instalação
npm install

npm run dev

# Comandos Úteis
npm run dev - Inicia servidor

npm run build - Compila TypeScript

npm start - Inicia servidor compilado

Banco de dados:

sqlite3 biblioteca.db - Acessa banco SQLite

# Endpoints
GET / - Documentação

GET /api/livros - Lista livros

GET /api/livros/:id - Busca livro

POST /api/livros - Cria livro

PUT /api/livros/:id - Atualiza livro

DELETE /api/livros/:id - Exclui livro

# Exemplo de Uso
Criar livro

curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "isbn": "1234567890",
    "anoPublicacao": 1899
  }'

# Listar livros
curl http://localhost:3000/api/livros

# Estrutura
Controller: Lógica de negócio

Repository: Acesso a dados

Entidade: Modelo Livro

# Tecnologias
Node.js + TypeScript

Express

TypeORM

SQLite

# Observação sobre o Banco de Dados SQLite
Este projeto utiliza SQLite como banco de dados relacional, o que é plenamente adequado aos requisitos do exercício:

## Conformidade com os Requisitos:
1. **"Utilize um banco de dados relacional"** 
   - SQLite é um sistema de gerenciamento de banco de dados relacional (RDBMS)
   - Suporta SQL completo, transações ACID, chaves estrangeiras

2. **"ORM (TypeORM para TypeScript)"**
   - TypeORM está configurado e funcionando com SQLite
   - Mapeamento objeto-relacional completo

3. **Persistência de dados**
   - Dados são persistidos no arquivo `biblioteca.db`
   - CRUD completo implementado e testado

## Vantagens para o Exercício:
- Fácil execução (sem necessidade de servidor externo)
- Portátil (arquivo único .db)
- Atende todos os requisitos funcionais

O SQLite foi escolhido por sua simplicidade e por atender todos os requisitos do exercício, sendo uma opção válida para "banco de dados relacional".
