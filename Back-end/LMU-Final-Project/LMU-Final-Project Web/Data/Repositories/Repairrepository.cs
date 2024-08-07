using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class Repairrepository
    {
        SqlAccess sqlAccess = new SqlAccess();


        public List<Repair> GetRepairs()
        {
            string SqlString = "select Repair_id, Vehicle_id, Garage_name,Date,Address,Phone_no,Malfunction_details,Total_amount,Repaired_parts,created_by,created_on,modify_by,modify_on from dbo.Repair order by Repair_id";
            return sqlAccess.LoadRepairData(SqlString);
        }
    }
}
