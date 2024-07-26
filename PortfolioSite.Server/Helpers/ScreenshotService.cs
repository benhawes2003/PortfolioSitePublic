using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using PortfolioSite.Server.Data.Models;
using PuppeteerSharp;
using SixLabors.ImageSharp.Formats.Png;
using SixLabors.ImageSharp;

namespace PortfolioSite.Server.Helpers
{
    public class ScreenshotItem
    {
        public int Id { get; set; }
    }

    public class ScreenshotService
    {
        public async Task<List<ScreenshotItem>> CaptureScreenshots(string directory, List<Website> sites)
        {
            // Ensure the screenshot directory exists
            Directory.CreateDirectory(directory);

            // Download the latest version of Chromium
            var browserFetcher = new BrowserFetcher();
            await browserFetcher.DownloadAsync();

            using var browser = await Puppeteer.LaunchAsync(new LaunchOptions
            {
                Headless = false,
                DefaultViewport = new()
                {
                    Width = 1920,
                    Height = 1080,
                }
            });

            var results = new List<ScreenshotItem>();

            foreach (var site in sites)
            {
                var url = site.Url;
                using var page = await browser.NewPageAsync();

                //Ensures HTTP for the actual request, not used for log or file names
                string httpUrl = url.Contains("http") ? url : "https://" + url;
                string nonHttpUrl = url.Replace("https://", "").Replace("http://", "");

                await page.SetCookieAsync(new CookieParam
                {
                    Name = "AllowAllCookies",
                    Value = "1",
                    Domain = nonHttpUrl,
                    Path = "/"
                });

                await page.GoToAsync(httpUrl, new NavigationOptions
                {
                    WaitUntil = new[] { WaitUntilNavigation.Networkidle0 }
                });

                // Wait for 5 seconds
                await Task.Delay(5000);

                var safeTitle = string.Join("_", nonHttpUrl.Split(Path.GetInvalidFileNameChars()));

                // Take a screenshot
                await page.ScreenshotAsync(Path.Combine(directory, $"{site.Id}.png"), new ScreenshotOptions
                {
                    FullPage = false
                });
            }

            return results;
        }
    }
}