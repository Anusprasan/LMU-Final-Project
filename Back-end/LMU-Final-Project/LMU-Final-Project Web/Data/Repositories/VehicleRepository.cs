using LMU_Final_Project_Web.Controllers;
using LMU_Final_Project_Web.Models;
using System.Globalization;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class VehicleRepository
    {
        SqlAccess sqlAccess = new SqlAccess();
        
        

        public List<Vehicle> GetVehicleById(int id)
        {
            string sqlString = $"select vehicle_id,type,brand,model,plate_no,Licence_Issued_Date,Licence_Expiry_Date,Insurance_Issued_Date,Insurance_Expiry_Date from dbo.Vehicle where vehicle_id ={id} ";

            return sqlAccess.LoadVehicleById(sqlString);
        }

        public void AddVehicle(Vehicle vehicleData)
        {
            string sqlString = $"insert into Vehicle (Type,Brand,Model,Plate_no ,Licence_Issued_Date,Licence_Expiry_Date ,Insurance_Issued_Date ,Insurance_Expiry_Date, VehicleStatus) values('{vehicleData.Type}','{vehicleData.Brand}','{vehicleData.Model}','{vehicleData.Plate_no}','{vehicleData.LicenceIssuedDate}','{vehicleData.LicenceExpiryDate }','{vehicleData.InsuranceIssuedDate }','{vehicleData.InsuranceExpiryDate }','Active')";
            sqlAccess.InsertVehicle(sqlString);
        }
        
        public List<Vehicle> GetVehicles()
           
        {
            string sqlString = "select Vehicle_id,model,type,brand,plate_no,Licence_Issued_Date,Licence_Expiry_Date,Insurance_Issued_Date,Insurance_Expiry_Date,vehicleStatus from dbo.vehicle order by Vehicle_id";

            return sqlAccess.LoadVehicles(sqlString);
            
        }


        public void UpdateVehicle(Vehicle vehicleData)
        {
            string sqlString = $"Update Vehicle SET Type='{vehicleData.Type}',Brand='{vehicleData.Brand}',Model='{vehicleData.Model}',Plate_no='{vehicleData.Plate_no}',Licence_Issued_Date='{vehicleData.LicenceIssuedDate}',Licence_Expiry_Date='{vehicleData.LicenceExpiryDate}',Insurance_Issued_Date='{vehicleData.InsuranceIssuedDate}',Insurance_Expiry_Date='{vehicleData.InsuranceExpiryDate}' where Vehicle_id={vehicleData.Vehicle_id}";
           
            sqlAccess.InsertUpdateVehicle(sqlString);
        }

        public void DeleteVehicle(int id)
        {
            string sqlString = $"Delete from Vehicle where vehicle_id= {id}";

            sqlAccess.InsertDeleteVehicle (sqlString);
        }
    }


}
