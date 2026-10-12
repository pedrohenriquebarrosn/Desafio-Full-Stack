# Desafio-Full-Stack — Diagnóstico de recuperação (12/10/2026)

Este registro é evidência do estado observado em `main` (`635cbe7d7851c96720cea656dbd369e9d62d99e8`), não uma confirmação de que se trata do projeto final Motors Shop.

## Identidade verificada

Repositório `pedrohenriquebarrosn/Desafio-Full-Stack`, contendo diretórios `back/` e `front/`. O GitHub exibe um único contribuidor reconhecido. Sem README raiz, pipeline de CI, testes de integração ou prova de deploy encontrados no estado consultado.

## O que o código implementa

- Backend Express/TypeScript, TypeORM, PostgreSQL e autenticação JWT/bcrypt. Entidades `User` e `Contact`; rotas `/users`, `/contacts` e `/login`.
- Frontend React/TypeScript/Vite; apenas rota `/` para `Login`, cujo componente atual retorna somente `<h1>Login</h1>`. `providers.tsx` e `api.ts` vazios.
- Não há no repositório inspecionado catálogo, anúncios, veículos, marcas/modelos ou fluxos de comprador/vendedor. **Não apresentar como Motors Shop ou projeto final coletivo sem confirmação externa da origem.**

## Problemas relevantes observados — exigem correção e teste

1. `back/src/app.ts` importa `reflect-metadata` e `express-async-errors`, enquanto o `back/package.json` não os declara. `data-source.ts` importa `dotenv/config`, também ausente da lista.
2. Banco TypeORM com `synchronize:false`; não foram encontrados scripts/migrations versionados no inventário. Uma instalação nova do backend não deve ser declarada pronta para operar.
3. CORS do backend usa `http://localhost:5173/` com barra final, enquanto a origem típica do Vite não tem barra final. Precisa configuração de origem válida em deploy.
4. Serviços de contatos reutilizam schemas/interfaces de usuários, incluindo semântica de password; requerem contratos próprios, propriedade `userId` derivada do token e isolamento de dados.
5. Rotas de atualização e exclusão aceitam `/:id` sem autorização inequívoca de titularidade observada. **Bloquear publicação pública de escrita até verificar e corrigir controle de acesso horizontal.**
6. `users.service.ts` usa `softRemove` para entidade sem `DeleteDateColumn` observada; caminho de exclusão potencialmente inválido.
7. Não existem telas de cadastro, dashboard e gerenciamento de contatos no frontend atual.
8. Nenhuma evidência observada de autoria em grupo, entrega final, acesso de mercado ou operação comercial.

## Rota proporcional de recuperação — sem modificar main

- Reconciliar identidade/escopo do projeto antes de rebatizá-lo ou apresentá-lo como marketplace de veículos.
- Corrigir build, dependências, migrações, autenticação/autorização e testes de backend (incluindo duas contas).
- Implementar frontend para cadastro/login e CRUD de contatos que reflita o **escopo realmente encontrado**, a menos que a fonte do projeto original em grupo seja recuperada.
- Publicar apenas em ambientes isolados e após testes; não apontar o portfólio para um deployment não verificado.
- Preservar os créditos de eventual equipe quando evidência aparecer.

**Status:** inventário técnico e branch isolada criados; código executável não reparado, testes de build/e2e ainda não realizados. **Pendência material:** confirmar se este gerenciador de contatos é de fato a entrega final que o operador procura ou se o Motors Shop está em outro repositório de equipe.
