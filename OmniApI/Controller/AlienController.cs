using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AlienDB.Data;
using Microsoft.EntityFrameworkCore;
using OmniApI.Migrations;
using OmniApi.Models;


namespace OmniApI.Models.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlienController : ControllerBase
    {
         private readonly AppDbContext _appDbContext; 
        
        public AlienController(AppDbContext appDbContext)
        {
             _appDbContext = appDbContext;
         }

    [HttpPost]
    public async Task<IActionResult> AddAlien(Alien alien)
    {
        if (alien == null) {
            return BadRequest("Dados inválidos.");
        }

        _appDbContext.Aliens.Add(alien);
        await _appDbContext.SaveChangesAsync();

        return Ok( alien);
    }

    [HttpGet] 
     public async Task<ActionResult<IEnumerable<Alien>>> GetAliens()   
    {
    
        var aliens = await _appDbContext.Aliens.ToListAsync();
        return Ok(aliens);

    }

    [HttpPut("{id}")] 
public async Task<IActionResult> UpdateAlien(int id, [FromBody]Alien alienAtualizado)
{
    
    var alienExistente = await _appDbContext.Aliens.FindAsync(id);

    
    if (alienExistente == null)
    {
        return NotFound("Alien não encontrado no omnitrix.");
    }

    _appDbContext.Entry(alienExistente).CurrentValues.SetValues(alienAtualizado);

    await _appDbContext.SaveChangesAsync();

    return Ok(alienExistente);
}
 

 [HttpDelete("{id}")]
public async Task<IActionResult> DeletePersonagem(int id)
{
   
    var alien = await _appDbContext.Aliens.FindAsync(id);

    
    if (alien == null)
    {
        return NotFound("Alien não encontrado no omnitrix .");
    }

    
    _appDbContext.Aliens.Remove(alien);

   
    await _appDbContext.SaveChangesAsync();

    
    return Ok("Alien deletado com sucesso do omnitrix!");
}


   

        


    }
}