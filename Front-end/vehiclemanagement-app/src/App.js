import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navbaritems from './components/Navbaritems'
import Footer from './components/Footer';
import Pagesdisplay from './components/Pagesdisplay';
import Login from './pages/Login';
import {Route,Routes,Navigate} from "react-router-dom";






import './App.css';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isTabClosing, setIsTabClosing] = useState(false);

  // Mock authentication check, replace with real API call
  const handleLoginSuccess = (data) => {
      localStorage.setItem('token', data.userToken);
      localStorage.setItem('fullName',data.fullName)
      localStorage.setItem('userId',data.userId)
      localStorage.setItem('userType',data.userType)
      localStorage.setItem('companyId',data.companyId)
      setIsAuthenticated(true); 
       
    
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // If token exists, mark user as authenticated
    }


    
  }, []);
  
  
  return (
     <div>
      {isAuthenticated?(
        <div>
              {/* Header section */}
          <header className='p-1 header text-white sticky-top' style={{backgroundColor:'#283758'}}>
            <div className='row'>
              <div className='col-12'>
                <Header/>
              </div>
            </div>
          </header>
          {/* Navbar & Content Section */}
          <div className='content '>
            <div className='row contentfullheight'>
              <div className='sidenav col-1-5  ' style={{backgroundColor:'#24314C'}}>
                <Navbaritems/>
              </div>
              <div className='app col    ' style={{backgroundColor:'#eeecec'}}>
                <div className="row">
                  <div className="col">
                    <Pagesdisplay/>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer section */}
          <footer className='p-1  text-white fixed-bottom ' style={{backgroundColor:'#283758'}}>
            <div className='row'>
              <div className='col'>
                <Footer/>
              </div>
            </div>
          </footer>
        </div>
      ):(
        <Login onLoginSuccess={handleLoginSuccess}/>
      )}
      
      
    </div>

  );
}

export default App;
