import React from 'react';
import Header from './components/Header';
import Navbaritems from './components/Navbaritems'
import Footer from './components/Footer';
import Pagesdisplay from './components/Pagesdisplay';



import './App.css';



function App() {
  return (
    <div>
      {/* Header section */}
      <header className='p-1 text-black sticky-top' style={{backgroundColor:'#F2F2F2 '}}>
        <div className='row'>
          <div className='col-12'>
            <Header/>
          </div>
        </div>
      </header>
      {/* Navbar & Content Section */}
      <div className='content '>
        <div className='row contentfullheight'>
          <div className='col-1-5  h-100 text-white '>
            <Navbaritems/>
          </div>
          <div className='app col  h-100 '>
            <Pagesdisplay/>
          </div>
        </div>
      </div>
      {/* Footer section */}
      <footer className='p1 bg-dark text-white fixed-bottom'>
        <div className='row'>
          <div className='col'>
            <Footer/>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
