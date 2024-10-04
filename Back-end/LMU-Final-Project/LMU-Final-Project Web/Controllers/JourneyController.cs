using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Net;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JourneyController : ControllerBase


    {

        JourneyRepository journeyRepository = new JourneyRepository();
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

        public ActionResult<List<int>>GetVehicleId(int userId)
        {
            JourneyRepository journeyRepository = new JourneyRepository();
            List<int> plate_nos = journeyRepository.GetVehicleId(userId);
            return Ok(plate_nos);
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddJourney ([FromBody]Journey journey )
        {
           JourneyRepository journeyRepository = new JourneyRepository();
            
                bool isAdded = journeyRepository.AddJourney(journey);

                if (isAdded)
                {
                    return Ok(new { message = "Journey addded successfully" });
                }
                else
                {
                    return BadRequest("Failed to add dthe journey");
                }
            
           
        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<int> GetJourneyId()
        {
            DataTable journeyIdDataTable = journeyRepository.GetJourneyId();
            


            if (journeyIdDataTable.Rows.Count == 0)
            {
                return NotFound();

            }
            int journeyId = Convert.ToInt32(journeyIdDataTable.Rows[0]["Journey_id"]);

            return Ok(journeyId);



        }
        //public ActionResult InsertJourney([FromBody]Journey journey)
        //{

        //    return Ok();
        //}


    }
}
