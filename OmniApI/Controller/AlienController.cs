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

        return StatusCode(201, alien);
    }

        
    }
}