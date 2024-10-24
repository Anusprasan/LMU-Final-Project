using LMU_Final_Project_Web.Controllers;
using LMU_Final_Project_Web.Models;
using System.Data;
using System.Diagnostics.Contracts;
using System.Globalization;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class VehicleRepository
    {
        SqlAccess sqlAccess = new SqlAccess();
        
        

        public List<Vehicle> GetVehicleById(int id)
        {
            string sqlString = $"select vehicle_id,type,brand,model,plate_no,Licence_Issued_Date,Licence_Expiry_Date,Insurance_Issued_Date,Insurance_Expiry_Date,VehicleStatus from dbo.Vehicle where vehicle_id ={id} ";

            return sqlAccess.LoadVehicleById(sqlString);
        }

        public void AddVehicle(Vehicle vehicleData)
        {
            string sqlString = $"insert into Vehicle (Type,Brand,Model,Plate_no ,Licence_Issued_Date,Licence_Expiry_Date ,Insurance_Issued_Date ,Insurance_Expiry_Date, VehicleStatus,User_id,CompanyId,Created_by,Created_on) values('{vehicleData.Type}','{vehicleData.Brand}','{vehicleData.Model}','{vehicleData.Plate_no}','{vehicleData.LicenceIssuedDate}','{vehicleData.LicenceExpiryDate }','{vehicleData.InsuranceIssuedDate }','{vehicleData.InsuranceExpiryDate }','Available','{vehicleData.User_id}','{vehicleData.CompanyId}','{vehicleData.User_id}',GETDATE())";
            sqlAccess.InsertVehicle(sqlString);
        }
        
        public List<Vehicle> GetVehicles(int companyId)
           
        {
            string sqlString = $"select Vehicle_id,model,type,brand,plate_no,Licence_Issued_Date,Licence_Expiry_Date,Insurance_Issued_Date,Insurance_Expiry_Date,vehicleStatus from dbo.vehicle  where CompanyId={companyId} order by Vehicle_id";

            return sqlAccess.LoadVehicles(sqlString);
            
        }


        public void UpdateVehicle(Vehicle vehicleData)
        {
            string sqlString = $"Update Vehicle SET Type='{vehicleData.Type}',Brand='{vehicleData.Brand}',Model='{vehicleData.Model}',Plate_no='{vehicleData.Plate_no}',Licence_Issued_Date='{vehicleData.LicenceIssuedDate}',Licence_Expiry_Date='{vehicleData.LicenceExpiryDate}',Insurance_Issued_Date='{vehicleData.InsuranceIssuedDate}',Insurance_Expiry_Date='{vehicleData.InsuranceExpiryDate}',VehicleStatus='{vehicleData.VehicleStatus}' where Vehicle_id={vehicleData.Vehicle_id}";
           
            sqlAccess.InsertUpdateVehicle(sqlString);
        }

        public void DeleteVehicle(int id)
        {
            string sqlString = $"Delete from Vehicle where vehicle_id= {id}";

            sqlAccess.InsertDeleteVehicle (sqlString);
        }

        public bool UpdateVehicleStatus(int? vehicleId)
        {
            string SqlString = $"update Vehicle set VehicleStatus = 'On Journey' where Vehicle_id = '{vehicleId}'";

            return sqlAccess.Insertdata(SqlString);
        }

        public bool UpdateVehicleStatusForCancelJourney(int? vehicleId)
        {
            string SqlString = $"Update Vehicle set VehicleStatus = 'Available' where Vehicle_id= '{vehicleId}'";

            return sqlAccess.Insertdata(SqlString);
        }

        public bool CheckVehicleId(int vehicleId)
        {
            string SqlString = $"select 1 from Vehicle where Vehicle_id = {vehicleId} ";

            return sqlAccess.CheckData(SqlString);
        }

        public bool CheckUserType (int userId)
        {
            string SqlString = $"select 1 from Users where User_id='{userId}' and (UserType='Owner' or UserType = 'Admin')";
            return sqlAccess.CheckData(SqlString);
        }

        public DataTable GetVehicleDatasById(int companyId, int vehicleId)
        {
            string SqlString = $"select * from Vehicle where CompanyId = '{companyId}' and Vehicle_id = '{vehicleId}'";

            return sqlAccess.GetDataFromTables(SqlString);
        }

        public bool CheckIsOwner(int userId)
        {
            string SqlString = $"select 1 from Users where User_id = {userId} and UserType = 'Owner'";

            return sqlAccess.CheckData(SqlString);
        }
    }
    

}
