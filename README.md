# Setup

- Utilizar o comando npm install ou yarn depenendo do seu gerenciador de pacotes para instalar as dependencias necessarias.

- Ter o docker Instalado na maquina
- Usar o comando: docker run --name database -e POSTGRES_PASSWORD=docker -d postgres
- Para criar o container

- Se for preciso, alterar o DB_HOST dentro do aquivo .env para apontar ao banco de dados correto. Caso precise localizar o IP do container utilizar o comando: docker inspect "HASH do Container"

- Utilizar o comando: "adonis migration:run" para criar a base as tabelas e os campos necessarios.
- Utilizar o comando: "adonis serve --dev" para iniciar serviço

## Rotas para acesso de endpoints

- Rotas com o Middleware **auth** só serão acessiveis utilizando o Token

/ **Rota de controle**

/users HEAD,GET UserController.index  
/users POST UserController.store  
/users/:id HEAD,GET UserController.show  
/users/:id PUT,PATCH UserController.update  
/users/:id DELETE UserController.destroy

/session HEAD,GET SessionController.index  
/session POST SessionController.store

/cep HEAD,GET CepController.index **auth**  
/cep POST CepController.store **auth**  
/cep/:id HEAD,GET CepController.show **auth**  
/cep/:id PUT,PATCH CepController.update **auth**  
/cep/:id DELETE CepController.destroy **auth**
