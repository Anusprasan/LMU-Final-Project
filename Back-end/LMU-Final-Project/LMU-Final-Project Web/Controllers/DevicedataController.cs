using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using System.Linq.Expressions;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevicedataController : ControllerBase
    {
        Devicedatarepository devicedatarepository = new Devicedatarepository();

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Devicedata>> GetAllDeviceDatas()
        {
            Devicedatarepository deviceDataRepositoryObject = new Devicedatarepository();
            var deviceList = deviceDataRepositoryObject.GetDeviceDatas();
            return Ok(deviceList);

        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<Vehicle> GetVehicleIdAndName(int companyId)
        {

            try
            {
                DataTable VehicleDataTablel = devicedatarepository.GetVehicleIdAndName(companyId);

                if (VehicleDataTablel == null || VehicleDataTablel.Rows.Count == 0)
                {
                    return NotFound(new { message = "No Vehicle Data Found For The Given Company ID" });
                }
                else
                {
                    
                    List<Vehicle>vehicles = new List<Vehicle>();
                    
                    foreach (DataRow row in VehicleDataTablel.Rows)
                    {

                        Vehicle vehicle = new Vehicle();

                        vehicle.Vehicle_id = Convert.ToInt32(row["Vehicle_id"]);
                        vehicle.Brand = Convert.ToString(row["Brand"]);
                        vehicle.Plate_no = Convert.ToString(row["Plate_no"]);

                        vehicles.Add(vehicle);


                    }
                    return Ok(vehicles);
                    
                 }
            }
           
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }





        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult  CheckVehicleData(int companyId,int vehicle_id)
        {

            try
            {

                bool isVehicleDataAvailable = devicedatarepository.CheckVehicleData(companyId,vehicle_id);

                if (isVehicleDataAvailable)
                {
                    return Ok(new { message = "Vehicle is Available", isVehicleDataAvailable });
                }

                else
                {
                    return NotFound(new { message = "No Vehicle Found For Given Vehicle Id", isVehicleDataAvailable });
                }

            }

            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }





        }

        //[Route("[action]")]
        //[HttpGet]

        //public ActionResult<List<Devicedata>>  GetAllDeviceData(int companyId)
        //{

        //    try
        //    {

        //        DataTable DeviceDataTable = devicedatarepository.GetDeviceData(companyId);
        //        if (DeviceDataTable == null || DeviceDataTable.Rows.Count == 0)
        //        {
        //            return NotFound(new { message = "No Vehicle Data Found For The Given Company ID" });
        //        }
        //        else
        //        {
                   

                    

        //                Devicedata devicedata = new Devicedata();
        //                DataRow row = DeviceDataTable.Rows[0];

        //                devicedata.DrivingMode = Convert.ToString(row["DrivingMode"]);
        //                devicedata.Speed = Convert.ToInt32(row["Speed"]);
        //                devicedata.Temperature = Convert.ToInt32(row["Temperature"]);
        //                devicedata.FuelLevel = Convert.ToInt32(row["FuelLevel"]);
        //                devicedata.BatteryVoltage = Convert.ToInt32(row["BatteryVoltage"]);
        //                devicedata.DTC = Convert.ToString(row["DTC"]);
        //                devicedata.Mileage = Convert.ToInt32(row["Mileage"]);
        //                devicedata.OilTemperature = Convert.ToInt32(row["OilTemperature"]);
        //                devicedata.EngineOilLevel = Convert.ToInt32(row["EngineOilLevel"]);
        //                devicedata.AirbagStatus = Convert.ToString(row["AirbagStatus"]);

        //                return Ok(devicedata);
                    
                    

        //        }
            



        //    }

        //    catch (Exception ex)
        //    {
        //        Console.WriteLine($"Error: {ex.Message}");
        //        return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
        //    }





        //}


        [Route("[action]")]
        [HttpGet]

        public ActionResult<Devicedata> GetDeviceData(int companyId, int vehicle_id)
        {

            try
            {

                DataTable DeviceDataTable = devicedatarepository.GetDeviceData(companyId, vehicle_id);
                if (DeviceDataTable == null || DeviceDataTable.Rows.Count == 0)
                {
                    return NotFound(new { message = "No Vehicle Data Found For The Given Company ID" });
                }
                else
                {



                    Devicedata devicedata = new Devicedata();
                    DataRow row = DeviceDataTable.Rows[0];

                    devicedata.DrivingMode = Convert.ToString(row["DrivingMode"]);
                    devicedata.Speed = Convert.ToInt32(row["Speed"]);
                    devicedata.Temperature = Convert.ToInt32(row["Temperature"]);
                    devicedata.FuelLevel = Convert.ToInt32(row["FuelLevel"]);
                    devicedata.BatteryVoltage = Convert.ToInt32(row["BatteryVoltage"]);
                    devicedata.DTC = Convert.ToString(row["DTC"]);
                    devicedata.Mileage = Convert.ToInt32(row["Mileage"]);
                    devicedata.OilTemperature = Convert.ToInt32(row["OilTemperature"]);
                    devicedata.EngineOilLevel = Convert.ToInt32(row["EngineOilLevel"]);
                    devicedata.AirbagStatus = Convert.ToString(row["AirbagStatus"]);

                    return Ok(devicedata);



                }




            }

            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }





        }


        [Route("[action]")]
        [HttpGet]

        public ActionResult<List<Devicedata>> GetLocation()
        {
            DataTable locationDataTable  = devicedatarepository.GetLocation();
            List<Devicedata> deviceDatas = new List<Devicedata>();
            foreach (DataRow row in locationDataTable.Rows)

            {
                
                Devicedata devicedata = new Devicedata();

                devicedata.Lat = Convert.ToDouble(row["Lat"]);
                devicedata.Lng = Convert.ToDouble(row["Lng"]);
                devicedata.Title = Convert.ToString(row["Title"]);

                deviceDatas.Add(devicedata);
               
            }
            return Ok(deviceDatas);

        }
    }
}
