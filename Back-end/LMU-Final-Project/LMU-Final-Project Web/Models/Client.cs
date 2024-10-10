namespace LMU_Final_Project_Web.Models
{
    public class Client
    {
        public int? Client_id { get; set; }
        public int? CompanyId { get; set; }
        public int? UserId { get; set; }
        public int? VehicleId { get; set; }
        public int? Journey_id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public int? Phone_no { get; set; }
        public string? Nic_no { get; set; }
        public string? Drivinglicence_photo{ get; set; }
        public string? Client_photo{ get; set; }
        public string? Created_by { get; set; }
        public DateTime? Created_on { get; set; }
        public string? Modify_by { get; set; }
        public DateTime? Modify_on { get; set;}
    }
}
