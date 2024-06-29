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
          <div className='col-1-5  h-100 text-white ' style={{backgroundColor:'#24314C'}}>
            <Navbaritems/>
          </div>
          <div className='app col  h-100 ' style={{backgroundColor:'#eeecec'}}>
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

  );
}

export default App;
