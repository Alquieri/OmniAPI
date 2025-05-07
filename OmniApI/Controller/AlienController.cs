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
    public class AlienController : ControllerBase
    {
         private readonly AppDbContext _appDbContext; 
        
        public AlienController(AppDbContext appDbContext)
        {
             _appDbContext = appDbContext;
         }

        
    }
}