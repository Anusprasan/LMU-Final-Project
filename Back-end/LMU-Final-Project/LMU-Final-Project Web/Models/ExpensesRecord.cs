namespace LMU_Final_Project_Web.Models
{
    public class ExpensesRecord
    {
        public DateTime? ExpensesDate { get; set;} 
        public Double?  Amount { get; set;}
        public string Description { get; set;}
        public int? VehicleId { get; set;}

    }
}
