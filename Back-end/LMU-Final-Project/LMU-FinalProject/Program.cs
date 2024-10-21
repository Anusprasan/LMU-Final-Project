using LMU_FinalProject.Data.Repositories;
using Microsoft.AspNetCore.Mvc.Formatters;
using System;
using System.Data;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    static void Main(string[] args)
    {
       
        int[] speeds = { 10,20,30,40,50,60,70,80,90,100,110,120};
        int[] temperatures = { 10,11,12,89,90 };
        int[] fuelLevels = { 25, 50, 75, 100,75,50,25 };
        float[] batteryVoltages = { 12.0f, 12.1f, 12.2f };
        string[] DTCCodes = { "P0001", "P0002", "P0003", "P0004", "P0005", "P0046", "P0047", "P0048", "None" };
        int mileages = 25520;
        int[] oilLevels = { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 };
        string[] airbagStatuses = {"Active", "Fault", "Deactivated", "Deployed" };



        Task drivingModeTask = Task.Run(() => CycleDrivingModes());
        Task speedTask = Task.Run(() => UpdateSpeed(speeds));
        Task coolanttemperatureTask = Task.Run(() => UpdateCoolantTemperature(temperatures));
        Task fuelLevelTask = Task.Run(() => UpdateFuelLevel(fuelLevels));
        Task batteryVoltageTask = Task.Run(() => UpdateBatteryVoltage(batteryVoltages));
        Task dtcCodeTask = Task.Run(() => UpdateDTCCode(DTCCodes));
        Task mileageTask = Task.Run(() => UpdateMileage(mileages));
        Task oilLevelTask = Task.Run(() => UpdateOilLevel(oilLevels));
        Task airbagStatusTask = Task.Run(() => UpdateAirbagStatus(airbagStatuses));


        Task.WaitAll(drivingModeTask, speedTask, coolanttemperatureTask, fuelLevelTask, batteryVoltageTask, dtcCodeTask, mileageTask, oilLevelTask, airbagStatusTask);
    }

    
    static void CycleDrivingModes()
    {
        while (true)
        {
            UpdateDrivingMode("Eco");
            Thread.Sleep(5000);
            UpdateDrivingMode("Sport");
            Thread.Sleep(5000);
        }
    }

  
    static void UpdateDrivingMode(string mode)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        bool data = deviceRepository.UpdateDrivingMode(mode);

        Console.WriteLine(data ? $"{mode} mode update successful" : $"{mode} mode update failed");
    }

    static void UpdateSpeed(int[] speeds)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        while (true) 
            foreach (int speed in speeds)
            {
                Console.WriteLine($"Updating speed to: {speed} km/h");

                bool isSpeedUpdated = deviceRepository.UpdateSpeed(speed);

                Console.WriteLine(isSpeedUpdated ? $"Speed updated to {speed} km/h" : "Speed update failed");

                Thread.Sleep(1000);
        }
    }

    static void UpdateCoolantTemperature(int[] temperatures)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (true)
            {
                foreach(int temperature in temperatures){
                    Console.WriteLine($"Updating temperature to:{temperature} °C");

                    bool isTemperatureUpdated = deviceRepository.UpdateCoolantTemperature(temperature);
                    Console.WriteLine(isTemperatureUpdated ? $"Temperature Updated to {temperature} °C" : "Temperature update Failed");

                    Thread.Sleep(1000);
                }
            }
        }
        catch(Exception ex)
        {
            Console.WriteLine(ex);
        }


    }
    static void UpdateFuelLevel(int[] fuelLevels)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (true)
            {
                foreach (int fuelLevel in fuelLevels)
                {
                    Console.WriteLine($"Updating fuelLevel to:{fuelLevel} %");

                    bool idFuelLevelUpdated = deviceRepository.UpdateFuelLevel(fuelLevel);
                    Console.WriteLine(idFuelLevelUpdated ? $"FuelLevel Updated to {fuelLevel} %" : "FuelLevel update Failed");

                    Thread.Sleep(2000);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }


    }

    static void UpdateBatteryVoltage(float[] batteryVoltages)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (true)
            {
                foreach (float batteryVoltage in batteryVoltages)
                {
                    Console.WriteLine($"Updating batteryVoltage to:{batteryVoltage}V");

                    bool isBatteryVoltageUpdated = deviceRepository.UpdateBatteryVoltage(batteryVoltage);
                    Console.WriteLine(isBatteryVoltageUpdated ? $"BatteryVoltage Updated to {batteryVoltage}V" : "batteryVoltage update Failed");

                    Thread.Sleep(2000);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }


    }

    static void UpdateDTCCode(string[] DTCCodes)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (true)
            {
                foreach (string DTCCode in DTCCodes)
                {
                    Console.WriteLine($"Updating DTCCode to:{DTCCode}");

                    bool isDTCCodeUpdated = deviceRepository.UpdateDTCCode(DTCCode);
                    Console.WriteLine(isDTCCodeUpdated ? $"DTCCodes Updated to {DTCCode} " : "DTCCodes update Failed");

                    Thread.Sleep(2000);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }




    }

    static void UpdateMileage(int mileages)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (mileages<=100000)
            {
               
                    Console.WriteLine($"Updating Mileage to:{mileages}");

                    bool isMileageUpdated = deviceRepository.UpdateMileage(mileages);
                    Console.WriteLine(isMileageUpdated ? $"Mileages Updated to {mileages} " : "Mileage update Failed");
                     mileages  = mileages+1;

                    Thread.Sleep(1000);
                
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }




    }


    static void UpdateOilLevel(int[] oilLevels)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (true)
            {
                foreach (int oilLevel in oilLevels)
                {
                    Console.WriteLine($"Updating OilLevel to:{oilLevel}");

                    bool isOilLevelUpdated = deviceRepository.UpdateOilLevel(oilLevel);
                    Console.WriteLine(isOilLevelUpdated ? $"OilLevel Updated to {oilLevel} " : "OilLevel update Failed");

                    Thread.Sleep(2000);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }




    }

    static void UpdateAirbagStatus(string[] airbagStatuses)
    {
        DeviceRepository deviceRepository = new DeviceRepository();

        try
        {
            while (true)
            {
                foreach (string airbagStatus in airbagStatuses)
                {
                    Console.WriteLine($"Updating AirbagStatus to:{airbagStatus}");

                    bool isAirbagStatusUpdated = deviceRepository.UpdateAirbagStatus(airbagStatus);
                    Console.WriteLine(isAirbagStatusUpdated ? $"AirbagStatus Updated to {airbagStatus} " : "AirbagStatus update Failed");

                    Thread.Sleep(2000);
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }




    }
}
