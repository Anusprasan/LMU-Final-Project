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

        [Route("[action]")]
        [HttpGet]
        public ActionResult<Client> GetAllClients()
        {

            ClientRepository clientRepositoryObject = new ClientRepository();
            var clientList = clientRepositoryObject.GetClients();

            return Ok(clientList);

           

        }
    }
}
