using LMU_Final_Project_Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Xml.Linq;

namespace LMU_Final_Project_Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {

        [HttpGet("types")]
        public ActionResult<IEnumerable<VehicleType>> GetVehicleTypes()
        {
            var vehicleTypes = new List<VehicleType>
            {
                new VehicleType { Id = 1, Name = "Sedan" },
                new VehicleType { Id = 2, Name = "SUV" },
                new VehicleType { Id = 3, Name = "Truck" },
                new VehicleType { Id = 4, Name = "Coupe" },
                new VehicleType { Id = 5, Name = "Convertible" },
                new VehicleType { Id = 6, Name = "Minivan" },
                new VehicleType { Id = 7, Name = "Hatchback" }
            };

            return Ok(vehicleTypes);
        }

        [HttpGet("vehicles")]
        public ActionResult<List<Vehicle>> GetVehicles()
        {   
            //Detail Code
            Vehicle car1 = new Vehicle
            {
                PlateNo = "CAL-2001",
                DisplayName = "WagonR",
                TypeId = 1
            };

            Vehicle car2 = new Vehicle
            {
                PlateNo = "CAX-1234",
                DisplayName = "ALTO",
                TypeId = 1
            };

            Vehicle car3 = new Vehicle
            {
                PlateNo = "PF-9926",
                DisplayName = "KDH",
                TypeId = 2
            };


            var vehicles = new List<Vehicle>();
            vehicles.Add(car1);
            vehicles.Add(car2);
            vehicles.Add(car3);


            //Simplified Code
            var vehiclesCopy = new List<Vehicle> 
            { 
                new Vehicle{PlateNo="sasa",DisplayName="sasa",TypeId=1},
                new Vehicle{PlateNo="sasa",DisplayName="sasa",TypeId=1},
                new Vehicle{PlateNo="sasa",DisplayName="sasa",TypeId=1}
            };

            return Ok(vehicles);
        }

        //IsMyVehicle(plateNo)
        //{
        //    return true;
        //}

        public class Vehicle
        {
            public int TypeId { get; set; }

            public string DisplayName { get; set; }

            public string PlateNo { get; set; }
        }

        [HttpGet("brands")]
        public ActionResult<IEnumerable<VehicleBrand>> GetVehicleBrands()
        {
            var vehicleBrands = new List<VehicleBrand>
            {
                new VehicleBrand { Id = 1, Name = "Toyota" },
                new VehicleBrand { Id = 2, Name = "Honda" },
                new VehicleBrand { Id = 3, Name = "Ford" },
                new VehicleBrand { Id = 4, Name = "Chevrolet" },
                new VehicleBrand { Id = 5, Name = "BMW" },
                new VehicleBrand { Id = 6, Name = "Audi" },
                new VehicleBrand { Id = 7, Name = "Tesla" }
            };

            return Ok(vehicleBrands);
        }
    }


}
