using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepairController : ControllerBase
    {
        RepairsRepository repairsRepository = new RepairsRepository();

        //[Route("[action]")]
        //[HttpGet]
        //public ActionResult<List<Repair>> GetAllRepairs()
        //{
        //    RepairsRepository repairRepositoryObject = new RepairsRepository();
        //    var repairList = repairRepositoryObject.GetRepairs();

        //    return Ok(repairList);
        //}

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<int>> GetVehicleId(int userId)
        {

            List<int> vehicleIds = repairsRepository.GetVehicleId(userId);
            return Ok(vehicleIds);
        }


        [Route("[action]")]
        [HttpPost]
        public ActionResult InsertVehicleRepairs([FromBody] Repair repair)
        {
            bool isInserted = repairsRepository.InsertVehicleRepairs(repair);

            if(isInserted)
            {
                return Ok(new { message = "Repair Added Successfully" });
            }
            else
            {
                return BadRequest(new { message = "Operation Failed" });
            }
            
        }

    }
}
