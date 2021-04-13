# Setup

- Utilizar o comando npm install ou yarn depenendo do seu gerenciador de pacotes para instalar as dependencias necessarias.

- Ter o docker Instalado na maquina
- Usar o comando: docker run --name database -e POSTGRES_PASSWORD=docker -d postgres
- Para criar o container

- Se for preciso, alterar o DB_HOST dentro do aquivo .env para apontar ao banco de dados correto. Caso precise localizar o IP do container utilizar o comando: docker inspect "HASH do Container"

- Utilizar o comando: "adonis migration:run" para criar a base as tabelas e os campos necessarios.
- Utilizar o comando: "adonis serve --dev" para iniciar serviço


## Rotas para acesso de endpoints

- Rotas com o Middleware só sao acessiveis utilizando o Token JWT

┌────────────┬───────────┬─────────────────────────┬────────────┬────────────────┬────────┐
│ Route      │ Verb(s)   │ Handler                 │ Middleware │ Name           │ Domain │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /          │ HEAD,GET  │ Closure                 │            │ /              │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /users     │ HEAD,GET  │ UserController.index    │            │ /users.index   │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /users     │ POST      │ UserController.store    │            │ /users.store   │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /users/:id │ HEAD,GET  │ UserController.show     │            │ /users.show    │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /users/:id │ PUT,PATCH │ UserController.update   │            │ /users.update  │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /users/:id │ DELETE    │ UserController.destroy  │            │ /users.destroy │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /session   │ HEAD,GET  │ SessionController.index │            │ /session       │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /session   │ POST      │ SessionController.store │            │ /session       │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /cep       │ HEAD,GET  │ CepController.index     │ auth       │ /cep.index     │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /cep       │ POST      │ CepController.store     │ auth       │ /cep.store     │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /cep/:id   │ HEAD,GET  │ CepController.show      │ auth       │ /cep.show      │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /cep/:id   │ PUT,PATCH │ CepController.update    │ auth       │ /cep.update    │        │
├────────────┼───────────┼─────────────────────────┼────────────┼────────────────┼────────┤
│ /cep/:id   │ DELETE    │ CepController.destroy   │ auth       │ /cep.destroy   │        │
└────────────┴───────────┴─────────────────────────┴────────────┴────────────────┴────────┘
