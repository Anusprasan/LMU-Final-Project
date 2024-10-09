using System.ComponentModel.DataAnnotations;
using System.Text;

namespace LMU_Final_Project_Web.Models
{
    public class Repair
    {
        public int? Repair_id { get; set; }
        public int? Vehicle_id { get; set; }
        public string? Garage_name { get; set; }
        public DateTime? Date { get; set; }
        public string? Address { get; set; }
        public int? Phone_no { get; set; }
        public string?Malfunction_details { get; set; }
        public Double? Total_amount { get; set; }
        
        public string? Created_by { get; set; }
        public DateTime? Created_on { get; set; }
        public string? Modify_by { get; set; }
        public DateTime? Modify_on { get; set; }

    }
}
