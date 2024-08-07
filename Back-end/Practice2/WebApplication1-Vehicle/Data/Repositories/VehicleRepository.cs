using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class VehicleRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<Vehicle> GetVehicles()
        {
            string sqlString = "select Vehicle_id, User_id, Type, Brand from dbo.vehicle order by Vehicle_id";

            return sqlAccess.LoadData(sqlString);
        }
    }
}
