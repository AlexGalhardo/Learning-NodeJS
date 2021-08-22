# Youtube Masterclass Knex.js

Video: https://youtu.be/U7GjS3FuSkA

Doc: https://www.notion.so/Masterclass-Knex-45d9705a634a4c2b80ac1599585163a6

---

## 👀 Pra quem é destinado essa Masterclass?

Iniciantes que conhecem o básico de SQL, Javascript, Node.js, Express e HTTP

Não querem mais escrever SQL na unha

Querem dar o próximo passo no conhecimento, criação e manutenção de banco de dados.

## ❓ O que, pra que e por que?

- Query Builder
- Construtor de queries SQL com Javascript
- Callback style or Promise style
- Multiplas plataformas (PostgreSQL, MySQL, SQLite3...)
- Agilidade
- Ajuda em todos os cenários? Não , mas ainda assim você pode escrever raw queries
- SQL Raw pode ser perigoso se não for feito com cuidado, pode ser feio, e de difícil manutenção
- Knex vs SQL Raw

```sql
knex('users').where('id', 1)

select * from `users` where `id` = 1
```

## 👟 Praticar

Vamos criar uma API que irá ter CRUD de usuários e projetos desses usuários.

**O que preciso para começar?** 

- Nodejs
- PostgreSQL
- VSCode
- Insomnia ou Postman

- [x]  Revisar um pouco de SQL
- [x]  Create Table
- [x]  Instalar: `npm i knex pg express nodemon`
- [x]  Create and Config ./knexfile.js with `npx knex init`
- [x]  Create and Config ./src/database/index.js
- [x]  Log in to local postgres: `psql -U postgres`
- [x]  Create user migration  `npx knex migrate:make migration_name`
- [x]  Create user seed  `npx knex seed:make seed_name`
- [x]  Run Migration and Seeds `migrate:latest` `seed:run`
- [x]  Usando o Knex
- [x]  Select
- [x]  Insert
- [x]  Update
- [x]  Delete
- [x]  Add error handling
- [x]  Separar Rotas e criar controllers
- [x]  Create projects table (Relacionamento com users)
- [x]  Criar migration e seed
- [x]  Join User Projects
- [x]  Paginação de Projetos
- [x]  Soft Delete (user)
- [x]  Procedures & Triggers (updated_at)

## 💧 Code/Drops

```sql
-- create database
CREATE DATABASE knex_test;

-- create table
CREATE TABLE users (
	id serial unique,
	name text not null
);

-- select all users
SELECT * FROM users;

-- add user
INSERT INTO users (name) values ('Mayk');

-- update user
UPDATE users SET name = 'Maykão' WHERE id = '1';

-- delete user
DELETE FROM users WHERE id = '1';

-- create table
CREATE TABLE projects (
	id serial unique,
	user_id integer references users(id),
	title text not null
);

-- select all projects
SELECT * FROM projects;

-- add project to user
INSERT INTO projects (user_id, title) values ('1', 'Meu Projeto');

-- relation user with project
SELECT projects.*, users.name 
FROM projects
JOIN users ON projects.user_id = users.id;

-- drop
DROP TABLE users;
DROP TABLE projects;
DROP DATABASE knex_test;
```

## 🚀 Próximos passos ?

- ⛰ Desafio: Criar o restante do CRUD dos Projects
- 👓 Conhecer e estudar uma ORM como o Sequelize 
[https://www.youtube.com/watch?v=Fbu7z5dXcRs](https://www.youtube.com/watch?v=Fbu7z5dXcRs)

## 🔗 Referências

[http://knexjs.org](http://knexjs.org/#Migrations)

[https://devhints.io/knex](https://devhints.io/knex)

[https://github.com/robmclarty/knex-express-project-sample](https://github.com/robmclarty/knex-express-project-sample)

[https://www.postgresqltutorial.com/psql-commands](https://www.postgresqltutorial.com/psql-commands/)

[https://www.postgresql.org/docs/12/sql-createtrigger.html](https://www.postgresql.org/docs/12/sql-createtrigger.html)

[https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger/48028011#48028011](https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger/48028011#48028011)

[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

[https://www.postman.com/](https://www.postman.com/)

[https://insomnia.rest/](https://insomnia.rest/)

[https://code.visualstudio.com/](https://code.visualstudio.com/)

[https://www.postgresql.org/download/](https://www.postgresql.org/download/)

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
