using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
  /* \\
      - for the route api/values the below class will called
      - because the name of the class matters, the first part is whatever is in the url and the class should ends with Controller to be recognised by the .NET
      - the square brackets work as a placeholder for dynamic values
  */
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    private readonly DataContext _context;
    // here we will access our data in the constructor
    public ValuesController(DataContext context)
    {
      _context = context;
    }

    // GET api/values
    // with async and putting the return value in Task we will make sure this will be asynchrounous operation
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Value>>> Get()
    {
        var values = await _context.Values.ToListAsync();
        return Ok(values);
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Value>> Get(int id)
    {
        var value = await _context.Values.FindAsync(id);
        return Ok(value);
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody] string value)
    {
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
