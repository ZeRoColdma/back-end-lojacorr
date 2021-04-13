# Setup

- Ter o docker Instalado na maquina
- Usar o comando: docker run --name database -e POSTGRES_PASSWORD=docker -d postgres
- Para criar o container

- Se for preciso, alterar o DB_HOST dentro do aquivo .env para apontar ao banco de dados correto. Caso precise localizar o IP do container utilizar o comando: docker inspect "HASH do Container"

- Utilizar o comando: "adonis migration:run" para criar a base as tabelas e os campos necessarios.
- Utilizar o comando: "adonis serve --dev" para iniciar serviço
