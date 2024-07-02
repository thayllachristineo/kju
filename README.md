# Dashboard de registros

[![Coverage Status](https://coveralls.io/repos/github/thayllachristineo/kju/badge.svg?branch=main)](https://coveralls.io/github/thayllachristineo/kju?branch=main) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/thayllachristineo/kju/.github%2Fworkflows%2Fclient-build.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/d26e51ec-c806-4f6a-aa02-b882f680a10f/deploy-status)](https://app.netlify.com/sites/kju/deploys)

> Este repositório contém a solução de teste técnico Caju para uma posição de front-end.

## Implementações

### Requisitos obrigatórios 
- [X] Tipagens com TypeScript;
- [X] Componente `<ConfirmationModal />` para confirmação de ações;
- [X] Adição da biblioteca `react-toastify` para notificar *status* de erro ou sucesso em uma *request*;
- [X] Os botões de **Aprovar** e **Reprovar** devem aparecer somente em registros com *status* de **REVIEW**.
- [X] O botão de **Revisar Novamente**  deve aparecer somente em registros com *status* de **APPROVED** ou **REPROVED**.

### Requisitos não obrigatórios
- [X] Criação de testes unitários para componentes;
- [X] Configuração de CI/CD para deploy automatizado.

### Especificações

#### Para o dashboad: 

- [X] CRUD para adição, listagem, atualização e *delete* dos registros;
- [X] Pesquisa de um registro através de um CPF válido e contido na listagem;
- [X] Filtro de cards através do *status* de registro;
- [X] `<Skeleton />` para loading de registros;
- [X] Inativação de botões enquanto uma *request* é realizada; 
- [X] Atualização de cards através de botão de atualizar;
- [X] Adição de máscara de CPF para o campo de pesquisa.


#### Para o formulário: 

- [X] Validação de campos como nome, email e CPF; 
- [X] Adição de máscara de CPF para o *input* de CPF;
- [X] Adicionar dados na API de registros e direcionar para o dashboard.

## Como rodar o projeto?
1 - Clone o projeto para a sua máquina: 

```
git clone git@github.com:thayllachristineo/kju.git
```

2 - Instale as dependências: 
```
yarn install
```

3 - Crie um arquivo `.env` similar ao `.env.example` e adicione o seguinte valor: 
```
VITE_API_BASE_URL=http://localhost:3000
```

4 - Agora, retorne ao terminal e dê start ao servidor de desenvolvimento: 
```
yarn dev
```


> Observação: Para que o *client* e o *server* rodem simultaneamente, sem a necessidade de dois terminais, foi adicionada a biblioteca `concurrently`.


## Como rodar os testes?

Foram criados testes unitários para alguns componentes. Para visualizá-los, basta rodar o comando abaixo em seu terminal: 

```
yarn  test
```


## Navegação via Netlifly

Através da url abaixo é possível visualizar e interagir com o *client* da aplicação:

[Dashboard de Registros](main--kju.netlify.app/#/dashboard)

 Porém, para que seja possível visualizar dados, é necessário rodar o *server* localmente através do seguinte comando: 
```
yarn server
```