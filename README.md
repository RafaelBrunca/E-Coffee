# E-coffee

<h2>Projeto e-commerce Full-Stack</h2>

# 1) Sobre o projeto

Este projeto foi desenvolvido como projeto integrador do curso de Desenvolvimento Web Full Stack, e tabmém para demonstrar minhas habilidades na criação de aplicações web.

# 2) Tecnologias utilizadas

- Node.js;
- Express.js;
- Sequelize;
- MySQL;

# 3) Dependências utilizadas

| Nome              | Informações                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------|
| Express-generator | Utilizado para a criação básica do projeto em Express.                                                                        |
| Nodemon           | Utilizado para reiniciar o servidor automaticamente para cada alteração nos arquivos em Javascript.                           |
| Bcrypt            | Utilizado para encriptar as senhas do usuário, garantindo a sua segurança do lado do servidor.                                |
| Sequelize         | Utilizado para a criação das models, e garantir a comunicação entre o servidor e o banco de dados (MySQL).                    |
| MySQL2            | Utilizado para que o Sequelize receba e utilize as Queries do MySQL.                                                          |
| Express-session   | Utilizado para gerenciar a criação e destruição das sessões dos usuários logados.                                             |
| Express-validator | Utilizado para efetuar a validação de campos do lado do servidor.                                                             |
| cpf               | Utilizado para validação de Cpf                                                                                               |
| moment            | Utilizado para gerenciamento de data e hora                                                                                   |
| multer            | Utilizado para efetuar upload de arquivos.                                                                                    |
| ejs               | Utilizado para transportar dados do back-end para o front-end.                                                                |

# 4) Como executar o projeto

- Clone a pasta do projeto ou efetue o download em zip.
- Instale as dependências do npm com `npm install`
- Entre em `database/config/config.js` e atualize as informações de `username` e `password` que foram configuradas na instalação do MySQL em sua máquina.
- O Sequelize está configurado para criar toda a modelagem do MySQL automaticamente dentro do MySQL (observe que é necessário configurar o passo acima corretamente para que isso ocorra sem erros). Utilize os comandos `npx sequelize db:create` e `npx sequelize db:migrate` para criar o banco de dados e as suas respectivas models.
- Abra o terminal e execute o comando `nodemon` para iniciar o projeto.
- O projeto está configurado para abrir na porta 3000. Após iniciar o projeto, entre em `localhost:3000` em seu navegador para visualizar o projeto rodando localmente.

## Observações importantes

Para que seja possível rodar a aplicação sem nenhum problema, é imprescindível a instalação do Node.js, NPM e suas dependências e o MySQL na máquina que irá rodar a aplicação. Também é necessário verificar nas configurações se o MySQL está rodando com os mesmos parâmetros configurados em `database/config/config.js`.

