using Microsoft.AspNetCore.Mvc; 
using Microsoft.EntityFrameworkCore; // Importa a biblioteca do Entity Framework Core, que permite trabalhar com banco de dados de forma orientada a objetos.
using OmniApi.Models; // Importa o namespace onde está definida a classe Alien, que representa a entidade do banco de dados.


namespace AlienDB.Data 
{
    // Definição da classe AppDbContext que herda de DbContext, a classe base do Entity Framework para acessar o banco de dados.
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) {}
        public DbSet<Alien> Aliens { get; set; } // Propriedade que representa a tabela "Alien" no banco de dados.
    }
}