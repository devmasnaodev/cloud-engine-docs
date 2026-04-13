# Cloud Engine — Documentação

[English](./README.md) | [Português](./README.pt-BR.md)

> ⚠️ **Projeto em fase inicial:** O Cloud Engine está em desenvolvimento ativo e **não está pronto para uso em produção**. Utilize apenas para testes, avaliação e ambientes controlados.

Site de documentação do [Cloud Engine](https://github.com/devmasnaodev/cloud-engine), uma plataforma para desenvolvedores, agências e freelancers que precisam gerenciar engines WordPress em servidores VPS (EasyEngine, WordOps e similares) — sem a necessidade de acesso constante via SSH.

Construído com [Docusaurus](https://docusaurus.io/).

## O que é o Cloud Engine?

O Cloud Engine funciona como uma **camada de gerenciamento remoto** que se comunica com o servidor onde sua engine está em execução. Ele centraliza o provisionamento de servidores, operações de engine e o ciclo de vida dos sites em uma interface unificada — sem abrir mão do acesso direto via SSH a qualquer momento.

## Rodando a documentação localmente

**Pré-requisitos:** Node.js e npm (ou Yarn).

```bash
npm start
# ou
yarn start
```

Abre o navegador com live reload em `http://localhost:3000`.

## Build e Visualização

```bash
npm run build && npm run serve
# ou
yarn build && yarn serve
```

Gera a saída estática no diretório `build/` e a serve localmente para visualização.

## Deploy

Publica o site diretamente no GitHub Pages pela linha de comando.

```bash
# Com SSH
USE_SSH=true yarn deploy

# Sem SSH
GIT_USER=<seu-usuario-github> yarn deploy
```