namespace LMU_Final_Project_Web.Models
{
    public class Journey

    {
        public int? Journey_id { get; set; }
        public int? CompanyId { get; set; }
        public int? Vehicle_id { get; set; }
        public int? UserId { get; set; }
        public DateTime? Started_date { get; set; }
        public DateTime? End_date { get; set; }

        public int? Odometerreading_beforejourney { get; set; }
        public int? Odometerreading_afterjourney { get; set; }
        public string? Journey_description { get; set; }
        public string? Vehiclestatus_beforejourney { get; set; }
        public string? Vehiclestatus_afterjourney { get; set; }

        public string? JourneyStatus { get; set; }
        public string? Vehiclephoto_beforejourney { get; set; }
        public string? Vehiclephoto_afterjourney { get; set; }
        public int? Payment { get; set; }
        public DateTime? EstimatedArrivalDate { get; set; }
        public string? Package { get; set; }
        public string? Journey_createdby { get; set; }
        public DateTime? Journey_createdon { get; set; }
        public string? Journey_modifyby { get; set; }
        public DateTime? Journey_modifyon { get; set; }
    }  
}
