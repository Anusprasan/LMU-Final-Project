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
        VehicleRepository vehicleRepository = new VehicleRepository();
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
            List<int> vehicleId = journeyRepository.GetVehicleId(userId);
            return Ok(vehicleId);
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddJourney ([FromBody]Journey journey )
        {
            JourneyRepository journeyRepository = new JourneyRepository();
           

            
                bool isAdded = journeyRepository.AddJourney(journey);

            if (isAdded)
            {
                bool isVehicleStatusAdded = vehicleRepository.UpdateVehicleStatus(journey.Vehicle_id);
                if (isVehicleStatusAdded)
                {
                    return Ok(new { message = "Journey addded successfully" });
                }
                return BadRequest("Failed to add the journey");

            }
            else
            {
                return BadRequest("Failed to add the journey");
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
            else
            {
                int journeyId = Convert.ToInt32(journeyIdDataTable.Rows[0]["Journey_id"]);
                int vehicleId = Convert.ToInt32(journeyIdDataTable.Rows[0]["Vehicle_id"]);
               

              
               
                    return Ok(new { journeyId, vehicleId });
               
            }
            

            



        }

        //public ActionResult<List<Journey>> GetAllJourneyDatas()
        //{

        //    DataTable journeyDataTable = journeyRepository.GetJourneyDataTable();

        //    return Ok();
        //}


    }
}
