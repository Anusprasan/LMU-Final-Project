using LMU_Final_Project_Web.Models;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class Devicedatarepository
    {
        SqlAccess sqlAccess = new  SqlAccess();


        public List<Devicedata> GetDeviceDatas()
        {
            string SqlString = "select Device_id ,DTC_code,DateTime from dbo.Devicedata order by device_id";

            return sqlAccess.LoadDeviceData(SqlString);
        }
    }
}
