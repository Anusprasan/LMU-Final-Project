using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using LMU_Final_Project_Web.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Eventing.Reader;
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
        public ActionResult<List<Vehicle>>  GetAllVehicles(int companyId)
        {
           VehicleRepository vehicleRepositoryObject = new VehicleRepository();
           var vehicleList = vehicleRepositoryObject.GetVehicles(companyId);
           
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

        [Route("[action]")]
        [HttpPost]
        public ActionResult UpdateVehicle([FromBody] Vehicle vehicleUpdateData)
        {
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();
            vehicleRepositoryObject.UpdateVehicle(vehicleUpdateData);



            return Ok();
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult DeleteVehicle(int Vehicle_id) 
        {
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();
            vehicleRepositoryObject.DeleteVehicle(Vehicle_id);

            return Ok();
        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult post(string Data)
        {
            return Ok();
        }
    }
}