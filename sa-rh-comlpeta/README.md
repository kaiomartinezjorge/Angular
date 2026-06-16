# Plataforma RH - Vagas e Curriculos

Aplicacao Angular para uma plataforma de RH com cadastro, listagem, edicao e exclusao de vagas e curriculos. O backend e simulado com `json-server`, usando o arquivo `backend/db.json`.

## Tecnologias

- Angular 21
- TypeScript
- RxJS
- Reactive Forms e Template-driven Forms
- json-server
- SCSS

## Funcionalidades

### Vagas

- Listagem de vagas disponiveis.
- Painel administrativo para cadastrar vagas.
- Edicao de vagas cadastradas.
- Exclusao de vagas cadastradas.
- Dados persistidos no `json-server`.

### Curriculos

- Cadastro de curriculo com:
  - usuarioId
  - nome
  - email
  - telefone
  - cargo desejado
  - foto
  - descricao profissional
  - formacao
  - experiencia
  - habilidades
  - LinkedIn
  - pretensao salarial
- Edicao de curriculo existente.
- Visualizacao do proprio curriculo em `/meu-curriculo`.
- Listagem simulada de candidatos para empresas em `/curriculos`.
- Tela de detalhes de curriculo.
- Exclusao de curriculos.

## Estrutura Principal

```text
backend/
  db.json

src/app/
  model/
    curriculo.model.ts
    vaga.model.ts

  service/
    apiservice.ts

  view/
    curriculos/
      curriculo-form/
      curriculo-list/
      curriculo-detail/
    fragmentos/
      header/
      footer/
    home/
    painel-vagas/
    vagas/
```

## Rotas

| Rota | Funcao |
| --- | --- |
| `/` | Tela inicial |
| `/vagas` | Lista de vagas |
| `/painel-vagas` | CRUD de vagas |
| `/meu-curriculo` | Curriculo do usuario simulado |
| `/curriculos` | Lista de curriculos para empresas |
| `/curriculos/novo` | Cadastro de curriculo |
| `/curriculos/editar/:id` | Edicao de curriculo |
| `/curriculos/:id` | Detalhes de curriculo |

## Como Rodar

Instale as dependencias:

```powershell
npm install
```

### Rodar tudo com um comando

No Windows, use:

```powershell
npm run dev
```

Esse comando abre dois terminais: um para o Angular e outro para o `json-server`.


## Importante

Os botoes de cadastrar, atualizar, excluir e listar dados dependem do `json-server`.

Se o backend nao estiver rodando, a aplicacao pode mostrar mensagens como:

```text
Nao foi possivel listar/cadastrar/atualizar. Verifique se o json-server esta rodando.
```

## Endpoints do Backend

Com o `json-server` rodando:

```text
http://localhost:3020/vagas
http://localhost:3020/curriculos
```

Exemplo de filtro por usuario:

```text
http://localhost:3020/curriculos?usuarioId=1
```

## Scripts

```powershell
npm start
```

Inicia o Angular.

```powershell
npm run server
```

Inicia o `json-server` usando `backend/db.json`.

```powershell
npm run dev
```

Inicia Angular e `json-server` em dois terminais.

```powershell
npm run build
```

Gera a build do projeto.

```powershell
npm test -- --watch=false
```

Executa os testes uma vez.

## Validacao

Antes de entregar ou testar manualmente, rode:

```powershell
npm run build
npm test -- --watch=false
```

Resultado esperado:

```text
Build concluido sem erros.
Testes passando.
```

## Observacoes de Desenvolvimento

- O servico HTTP principal esta em `src/app/service/apiservice.ts`.
- O antigo caminho `src/app/core/services/curriculo.service.ts` nao e mais usado.
- O usuario logado e simulado com `usuarioId = 1`.
- Os dados iniciais ficam em `backend/db.json`.
