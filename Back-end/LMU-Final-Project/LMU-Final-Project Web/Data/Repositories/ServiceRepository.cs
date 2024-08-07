using LMU_Final_Project_Web.Models;

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

    }
}
