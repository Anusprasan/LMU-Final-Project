using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMU_FinalProject.Models
{
    internal class Device
    {
        public int? DeviceId { get; set; }
        public int? CompanyId { get; set; }
        public int? UserId { get; set; }
        public int? VehicleId { get; set; }
        public int? Speed { get; set; }
        public int? Temperature { get; set; }
        public int? FuelLevel { get; set; }
        public int? BatteryVoltage { get; set; }
        public string? DTC { get; set; }
        public int? Mileage { get; set; }
        public int? OilTemperature { get; set; }
        public int? EngineOilLevel { get; set; }
        public string? AirbagStatus { get; set; }

    }
}
