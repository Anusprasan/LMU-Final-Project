import React from 'react'
import{Toaster,EditableText} from '@blueprintjs/core';
import {useEffect,useState } from 'react';
import axios from 'axios';
export default function Vehicle() {

  const [vehicles,setVehicles] = useState([]);
  const [newVehicleType,setNewVehicleType] = useState("");
  const [newVehicleBrand,setNewVehicleBrand] = useState("");
  const [newVehicleModel,setNewVehicleModel] = useState("");
  const [newVehiclePlateNo,setNewVehiclePlateNo] = useState("");

  useEffect(()=>{

    
    fetch('https://localhost:7180/api/Vehicle/Vehicle')
    .then((response)=>response.json())
    .then((data)=>
      setVehicles(data)
    )
    .catch((err)=>console.log(err))
  },[]);


   

  function handlesubmit(){
     const vehicleType = newVehicleType.trim();
     const vehiclebrand = newVehicleBrand.trim();
     const vehiclemodel = newVehicleModel.trim();
     const vehicleplateno = newVehiclePlateNo.trim();

     if (vehicleType&& vehiclebrand&& vehiclemodel &&vehicleplateno){
      fetch('https://localhost:7180/api/Vehicle/getVehicles',
      {
        method:"POST",
        body:JSON.stringify({
          vehicleType,
          vehiclebrand,
          vehiclemodel,
          vehicleplateno
        }),

        headers:{
          "cotent-Type":"application/json;charset=utf-8"
        },
        
      }
    
      ).then ((response)  =>response.json())
      .then(data =>{
        setVehicles([...vehicles,data]);
        alert("user added successfully")

        setNewVehicleModel(" ");
        setNewVehiclePlateNo(" ");
      });

     }

  }

  return (
    <div>
      
      <h1>{vehicles.plateNo}</h1>
      <div className="row">
        <div className="col">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Vehicle List</button>
              <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Add vehicle</button>
            
            </div>
          </nav>
      </div>
    </div>
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        <div className='vehiclelist card text-bg-light  mx-5 mt-5'>
          
            <div className="row  pt-2" >
              <div className="col-1 d-flex justify-content-center"><h5>ID</h5></div>
              <div className="col-2"><h5>Vehicle Type</h5></div>
              <div className="col-2 "><h5>Brand</h5></div>
              <div className='col-2 '><h5>Vehicle Model</h5></div>
              <div className='col-2 '><h5>Plate No</h5></div>
              <div className="col-2"><h5>Action</h5></div>
            </div>

            {vehicles.map((vehicle)=>(
              <div className="row  pt-3 " >
              <div className="col-1 d-flex justify-content-center" >{vehicle.id}</div>
              <div className="col-2 ">{vehicle.vehicleType}</div>
              <div className="col-2 "><EditableText  value={vehicle.brand}/></div>
              <div className="col-2">{vehicle.vehicleModel} </div>
              <div className="col-2 "><EditableText  value={vehicle.plateNo} /></div>
              <div className="col-2">
                <button className='btn btn-primary' >Update</button>
                <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
            ))}
            
            
            
        </div>
        
      </div>
      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <form>
        <div className='addvehiclecontent card text-bg-light  mx-1 mt-3'>
           {/* heading row */}
           <div className="row mt-2 mx-2 ">
                    <div className="col d-flex justify-content-center">
                      <h4>Vehicle General Information</h4>
                    </div>
                    
                </div>
          <div className="row">
            {/* vehicle general information */}
            <div className="col-6">
              

                {/* vehicleType row */}
                <div className="row mt-4 mx-2">
                  <div className="col-4">
                    <label for="plateno" className="form-label">Vehicle Type</label>
                  </div>
                  <div className="col-4"> 
                    <div class="btn-group w-100">
                      <button type="button" class="btn btn-secondary " placeholder="Select">Vehicle Type</button>
                      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu">
                      {vehicles.map((vehicle)=>(
                        <li><a  class="dropdown-item" href="#" onClick={()=>setNewVehicleType(vehicle.vehicleType)}>{vehicle.vehicleType}</a></li>
                      ))}
                      </ul>
                    
                    </div>
                  </div>
                </div>

                {/* vehiclebrandrow */}
                <div className="row mt-4 mx-2">
                  <div className="col-4">
                    <label for="plateno" className="form-label">Plate No</label>
                  </div>
                  <div className="col-4">
                    <div class="btn-group w-100">
                        <button type="button" class="btn btn-secondary " >Brand</button>
                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                          {vehicles.map((vehicle)=>(
                            <li><a class="dropdown-item" href="#" onClick={()=>setNewVehicleBrand(vehicle.brand)}>{vehicle.brand}</a></li>
                            
                          ))}
                            
                          
                          
                        </ul>
                        
                    </div>
                  
                  </div>
                </div>

                {/* vehicle modelrow */}
                <div className="row mt-4 mx-2">
                  <div className="col-4">
                      <label for="vehicleModel" className="form-label">Vehicle Model</label>    
                  </div>
                  <div className="col-4">
                    <input  type="text" className="form-control" id="vehicleModel" placeholder="Enter Vehicle Model..." onChange={(e)=>setNewVehicleModel(e.target.value)}/>
                  </div>
                </div>

                {/* vehicle plate no row */}

                <div className="row mt-4 mx-2">
                  <div className="col-4">
                      <label for="vehicleplateno" className="form-label">Vehicle PlateNo</label>    
                  </div>
                  <div className="col-4">
                    <input  type="text" className="form-control" id="vehicleplateno" placeholder="Enter Vehicle Model..." onChange={(e)=>setNewVehicleModel(e.target.value)}/>
                  </div>
                </div>
                
                
            </div>
            <div className="col-6">
              {/* revenuelicence row */}
              <div className="row ">
                <div className="col-12">
                    <h6>Revenue Licence</h6>
                </div>
                <div className="col-12 d-flex mx-3">
                    <div className="col-4">
                      <label for="issueddateinput" className="form-label">Issued Date</label>
                    </div>
                    <div className="col-4">
                      <input type="Date" className='form-control' id="issueddateinput" />     
                    </div>
                </div>
                <div className="col-12 d-flex mx-3">
                    <div className="col-4">
                      <label for="expirydateinput" className="form-label">Expiry Date</label>
                    </div>
                    <div className="col-4 mt-2">
                      <input type="Date" className='form-control' id="expirydateinput" />     
                    </div>
                </div>
                
              </div>
              {/* insurance details row */}
              <div className="row ">
                <div className="col-12">
                    <h6>Vehicle Insurance</h6>
                </div>
                <div className="col-12 d-flex mx-3">
                    <div className="col-4">
                      <label for="Insurancedateinput" className="form-label">Issued Date</label>
                    </div>
                    <div className="col-4 mt-2">
                      <input type="Date" className='form-control' id="Insurancedateinput" />     
                    </div>
                </div>
                <div className="col-12 d-flex mx-3">
                    <div className="col-4">
                      <label for="expirydateinput" className="form-label">Expiry Date</label>
                    </div>
                    <div className="col-4 mt-2">
                      <input type="Date" className='form-control' id="expirydateinput" />     
                    </div>
                </div> 
                
              </div>

            </div>
          </div>
        </div>
            
        </form>
        
        
          
      </div>
              
    </div>
      
    </div>
  )
}
