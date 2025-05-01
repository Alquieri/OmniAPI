using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AlienDB.Data;
using Microsoft.EntityFrameworkCore;



namespace OmniApI.Models.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AlienController : Controller
    {
        // private readonly AppDbContext _appDbContext; 
        
        // public AlienController(AppDbContext appDbContext)
        // {
        //     _appDbContext = appDbContext;
        // }

        [HttpGet]
        public string GetAllAliens()
        {
        
            return "ok"; // Retorna a lista de aliens como resposta HTTP 200 (OK)
        }

    }
}