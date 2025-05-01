# Projeto Boilerplate

Um projeto Node.js com suporte a TypeScript para iniciar rapidamente servidores e gerar builds otimizadas com `tsup`.

## 📦 Sobre o Projeto

Este projeto foi estruturado com foco em desenvolvimento moderno usando TypeScript, ferramentas de build rápidas (`tsup`) e execução prática com `tsx`.

## 🚀 Scripts Disponíveis

Você pode usar os seguintes scripts no terminal com `npm run <script>`:

- `start:dev`: Inicia o servidor em modo de desenvolvimento.
- `start:watch`: Inicia o servidor em modo de desenvolvimento com *watch mode* (reinicia ao salvar).
- `dist`: Gera a build de produção usando `tsup`.
- `start:dist`: Gera a build e executa a versão compilada.

## 📁 Estrutura Esperada

src/
├── server.ts
└── index.ts


> Certifique-se de que o código fonte está dentro da pasta `src/`.

## 🧰 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [tsup](https://tsup.egoist.dev/)
- [tsx](https://github.com/esbuild-kit/tsx)
- Node.js

## 📦 Instalação

```bash
npm install
