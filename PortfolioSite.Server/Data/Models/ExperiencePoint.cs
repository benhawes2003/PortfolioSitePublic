using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioSite.Server.Data.Models
{
    public class ExperiencePoint
    {
        public int Id { get; set; }

        [MaxLength(250)]
        [Column(TypeName = "VARCHAR")]
        public string Name { get; set; } = string.Empty;

        public string Date { get; set; } = string.Empty;

        public string Location { get; set; } = string.Empty;

        public string JobTitle { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
        public int Order { get; set; } = 0;
        public int Type { get; set; } = 0;
    }
}
