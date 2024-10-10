using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RepairController : ControllerBase
    {
        RepairsRepository repairsRepository = new RepairsRepository();

        //[Route("[action]")]
        //[HttpGet]
        //public ActionResult<List<Repair>> GetAllRepairs()
        //{
        //    RepairsRepository repairRepositoryObject = new RepairsRepository();
        //    var repairList = repairRepositoryObject.GetRepairs();

        //    return Ok(repairList);
        //}

        [Route("[action]")]
        [HttpGet]
        public ActionResult<List<int>> GetVehicleId(int userId)
        {

            List<int> vehicleIds = repairsRepository.GetVehicleId(userId);
            return Ok(vehicleIds);
        }


        [Route("[action]")]
        [HttpPost]
        public ActionResult InsertVehicleRepairs([FromBody] Repair repair)
        {
            bool isInserted = repairsRepository.InsertVehicleRepairs(repair);

            if(isInserted)
            {
                return Ok(new { message = "Repair Added Successfully" });
            }
            else
            {
                return BadRequest(new { message = "Operation Failed" });
            }
            
        }

        [Route("[action]")]
        [HttpGet]

        public ActionResult<List<Repair>> GetAllRepairData(int companyId)
        {

            try
            {
                DataTable RepairDataTable = repairsRepository.GetAllRepairData(companyId);

                if(RepairDataTable == null ||RepairDataTable.Rows.Count == 0)
                {
                    return NotFound(new { message = "No Repair Data Found For The Given Company ID" });
                }

                List<Repair> Repairs = new List<Repair>();
                foreach (DataRow row in RepairDataTable.Rows)
                {
                    Repair repair = new Repair();

                    try
                    {
                        
                        repair.Repair_id = Convert.ToInt32(row["Repair_id"]);
                        repair.Vehicle_id = Convert.ToInt32(row["Vehicle_id"]);
                        repair.Garage_name = (row["Garage_name"]).ToString();
                        repair.Date = Convert.ToDateTime(row["Date"]);
                        repair.Phone_no = Convert.ToInt32(row["Phone_no"]);
                        repair.Total_amount = Convert.ToDouble(row["Total_amount"]);
                        repair.CompanyId = Convert.ToInt32(row["CompanyId"]);
                        repair.UserId = Convert.ToInt32(row["UserId"]);
                        repair.Address= Convert.ToString(row["Address"]);
                        repair.Malfunction_details = Convert.ToString(row["Malfunction_details"]);



                        
                    }
                    catch(Exception ex)
                    {
                        Console.WriteLine($"Error converting data:{ex.Message}");
                        continue;
                    }
                    
                    Repairs.Add(repair);
                }

                return Ok(Repairs);
            }
            catch(SqlException ex)
            {
                Console.WriteLine($"SQL Error: {ex.Message}");

                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An error occurred while fetching repair data." });
            }
            catch(Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." });
            }
            

            

            
        }


        [Route("[action]")]
        [HttpGet]

        public ActionResult<Repair> GetRepairDataByRepairId(int repairId)
        {

            try
            {
                DataTable RepairDataTable = repairsRepository.GetRepairDataByRepairId(repairId);

                if (RepairDataTable == null || RepairDataTable.Rows.Count == 0)
                {
                    return NotFound(new { message = "No Repair Data Found For The Given Company ID" });
                }

                
                    Repair repair = new Repair();

                    try
                    {
                    DataRow row = RepairDataTable.Rows[0];

                        repair.Repair_id = Convert.ToInt32(row["Repair_id"]);
                        repair.Vehicle_id = Convert.ToInt32(row["Vehicle_id"]);
                        repair.Garage_name = (row["Garage_name"]).ToString();
                        repair.Date = Convert.ToDateTime(row["Date"]);
                        repair.Phone_no = Convert.ToInt32(row["Phone_no"]);
                        repair.Total_amount = Convert.ToDouble(row["Total_amount"]);
                        repair.CompanyId = Convert.ToInt32(row["CompanyId"]);
                        repair.UserId = Convert.ToInt32(row["UserId"]);
                        repair.Address = Convert.ToString(row["Address"]);
                        repair.Malfunction_details = Convert.ToString(row["Malfunction_details"]);




                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"Error converting data:{ex.Message}");
                        
                    }

                    

                return Ok(repair);
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

    }
}
