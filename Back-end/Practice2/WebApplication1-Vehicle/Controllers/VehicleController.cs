using LMU_Final_Project_Web.Data.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1_Vehicle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("AllowReactApp")]
    public class VehicleController : ControllerBase
    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult GetAllVehicles()
        {
            var vehicleRepositoryObject = new VehicleRepository();
            var vehicleList = vehicleRepositoryObject.GetVehicles();
            return Ok(vehicleList);
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddVehicle()
        {
            var vehicleRepositoryObject = new VehicleRepository();
            return Ok("Anush");
        }
    }

    //    [Route("[action]")]
    //    [HttpGet]
    //    public ActionResult GetAllVehicles()
    //    {
    //        return Ok("Anush");
    //    }
}

