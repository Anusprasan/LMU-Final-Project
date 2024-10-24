using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using LMU_Final_Project_Web.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Diagnostics.Eventing.Reader;
using System.Security.Principal;
using System.Text.Json.Serialization;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase

    {

        VehicleRepository vehicleRepository = new VehicleRepository();
        
        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Vehicle>>  GetAllVehicles(int companyId)
        {
           VehicleRepository vehicleRepositoryObject = new VehicleRepository();
           var vehicleList = vehicleRepositoryObject.GetVehicles(companyId);
           
           return Ok(vehicleList);
            

        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult AddVehicle([FromBody] Vehicle vehicleData)
        {
            //Console.WriteLine(vehicle.Type);
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();
            vehicleRepositoryObject.AddVehicle(vehicleData);
            

            return Ok();
        }
        
        [Route("[action]")]
        [HttpGet]
        
        public ActionResult GetVehicleById(int Vehicle_id)
        {
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();
            var vehicleList = vehicleRepositoryObject.GetVehicleById( Vehicle_id);
            return Ok(vehicleList);
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult UpdateVehicle([FromBody] Vehicle vehicleUpdateData)
        {
            VehicleRepository vehicleRepositoryObject = new VehicleRepository();
            vehicleRepositoryObject.UpdateVehicle(vehicleUpdateData);



            return Ok();
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult DeleteVehicle(int Vehicle_id,int userId) 

        {

            if (vehicleRepository.CheckIsOwner(userId) == true)
            {
                vehicleRepository.DeleteVehicle(Vehicle_id);
                return Ok(new {message = "Vehicle Deleted Successfully "});
            }
            else
            {
                return BadRequest(new { message = "This user is not Owner" });
            }
           
            

            
        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult post(string Data)
        {
            return Ok();
        }

        [Route("[action]")]
        [HttpPost]
        public ActionResult CheckVehicleIdAndUsertype(int vehicleId, int userId)
        {
            try
            {
                bool hasValidVehicleId = vehicleRepository.CheckVehicleId(vehicleId);

                bool hasValidUserType = vehicleRepository.CheckUserType(userId);

                
                return Ok(new { hasValidVehicleId, hasValidUserType });
                
               

            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred:{ex.Message}");

            }
        }
        
        [Route("[action]")]
        [HttpGet]

        public ActionResult<Vehicle> GetVehicleDatasById(int companyId, int vehicleId)
        {
            try
            {
                DataTable veicleDataTable = vehicleRepository.GetVehicleDatasById(companyId, vehicleId);

                if(veicleDataTable == null || veicleDataTable.Rows.Count == 0)
                {
                    return NotFound(new { message = "There is no Data in Vehicle Table" });

                }
                else
                {
                    DataRow row = veicleDataTable.Rows[0];
                    Vehicle vehicle = new Vehicle();

                    vehicle.Vehicle_id = Convert.ToInt32(row["Vehicle_id"]);
                    vehicle.CompanyId = Convert.ToInt32(row["CompanyId"]);
                    vehicle.User_id = Convert.ToInt32(row["user_id"]);
                    vehicle.Type = Convert.ToString(row["Type"]);
                    vehicle.Brand = Convert.ToString(row["Brand"]);
                    vehicle.Model = Convert.ToString(row["Model"]);
                    vehicle.Plate_no = Convert.ToString(row["Plate_no"]);
                    vehicle.LicenceIssuedDate = Convert.ToDateTime(row["Licence_issued_date"]);
                    vehicle.LicenceExpiryDate = Convert.ToDateTime(row["Licence_expiry_date"]);
                    vehicle.InsuranceIssuedDate = Convert.ToDateTime(row["Insurance_issued_date"]);
                    vehicle.InsuranceExpiryDate = Convert.ToDateTime(row["Insurance_expiry_date"]);
                    vehicle.VehicleStatus = Convert.ToString(row["VehicleStatus"]);

                    return Ok(vehicle);

                }
               

            }
            catch(Exception ex) 
            {
                return StatusCode(500, $"An error occurred:{ex.Message}");
            }
        }
    }
}