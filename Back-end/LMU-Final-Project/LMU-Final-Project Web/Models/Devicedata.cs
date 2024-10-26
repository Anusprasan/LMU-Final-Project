namespace LMU_Final_Project_Web.Models
{
    public class Devicedata
    {
        public int Device_id { get; set; }
        public int? CompanyId { get; set; }
        public int? UserId { get; set; }
        public int? VehicleId { get; set; }
        public string? DrivingMode { get; set; }
        public int? Speed { get; set; }
        public int? Temperature { get; set; }
        public int? FuelLevel { get; set; }
        public int? BatteryVoltage { get; set; }
        public string? DTC { get; set; }
        public int? Mileage { get; set; }
        public int? OilTemperature { get; set; }
        public int? EngineOilLevel { get; set; }
        public string? AirbagStatus { get; set; }
        public Double? Lat { get; set; }
        public Double? Lng { get; set; }
        public string? Title { get; set; }


    }
}
