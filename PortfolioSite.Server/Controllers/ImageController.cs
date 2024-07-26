using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using PortfolioSite.Server.Data;
using PortfolioSite.Server.Data.Models;
using PortfolioSite.Server.Helpers;

namespace PortfolioSite.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImageController : ControllerBase
    {
        private readonly IConfiguration _config;

        public ImageController(IConfiguration config)
        {

        }

        [HttpGet("screenshot/{id}")]
        public IActionResult GetScreenshot(int id)
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "Screenshots", $"{id}.png");
            return PhysicalFile(path, "image/png");
        }
    }
}
