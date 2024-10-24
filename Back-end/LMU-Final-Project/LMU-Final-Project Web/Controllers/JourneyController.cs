using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;

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

        public ActionResult<List<int>> GetVehicleId(int userId)
        {
            JourneyRepository journeyRepository = new JourneyRepository();
            List<int> vehicleId = journeyRepository.GetVehicleId(userId);
            return Ok(vehicleId);
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddJourney([FromBody] Journey journey)
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


        [Route("[action]")]
        [HttpGet]

        public ActionResult<List<JourneyClient>> GetJourneyClient()
        {
            try
            {
                DataTable JourneyClientDataTable = journeyRepository.GetJourneyClients();
                if(JourneyClientDataTable != null || JourneyClientDataTable.Rows.Count != 0)
                {
                    List<JourneyClient> listJourneyClients = new List<JourneyClient>();
                  
                    foreach (DataRow row in JourneyClientDataTable.Rows)
                    {
                        JourneyClient journeyClients = new JourneyClient();
                        Journey journey = new Journey();
                        Client client = new Client();

                        journey.Journey_id = Convert.ToInt32(row["Journey_id"]);
                        journey.CompanyId = Convert.ToInt32(row["CompanyId"]);
                        journey.Vehicle_id = Convert.ToInt32(row["Vehicle_id"]);
                        journey.UserId = Convert.ToInt32(row["UserId"]);
                        journey.Started_date = Convert.ToDateTime(row["Started_date"]);
                        journey.JourneyStatus = Convert.ToString(row["JourneyStatus"]);
                        client.Name = Convert.ToString(row["Name"]);
                        client.Nic_no = Convert.ToString(row["Nic_no"]);
                        client.Journey_id = Convert.ToInt32(row["journey_id"]);
                        client.Phone_no = Convert.ToInt32(row["phone_no"]);

                        journeyClients.Journey = journey;
                        journeyClients.Client = client;
                        listJourneyClients.Add(journeyClients);

                    }
                    return Ok(listJourneyClients);
                }
                else
                {
                    return BadRequest(new { message = "No Data Found" });
                };
                
            }
            catch(Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }
           

        }



       

    }
}
