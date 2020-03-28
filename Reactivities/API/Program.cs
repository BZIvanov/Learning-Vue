using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        // \\ this is the starting point of our application
        public static void Main(string[] args)
        {
            // \\ args here are provided from the command line when building the app
            CreateHostBuilder(args).Build().Run();
        }

        // \\ here we return IHostBuilder
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    // \\ here the Startup class from this folder is provided as configuration
                    webBuilder.UseStartup<Startup>();
                });
    }
}
