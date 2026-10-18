# Automação Web — Cypress

Projeto de testes end-to-end (E2E) para o site [Automation Exercise](https://www.automationexercise.com/), desenvolvido em JavaScript com Cypress. Os testes cobrem fluxos de cadastro, autenticação, produtos, assinatura e compra.

Os casos de teste 02 a 16 usam Page Objects em `cypress/pages/`; o caso 01 acessa os elementos diretamente. O projeto usa `@faker-js/faker` para gerar dados de teste, principalmente endereços de e-mail.

## Casos de teste

| Caso | Cobertura | Arquivo |
| --- | --- | --- |
| 01 | Cadastro de usuário | `cypress/e2e/01_cadastrar_usuario.cy.js` |
| 02 | Login com e-mail e senha válidos | `cypress/e2e/02_login_correto.cy.js` |
| 03 | Tentativa de login com credenciais inválidas | `cypress/e2e/03_login_incorreto.cy.js` |
| 04 | Logout | `cypress/e2e/04_logout.cy.js` |
| 05 | Tentativa de cadastro com e-mail já existente | `cypress/e2e/05_cadastrar_usuario_existente.cy.js` |
| 08 | Listagem de produtos e detalhes de um produto | `cypress/e2e/08_todos_produtos.cy.js` |
| 09 | Pesquisa de produto | `cypress/e2e/09_pesquisar_produto.cy.js` |
| 10 | Inscrição na newsletter da página inicial | `cypress/e2e/10_verificar_assinatura.cy.js` |
| 15 | Realização de pedido após cadastro | `cypress/e2e/15_registrar_antes_finalizar_compra.cy.js` |
| 16 | Realização de pedido após login | `cypress/e2e/16_login_antes_finalizar_compra.cy.js` |

## Tecnologias

- [Cypress](https://www.cypress.io/) para automação E2E.
- [@faker-js/faker](https://fakerjs.dev/) para geração de dados de teste.
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) para relatórios HTML e JSON.

## Pré-requisitos

- Node.js 20 ou superior.
- npm.
- Acesso à internet para acessar o site testado.

## Instalação e execução

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/julianaoliveiramenezes-arch/automacao_web.git
cd automacao_web
npm install
```

Abra a interface interativa do Cypress:

```bash
npm run cypress:open
```

Execute os testes em modo headless:

```bash
npm run cypress:run
```

O comando `npm test` também executa `cypress run`.

## Relatórios

O Cypress está configurado para usar o Mochawesome Reporter com a pasta `cypress/reports`. Ao final da execução, o reporter gera o relatório HTML consolidado e os dados JSON nessa pasta. Em uma pasta limpa, o HTML é salvo como `cypress/reports/index.html`; execuções repetidas podem gerar arquivos HTML numerados, pois a configuração preserva os relatórios anteriores.

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── cypress-ci.yml
├── cypress/
│   ├── e2e/                 # Especificações E2E
│   ├── fixtures/            # Dados de fixture
│   ├── pages/               # Page Objects
│   ├── reports/             # Relatórios Mochawesome
│   ├── support/
│   │   ├── commands.js      # Comandos customizados do Cypress
│   │   ├── e2e.js           # Configuração global
│   │   └── testData.js      # Geração de dados para testes
│   └── downloads/
├── cypress.config.js
├── package.json
└── README.md
```

### Page Objects

- `HomePage.js`: navegação e ações da página inicial.
- `Autenticacao.js`: cadastro e login.
- `Produtos.js`: listagem, pesquisa e detalhes de produtos.
- `Carrinho.js`: ações do carrinho.
- `FinalizarCompra.js`: pagamento e confirmação do pedido.

## Integração contínua

O workflow `.github/workflows/cypress-ci.yml` está configurado para executar em `push` e `pull_request` direcionados à branch `main`. Ele configura Node.js 20, instala dependências com `npm ci` e executa o Cypress no Chrome. O reporter gera os relatórios durante a execução, e o workflow publica a pasta `cypress/reports` e as evidências como artefatos por sete dias.
