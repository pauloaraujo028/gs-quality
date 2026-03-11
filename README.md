<div align="center">
  <h1 align="center" style="color: #8063f3; font-size: 50px;">GS Calendar 📅</h1>
</div>

<p align="center">
  <em>Reserva inteligente de salas de reunião — elimine conflitos de agendamento na sua empresa.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/pauloaraujo028/gs-calendar?style=default&logo=git&logoColor=white&color=8063f3" alt="last-commit">
  <img src="https://img.shields.io/github/languages/top/pauloaraujo028/gs-calendar?style=default&color=8063f3" alt="repo-top-language">
  <img src="https://img.shields.io/github/languages/count/pauloaraujo028/gs-calendar?style=default&color=8063f3" alt="repo-language-count">
</p>

<div align="center">
  <h3 align="center">
    <br />
    <a href="https://gs-calendar.vercel.app/" target="_blank">🌐 Ver Online</a>
    ·
    <a href="https://github.com/pauloaraujo028/gs-calendar/issues/new" target="_blank">🐛 Relatar Bug</a>
  </h3>
</div>

<br>

## O Problema que Resolve

Em ambientes corporativos, a falta de um sistema centralizado para reserva de salas gera conflitos frequentes — duas equipes marcando a mesma sala no mesmo horário, reuniões canceladas de última hora e perda de produtividade.

O **GS Calendar** nasceu para resolver esse problema. Com ele, qualquer colaborador pode reservar uma sala de reunião e visualizar em tempo real quais horários e salas já estão ocupados. Chega de double booking, chega de surpresas na porta da sala.

## Índice

- [O Problema que Resolve](#o-problema-que-resolve)
- [Índice](#índice)
- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológica](#stack-tecnológica)
- [Construído com](#construído-com)
- [Testes](#testes)
  - [Executar os testes](#executar-os-testes)
  - [O que é testado](#o-que-é-testado)
- [Começando](#começando)
  - [Pré-requisito](#pré-requisito)
  - [Instalação](#instalação)
  - [Uso](#uso)
- [Contribuição](#contribuição)
- [Contato](#contato)

## Sobre o Projeto

O **GS Calendar** é um sistema de reserva de salas de reunião desenvolvido para resolver um problema real: a desorganização de horários em ambientes corporativos.

A solução oferece uma interface moderna e intuitiva onde os colaboradores conseguem verificar a disponibilidade das salas em tempo real, fazer reservas com poucos cliques e garantir que o restante da equipe já visualize imediatamente o horário como ocupado. Sem planilhas compartilhadas, sem grupos de WhatsApp, sem conflitos.

 <div style="border: 2px solid #8063f3; padding: 10px; border-radius: 10px;">
  <img width="100%" alt="gs-calendar-preview" src="https://github.com/user-attachments/assets/fccafe53-6f75-4f9d-b055-278981e44e89" />
 </div>

## Funcionalidades

**Reserva de Salas**

- [x] Reserva de salas por data, horário de início e fim
- [x] Visualização de disponibilidade em tempo real
- [x] Prevenção automática de conflitos de agendamento
- [x] Criação, edição e cancelamento de reservas

**Calendário & Visualização**

- [x] Visualização mensal, semanal e diária
- [x] Categorização de compromissos
- [x] Interface responsiva para desktop e mobile

**Autenticação & Segurança**

- [x] Cadastro e login seguro de usuários
- [x] Proteção de rotas e sessões autenticadas

**Qualidade & Testes**

- [x] Testes unitários com Jest
- [x] Conversão e validação de horários (`timeToMinutes`, `isValidTimeRange`)
- [x] Detecção de conflitos de reserva (`checkTimeConflict`)
- [x] Geração de slots e opções de horário (`generateTimeSlots`, `getTimeOptions`)
- [x] Formatação de datas em pt-BR (`formatDate`)

## Stack Tecnológica

| Tecnologia                                          | Descrição                                                          |
| --------------------------------------------------- | ------------------------------------------------------------------ |
| **[Next.js](https://nextjs.org/)**                  | Framework React com SSR/SSG e otimizações avançadas de performance |
| **[Better Auth](https://www.better-auth.com/)**     | Autenticação completa e segura para aplicações modernas            |
| **[Prisma](https://www.prisma.io/)**                | ORM robusto para consultas rápidas e intuitivas ao banco de dados  |
| **[Tailwind CSS](https://tailwindcss.com/)**        | Framework CSS utilitário para layouts responsivos e customizáveis  |
| **[Shadcn/ui](https://ui.shadcn.com/)**             | Componentes pré-construídos e acessíveis baseados em Tailwind      |
| **[React Hook Form](https://react-hook-form.com/)** | Gerenciamento de formulários performático e flexível               |
| **[Zod](https://zod.dev/)**                         | Validação de esquemas TypeScript-first                             |
| **[Jest](https://jestjs.io/)**                      | Framework de testes unitários em JavaScript/TypeScript             |

## Construído com

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- ![Shadcn](https://img.shields.io/badge/shadcn/ui-black?style=for-the-badge&logo=&logoColor=white)
- ![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## Testes

O projeto utiliza **[Jest](https://jestjs.io/)** para garantir a confiabilidade das funcionalidades principais.

### Executar os testes

```sh
# Rodar todos os testes
npm run test
  # ou
pnpm run test

# Rodar em modo watch (reexecuta ao salvar)
npm run test:watch
  # ou
pnpm run test:watch

# Gerar relatório de cobertura
npm run test:coverage
  # ou
pnpm run test:coverage
```

### O que é testado

Todos os testes estão em `reservation-utils.test.ts` e cobrem as funções utilitárias do arquivo `lib/reservation-utils.ts`:

| Função              | Casos de teste                                                        |
| ------------------- | --------------------------------------------------------------------- |
| `timeToMinutes`     | Conversão de string `HH:MM` para minutos totais                       |
| `isValidTimeRange`  | Valida faixa mínima de 30min, horário mínimo 07:00 e ordem início/fim |
| `getTimeOptions`    | Geração da lista de opções de horário (inclui 07:00 até 17:00+)       |
| `formatDate`        | Formatação de datas no padrão pt-BR (`dd/mm/aaaa`)                    |
| `checkTimeConflict` | Detecção de sobreposição de reservas por sala e data                  |
| `generateTimeSlots` | Geração de slots de 30 em 30 minutos a partir de 07:00                |

## Começando

### Pré-requisito

Antes de começar a usar o projeto, certifique-se de que seu ambiente de execução atenda aos seguintes requisitos:

- **Node.js** (versão 18 ou superior)
  - Baixe e instale o Node.js em **[nodejs.org](https://nodejs.org/)**.
- **Git** (para clonar o repositório)
  - Baixe e instale o Git em **[git-scm.com](https://git-scm.com/)**.
- **Banco de Dados Relacional** (como PostgreSQL, MySQL ou SQLite)
  - Recomenda-se o uso do PostgreSQL.
  - Para SQLite, não é necessário configurar um servidor de banco de dados.
- **Gerenciador de Pacotes**
  - npm (já incluído no Node.js)
  - pnpm (opcional, pode ser instalado com `npm install -g pnpm@latest-10`)

### Instalação

Instale o projeto seguindo estas etapas:

**1. Clone o repositório:**

```sh
  git clone https://github.com/pauloaraujo028/gs-calendar
  cd gs-calendar
```

**2. Instale as dependências:**

```sh
  npm install
    # ou
  pnpm install
```

**3. Configure as variáveis de ambiente:**

- Crie um arquivo `.env` na raiz do projeto.
  - Copie as variáveis de ambiente do arquivo `.env.example` para o arquivo `.env`.
  - Edite o `.env` com suas configurações (DATABASE_URL, BETTER_AUTH_SECRET, etc.).

**4. Configure o banco de dados com Prisma:**

```sh
  npx prisma generate
  npx prisma migrate dev
    # ou
  pnpm dlx prisma generate
  pnpm dlx prisma migrate dev
```

### Uso

Inicie o servidor de desenvolvimento:

```sh
  npm run dev
    # ou
  pnpm run dev
```

- Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Contribuição

Contribuições são bem-vindas! Veja como participar:

- **💬 [Discussões](https://github.com/pauloaraujo028/gs-calendar/discussions)** — Compartilhe ideias e feedback
- **🐛 [Issues](https://github.com/pauloaraujo028/gs-calendar/issues)** — Reporte bugs ou solicite novas funcionalidades
- **💡 [Pull Requests](https://github.com/pauloaraujo028/gs-calendar/blob/main/CONTRIBUTING.md)** — Envie melhorias diretamente

<details open>
<summary>Passo a passo para contribuir</summary>

1. **Faça o Fork do Repositório**: Comece fazendo o fork do repositório do projeto para sua conta do github.
2. **Clonar Localmente**: Clone o repositório em sua máquina local usando um cliente git.
   ```sh
   git clone https://github.com/pauloaraujo028/nextjs-builder
   ```
3. **Criar uma Nova Branch**: Sempre trabalhe em um novo branch, dando-lhe um nome descritivo.
   ```sh
   git checkout -b novo recurso-x
   ```
4. **Faça suas alterações**: desenvolva e teste suas alterações localmente.
5. **Faça commit de suas Alterações**: Confirme com uma mensagem clara descrevendo suas atualizações.
   ```sh
   git commit -m 'Novo recurso implementado x.'
   ```
6. **Envie para o Github**: Envie as alterações para seu repositório.
   ```sh
   git push origin novo recurso-x
   ```
7. **Enviar um Pull Request**: Crie um PR no repositório original do projeto. Descreva claramente as mudanças e suas motivações.
8. **Revisão**: Depois que seu PR for revisado e aprovado, ele será incorporado ao ramo principal. Parabéns pela sua contribuição!
</details>

<details open>
<summary>Gráfico do Contribuidor</summary>
<br>
<p align="left">
   <a href="https://github.com{/pauloaraujo028/gs-calendar/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=pauloaraujo028/gs-calendar">
   </a>
</p>
</details>

## Contato

**Paulo Araújo Dev**

[![Portfolio](https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=firefox&logoColor=#FF7139)](https://pauloaraujo-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pauloaraujo028/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/pauloaraujo028)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:pauloaraujo.phz@gmail.com)
