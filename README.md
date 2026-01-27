# Capital Quiz 🌍

Um aplicativo interativo de quiz de capitais do mundo construído com Node.js, Express e PostgreSQL.

Disponivel em: https://quiz-capitais.onrender.com

## 📋 Descrição

World Capital Quiz é uma aplicação web que testa o conhecimento do usuário sobre as capitais dos países do mundo. O jogo apresenta o nome de um país aleatório e o usuário deve fornecer a capital correta. O aplicativo mantém uma pontuação e encerra o jogo quando o usuário erra.

## Funcionalidades

-  Quiz dinâmico com países aleatórios
-  Sistema de pontuação em tempo real
-  Game Over automático ao errar
-  Interface responsiva
-  Dados persistidos em banco de dados PostgreSQL

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js com Express.js
- **Frontend**: EJS (Embedded JavaScript Templating)
- **Banco de Dados**: PostgreSQL
- **Dependências principais**:
  - `express` - Framework web
  - `pg` - Client PostgreSQL
  - `ejs` - Template engine

## 🎮 Como Usar

2. O primeiro país será exibido aleatoriamente
3. Digite a capital correta no campo de entrada
4. Clique em "Enviar" para verificar sua resposta
5. Se correto, a pontuação aumenta e um novo país é apresentado
6. Se incorreto, o jogo termina e você pode reiniciar

## 🔧 Endpoints da API

### GET `/`
- Inicia uma nova sessão de quiz
- Reseta a pontuação para 0
- Retorna a primeira pergunta

### POST `/submit`
- Processa a resposta do usuário
- Verifica se a resposta está correta
- Retorna a próxima pergunta com a pontuação atualizada

## 👤 Autor

Desenvolvido como projeto de aprendizado com Node.js e PostgreSQL.

---
