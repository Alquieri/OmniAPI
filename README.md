
# 🌌 OmniAPI 

Bem-vindo à **OmniAPI**!  
Este projeto é uma API REST feita em **C#** com **ASP.NET Core** e **Entity Framework Core**, inspirada no universo de **Ben 10**.  
Aqui você pode explorar, cadastrar, atualizar e deletar informações dos mais diversos **aliens** do Omnitrix!

---

## 🚀 Tecnologias Utilizadas

- C# (.NET 7 ou superior)
- ASP.NET Core Web API
- Entity Framework Core
- Banco de Dados (MySQL)
- Swagger
- Nextjs

---

## 📚 Funcionalidades

- **[GET]** Listar todos os aliens
- **[GET]** Buscar alien por ID
- **[POST]** Adicionar novo alien
- **[PUT]** Atualizar dados de um alien
- **[DELETE]** Remover alien do banco de dados

---

## 🛸 Estrutura Básica

```bash
OmniAPI/
├── Controllers/
│   └── AliensController.cs
├── Models/
│   └── Alien.cs
├── Data/
│   └── AppDbContext.cs
├── Program.cs
├── appsettings.json
```

---

## 🧬 Modelo de Alien

```json
{
  "id": 0,
  "nome": "string",
  "especie": "string",
  "planeta": "string",
  "imagem": "string"
}
```

---

## 🧪 Rodando o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/OmniAPI.git
```

2. Acesse a pasta do projeto:

```bash
cd OmniAPI
```

3. Restaure as dependências:

```bash
dotnet restore
```

4. Rode as migrações (se usar EF Migrations):

```bash
dotnet ef database update
```

5. Inicie o servidor:

```bash
dotnet run
```

6. Acesse o Swagger na URL:

```
https://localhost:5154/swagger
```


---

## 🖥️ Frontend (Next.js)

### Acesse a pasta do frontend:

```bash
cd ominiapiclient
```

### Instale as dependências:

```bash
npm install
```

### Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

### Acesse o painel:

```
http://localhost:3000
```

---

⚠️ **Importante:**

* A **API** deve estar rodando em:
  `http://localhost:5154`
  para que o **frontend** consiga se comunicar.

* No código do **Next.js**, altere a **base URL** se mudar a porta ou o ambiente.


# 👽 It's hero time!

