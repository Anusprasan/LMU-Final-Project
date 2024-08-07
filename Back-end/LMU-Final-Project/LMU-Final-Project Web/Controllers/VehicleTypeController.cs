using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleTypeController : ControllerBase

    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<VehicleType>> GetAllVehicleTypes()
        {
            VehicleTypeRepository vehicleRepositoryObject = new VehicleTypeRepository();
            var vehicleTypeList = vehicleRepositoryObject.GetVehicleTypes();
            return Ok(vehicleTypeList);
        }
    }
}
