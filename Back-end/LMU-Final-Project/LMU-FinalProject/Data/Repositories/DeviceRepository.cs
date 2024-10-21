using LMU_Final_Project_Web.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LMU_FinalProject.Data.Repositories
{
    internal class DeviceRepository
    {
        SqlAccess sqlAccess = new SqlAccess();
        public bool UpdateDrivingMode(string mode)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool isSuccess = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set DrivingMode ='{mode}' where VehicleId ='{VehicleId}'";

                bool result = sqlAccess.Insertdata(SqlString);

                if (!result)
                {
                    isSuccess= false;
                    Console.WriteLine($"Update Failed");

                }
                else
                {
                    Console.WriteLine($"Driving mode updated to '{mode}' for vehicleId: {VehicleId}");
                }
            }

            return isSuccess;
            
        }

        public bool UpdateSpeed(int speed)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool isSuccess = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set Speed ='{speed}' where VehicleId ='{VehicleId}'";

                bool result = sqlAccess.Insertdata(SqlString);

                if (!result)
                {
                    isSuccess = false;
                    Console.WriteLine($"Update Failed");

                }
                else
                {
                    Console.WriteLine($"Speed  updated to '{speed}' for vehicleId: {VehicleId}");
                }
            }

            return isSuccess;

        }

        public bool UpdateCoolantTemperature(int temperature)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool isSuccess = true;

            foreach(int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set Temperature = '{temperature}' where VehicleId ='{VehicleId}'";

                bool result = sqlAccess.Insertdata(SqlString);

                if (!result)
                {
                    isSuccess = false;
                    Console.WriteLine($"Update Failed");

                }
                else
                {
                    Console.WriteLine($"Temperature  updated to '{temperature}' for vehicleId: {VehicleId}");
                }

            }
            return isSuccess;

        }

        public bool UpdateFuelLevel(int fuelLevel)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool result = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set FuelLevel = '{fuelLevel}' where VehicleId ='{VehicleId}'";

                 result = sqlAccess.Insertdata(SqlString);

                

            }
            return result;

        }

        public bool UpdateBatteryVoltage(float batteryVoltage)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool result = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set FuelLevel = '{batteryVoltage}' where VehicleId ='{VehicleId}'";

                result = sqlAccess.Insertdata(SqlString);



            }
            return result;

        }


        public bool UpdateDTCCode(string DTCCode)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool result = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set DTC = '{DTCCode}' where VehicleId ='{VehicleId}'";

                result = sqlAccess.Insertdata(SqlString);



            }
            return result;

        }

        public bool UpdateMileage(int mileage)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool result = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set Mileage = '{mileage}' where VehicleId ='{VehicleId}'";

                result = sqlAccess.Insertdata(SqlString);



            }
            return result;

        }

        public bool UpdateOilLevel(int oilLevel)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool result = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set EngineOilLevel = '{oilLevel}' where VehicleId ='{VehicleId}'";

                result = sqlAccess.Insertdata(SqlString);



            }
            return result;

        }

        public bool UpdateAirbagStatus(string airbagStatus)
        {
            int[] VehicleIds = { 55, 82, 83, 122, 123, 125, 126 };
            bool result = true;

            foreach (int VehicleId in VehicleIds)
            {
                string SqlString = $"update Devicedata set AirbagStatus = '{airbagStatus}' where VehicleId ='{VehicleId}'";

                result = sqlAccess.Insertdata(SqlString);



            }
            return result;

        }



    }
}
