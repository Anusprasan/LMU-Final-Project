using Microsoft.AspNetCore.Mvc.Formatters;
using System.Data;

namespace LMU_Final_Project_Web.Data.Repositories
{
    public class ReportRepository
    {
        SqlAccess sqlAccess = new SqlAccess();

        public DataTable GenrateMonthlyExpenseReport(int month, int year)
        {
            string SqlString = $"select * from Repair where month(Date) = '{month}' and year(Date) = '{year}'";

            return sqlAccess.GetDataFromTables(SqlString) ;
        }


        public DataTable GetMonthlyIncome(int month, int year)
        {
            string SqlString = $"select Vehicle_id,End_date,Payment,Journey_description from Journey where month(End_date)= '{month}' and year(End_date) = '{year}' and JourneyStatus='Completed'";

            return sqlAccess.GetDataFromTables(SqlString);
        }
    }

   
}
