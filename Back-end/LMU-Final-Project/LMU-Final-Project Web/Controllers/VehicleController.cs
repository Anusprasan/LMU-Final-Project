using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Text.Json.Serialization;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult<Vehicle>  GetAllVehicles()
        {
           VehicleRepository vehicleRepositoryObject = new VehicleRepository();
           var vehicleList = vehicleRepositoryObject.GetVehicles();
           return Ok(vehicleList);
            

        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddVehicle([FromBody] Vehicle vehicleData)
        {
            //Console.WriteLine(vehicle.Type);
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();

            vehicleRepositoryObject.AddVehicle(vehicleData);
            

            return Ok();
        }
        
        [Route("[action]")]
        [HttpGet]
        
        public ActionResult GetVehicleById(int Vehicle_id)
        {
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();
            var vehicleList = vehicleRepositoryObject.GetVehicleById( Vehicle_id);
            return Ok(vehicleList);
        }
    }
}