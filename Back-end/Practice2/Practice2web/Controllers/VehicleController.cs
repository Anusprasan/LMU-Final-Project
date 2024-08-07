using Microsoft.AspNetCore.Mvc;
using Practice2web.Models;

namespace Practice2web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase

    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Vehicle>> Get()
        {
            var vehicles = new List<Vehicle>
            {
            new Vehicle { Id = 1, Brand = "BMW", Model = "i8" },
            new Vehicle { Id = 2, Brand = "Leyland", Model = "i8" },
            new Vehicle { Id = 3, Brand = "Suzuki", Model = "i8" },
            new Vehicle { Id = 4, Brand = "B", Model = "i8" },
            new Vehicle { Id = 5, Brand = "BMW", Model = "i8" }
            };
            return Ok(vehicles);
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddVehicle([FromBody] Request request)
        {
            return Ok();
        }

        [Route("[action]")]
        [HttpGet]
        public ActionResult getitems()
        {

            
            string[] car = { "car", "Bus", "Van", "Lorry","Cycle"};

            return Ok(car);
            
            

        }

        [Route("[action]")]
        [HttpGet]
        public ActionResult getBrands()
        {
            string[] brands = { "Suzuki", "volvo", "leyland", "Benz", "BMW", "Audi", "Porche", "Tata" };

            return Ok(brands);
        }



        
        

    }
}
