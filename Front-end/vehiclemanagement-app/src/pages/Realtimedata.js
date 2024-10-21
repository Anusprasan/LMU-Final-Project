import React, { useEffect, useState } from "react";
import "../css files/RealTimeData.css";
import { Link ,useParams} from 'react-router-dom';

export default function Realtimedata() {
  const params = useParams();
  const [deviceDatas,setDeviceDatas] = useState({});
  const [vehicleId,setVehicleId] = useState('');
  const [speed, setSpeed] = useState(0);
  const [companyId,setCompanyId] = useState('');
  const  [drivingMode,setDrivingMode] =  useState('');
  const [fuelLevel, setFuelLevel] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [batteryVoltage, setBatteryVoltage] = useState(0);
  const [odometerValue, setOdometerValue] = useState(0);
  const [dtcCodes , setDTCCodes] = useState('');
  const [oilLevel,setOilLevel] = useState('');
  const [airbagstatus,setAirBagStatus] = useState('');
  

  useEffect(()=>{
    const getRealTimeData = async () =>{
      try{
        const CompanyId =localStorage.getItem('companyId');
        setCompanyId(CompanyId)

        const VehicleId = params.VehicleId;
        setVehicleId(VehicleId);

        const responseRealTimeData = await fetch(`https://localhost:7096/api/Devicedata/GetDeviceData?companyId=${CompanyId}&vehicle_id=${VehicleId}
        `);

        if(!responseRealTimeData.ok){
          throw new Error (`Http error! status :${responseRealTimeData.status}`)
        }
        const data = await responseRealTimeData.json();
        console.log(data);
        console.log("Anush");
        setDeviceDatas(data);
        setSpeed(data.speed);
        setDrivingMode(data.drivingMode);
        setFuelLevel(data.fuelLevel);
        setTemperature(data.temperature);
        setBatteryVoltage(data.batteryVoltage);
        setOdometerValue(data.mileage);
        setDTCCodes(data.dtc);
        setOilLevel(data.engineOilLevel);
        setAirBagStatus(data.airbagStatus);
       


      }
      catch(err){
        console.error(err);
      }
    }
    const intervalId = setInterval(() => {
      getRealTimeData();
    }, 1000);

  // Cleanup interval on unmount
  return () => clearInterval(intervalId);


  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      setOdometerValue(prev => prev + Math.floor(Math.random() * 10)); // Simulating odometer increment
    }, 1000); // Change value every second

    return () => clearInterval(interval);
  }, []);

  // Function to update the speed and rotate the needle
  const updateSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };
  return (
    <div>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-first-tab" data-bs-toggle="tab" data-bs-target="#nav-first" type="button" role="tab" aria-controls="nav-first" aria-selected="true">1</button>
          <button class="nav-link" id="nav-second-tab" data-bs-toggle="tab" data-bs-target="#nav-second" type="button" role="tab" aria-controls="nav-second" aria-selected="false">2</button>
          
        </div>
    </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-first" role="tabpanel" aria-labelledby="nav-first-tab">
        <div className="container mt-5">
      <div className="row">
       
        <div className="col-md-4">
          <div className="Realtimedata-card text-center">
            <div className="Realtimedata-card-body">
              <h2>Speedometer</h2>

              {/* Speedometer Gauge */}
              <div className="speedometer">
                <div
                  className="needle"
                  style={{
                    transform: `translate(-50%, -100%) rotate(${
                      (speed / 120) * 240 - 120
                    }deg)`, // Adjust the rotation based on speed
                  }}
                ></div>
                <div className="speedometer-label">Speed (km/h)</div>
              </div>

              {/* Display current speed */}
              <div className="speed-value">{speed} km/h</div>

              
            </div>
          </div>
        </div>

       {/* Driving Mode */}
       <div className="col-md-4">
            <div className="Realtimedata-card text-center">
              <div className="Realtimedata-card-body">
                <h2>Driving Mode</h2>
                <div className="driving-mode-display">
                  {drivingMode === "Eco" && (
                    <div className="driving-mode-eco">
                      Eco Mode
                    </div>
                  )}
                  {drivingMode === "Sport" && (
                    <div className="driving-mode-sport">
                      Sport Mode
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="Realtimedata-card text-center">
              <div className="Realtimedata-card-body">
                <h2>Fuel Level</h2>
                <div className="fuel-meter">
                  <div className="fuel-level">
                    {fuelLevel} / 100
                  </div>
                  <div className="fuel-bar">
                    <div
                      className="fuel-fill"
                      style={{
                        width: `${fuelLevel}%`, // Display fuel level as a percentage
                      }}
                    ></div>
                  </div>
                </div>
                <div className="fuel-value">{fuelLevel} %</div>
              </div>
            </div>
          </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="Realtimedata-card text-center">
            <div className="Realtimedata-card-body">
              <h2>Temperature</h2>
              <div className="temperature-gauge">
                <div className="gauge-container">
                  <div className="gauge">
                    <div
                      className="gauge-needle"
                      style={{
                        transform: `rotate(${(temperature / 120) * 180 - 90}deg)`, // Adjust rotation based on temperature
                      }}
                    ></div>
                    <div className="gauge-circle"></div>
                    <div className="gauge-marks">
                      {/* Temperature markings */}
                      {[0, 30, 60, 90, 120].map((temp) => (
                        <div key={temp} className="gauge-mark" style={{ transform: `rotate(${(temp / 120) * 180 - 90}deg)` }}>
                          <span>{temp}°C</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="temperature-value">{temperature} °C</div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="Realtimedata-card text-center">
            <div className="Realtimedata-card-body">
              <h2>Battery Voltage</h2>
              <div className="battery-meter">
                <div className="battery-container">
                  <div className="battery">
                    <div
                      className="battery-fill"
                      style={{
                        height: `${(batteryVoltage / 12) * 100}%`, // Assuming 12V is the max voltage
                      }}
                    ></div>
                  </div>
                </div>
                <div className="battery-level">{batteryVoltage} V</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="Realtimedata-card text-center">
            <div className="Realtimedata-card-body">
              <h2>Odometer</h2>
              <div className="odometer">
                {String(odometerValue).padStart(6, '0').split('').map((digit, index) => (
                  <div key={index} className="odometer-digit">
                    <span>{digit}</span>
                  </div>
                ))}
              </div>
              <div className="odometer-value">{odometerValue} km</div>
            </div>
          </div>
        </div>
      </div>

      
        </div>

        </div>
        <div class="tab-pane fade" id="nav-second" role="tabpanel" aria-labelledby="nav-second-tab">
        <div className="container mt-5">
      <div className="row">
      <div className="col-md-4">
        <div className="Realtimedata-card text-center">
          <div className="Realtimedata-card-body">
            <h2>DTC Codes</h2>
            <div className="dtc-codes-list">
              {dtcCodes ? (
                dtcCodes.split(',').map((code, index) => (
                  <div key={index} className="dtc-code">
                    <span className="code-label">Code: {code}</span>
                    {/* You can add a description if you have one */}
                    <span className="code-description">Description for {code}</span>
                  </div>
                ))
              ) : (
                <p>No DTC Codes Detected</p>
              )}
            </div>
          </div>
        </div>
      </div>


      <div className="col-md-4">
        <div className="Realtimedata-card text-center">
          <div className="Realtimedata-card-body">
            <h2>Engine Oil Level</h2>
            <div className="oil-level-display">
              {oilLevel !== '' ? (
                <>
                  <span className="oil-level-text">{oilLevel}%</span>
                  <div className="oil-level-bar">
                    <div
                      className="oil-level-bar-fill"
                      style={{ width: `${oilLevel}%` }}
                    ></div>
                  </div>
                </>
              ) : (
                <p>Data not available</p>
              )}
            </div>
          </div>
        </div>
      </div>  

      <div className="col-md-4">
        <div className="Realtimedata-card text-center">
          <div className="Realtimedata-card-body">
            <h2>Airbag Status</h2>
            <div className="airbag-status-display">
              {airbagstatus !== '' ? (
                <>
                  <span className={`airbag-status-text ${airbagstatus === 'Activated' ? 'activated' : 'deactivated'}`}>
                    {airbagstatus}
                  </span>
                  <div className={`airbag-status-indicator ${airbagstatus === 'Activated' ? 'activated' : 'deactivated'}`}></div>
                </>
              ) : (
                <p>Data not available</p>
              )}
            </div>
          </div>
        </div>
      </div>
   
      </div>
      

      
        </div>
        </div>
       
      </div>
     
    </div>
  )
}
