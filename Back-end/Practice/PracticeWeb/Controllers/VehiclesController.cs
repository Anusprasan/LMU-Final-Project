using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PracticeWeb.Models;
using System.Reflection.Metadata.Ecma335;

namespace PracticeWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase

    {

        [HttpGet("types")]


        public ActionResult<IEnumerable<VehicleType>> GetVehicleTypes()
        {
            var vehicleTypes = new List<VehicleType>
            {
                new VehicleType { Id = 1, Name = "Sedan" },
               
                new VehicleType { Id = 3, Name = "Truck" },
                new VehicleType { Id = 4, Name = "Coupe" },
                new VehicleType { Id = 5, Name = "Convertible" },
                new VehicleType { Id = 6, Name = "Minivan" },
                new VehicleType { Id = 7, Name = "Hatchback" }
            };

            return Ok(vehicleTypes);



        }
    }
}
