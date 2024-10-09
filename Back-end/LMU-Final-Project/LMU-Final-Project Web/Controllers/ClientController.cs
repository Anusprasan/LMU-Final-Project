using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
        ClientRepository clientRepository = new ClientRepository();

        [Route("[action]")]
        [HttpGet]
        public ActionResult<Client> GetAllClients()
        {

            ClientRepository clientRepositoryObject = new ClientRepository();
            var clientList = clientRepositoryObject.GetClients();

            return Ok(clientList);

           

        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult AddClients([FromBody]Client client)
        {
            ClientRepository clientRepository = new ClientRepository();
            bool isAdded = clientRepository.AddClients(client);

            if(isAdded)
            {
                return Ok(new { message = "Client Added Successfully" });
            }
            else
            {
                return BadRequest(new { message = "Operation Failed" });
            }
        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult CancelJourney(int journeyId, int vehicleId)
        {
            bool isCancelled = clientRepository.CancelJourney(journeyId);
            bool isUpdated = clientRepository.UpdateVehicleStatus(vehicleId);

            if(isCancelled&&isUpdated)
            {
                return Ok(new { message = " Journey Cancelled Successfully" }); 
            }
            else
            {
                return BadRequest(new { message = "Operation Failed" });
            }
        }
    }
}
