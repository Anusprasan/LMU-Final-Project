import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Vehicle from '../pages/Vehicle';
import Reports from '../pages/Reports';
import Journey from '../pages/Journey';
import Mainetnance from '../pages/Maintenance';
import Realtimedata from '../pages/Realtimedata';
import Accounts from '../pages/Reports';
import Logout from '../pages/Logout';

export default function Pagesdisplay() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vehicle" element={<Vehicle />} />
        <Route path="/Journey" element={<Journey />} />
        <Route path="/Maintenance" element={<Mainetnance />} />
        <Route path="/Realtimedata" element={<Realtimedata/>} />
        <Route path="/Reports" element={<Reports />} />
        <Route path="/Accounts" element={<Accounts />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      
      
        
    </div>
  )
}
