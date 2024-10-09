using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
         ServiceRepository serviceRepository = new ServiceRepository();
        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Service>> GetAllServices()
        {
            ServiceRepository repositoryObject = new ServiceRepository();
            var serviceList = repositoryObject.GetServices();

            return Ok(serviceList);

        }



        [Route("[action]")]
        [HttpPost]

        public ActionResult InsertService([FromBody] Service service)
        {
            bool isServiceInserted = serviceRepository.InsertService(service);

            if(isServiceInserted)
            {
                return Ok(new { message = " Service Added Successfully" });
            }
            else
            {
                return BadRequest(new { message = "Operation Failed" });
            }
        }
    }
}
