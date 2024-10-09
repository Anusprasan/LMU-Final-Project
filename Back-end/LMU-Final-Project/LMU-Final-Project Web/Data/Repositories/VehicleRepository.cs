using LMU_Final_Project_Web.Controllers;
using LMU_Final_Project_Web.Models;
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
            string sqlString = $"insert into Vehicle (Type,Brand,Model,Plate_no ,Licence_Issued_Date,Licence_Expiry_Date ,Insurance_Issued_Date ,Insurance_Expiry_Date, VehicleStatus,User_id) values('{vehicleData.Type}','{vehicleData.Brand}','{vehicleData.Model}','{vehicleData.Plate_no}','{vehicleData.LicenceIssuedDate}','{vehicleData.LicenceExpiryDate }','{vehicleData.InsuranceIssuedDate }','{vehicleData.InsuranceExpiryDate }','Available','{vehicleData.User_id}')";
            sqlAccess.InsertVehicle(sqlString);
        }
        
        public List<Vehicle> GetVehicles(int userId)
           
        {
            string sqlString = $"select Vehicle_id,model,type,brand,plate_no,Licence_Issued_Date,Licence_Expiry_Date,Insurance_Issued_Date,Insurance_Expiry_Date,vehicleStatus from dbo.vehicle  where User_id={userId} order by Vehicle_id";

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
    }


}
