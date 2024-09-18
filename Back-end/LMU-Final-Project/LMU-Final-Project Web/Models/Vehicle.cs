namespace LMU_Final_Project_Web.Models
{
    public class Vehicle
    {

        public int Vehicle_id { get; set; }
        //public int User_id { get; set; }    
        public string Type { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Plate_no { get; set; }
        public DateTime LicenceIssuedDate { get; set; }
        public DateTime LicenceExpiryDate { get; set; }
        public DateTime InsuranceIssuedDate { get; set; }
        public DateTime InsuranceExpiryDate { get; set; }

        public string VehicleStatus { get; set; }
        //public string Created_by { get; set; }
        //public DateTime Created_on { get; set; }
        //public string Modify_by { get; set; }
        //public DateTime Modify_on { get; set; }

    }
}
