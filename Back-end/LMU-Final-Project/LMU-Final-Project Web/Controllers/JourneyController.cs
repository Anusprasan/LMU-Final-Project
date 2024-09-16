using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JourneyController : ControllerBase

    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Journey>> GetAllJourneys()
        {
            JourneyRepository journeyRepositoryObject = new JourneyRepository();
            var journeyList = journeyRepositoryObject.GetJourneys();
            return Ok(journeyList);

        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<List<string>>GetVehiclePlateNo()
        {
            JourneyRepository journeyRepository = new JourneyRepository();
            List<string> plate_nos = journeyRepository.GetPlateNo();
            return Ok(plate_nos);
        }

        //public ActionResult InsertJourney([FromBody]Journey journey)
        //{

        //    return Ok();
        //}


    }
}
