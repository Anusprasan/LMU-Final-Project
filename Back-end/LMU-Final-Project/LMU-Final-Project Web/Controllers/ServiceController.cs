using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using Microsoft.Extensions.Logging;
using System.Diagnostics.Contracts;
using System.Text;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
         ServiceRepository serviceRepository = new ServiceRepository();
        private object logger;

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<Service>> GetAllServices()
        {
            ServiceRepository repositoryObject = new ServiceRepository();
            var serviceList = repositoryObject.GetServices();

            return Ok(serviceList);

        }



        [Route("[action]")]
        [HttpPost]

        public ActionResult InsertService([FromBody] Service service)
        {
            bool isServiceInserted = serviceRepository.InsertService(service);

            if(isServiceInserted)
            {
                return Ok(new { message = " Service Added Successfully" });
            }
            else
            {
                return BadRequest(new { message = "Operation Failed" });
            }
        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<List<Service>> GetAllServiceData(int companyId)
        {

            try
            {
                DataTable ServiceDataTable = serviceRepository.GetAllServiceData(companyId);

                if (ServiceDataTable == null || ServiceDataTable.Rows.Count == 0)
                {
                    return NotFound(new { message = "No Service Data Found For The Given Company ID" });
                }

                List<Service> Services = new List<Service>();
                foreach (DataRow row in ServiceDataTable.Rows)
                {
                    Service service = new Service();

                    try
                    {
                        service.Service_id = Convert.ToInt32(row["Service_id"]);
                        service.CompanyId = Convert.ToInt32(row["CompanyId"]);
                        service.UserId = Convert.ToInt32(row["UserId"]);
                        service.Vehicle_Id = Convert.ToInt32(row["VehicleId"]);
                        service.Service_center = Convert.ToString(row["Service_center"]);
                        service.Phone_no = Convert.ToInt32(row["Phone_no"]);
                        service.Odometer_reading = Convert.ToInt32(row["Odometer_reading"]);
                        service.Description = Convert.ToString(row["Description"]);
                        service.Date = Convert.ToDateTime(row["Date"]);
                        service.Amount = Convert.ToDouble(row["Amount"]);


                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error converting data:{ex.Message}");
                        continue;
                    }

                    Services.Add(service);
                }

                return Ok(Services);
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"SQL Error: {ex.Message}");

                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while fetching repair data." });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }





        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult DeleteServiceData(int serviceId)
        {

            try
            {
                bool isDeleted = serviceRepository.DeleteServiceData(serviceId);
                if (isDeleted)
                {
                    return Ok(new { message = "Service Data Deleted SuccessFully" });
                }
                else
                {
                    return BadRequest(new { message = "Operation Failed" });
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
        public ActionResult CheckUserTypeAndServiceId(int userId,int serviceId)
        {
            try
            {
                bool isValidUserType = serviceRepository.CheckUserType(userId);
                bool isValidRepairId = serviceRepository.CheckServiceId(serviceId);

                if(isValidUserType || isValidRepairId)
                {
                    return Ok(new { isValidUserType,isValidRepairId });
                }
                else
                {
                    return NotFound();
                }
            }
            catch(Exception ex)

            {

                
                return StatusCode(500, $"An error occurred:{ex.Message}");
            }
        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<Service> GetServiceDataById(int serviceId)
        {
            try
            {
                DataTable ServiceDataTable = serviceRepository.GetServiceDataById(serviceId);

                if (ServiceDataTable == null || ServiceDataTable.Rows.Count == 0)
                {
                    return NotFound(new { message = "No Service Data Found For The Given Company ID" });
                }


                Service service = new Service();

                try
                {
                    DataRow row = ServiceDataTable.Rows[0];

                    service.Service_id = Convert.ToInt32(row["Service_id"]);
                    service.Vehicle_Id = Convert.ToInt32(row["VehicleId"]);
                    service.Service_center = (row["Service_center"]).ToString();
                    service.Date = Convert.ToDateTime(row["Date"]);
                    service.Phone_no = Convert.ToInt32(row["Phone_no"]);
                    service.Amount = Convert.ToDouble(row["Amount"]);
                    service.CompanyId = Convert.ToInt32(row["CompanyId"]);
                    service.UserId = Convert.ToInt32(row["UserId"]);
                    service.Odometer_reading= Convert.ToInt32(row["Odometer_reading"]);
                    service.Description = Convert.ToString(row["Description"]);




                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error converting data:{ex.Message}");

                }



                return Ok(service);
            }
            catch (SqlException ex)
            {
                Console.WriteLine($"SQL Error: {ex.Message}");

                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while fetching Service data." });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }
        }

        [Route("[action]")]
        [HttpPost]

        public ActionResult UpdateServiceData([FromBody] Service service)
        {
            try
            {
                bool isUpdated = serviceRepository.UpdateServiceDate(service);

                if(isUpdated)
                {
                    return Ok(new { message = "Vehicle Service Updated Successfully" });
                }
                else
                {
                    return BadRequest(new { message = "Operation Failed" });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"An error occurred:{ex.Message}");
            }
        }
       
    }
}
