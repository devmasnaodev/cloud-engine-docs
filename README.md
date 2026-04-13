# Cloud Engine — Documentation

[English](./README.md) | [Português](./README.pt-BR.md)

> ⚠️ **Early-stage project:** Cloud Engine is under active development and **not ready for production use**. Use only for testing, evaluation, and controlled environments.

Documentation site for [Cloud Engine](https://github.com/devmasnaodev/cloud-engine), a platform for developers, agencies, and freelancers who need to manage WordPress engines on VPS servers (EasyEngine, WordOps, and similar) — without constant SSH access.

Built with [Docusaurus](https://docusaurus.io/).

## What is Cloud Engine?

Cloud Engine acts as a **remote management layer** that communicates with the server where your engine is running. It centralizes server provisioning, engine operations, and site lifecycle management in a unified interface — while still allowing direct SSH access at any time.

## Running the docs locally

**Prerequisites:** Node.js and npm (or Yarn).

```bash
npm start
# or
yarn start
```

Opens a browser with live reload at `http://localhost:3000`.

## Build and Serve

```bash
npm run build && npm run serve
# or
yarn build && yarn serve
```

Generates static output in the `build/` directory and serves it locally for preview.

## Deployment

Publishes the site directly to GitHub Pages from the command line.

```bash
# With SSH
USE_SSH=true yarn deploy

# Without SSH
GIT_USER=<your-github-username> yarn deploy
```