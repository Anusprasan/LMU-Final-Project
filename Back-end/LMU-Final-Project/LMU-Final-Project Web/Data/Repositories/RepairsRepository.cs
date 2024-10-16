using LMU_Final_Project_Web.Models;
using System.Data;

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
            string SqlString = $"Insert into Repair (CompanyId,UserId,Vehicle_id,Garage_name,Date,Address,Phone_no, Malfunction_details,Total_amount,created_by,created_on) values('{repair.CompanyId}','{repair.UserId}','{repair.Vehicle_id}', '{repair.Garage_name}','{repair.Date}','{repair.Address}','{repair.Phone_no}','{repair.Malfunction_details}','{repair.Total_amount}','{repair.UserId}',GETDATE())";
            return sqlAccess.Insertdata(SqlString);
        }

        public DataTable GetAllRepairData(int companyId)
        {
            string SqlString = $"select * from Repair where CompanyId = '{companyId}'";
            return sqlAccess.GetDataFromTables(SqlString);

        }

        public DataTable GetRepairDataByRepairId(int repairId)
        {
            string SqlString = $"select * from Repair where Repair_id = '{repairId}'";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool DeleteRepairData(int repairId)
        {
            string SqlString = $"delete from Repair where Repair_id = '{repairId}'";
            return sqlAccess.Insertdata(SqlString);
        }

        public bool CheckUserType(int userId)
        {
            string SqlString = $" select 1 from Users where User_id ='{userId}' and UserType = 'Owner' ";

            return sqlAccess.CheckData(SqlString);
        }
    }
}
