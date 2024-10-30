using DinkToPdf;
using DinkToPdf.Contracts;
using LMU_Final_Project_Web.Data.Repositories;
using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Text;

namespace LMU_Final_Project_Web.Controllers
{
    public class ReportController : Controller
    {
        private readonly IConverter _converter;

        public ReportController(IConverter converter)
        {
            _converter = converter;

        }



        ReportRepository reportRepository = new ReportRepository();


        [Route("[action]")]
        [HttpGet]

        public ActionResult<List<ExpensesRecord>> GenrateMonthlyExpenseReport(int month, int year)
        {
            try
            {
                DataTable expenseData = reportRepository.GenrateMonthlyExpenseReport(month, year);

                List<ExpensesRecord> expensesrecords = new List<ExpensesRecord>();

                foreach (DataRow row in expenseData.Rows)
                {
                    ExpensesRecord expensesRecord = new ExpensesRecord();

                    expensesRecord.ExpensesDate = row["Date"] == DBNull.Value ? (DateTime?)null : Convert.ToDateTime(row["Date"]);
                    expensesRecord.VehicleId = row["vehicle_id"] == DBNull.Value ? (int?)null : Convert.ToInt32(row["Vehicle_id"]);
                    expensesRecord.Description = row["Malfunction_details"] == DBNull.Value ? (string?)null : Convert.ToString(row["Malfunction_details"]);
                    expensesRecord.Amount = row["Total_amount"] == DBNull.Value ? (float?)null : Convert.ToDouble(row["Total_amount"]);

                    expensesrecords.Add(expensesRecord);

                }
                return Ok(expensesrecords);
            }
            catch(Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred." ,ex});
            }
        }

        [Route("[action]")]
        [HttpGet]        
        
        public ActionResult<List<IncomeRecord>>GetMonthlyIncome(int month, int year)
        {
            try
            {
                DataTable incomeData = reportRepository.GetMonthlyIncome(month, year);

                List<IncomeRecord> incomeRecords = new List<IncomeRecord>();

                foreach(DataRow row in incomeData.Rows)
                {
                    IncomeRecord incomeRecord = new IncomeRecord();

                    incomeRecord.Date = row["End_date"] == DBNull.Value ? (DateTime?)null : Convert.ToDateTime(row["End_date"]);
                    incomeRecord.VehicleId = row["Vehicle_id"] == DBNull.Value ? (int?)null : Convert.ToInt32(row["Vehicle_id"]);
                    incomeRecord.Description = row["Journey_description"] == DBNull.Value ? (string?)null : Convert.ToString(row["Journey_description"]);
                    incomeRecord.Amount = row["Payment"] == DBNull.Value ? (Double?)null : Convert.ToDouble(row["Payment"]);

                    incomeRecords.Add(incomeRecord);    
                }
                return Ok(incomeRecords);
            }
            catch(Exception ex) 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new { message = "An unexpected error occurred.", ex });
            }
        }


         
        
    }
}
