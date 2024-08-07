using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class VehicleTypeRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<VehicleType> GetVehicleTypes()
        {
            string SqlString = "select Type_id, Type from dbo.VehicleTypes order by Type_id";

            return sqlAccess.LoadVehicleTypes(SqlString);
            
        }

    }
}
