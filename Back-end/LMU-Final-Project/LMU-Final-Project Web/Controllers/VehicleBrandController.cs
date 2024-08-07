using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleBrandController : ControllerBase
    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<VehicleBrand>> GetAllVehicleBrands()
        {
            VehicleBrandRepository VehicleBrandRepositoryObject = new VehicleBrandRepository();
            var vehicleBrands = VehicleBrandRepositoryObject.GetVehicleBrands();
            return Ok(vehicleBrands);
        }
    }
}
