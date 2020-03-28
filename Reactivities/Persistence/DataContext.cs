using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    // \\ for here we need to install package Microsoft.EntityFrameworkCore
    // \\ ctrl + '.' will open the quick fix menu
    public class DataContext : DbContext
    {
        // here we need the options from the base class as well so we call it with options
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        // Values is what will be used as db name inside sqlite
        public DbSet<Value> Values { get; set; }
    }
}
