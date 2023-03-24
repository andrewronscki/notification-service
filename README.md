
<h1 align="center">
     📨 <a href="#" alt="site do places"> Notification Service</a>
</h1>

<h3 align="center">
    🔊 Seu serviço de notificação por SMS, Email, WhatsApp, Telegram, Voz. 💚
</h3>

<div align="center">
<p align="center">
<a><img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/andrewronscki/notification-service"></a>
<a href='https://coveralls.io/github/andrewronscki/notification-service?branch=main'><img src='https://coveralls.io/repos/github/andrewronscki/notification-service/badge.svg?branch=main' alt='Coverage Status' /></a>
<a><img alt="GitHub" src="https://img.shields.io/github/license/andrewronscki/notification-service"></a>
<a><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andrewronscki/notification-service"></a>
<a><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/andrewronscki/notification-service"></a>
<a><img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/andrewronscki/notification-service"></a>
</p>
</div>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#%EF%B8%8F-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#-rodando-o-backend-servidor)
   * [Tecnologias](#-tecnologias)
     * [Server](#server--nestjs)
   * [Estrutura do Projeto](#-estrutura-do-projeto)
   * [Autor](#-autor)
   * [Licença](#-licença)
<!--te-->


## 💻 Sobre o projeto

 📨 Notification Service - é um serviço de notificação que pode ser utilizado para enviar SMS, Email, mensagem no WhatsApp, no Telegram e também notificar por voz.


É uma API rest que possui endpoints possibilitando fazer a notificação por diversas formas.

Swagger da aplicação disponível em: [https://notification-service-u4ts.onrender.com/docs](https://notification-service-u4ts.onrender.com/docs)

<div align="center">
  <img alt="Swagger Notification Service" src="./swagger.png">
</div>

---

## ⚙️ Funcionalidades

- [x] Notification:
  - [x] SMS
  - [ ] Email
  - [ ] WhatsApp
  - [ ] Telegram
  - [ ] Voz

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [NestJS](https://nestjs.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:andrewronscki/notification-service.git

# Acesse a pasta do projeto no terminal/cmd
$ cd notification-service

# Instale as dependências
$ npm install

# Crie um arquivo .env com o conteúdo do .env.example
$ cp .env .env.example

# Faça as alterações no arquivo .env caso tenha necessidade

# Execute a aplicação
$ npm run start:dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000/docs

```
<p align="center">
  <a href="https://github.com/andrewronscki/notification-service/blob/main/insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/andrewronscki/places-serverside)**Server** ([NestJS](https://nodejs.org/en/))
-   **[Typescript](https://www.typescriptlang.org/)**
-   **[Jest](https://jestjs.io/pt-BR/)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[aws-sdk](https://www.npmjs.com/package/aws-sdk)**

> Veja o arquivo  [package.json](https://github.com/andrewronscki/notification-service/blob/main/package.json)

---

## 🛠 Estrutura do Projeto
A estrutura do projeto segue este modelo:
- O sistema deve ser desenvolvido utilizando os ensinamentos do Clean Architecture e Domain-Driven Design, separando as camadas em domain, data, infra e presentation;
- O sistema deve ser agrupado por módulos independentes;
- O desenvolvimento dos casos de uso deve ser orientado a testes (TDD).

<div align="center">
  <img alt="Arquitetura da Api" src="https://teste-andrewronscki.s3.amazonaws.com/archtecture.png">
</div>

---

## 🦸 Autor

<a href="https://andrewronscki.com" style="margin: 0px; padding:0;">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/32884775?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>André Wronscki Ricardo</b></sub></a> <a href="https://andrewronscki.com" title="André Wronscki">🚀<p><sub>Tech Lead na 4all</sub></p></a>
 <br />
 <br />


[![Linkedin Badge](https://img.shields.io/badge/-André-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andr%C3%A9-wronscki-ricardo-13694bb7/)](https://www.linkedin.com/in/andr%C3%A9-wronscki-ricardo-13694bb7/)
[![Gmail Badge](https://img.shields.io/badge/-andrewronscki@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:andrewronscki@gmail.com)](mailto:andrewronscki@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE.md).
