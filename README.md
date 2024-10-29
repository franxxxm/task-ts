# Task Management API

## Descrição  
Esta API foi desenvolvida para gerenciar tarefas e autenticar usuários usando **NestJS** com **JWT**. Somente usuários autenticados podem acessar e manipular tarefas. A API é responsável apenas pelo backend, pronta para ser integrada com um frontend ou aplicativo.

---

## Tecnologias Utilizadas  
- **NestJS** - Framework modular e escalável.  
- **TypeScript** - Linguagem tipada para maior produtividade.  
- **MySQL** - Banco de dados relacional.  
- **JWT** - Autenticação por token seguro.  
- **Bcrypt** - Hashing seguro de senhas.  
- **TypeORM** - ORM para interação com o banco de dados.

---

## Funcionalidades  
- **Autenticação:**  
  - Registro e login com email e senha.
  - Senhas armazenadas de forma segura com **bcrypt**.
  - Geração de token JWT ao fazer login.

- **Tarefas:**  
  - Criação, leitura, atualização e exclusão (CRUD) de tarefas.
  - Campos de cada tarefa:  
    - **ID**: string  
    - **Título**: string  
    - **Descrição**: string  
    - **Status**: string ("Pending", "Completed", etc.)  
    - **Data de Expiração**: Date  
