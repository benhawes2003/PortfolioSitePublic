using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PortfolioSite.Server.Data;
using PortfolioSite.Server.Data.Models;

namespace PortfolioSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GenericController : ControllerBase
    {
        private readonly IConfiguration _config;
        public GenericController(IConfiguration config)
        {
            _config = config;
        }

        [HttpGet("experience")]
        public IEnumerable<ExperiencePoint> Get()
        {
            var points = new List<ExperiencePoint>();

            using (var context = new AppDbContext(_config))
            {
                points = context.ExperiencePoints.AsNoTracking().OrderBy(x => x.Order).ToList();
            }

            return points;
        }

        [HttpGet("skills")]
        public IEnumerable<Skill> GetSkills()
        {
            var points = new List<Skill>();

            using (var context = new AppDbContext(_config))
            {
                points = context.Skills.AsNoTracking().OrderBy(x => x.Order).ToList();
            }

            return points;
        }
    }
}
