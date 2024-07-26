using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortfolioSite.Server.Data.Models
{
    public class Website
    {
        public int Id { get; set; }

        [MaxLength(250)]
        [Column(TypeName = "VARCHAR")]
        public string SiteName { get; set; } = string.Empty;

        [DefaultValue("GETDATE()")]
        public DateTime? LaunchDate { get; set; } = DateTime.Now;

        public string Summary { get; set; } = string.Empty;
        public string Details { get; set; } = string.Empty;

        [MaxLength(250)]
        [Column(TypeName = "VARCHAR")]
        public string Url { get; set; } = string.Empty;

        public bool Featured { get; set; } = false;
        public int Order { get; set; } = 0;

        public DateTime? ScreenshotDate { get; set; } = DateTime.Now;
    }
}
