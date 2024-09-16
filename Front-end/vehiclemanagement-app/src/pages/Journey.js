import React from 'react'




import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useState,useEffect } from 'react';


export default function Journey() {
  const [plateNo,setPlateNo]= useState([]);
  // const [journey,setJouney] = useState({

  // })
  useEffect(()=>{
    fetch('https://localhost:7096/api/Journey/GetVehiclePlateNo')
    .then((response)=>response.json())
    .then((data)=>{
      setPlateNo(data)
      console.log(plateNo)
      
    })
    .catch((err)=>console.log(err))
  },[])

  


  return (
    <div>
      <h1>{plateNo[3]}</h1>
      {/* navigation row */}
      <div className="row ">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Journey Start</button>
            <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Journey End</button>
            
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className='startjourneycontent card text-bg-light  mx-1 mt-3'>
              
              <div className="row">
                {/* journey vehicle column */}
                <div className="col-6">
                  {/* heading row */}
                  <div className="row mt-2 mx-2">
                    <div className="col ">
                      <h4>Journey Details</h4>
                    </div>
                    
                  </div>
                  
                  {/* plateno */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="plateno" className="form-label">Plate No</label>
                    </div>
                    <div className="col-4">
                      <div class="btn-group w-100">
                        <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>Select</button>
                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}}>
                          <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                          {plateNo.map((plateno)=>(
                            <li><a class="dropdown-item" href="#">{plateno}</a></li>
                          ))}
                          
                          
                        </ul>
                      </div>

                    </div>
                  </div>
                  {/* date row */}

                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="dateinput" className="form-label">Date</label>
                    </div>
                    <div className="col-4" >
                    <input type="Date" className='form-control' id="dateinput" />
                    </div>
                  </div>

                  
                  {/* odemeter reading row */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="text" className="form-control w-100" id="odometerreadinginput" />
                    </div>
                  </div>
                  {/* Journey Description */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="journeydescription" className="form-label">Journey Description</label>
                    </div>
                    <div className="col-4">
                      
                      <textarea className="form-control " id="journeydescription" />
                    </div>
                  </div>
                  {/* Malfunction*/}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="malfunctioninput" className="form-label">Malfunction</label>
                    </div>
                    <div className="col-4">
                      
                      <textarea className="form-control w-100" id="malfunctioninput" />
                    </div>
                  </div>
                  {/* uploadvehiclephotos */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="uploadinput" className="form-label">Upload Vehicle Photo</label>
                    </div>
                    <div className="col-6">
                      <input class="form-control" type="file" id="formFileMultiple" multiple/>
                    </div>
                  </div>
                 
                  
                  
                </div>
                <div className="col-6">
                  {/* client details headingrow */}
                  <div className="row mt-2 mx-2">
                    <div className="col "> 
                      <h4>Client  Details</h4>  
                    </div>
                    
                  </div>

                  {/* clientname row */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="clientnameinput" className="form-label">Name</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="text" className="form-control w-100" id="clientnameinput" />
                    </div>
                  </div>
                  {/* clientphoneNo */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="clientphonenoinput" className="form-label">Phone No</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="text" className="form-control w-100" id="clientphonenoinput" />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="clientphonenoinput" className="form-label">Address</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="text" className="form-control w-100" id="clientphonenoinput" />
                    </div>
                  </div>
                  {/* NIC No */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="nicnoinput" className="form-label">NIC No</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="text" className="form-control w-100" id="nicnoinput" />
                    </div>
                  </div>
                  {/* uploaddrivinglicense */}
                  <div className="row mt-4 mx-2">
                    <div className="col-4">
                      <label for="uploadinput" className="form-label">Driving License Photo</label>
                    </div>
                    <div className="col-6">
                      <input class="form-control" type="file" id="formFileMultiple" multiple/>
                    </div>
                  </div>
                  
                </div>
              </div>
              {/* save and cancel row */}
              <div className="row d-flex justify-content-end mt-5"> 
                <div className="col-2 d-flex gap-2">
                  <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Save</button>
                  <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Cancel</button>
                </div>
                
              </div>
            
            </div>
          
          </div>
          {/* End Journey Tab */}
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div className="row">
              <div className="col-5">
                <div className='startjourneycontent card text-bg-light  mx-1 mt-3'>
                    
                    {/* plateno */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                        <div className="col-5">
                          <label for="plateno" className="form-label">Active Vehicles</label>
                        </div>
                        <div className="col-4">
                          <div class="btn-group w-100">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>Select</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}}>
                              <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                              <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                          </div>

                        </div>
                      </div>

                    {/* date row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-4" >
                      <input type="Date" className='form-control' id="dateinput" />
                      </div>
                    </div>

                    {/* time row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="timeinput" className="form-label">Time</label>
                      </div>
                      <div className="col-4">
                        <input type="time" className='form-control' id="timeinput" />
                      </div>
                    </div>

                    {/* odemeter reading row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                      </div>
                      <div className="col-4">
                        
                        <input  type="text" className="form-control w-100" id="odometerreadinginput" />
                      </div>
                    </div>
                    {/* Fuel Cost */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="fuelcostinput" className="form-label">Fuel Cost(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="fuelcostinput" />
                    </div>
                  </div>

                  {/* Driver Payement */}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="driverpaymentinput" className="form-label">Driver Payement(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="iverpaymentinput" />
                    </div>
                  </div>

                  {/* Other Vehicle Expenses*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="othervehicleexpensesinput" className="form-label">Driver Payement(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="othervehicleexpensesinput" />
                    </div>
                  </div>

                  {/* Malfunctions/Scratch*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="malfunctioninput" className="form-label">Malfunction/Scratch</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="malfunctioninput" />
                    </div>
                  </div>

                  {/* save and cancel row */}
                  <div className="row d-flex justify-content-center mt-5"> 
                    <div className="col-2 d-flex gap-2">
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Save</button>
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Cancel</button>
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
