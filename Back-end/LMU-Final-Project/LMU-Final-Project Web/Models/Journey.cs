namespace LMU_Final_Project_Web.Models
{
    public class Journey

    {
        public int? Journey_id { get; set; }
        public int? Vehicle_id { get; set; }
        public int? UserId { get; set; }
        public DateTime? Started_date { get; set; }
        public DateTime? End_date { get; set; }
        public string? Malfunction { get; set; }
        public int? Odometerreading_beforejourney { get; set; }
        public int? Odometerreading_afterjourney { get; set; }
        public string? Journey_description { get; set; }
        public string? Vehiclestatus_beforejourney { get; set; }
        public string? Vehiclestatus_afterjourney { get; set; }

        public string? JourneyStatus { get; set; }
        //public string Vehiclephoto_beforejourney { get; set; }
        //public string Vehiclephoto_afterjourney { get; set; }
        //public string Journeystarted_createdby { get; set; }
        //public DateTime Journeystarted_createdon { get; set; }
        //public string Journeystarted_modifyby { get; set; }
        //public DateTime Journeystarted_modifyon { get; set; }
        //public string Journeyend_createdby { get; set; }
        //public DateTime Journeyend_createdon { get; set; }

        //public string Journeyend_modifyby { get; set; }
        //public DateTime Journeyend_modifyon { get; set; }
    }
}
