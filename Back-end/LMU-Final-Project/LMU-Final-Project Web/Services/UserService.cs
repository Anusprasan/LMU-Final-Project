//using LMU_Final_Project_Web.Models;
//using Microsoft.AspNetCore.DataProtection.KeyManagement;
//using System.Reflection.Metadata;
//using Microsoft.IdentityModel.Tokens;
//using System.IdentityModel.Tokens.Jwt;
//using System.Security.Claims;
//using System.Text;

//namespace LMU_Final_Project_Web.Services
//{
//    public class UserService : IUserService
//    {

//    //    public List<User> users = new List<User>()
//    //    {
//    //        new User { User_name="Anushprasan",Password="123Anush"}
//    //};
        
//    //    //public UserService()
//    //    //{
            
//    //    //    //User user= new User();
//    //    //    //user.User_name = "Anushprasan";
//    //    //    //user.Password = "123Anush";
//    //    //    //users.Add(user);
//    //    //}

//    //    private IConfiguration _configuration;

//    //    //In order to access the JWT Key from the appsettings.json, we have to inject the Configuration as below:
//    //    public UserService(IConfiguration configuration)
//    //    {
//    //        _configuration= configuration;
//    //    }
//        public string login(User user)
//        {
//            var LoginUser = users.SingleOrDefault(x => x.User_name == user.User_name && x.Password == user.Password);
            
            

//            if(LoginUser == null)
//            {
//                return string.Empty;
//            }

//            var tokenHandler = new JwtSecurityTokenHandler();
//            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
//            var tokenDescripter = new SecurityTokenDescriptor
//            {
//                Subject = new ClaimsIdentity(new Claim[]
//                {
//                    new Claim(ClaimTypes.Name, user.User_name)
//                }),
//                Expires = DateTime.UtcNow.AddMinutes(2),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
//                SecurityAlgorithms.HmacSha256Signature)
//            };

//            var token = tokenHandler.CreateToken(tokenDescripter);
//            string userToken = tokenHandler.WriteToken(token);
//            return userToken;
            
//        }
//    }
//}
