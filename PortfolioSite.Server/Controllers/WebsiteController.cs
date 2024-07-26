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
    public class WebsiteController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ScreenshotService _screenshotService;

        public WebsiteController(IConfiguration config, ScreenshotService screenshotService)
        {
            _config = config;
            _screenshotService = screenshotService;
        }

        [HttpGet]
        public IEnumerable<Website> Get()
        {
            var websites = new List<Website>();

            using (var context = new AppDbContext(_config))
            {
                websites = context.Websites.AsNoTracking().OrderBy(x => x.Order).ToList();
            }

            return websites;
        }

        [HttpGet("{id}")]
        public Website GetById(int id) {
            var website = new Website();

            using (var context = new AppDbContext(_config))
            {
                website = context.Websites.AsNoTracking().FirstOrDefault(x => x.Id == id);
            }

            if(website == null || website.Id == 0)
            {
                throw new Exception("No website found with the specified ID");
            }

            return website;
        }

        [HttpGet("featured")]
        public IEnumerable<Website> Featured()
        {
            var websites = new List<Website>();

            using (var context = new AppDbContext(_config))
            {
                websites = context.Websites.AsNoTracking().Where(n => n.Featured).OrderBy(x => x.Order).ToList();
            }

            return websites;
        }

        [HttpGet("screenshots")]
        public async Task<string> Screenshots()
        {
            try
            {
                var websites = new List<Website>();

                using (var context = new AppDbContext(_config))
                {
                    websites = context.Websites.OrderBy(x => x.Order).ToList();

                    string directory = Path.Combine(Directory.GetCurrentDirectory(), "Screenshots");
                    var screenshotItems = await _screenshotService.CaptureScreenshots(directory, websites);

                    foreach (var screenshotItem in screenshotItems)
                    {
                        var website = websites.First(n => n.Id == screenshotItem.Id);
                        website.ScreenshotDate = DateTime.Now;
                    }

                    await context.SaveChangesAsync();
                }

                return "Screenshots captured successfully.";
            }
            catch (Exception ex) {
                return "An error has occured: " + ex.Message;
            }
        }
    }
}
