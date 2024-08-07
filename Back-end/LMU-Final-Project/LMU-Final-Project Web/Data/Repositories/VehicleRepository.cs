using LMU_Final_Project_Web.Controllers;
using LMU_Final_Project_Web.Models;
using System.Globalization;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class VehicleRepository
    {
        SqlAccess sqlAccess = new SqlAccess();
        

        public List<Vehicle> GetVehicleById(int id)
        {
            string sqlString = $"select type,model from dbo.Vehicle where Vehicle_id ={id} ";

            return sqlAccess.LoadVehicleById(sqlString);
        }

        public void AddVehicle(Vehicle vehicleData)
        {
            string sqlString = $"insert into Vehicle (Type,Model)values('{vehicleData.Type}','{vehicleData.Model}')";
            sqlAccess.InsertVehicle(sqlString);
        }
        
        public List<Vehicle> GetVehicles()
           
        {
            string sqlString = "select model,type from dbo.vehicle order by Vehicle_id";

            return sqlAccess.LoadVehicles(sqlString);
            
        }

    }
}
