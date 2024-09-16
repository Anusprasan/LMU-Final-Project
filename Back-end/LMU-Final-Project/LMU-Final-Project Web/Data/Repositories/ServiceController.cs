using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Data.Repositories
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Service>> GetAllServices()
        {
            ServiceRepository repositoryObject = new ServiceRepository();
            var serviceList = repositoryObject.GetServices();

            return Ok(serviceList);

        }


    }
}
