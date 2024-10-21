using LMU_Final_Project_Web.Models;
using System.Data;

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

        public DataTable GetVehicleIdAndName(int companyId)
        {
            string SqlString = $"select Vehicle_id,Brand,Plate_no from Vehicle where CompanyId = '{companyId}'";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool CheckVehicleData(int companyId,int vehicleId) 
        {
            string SqlString = $"select 1 from Vehicle where CompanyId= '{companyId}' and Vehicle_id = '{vehicleId}'";

            
            return sqlAccess.CheckData(SqlString);
        }

        public DataTable GetDeviceData(int companyId,int vehicleId) 
        {
            string SqlString = $"select * from Devicedata where VehicleId ='{vehicleId}' and CompanyId = '{companyId}'";

            return sqlAccess.GetDataFromTables(SqlString);
        }
    }
}
