namespace LMU_Final_Project_Web.Models
{
    public class User
    {

        public int User_id { get; set; }
        public string User_name { get; set;}
        public string Password { get; set;}
        public string Email { get; set;}
        public string Salt { get; set;} 
        public string Created_by { get; set; }  
        public DateTime Created_on { get; set; }
        public string  Modify_by { get; set; }
        public DateTime Modify_on { get; set; }
    }
}
    