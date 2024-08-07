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

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Repair>> GetAllRepairs()
        {
            Repairrepository repairRepositoryObject = new Repairrepository();
            var repairList = repairRepositoryObject.GetRepairs();

            return Ok(repairList);
        }
    }
}
