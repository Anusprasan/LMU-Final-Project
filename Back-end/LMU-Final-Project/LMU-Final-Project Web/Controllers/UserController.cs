using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using LMU_Final_Project_Web.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase

    {
        private IConfiguration _configuration;

       
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        //private readonly IUserService _userService;
        //public UserController(IUserService userService)
        //{
        //    _userService = userService;
        //}

        [HttpPost("[action]")]
        [AllowAnonymous]
        public IActionResult Logini(User user)
        {
            UserRepository userRepositoryObject = new UserRepository();
           if (userRepositoryObject.ValidateUser(user))
            {
                userRepositoryObject.GetSessionData(user);
                var FullName = Session.FullName;
                var UserId = Session.ID;
                var UserType = Session.UserType;
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                var tokenDescripter = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                    new Claim(ClaimTypes.Name, user.User_name)
                    }),
                    Expires = DateTime.UtcNow.AddMinutes(2),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature)
                };

                var token = tokenHandler.CreateToken(tokenDescripter);
                string userToken = tokenHandler.WriteToken(token);
                return Ok(new { userToken,FullName,UserId, UserType });
            }
            else
            {
                return BadRequest(new { message = "UserName or Password is incorrect" });
            }
            // var token1 = _userService.login(user);
            //if (token1 == null || token == string.Empty)
            //{
            //    return BadRequest(new { message = "UserName or Password is incorrect" });
            //}
            //return Ok(token);
        }

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
