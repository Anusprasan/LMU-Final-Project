﻿namespace LMU_Final_Project_Web.Models
{
    public class Service
    {
        public int? Service_id { get; set; } 
        public int? CompanyId { get; set; }
        public int? UserId { get; set; }

        public int? Vehicle_Id { get; set; }
        public string? Service_center { get; set; }
        public int?  Phone_no { get; set; }
        public int? Odometer_reading { get; set; }
        public string? Description { get; set; }
        public DateTime? Date { get; set; }
        public Double? Amount { get; set; }
        public string? Created_by { get; set; }
        public DateTime? Created_on { get; set; }
        public string? Modify_by { get; set; }
        public DateTime? Modify_on { get; set; }


    }
}
