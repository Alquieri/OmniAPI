
# 🌌 OmniAPI 

Bem-vindo à **OmniAPI**!  
Este projeto é uma API REST feita em **C#** com **ASP.NET Core** e **Entity Framework Core**, inspirada no universo de **Ben 10**.  
Aqui você pode explorar, cadastrar, atualizar e deletar informações dos mais diversos **aliens** do Omnitrix!

---

## 🚀 Tecnologias Utilizadas

- C# (.NET 8 ou superior)
- ASP.NET Core Web API
- Entity Framework Core
- Banco de Dados (MySQL)
- Swagger (OpenAPI) para documentação interativa
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
│   └── AlienController.cs
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
  "id": 1,
  "nome": "Four Arms",
  "especie": "Tetramand",
  "planeta": "Khoros",
  "imagem": "Link da imagem"
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
https://localhost:5001/swagger
```


# 👽 It's hero time!

