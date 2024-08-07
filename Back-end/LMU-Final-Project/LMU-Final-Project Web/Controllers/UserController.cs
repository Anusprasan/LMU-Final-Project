using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [Route("[action]")]
        [HttpGet]
        public ActionResult<User> GetAllUser()
        {
            UserRepository userRepositoryObject = new UserRepository();
            var userList = userRepositoryObject.GetUsers();
            return Ok(userList);
        }
    }
}
