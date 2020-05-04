using System;
using System.IO;
using System.Net;
using System.Text;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InsecureReactUse.Controllers
{
    public class WeatherForecastController : Controller
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        public IActionResult Fetch()
        {
            var request = WebRequest.Create("http://www.sourceflake.com/weatherdata_rich.json");
            request.Method = "GET";
            request.ContentType = "application/json";
            var response = request.GetResponse();
            var stream = response.GetResponseStream();
            var reader = new StreamReader(stream, Encoding.UTF8);

            string responseString = reader.ReadToEnd();

            // synthetic wait
            Thread.Sleep(TimeSpan.FromSeconds(2));

            return Content(responseString, "application/json");
        }
    }
}
