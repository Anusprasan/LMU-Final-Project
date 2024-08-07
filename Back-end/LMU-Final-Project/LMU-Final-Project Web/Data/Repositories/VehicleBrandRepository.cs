using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class VehicleBrandRepository

    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<VehicleBrand> GetVehicleBrands()
        {
            string SqlString = "Select Brand_id, Brand from dbo.VehicleBrands order by Brand_id";
            return sqlAccess.LoadVehicleBrands(SqlString);
        }
    }
}
