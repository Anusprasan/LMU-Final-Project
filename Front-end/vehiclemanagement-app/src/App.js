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

  // Mock authentication check, replace with real API call
  const handleLoginSuccess = (token) => {
    // localStorage.setItem('token', token); // Store the token in local storage
    setIsAuthenticated(true); // Set authenticated state to true
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
              <div className='sidenav col-1-5  h-100 ' style={{backgroundColor:'#24314C'}}>
                <Navbaritems/>
              </div>
              <div className='app col   h-100 ' style={{backgroundColor:'#eeecec'}}>
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
