using Microsoft.EntityFrameworkCore;
using PortfolioSite.Server.Data.Models;

namespace PortfolioSite.Server.Data
{

    public class AppDbContext : DbContext
    {
        public IConfiguration _config { get; set; }

        public AppDbContext(IConfiguration config)
        {
            _config = config;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_config.GetConnectionString("DatabaseConnection"));
        }

        public DbSet<Website> Websites { get; set; }
        public DbSet<ExperiencePoint> ExperiencePoints { get; set; }
        public DbSet<Skill> Skills { get; set; }
    }
}
