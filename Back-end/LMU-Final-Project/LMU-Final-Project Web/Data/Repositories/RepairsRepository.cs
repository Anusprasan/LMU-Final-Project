using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class RepairsRepository
    {
        SqlAccess sqlAccess = new SqlAccess();
        public List<int> GetVehicleId(int userId)
        {
            string sqlString = $"select Vehicle_id from [vehicle] where User_id='{userId}'";

            return sqlAccess.GetVehicleId(sqlString);
        }

        public bool InsertVehicleRepairs(Repair repair)
        {
            string SqlString = $"Insert into Repair (Vehicle_id,Garage_name,Date,Address,Phone_no, Malfunction_details,Total_amount) values('{repair.Vehicle_id}', '{repair.Garage_name}','{repair.Date}','{repair.Address}','{repair.Phone_no}','{repair.Malfunction_details}','{repair.Total_amount}')";
            return sqlAccess.Insertdata(SqlString);
        }
    }
}
