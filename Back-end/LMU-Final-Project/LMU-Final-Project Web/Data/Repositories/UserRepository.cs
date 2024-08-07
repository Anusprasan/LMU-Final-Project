using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class UserRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<User> GetUsers()
        {
            string sqlString = "select User_id, User_name,Password,Email,Salt,Created_by,Created_on,Modify_by,Modify_on from dbo.Users order by User_id";

            return sqlAccess.LoadUserData(sqlString);
        }

    }
}

