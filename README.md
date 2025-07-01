# 🎧 API Podcast Manager

API em Node.js com TypeScript para gerenciamento de podcasts em vídeo, utilizando o módulo nativo `http` sem frameworks externos.

---

### 📌 Descrição

Esta API permite listar episódios de podcasts organizados por categorias e realizar filtros por nome. Ideal para integrar com aplicativos mobile ou dashboards web.

---

### 🛠️ Stacks e Tecnologias

- [Node.js (HTTP Module)](https://nodejs.org/docs/latest/api/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tsup (build)](https://tsup.egoist.dev/)
- [TSX (dev runner)](https://www.npmjs.com/package/tsx)
- [Dotenv (variáveis de ambiente)](https://www.npmjs.com/package/dotenv)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
- [Gitflow](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04)
- [Insomnia (testes de API)](https://insomnia.rest/)

---

### 🚀 Features

- ✅ Listar episódios de podcasts por categoria (ex: saúde, fitness, humor, mentalidade)
- 🔍 Filtrar episódios por nome do podcast
- 📦 Estrutura modularizada com Controllers, Services e Models

---

### 📁 Estrutura de Pastas
```
src/
│
├── controllers/
│   └── podcasts-controller.ts
├── services/
│   ├── list-episodes-services.ts
│   └── filter-episodes-services.ts
├── models/
│   ├── podcast-model.ts
│   └── filter-podcast-model.ts
├── utils/
│   ├── http-method.ts
│   └── content-type.ts
├── routes.ts
├── app.ts
└── server.ts
```

### 🔗 Rotas da API

| Método | Rota                   | Descrição                             |
|--------|------------------------|----------------------------------------|
| GET    | `/api/episodes`        | Lista todos os episódios               |
| GET    | `/api/episodes?p=flow` | Filtra episódios por nome do podcast   |

---

### ▶️ Como utilizar

1. **Clone o repositório**
```
git clone https://github.com/seu-usuario/api-podcast-manager.git
cd api-podcast-manager
```
2. Instale as dependências
```
npm install
```
3. Execute em ambiente de desenvolvimento
```
npm run dev
```
A API será executada em http://localhost:3000 (ou a porta definida no seu server.ts)

### ⚙️ Scripts disponíveis

| Comando         | Descrição                               |
| --------------- | --------------------------------------- |
| `npm run dev`   | Inicia a API com `tsx` (modo dev)       |
| `npm run watch` | Executa em modo observação com TSX      |
| `npm run dist`  | Compila os arquivos com `tsup`          |
| `npm start`     | Compila e executa o projeto em produção |

### 🔍 Exemplo de Requisições
- Listar todos os episódios
```
GET http://localhost:3000/api/episodes
```
- Filtrar episódios por nome
```
GET http://localhost:3000/api/episodes?p=flow
```
### 🧪 Testes
Você pode utilizar ferramentas como Insomnia ou Postman para testar as rotas da API.