using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
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

        [Route("[action]")]
        [HttpPost]

        public ActionResult CheckDataForJourneyUpdate (int userId , int journeyId)
        {
            try
            {
                bool isauthorized = journeyRepository.CheckDataForJourneyUpdate( userId);
                if (isauthorized)
                {
                    bool isValidJourneyId = journeyRepository.CheckJourneyId(journeyId);
                    if(isValidJourneyId)
                    {
                        return Ok(new { message = "Can Navigate to Journey Update Page" });
                    }
                    else
                    {
                        return StatusCode(404, new { message = "Invalid Journey Id" });
                    }
                }
                else
                {
                    return StatusCode(403, new { message = "Access denied: User Can not Update" });
                }
            }
            catch(Exception ex)
            {
                return StatusCode(500, new { message = "Unexpected Error Occured" });
            }
        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<JourneyClient> GetJourneyClientById(int journeyId)
        {
            try
            {
                bool isValidJourneyId = journeyRepository.CheckJourneyId(journeyId);
                if (isValidJourneyId)
                {
                    DataTable JourneyClientDataTable = journeyRepository.GetJourneyClientById(journeyId);

                    if (JourneyClientDataTable != null || JourneyClientDataTable.Rows.Count != 0)
                    {


                        DataRow row = JourneyClientDataTable.Rows[0];

                        JourneyClient journeyClients = new JourneyClient();
                        Journey journey = new Journey();
                        Client client = new Client();

                        journey.Journey_id = Convert.ToInt32(row["Journey_id"]);
                        journey.CompanyId = Convert.ToInt32(row["CompanyId"]);
                        journey.Vehicle_id = Convert.ToInt32(row["Vehicle_id"]);
                        journey.UserId = Convert.ToInt32(row["UserId"]);
                        journey.Started_date = Convert.ToDateTime(row["Started_date"]);
                        journey.End_date = row["End_date"] == DBNull.Value ? (DateTime?)null : Convert.ToDateTime(row["End_date"]);
                        journey.Odometerreading_beforejourney = row["Odometerreading_beforejourney"] == DBNull.Value ? (int?)null : Convert.ToInt32(row["Odometerreading_beforejourney"]);
                        journey.Odometerreading_afterjourney = row["Odometerreading_afterjourney"] == DBNull.Value ? (int?)null : Convert.ToInt32(row["Odometerreading_afterjourney"]);
                        journey.Journey_description = row["Journey_description"] == DBNull.Value ? (string?)null : Convert.ToString(row["Journey_description"]);
                        journey.Vehiclestatus_beforejourney = row["VehicleStatus_beforejourney"] == DBNull.Value ? (string?)null : Convert.ToString(row["VehicleStatus_beforejourney"]);
                        journey.Vehiclestatus_afterjourney = row["Vehiclestatus_afterjourney"] == DBNull.Value ? (string?)null : Convert.ToString(row["Vehiclestatus_afterjourney"]);
                        journey.JourneyStatus = row["JourneyStatus"] == DBNull.Value ? (string?)null : Convert.ToString(row["JourneyStatus"]);

                        client.Name = row["Name"] == DBNull.Value ? (string?)null : Convert.ToString(row["Name"]);
                        client.Nic_no = row["Nic_no"] == DBNull.Value ? (string?)null : Convert.ToString(row["Nic_no"]);
                        client.Journey_id = row["journey_id"] == DBNull.Value ? (int?)null : Convert.ToInt32(row["journey_id"]);
                        client.Address = row["Address"] == DBNull.Value ? (string?)null : Convert.ToString(row["Address"]);
                        client.Phone_no = row["phone_no"] == DBNull.Value ? (int?)null : Convert.ToInt32(row["phone_no"]);

                        journeyClients.Journey = journey;
                        journeyClients.Client = client;



                        return Ok(journeyClients);
                    }
                    else
                    {
                        return StatusCode(404, new { message = "JourneyClient Data Not Found" });
                    };
                }
                else
                {
                    return StatusCode(404, new { message = "InValid Journey Id" });
                }


            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });

            }

        }
        [Route("[action]")]
        [HttpPost]

        public ActionResult InsertEndJourney([FromBody] Journey journey)
        {
            try
            {
                bool isValid = journeyRepository.checkEndJourneyData(journey);
                if (isValid)
                {
                    bool isUpdated = journeyRepository.InsertEndJourney(journey);

                    if (isUpdated)
                    {
                        return Ok(new { message = "Journey End Updated Successfully" });
                    }
                    else
                    {
                        return StatusCode(400, new { message = "Update Failed" });
                    }
                        
                   
                }
                else
                {
                    return StatusCode(404, new {message="Invalid Data Given"});
                }

            }
            catch(Exception ex) 
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }
        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult DeleteJourneyData (int journeyId, int userId)
        {
            try
            {
                bool isValidUser = journeyRepository.CheckUserType(userId);
                if (isValidUser)
                {
                    bool isValidJourneyId = journeyRepository.CheckJourneyId(userId);
                    if(isValidJourneyId)
                    {
                        bool isJouneyDeleted = journeyRepository.DeleteJourney(journeyId);
                        if (isValidJourneyId)
                        {
                            return Ok(new { message = "Journey successfully Deleted" });
                        }
                        else
                        {
                            return StatusCode(400, new { mesasge = "Journey Delete Process Failed " });
                        }
                    }
                    else
                    {
                        return StatusCode(404, new { message = "This User Do not Have Permission To Delete This Data" });

                    }

                }
                else
                {
                    return StatusCode(404, new { message = "Invalid Journey Id" });
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }
        }
    }
}
