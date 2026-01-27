# World Capital Quiz 🌍

Um aplicativo interativo de quiz de capitais do mundo construído com Node.js, Express e PostgreSQL.

## 📋 Descrição

World Capital Quiz é uma aplicação web que testa o conhecimento do usuário sobre as capitais dos países do mundo. O jogo apresenta o nome de um país aleatório e o usuário deve fornecer a capital correta. O aplicativo mantém uma pontuação e encerra o jogo quando o usuário erra.

## 🎯 Funcionalidades

- ✅ Quiz dinâmico com países aleatórios
- ✅ Sistema de pontuação em tempo real
- ✅ Feedback visual (✔ para acertos, ✖ para erros)
- ✅ Game Over automático ao errar
- ✅ Interface responsiva
- ✅ Dados persistidos em banco de dados PostgreSQL

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js com Express.js
- **Frontend**: EJS (Embedded JavaScript Templating)
- **Banco de Dados**: PostgreSQL
- **Dependências principais**:
  - `express` - Framework web
  - `body-parser` - Middleware para parsing de dados
  - `pg` - Client PostgreSQL
  - `ejs` - Template engine

## 📦 Instalação

### Pré-requisitos

- Node.js (v14 ou superior)
- PostgreSQL instalado e executando
- npm ou yarn

### Passos

1. **Clone ou navegue até o diretório do projeto**:
```bash
cd "World+Capital+Quiz"
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Configure o banco de dados PostgreSQL**:
   - Crie um banco de dados chamado `world`
   - Crie uma tabela `capitals` com as colunas:
     - `id` (PRIMARY KEY)
     - `country` (VARCHAR)
     - `capital` (VARCHAR)

   Exemplo SQL:
   ```sql
   CREATE TABLE capitals (
     id SERIAL PRIMARY KEY,
     country VARCHAR(100),
     capital VARCHAR(100)
   );
   ```

4. **Configure as credenciais do banco de dados**:
   - Abra `index.js`
   - Atualize as credenciais PostgreSQL se necessário:
   ```javascript
   let db = new pg.Client({
     user: "postgres",      // seu usuário
     host: "localhost",
     database: "world",
     password: "sua_senha", // sua senha
     port: 5432,
   })
   ```

5. **Inicie o servidor**:
```bash
node index.js
```

6. **Abra o navegador** e acesse:
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
World+Capital+Quiz/
├── index.js              # Arquivo principal do servidor
├── package.json          # Dependências do projeto
├── README.md             # Este arquivo
├── public/
│   ├── images/           # Imagens do projeto
│   └── styles/
│       └── main.css      # Estilos CSS
└── views/
    └── index.ejs         # Template HTML principal
```

## 🎮 Como Usar

1. Acesse a aplicação em `http://localhost:3000`
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

## 🎨 Personalização

### Styles
Modifique `public/styles/main.css` para alterar a aparência da aplicação.

### Template
Edite `views/index.ejs` para mudar o layout ou adicionar novos elementos.

## 📝 Variáveis de Ambiente (Recomendado)

Para maior segurança, use variáveis de ambiente para as credenciais do banco:

```javascript
require('dotenv').config();

let db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})
```

## 🚀 Melhorias Futuras

- [ ] Adicionar sistema de dificuldade (fácil, médio, difícil)
- [ ] Implementar ranking de jogadores
- [ ] Adicionar modo multiplayer
- [ ] Criar Dashboard com estatísticas
- [ ] Adicionar som e animações

## 📄 Licença

ISC

## 👤 Autor

Desenvolvido como projeto de aprendizado com Node.js e PostgreSQL.

---

**Divirta-se testando seu conhecimento sobre as capitais do mundo!** 🎓
