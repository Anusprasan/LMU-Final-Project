import React from 'react'




import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


import { useState,useEffect } from 'react';


export default function Journey() {
  const navigate = useNavigate();
  const [allVehicleId,setAllVehicleId]= useState([]);
  const [userId,setUserId] = useState('');
  const [vehicleId,setVehicleId] = useState('Select');
  const [jouneyStartDate,setJouneyStartDate] = useState('');
  const [odoReading,setOdoReading] = useState('');
  const [journeyDescription, setJourneyDescription] = useState('');
  const [malfunction, setMalfunction] = useState('');
  const [vehiclePhoto, setVehiclePhoto] = useState('');
  const [clientName, setClientName] = useState('');  
  const [clientPhoneNo, setClientPhoneNo] = useState('');
  const [clientAddress, setClientAddress] = useState(''); 
  const [clientNIC, setClientNIC] = useState(''); 
  const [drivingLicensePhoto, setDrivingLicensePhoto] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [companyId,setCompanyId] = useState('');
 
  // const [journey,setJouney] = useState({

  // })
  useEffect(()=>{

    const UserId = localStorage.getItem("userId");
    setUserId(UserId);

    const CompanyId = localStorage.getItem("companyId");
    setCompanyId(CompanyId);

    fetch(`https://localhost:7096/api/Journey/GetVehicleId?userId=${UserId}`) // Replace with your correct API URL
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Step 3: Store the fetched vehicle IDs in the state
        if (Array.isArray(data)) {
          setAllVehicleId(data); // data should be [55, 59, 82, 83, 89]
        } else {
          throw new Error("Unexpected API response format");
        }
      })
      .catch(error => {
        // Handle any errors during the fetch operation
        console.error('Error fetching vehicle IDs:', error);
        
      })
      
  }, [userId]);

  function handleSubmit(){

    const journeyData = {
       vehicle_id:vehicleId,
       started_date: jouneyStartDate,
       UserId :userId,
      //  End_date:"",
       odometerreading_beforejourney :odoReading,
      //  odometerreading_afterjjourney :"",
       journey_description :journeyDescription,
      //  vehiclestatus_beforejouney :"",
      //  vehiclestatus_afterjounrey : "",
       Vehiclestatus_beforejourney : malfunction,
       companyId
    }
    if(!vehicleId||!jouneyStartDate||!odoReading||!malfunction||!journeyDescription){
      alert("Check your fields");
      
      
    }
    else{
      fetch(`https://localhost:7096/api/Journey/AddJourney`,
        {
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          
          
          
        
        body: JSON.stringify(journeyData)
      })
      
        .then (response  =>{
          if (!response.ok){
            throw new Error(`HTtp error! Status:${response.status}`);
          }
          return response.json();
        })
          
        .then(data =>{
          console.log(data);
          
          // alert("sdbccbxnbnm")
          setShowAlert(true);
  
          // Auto-hide the alert after 3 seconds
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
  
          navigate(`/Journeyclientdetails/`);
          
          
  
      
        })
        .catch((err)=>{
          console.log(err);
          alert("Operation failed");
      
         });
    }
   

    


   






  }


  return (
    <div>
       
      {/* navigation row */}
      <div className="row ">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Journey Start</button>
            <button class="nav-link" id="nav-Journeyend-tab" data-bs-toggle="tab" data-bs-target="#nav-Journeyend" type="button" role="tab" aria-controls="nav-Journeyend" aria-selected="false">Journey End</button>
            <button class="nav-link" id="nav-Journeyhistory-tab" data-bs-toggle="tab" data-bs-target="#nav-Journeyhistory" type="button" role="tab" aria-controls="nav-Journeyhistory" aria-selected="false">Journey history</button>
            
          </div>
        </nav>
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className='row justify-content-center'>
              <div className='col-6'>
                <div className='card'>
                  <div className='card-header'>
                    <h4 className='text-center'>Journey Details</h4>
                  </div>
                  <div className='card-body'>

                  </div>
                
                <div className="row">
                  
                  
                  
                    {/* {userId}
                    
                    {jouneyStartDate}
                    {odoReading}
                    {journeyDescription}
                    {malfunction}
                    {vehiclePhoto}
                    {clientName}
                    {clientPhoneNo}
                    {clientAddress}
                    {clientNIC}
                    {drivingLicensePhoto} */}

                    {/* Vehicle Id*/}
                    <div className="row my-1 mx-2">
                      <div className="col-4">
                        <label for="plateno" className="form-label">Vehicle Id</label>
                      </div>
                      <div className="col-4">
                        <div class="btn-group w-100">
                          <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>{vehicleId}</button>
                          <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}} required>
                            <span class="visually-hidden">Toggle Dropdown</span>
                          </button>
                          <ul class="dropdown-menu">
                            {allVehicleId.map((vehicleId)=>(
                              <li key={vehicleId}><a class="dropdown-item" href="#" onClick={()=>setVehicleId(vehicleId)}>{vehicleId}</a></li>
                            ))}
                            
                            
                          </ul>
                        </div>

                      </div>
                    </div>
                    {/* date row */}

                    <div className="row my-1 mx-2">
                      <div className="col-4">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-4" >
                      <input type="datetime-local" className='form-control' id="dateinput" onChange={(e)=>setJouneyStartDate(e.target.value)} />
                      </div>
                    </div>

                    
                    {/* odemeter reading row */}
                    <div className="row my-1 mx-2">
                      <div className='col-11'>
                        <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                        <input  type="text" className="form-control w-100" id="odometerreadinginput" value={odoReading} onChange={(e) => setOdoReading(e.target.value.replace(/\D/g, ''))}  maxLength={6}/>
                      </div>
                    </div>
                    {/* Journey Description */}
                    <div className="row my-1 mx-2">
                      <div className='col-11'>
                      <label for="journeydescription" className="form-label">Journey Description</label>
                      <textarea className="form-control " id="journeydescription" value={journeyDescription} onChange={(e) => setJourneyDescription(e.target.value)} />
                      </div>
                       
                    </div>
                    {/* Malfunction*/}
                    <div className="row my-1 mx-2">
                      <div className='col-11'>
                        <label for="malfunctioninput" className="form-label">Malfunction</label>
                        <textarea className="form-control w-100" id="malfunctioninput" value={malfunction}onChange={(e) => setMalfunction(e.target.value)} />
                      </div>
                      
                    </div>
                    {/* uploadvehiclephotos
                    <div className="row mt-4 mx-2">
                      <div className="col-4">
                        <label for="uploadinput" className="form-label">Upload Vehicle Photo</label>
                      </div>
                      <div className="col-6">
                        <input class="form-control" type="file"  id="vehiclePhotoInput" onChange={(e) => setVehiclePhoto(e.target.files[0])}/>
                      </div>
                    </div> */}
                  
                    
                    
                  </div>
                  
                {/* save and cancel row */}
                <div className="row d-flex justify-content-center my-1"> 
                      <div className='col-6'>
                        <button type="button" class="btn btn-success w-100"onClick={handleSubmit}>Next</button>
                      </div>
                </div>

                <div className="row d-flex justify-content-center my-1"> 
                      <div className='col-3'>
                      <button type="button" class="btn btn-danger w-100">Cancel</button>
                      </div>
                </div>
                </div>
                
              
                </div>
              </div>
              {showAlert && (
              <div className="alert alert-success" role="alert">
                Data inserted successfully!
              </div>
            )}
          </div>
            
            
          
             {/* End Journey Tab */}
          
          <div class="tab-pane fade" id="nav-Journeyend" role="tabpanel" aria-labelledby="nav-Journeyend-tab">
            <div className='card '>
            <div className="row">
              <div className="col-6">
                
                <div className='startjourneycontent card-body text-bg-light  mx-1 mt-3'>
                    
                    {/* plateno */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                        <div className="col-5">
                          <label for="plateno" className="form-label">Active Vehicles</label>
                        </div>
                        <div className="col-4">
                          <div class="btn-group w-100">
                            <button type="button" class="btn btn-secondary" style={{backgroundColor:'#24314C'}}>Select</button>
                            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:'#24314C'}} required>
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
                      <input type="Date" className='form-control' id="dateinput" required />
                      </div>
                    </div>

                    {/* time row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="timeinput" className="form-label">Time</label>
                      </div>
                      <div className="col-4">
                        <input type="time" className='form-control' id="timeinput" required/>
                      </div>
                    </div>

                    {/* odemeter reading row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                      </div>
                      <div className="col-4">
                        
                        <input  type="text" className="form-control w-100" id="odometerreadinginput" required/>
                      </div>
                    </div>
                    {/* Fuel Cost */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="fuelcostinput" className="form-label">Fuel Cost(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="fuelcostinput" required/>
                    </div>
                  </div>

                  {/* Driver Payement */}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="driverpaymentinput" className="form-label">Driver Payement(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="iverpaymentinput" required/>
                    </div>
                  </div>

                  {/* Other Vehicle Expenses*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="othervehicleexpensesinput" className="form-label">Driver Payement(optional)</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="othervehicleexpensesinput" required/>
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
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}} onClick={handleSubmit}>Save</button>
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}}>Cancel</button>
                    </div>
                    
                  </div>
            
                     

                    
                </div>

              </div>
            </div>
            </div>
            
          </div>
          
          

          {/* Journey History Tab */}
          <div class="tab-pane fade" id="nav-Journeyhistory" role="tabpanel" aria-labelledby="nav-Journeyhistory-tab">
              <div className='row justify-content-center mt-3 mx-1'>
                <div class =" col-md-12">
                  <table id="tblCategory" class=" table table-striped table-bordered table-hover" >
                    <thead>
                      <tr>
                        <th>Journey ID</th>
                        <th>Vehicle ID</th>
                        <th>Client Name</th>
                        <th>NIC No</th>
                        <th>Date of Departure</th>
                        <th>Journey Status</th>
                        
                      </tr>

                    </thead>
                  </table>
                </div>
              </div>
            
          </div>
          </div>
         
        </div>
      
      </div>
    
  )
}
