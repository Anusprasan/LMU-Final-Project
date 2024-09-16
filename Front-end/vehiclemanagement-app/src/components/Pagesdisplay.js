import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Vehicle from '../pages/Vehicle';
import Reports from '../pages/Reports';
import Journey from '../pages/Journey';
import Mainetnance from '../pages/Maintenance';
import Realtimedata from '../pages/Realtimedata';
import Accounts from '../pages/Accounts';
import Logout from '../pages/Logout';
import Vehicleupdate from '../pages/Vehicleupdate';
import Login from '../pages/Login';

export default function Pagesdisplay() {
  return (
    <div>

      <Routes>
        
        <Route path="/Home" element={<Home />} />
        <Route path="/Vehicle" element={<Vehicle />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Maintenance" element={<Mainetnance />} />
        <Route path="/Realtimedata" element={<Realtimedata/>} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/VehicleUpdate/:vehicle_id" element={<Vehicleupdate/>}></Route>
      </Routes>
      
      
        
    </div>
  )
}
