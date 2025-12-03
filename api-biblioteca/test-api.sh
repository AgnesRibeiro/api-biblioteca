#!/bin/bash

echo "=== TESTE DE VALIDAÇÕES DA API ==="

echo -e "\n1. ISBN DUPLICADO (deve falhar):"
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Livro Duplicado","autor":"Teste","isbn":"A001","anoPublicacao":2023}'

echo -e "\n\n2. SEM TÍTULO (deve falhar):"
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{"autor":"Autor","isbn":"TEST1","anoPublicacao":2023}'

echo -e "\n\n3. SEM AUTOR (deve falhar):"
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Título","isbn":"TEST2","anoPublicacao":2023}'

echo -e "\n\n4. SEM ISBN (deve falhar):"
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Título","autor":"Autor","anoPublicacao":2023}'

echo -e "\n\n5. SEM ANO (deve falhar):"
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Título","autor":"Autor","isbn":"TEST3"}'

echo -e "\n\n6. ATUALIZAR LIVRO INEXISTENTE (deve falhar):"
curl -X PUT http://localhost:3000/api/livros/999 \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Não existe"}'

echo -e "\n\n7. EXCLUIR LIVRO INEXISTENTE (deve falhar):"
curl -X DELETE http://localhost:3000/api/livros/999

echo -e "\n\n8. BUSCAR COM ID INVÁLIDO (deve falhar):"
curl http://localhost:3000/api/livros/abc

echo -e "\n\n9. CRIAR LIVRO VÁLIDO (deve funcionar):"
curl -X POST http://localhost:3000/api/livros \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Livro Válido","autor":"Autor Válido","isbn":"VALID123","anoPublicacao":2023}'

echo -e "\n\n10. LISTAR TODOS (final):"
curl http://localhost:3000/api/livros

