using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevicedataController : ControllerBase
    {

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Devicedata>> GetAllDeviceDatas()
        {
            Devicedatarepository deviceDataRepositoryObject = new Devicedatarepository();
            var deviceList = deviceDataRepositoryObject.GetDeviceDatas();
            return Ok(deviceList);

        }
    }
}
