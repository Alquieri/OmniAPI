using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OmniApi.Models;

    public class Alien
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? Nome { get; set; } 
        public string? Especie { get; set; }
        public string? Planeta { get; set; }
        public string? Imagem {get; set; } 
    }

