import React from 'react'
import{Toaster,EditableText} from '@blueprintjs/core';
import {useEffect,useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
export default function Vehicle() {
  const navigate = useNavigate();

  const [vehicles,setVehicles] = useState([]);
  const [vehicleTypes,setVehicleTypes] = useState([]);
  const [newVehicleType,setNewVehicleType] = useState("Select");
  const [vehicleBrands,setVehicleBrands] = useState([]);
  const [newVehicleBrand,setNewVehicleBrand] = useState("Select");
  const [newVehicleModel,setNewVehicleModel] = useState("");
  const [newVehiclePlateNo,setNewVehiclePlateNo] = useState("");
  const [newRevenueLicenceIssuedDate,setNewRevenueLicenceIssuedDate] = useState("");
  const [newRevenueLicenceExpiryDate,setNewRevenueLicenceExpiryDate] = useState("");
  const [newInsuranceIssuedDate,setNewInsuranceIssuedDate] = useState("");
  const [newInsuranceExpirydate,setNewInsuranceExpiryDate] = useState("");
  const [vehicleStatus,setVehicleStatus] = useState("");

  useEffect(()=>{
    
    
    fetch('https://localhost:7096/api/Vehicle/GetAllVehicles')
    .then((response)=>response.json())
    .then((data)=>{
      
      
      setVehicles(data)}
      
      
    )
    .catch((err)=>console.log(err))
    
    fetch('https://localhost:7096/api/VehicleType/GetAllVehicleTypes')
    .then((response)=>response.json())
    .then((data)=>{

      setVehicleTypes(data)
      console.log(data)
    }
      
      
    )
    .catch((err)=>console.log(err))

    fetch('https://localhost:7096/api/VehicleBrand/GetAllVehicleBrands')
    .then((response)=>response.json())
    .then((data)=>{
      
      
      setVehicleBrands(data)}
      
    )
    .catch((err)=>console.log(err))
     
     

  },[]);


   

  function handlesubmit(){
     const type = newVehicleType.trim();
     const brand = newVehicleBrand.trim();
     const model = newVehicleModel.trim();
     const plate_no = newVehiclePlateNo.trim();
     const LicenceIssuedDate =newRevenueLicenceIssuedDate.trim();
     const LicenceExpiryDate = newRevenueLicenceExpiryDate.trim();
     const InsuranceIssuedDate = newInsuranceIssuedDate.trim();
     const InsuranceExpiryDate = newInsuranceExpirydate.trim();
    // console.log(type);
    // console.log(model);
    // console.log(brand);
    // console.log(plate_no);
    // console.log(LicenceIssuedDate);
    // console.log(LicenceExpiryDate);
    // console.log(InsuranceIssuedDate);
    // console.log(InsuranceExpirydate);

  
    fetch('https://localhost:7096/api/Vehicle/AddVehicle', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type,
        brand,
        model,
        plate_no,
        LicenceIssuedDate,
        LicenceExpiryDate,
        InsuranceIssuedDate,
        InsuranceExpiryDate
      })
    })
      .then((response) => {
        if (!response.ok) {
          // Handle HTTP errors
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse response as JSON
      })
      .then(data => {
        console.log(data); // The response data from the API
        alert("Vehicle added successfully");
        
        // Reset form fields (optional)
        // setNewVehicleModel("");
        // setNewVehiclePlateNo("");
      })
      .catch((err) => {
        console.error('Error:', err); // Catch and log any errors
        alert("An error occurred while adding the vehicle.");
      });

      
    

  }
    const onClickUpdate= (vehicleid)=>{
      navigate(`/Vehicleupdate/${vehicleid}`)
    };

    const onClickDelete=(vehicle_id)=>{
        fetch(`https://localhost:7096/api/Vehicle/DeleteVehicle?Vehicle_id=${vehicle_id}`,
          {
            method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            
            
            
          }
        
          ).then ((response)  =>console.log(response.data))
            
          .then(data =>{
            console.log(data)
            // setVehicles([...vehicles,data]);
            alert("user added successfully");
            
    
            // setNewVehicleModel(" ");
            // setNewVehiclePlateNo(" ");
          })
          .catch((err)=>console.log(err));
        
    };

    // const handleStatusUpdate=(vehicle_id,vehicleCurrentStatus)=>{
        
       
      
    // }
  

  return (
    <div>
      {/* <h1>{newVehicleModel}</h1>
      <h1>{newVehicleType}</h1>
      <h1>{newVehiclePlateNo}</h1>
      <h1>{newVehicleBrand}</h1>
      <h1>{newRevenueLicenceIssuedDate}</h1>
      <h1>{newRevenueLicenceExpiryDate}</h1>f
      <h1>{newInsuranceIssuedDate}</h1>
      <h1>{newInsuranceExpirydate}</h1> */}
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
              <div className="row  pt-3 " key={vehicle.vehicle_id}>
              <div className="col-1 d-flex justify-content-center" >{vehicle.vehicle_id}</div>
              <div className="col-2 ">{vehicle.type}</div>
              <div className="col-2 "><EditableText  value={vehicle.brand}/></div>
              <div className="col-2">{vehicle.model} </div>
              <div className="col-2 "><EditableText  value={vehicle.plate_no} /></div>
              <div className="col-3">
                <button className='btn btn-primary' onClick={()=>onClickUpdate(vehicle.vehicle_id)}>Update</button>
                <button className='btn btn-danger' onClick={()=>onClickDelete(vehicle.vehicle_id)}>Delete</button>
                <button className='btn btn-success' onClick={()=>handleStatusUpdate(vehicle.vehicle_id,vehicle.vehicleStatus)} >{vehicle.vehicleStatus =='Active' ? 'Off' :'On'}</button>
                {vehicle.vehicle_id}
                {vehicle.vehicleStatus}
                {vehicleStatus}
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
                      <button type="button" class="btn btn-secondary " placeholder="Select">{newVehicleType}</button>
                      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu">
                      {vehicleTypes.map((types)=>(
                        <li><a  class="dropdown-item" href="#" onClick={()=>setNewVehicleType(types.type)}>{types.type}</a></li>
                      ))}
                      </ul>
                    
                    </div>
                  </div>
                </div>

                {/* vehiclebrandrow */}
                <div className="row mt-4 mx-2">
                  <div className="col-4">
                    <label for="plateno" className="form-label">Brand</label>
                  </div>
                  <div className="col-4">
                    <div class="btn-group w-100">
                        <button type="button" class="btn btn-secondary " >{newVehicleBrand}</button>
                        <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                          <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                          {vehicleBrands.map((brands)=>(
                            <li><a class="dropdown-item" href="#" onClick={()=>setNewVehicleBrand(brands.brand)}>{brands.brand}</a></li>
                            
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
                    <input  type="text" className="form-control" id="vehicleplateno" placeholder="Enter Vehicle Model..." onChange={(e)=>setNewVehiclePlateNo(e.target.value)}/>
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
                      <input type="Date" className='form-control' id="issueddateinput" onChange={(e)=>setNewRevenueLicenceIssuedDate(e.target.value)}/>     
                    </div>
                </div>
                <div className="col-12 d-flex mx-3">
                    <div className="col-4">
                      <label for="expirydateinput" className="form-label">Expiry Date</label>
                    </div>
                    <div className="col-4 mt-2">
                      <input type="Date" className='form-control' id="expirydateinput" onChange={(e)=>setNewRevenueLicenceExpiryDate(e.target.value)}/>     
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
                      <label for="Insuranceissueddateinput" className="form-label">Issued Date</label>
                    </div>
                    <div className="col-4 mt-2">
                      <input type="Date" className='form-control' id="Insuranceissueddateinput" onChange={(e)=>setNewInsuranceIssuedDate(e.target.value)}/>     
                    </div>
                </div>
                <div className="col-12 d-flex mx-3">
                    <div className="col-4">
                      <label for="Insuranceexpirydateinput" className="form-label">Expiry Date</label>
                    </div>
                    <div className="col-4 mt-2">
                      <input type="Date" className='form-control' id="Insuranceexpirydateinput" onChange={(e)=>setNewInsuranceExpiryDate(e.target.value)} />     
                    </div>
                </div> 
                
              </div>

            </div>
          </div>
          {/* Add and Cancel row */}
          <div className="row">
            <div className="col-10"></div>
            <div className="col d-flex justify-content-end gap-2">
             <button type="button" class="btn btn-primary w-100" onClick={handlesubmit}>Add</button>
             <button type="button" class="btn btn-primary w-100">Cancel</button>
            </div>
          </div> 
        </div>
            
        </form>
        
        
          
      </div>
              
    </div>
      
    </div>
  )
}
