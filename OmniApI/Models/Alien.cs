using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OmniApi.Models;

    public class Alien
    {
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O nome é obrigatório!")]
        [MaxLength(50, ErrorMessage = "O nome deve ter no máximo 50 caracteres.")]
         public string? Nome { get; set; } 

        [Required(ErrorMessage = "A especie é obrigatória")]
        [MaxLength(50, ErrorMessage = "A especie deve ter no máximo 50 caracteres.")]
        public string? Especie { get; set; }
        [Required(ErrorMessage = "O planeta é obrigatório")]
        [MaxLength(50, ErrorMessage = "O planeta deve ter no máximo 50 caracteres.")]
        public string? Planeta { get; set; }
        public string? Imagem {get; set; } 
    }

