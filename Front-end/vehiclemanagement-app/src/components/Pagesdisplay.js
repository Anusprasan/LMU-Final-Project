import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Vehicle from '../pages/Vehicle';
import Reports from '../pages/Reports';
import Journey from '../pages/Journey';
import Mainetnance from '../pages/Maintenance';

import Accounts from '../pages/Accounts';
import Logout from '../pages/Logout';
import Vehicleupdate from '../pages/Vehicleupdate';
import Login from '../pages/Login';
import Journeyclientdetails from '../pages/Journeyclientdetails';
import RepairViewMore from '../pages/RepairViewMore';
import RepairUpdate from '../pages/RepairUpdate';
import AddRepair from '../pages/AddRepair';
import AddService from '../pages/AddService';
import ServiceUpdate from '../pages/ServiceUpdate';
import Map from '../pages/Map';
import RealTimeDataAccessPage from '../pages/RealTimeDataAccessPage';
import Realtimedata from '../pages/Realtimedata';



export default function Pagesdisplay() {
  return (
    <div>

      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Vehicle" element={<Vehicle />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Maintenance" element={<Mainetnance />} />
        
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/VehicleUpdate/:vehicle_id" element={<Vehicleupdate/>}></Route>
        <Route path="/Journeyclientdetails" element ={<Journeyclientdetails/>}></Route>
        <Route path="/RepairViewMore/:RepairId" element={<RepairViewMore/>}></Route>
        <Route path="/RepairUpdate/:RepairId" element ={<RepairUpdate/>}></Route>
        <Route path= "/AddRepair" element = {<AddRepair/>}></Route>
        <Route path= "/AddService" element = {<AddService/>}></Route>
        <Route path= "/ServiceUpdate/:ServiceId" element = {<ServiceUpdate/>}></Route>
        <Route path="/Map" element = {<Map/>}></Route>
        <Route path ="/RealTimeDataAccessPage" element ={<RealTimeDataAccessPage/>}></Route>
        <Route path ="/Realtimedata/:VehicleId" element={<Realtimedata/>}></Route>
        

      </Routes>
      
      
        
    </div>
  )
}
