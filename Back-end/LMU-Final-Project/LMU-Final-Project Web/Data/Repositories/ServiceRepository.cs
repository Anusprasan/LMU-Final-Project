using LMU_Final_Project_Web.Models;
using System.Data;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class ServiceRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public List<Service> GetServices()
        {
             string SqlString = " select Service_id, Service_center,Phone_no, Odometer_reading,Description,Date,Amount,Additional_expensesdescription,Additional_expensesamount,Created_by,Created_on,Modify_by,Modify_on from dbo.Service order by Service_id";
            return sqlAccess.LoadServiceData(SqlString);
        }

        public bool InsertService( Service service)
        {
            string SqlString = $"insert into service (CompanyId,UserId,VehicleId,Service_center,Phone_no,Odometer_reading,Description,Date,Amount,Created_by,Created_on) values ('{service.CompanyId}','{service.UserId}','{service.Vehicle_Id}','{service.Service_center}','{service.Phone_no}','{service.Odometer_reading}','{service.Description}','{service.Date}','{service.Amount}','{service.Created_by}',GETDATE())";

            return sqlAccess.Insertdata(SqlString);
        }

        public DataTable GetAllServiceData(int companyId)
        {
            string SqlString = $"select * from Service where CompanyId = '{companyId}'";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool DeleteServiceData(int serviceId)
        {
            string SqlString = $"delete from Service where Service_id = '{serviceId}'";
            return sqlAccess.Insertdata(SqlString);
        }

        public bool CheckUserType(int userId)
        {
            string SqlString = $"select 1 from Users where User_id ='{userId}' and UserType = 'Owner'";

            return sqlAccess.CheckData(SqlString);
        }

        public bool CheckServiceId(int serviceId)
        {
            string SqlString = $"select 1 from Service where Service_id = '{serviceId}'";

            return sqlAccess.CheckData(SqlString);
        }

        public DataTable GetServiceDataById(int serviceId)
        {
            string SqlString = $"select * from Service where Service_id ='{serviceId}'";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool UpdateServiceDate (Service service)
        {
            string SqlString = $"update Service set Service_center ='{service.Service_center}', Phone_no='{service.Phone_no}',Odometer_reading='{service.Odometer_reading}',Description= '{service.Description}',Date='{service.Date}',Amount='{service.Amount}' where Service_id = '{service.Service_id}'";
            return sqlAccess.Insertdata(SqlString);
        }

    }
}
