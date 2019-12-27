# Conexao-Postgres - BACKEND

# Exemplo de criação de conexão com o BD Postgres

# O BD foi criado em um container Docker, seguindo os comandos abaixo:

# Fazer o pull da imagem do postgres
docker pull postgres

# Fazer o pull da imagem do pgAdmin4
docker pull dpage/pgadmin4

# Fazer o container postgres subir
docker run --name postgres-local -e "POSTGRES_PASSWORD=senha_acesso_postgres" -p 5432:5432 -v (colocar caminho absoluto de um diretório onde o Postgres criará arquivos de dados):/var/lib/postgresql/data -d postgres

# Fazer o container pgAdmin subir
docker run --name pgadmin -p 15432:80 --link postgres-local:postgres-local  -e "PGADMIN_DEFAULT_EMAIL=email_para_acesso_pgAdmin" -e "PGADMIN_DEFAULT_PASSWORD=senha_acesso_pgAdmin" -d dpage/pgadmin4


# Criação do BD
CREATE DATABASE nome_banco_dados
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

# Criação da tabela
CREATE TABLE colaboradores(
	colaboradores_id SERIAL UNIQUE NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	nome VARCHAR(100) NOT NULL,
	telefone VARCHAR(15),
	email VARCHAR(50),
	status SMALLINT NOT NULL,
	classificacao SMALLINT NOT NULL,
	PRIMARY KEY(colaboradores_id)
);

# Com o container do Postgres funcionando, basta realizar npm install, após fazer o git clone, e rodar o comando nodemon app.ts, na raiz do projeto;

# Referências usadas:

# https://node-postgres.com/
# https://medium.com/@renato.groffe/postgresql-docker-executando-uma-inst%C3%A2ncia-e-o-pgadmin-4-a-partir-de-containers-ad783e85b1a4
# https://stackoverflow.com/questions/3582552/postgresql-connection-url
# https://dev.to/miku86/nodejs-postgresql-how-to-connect-our-database-to-our-simple-express-server-without-an-orm-10o0


