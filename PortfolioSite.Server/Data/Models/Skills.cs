using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioSite.Server.Data.Models
{
    public class Skill
    {
        public int Id { get; set; }

        [MaxLength(250)]
        [Column(TypeName = "VARCHAR")]
        public string Name { get; set; } = string.Empty;

        public int Order { get; set; } = 0;
    }
}
