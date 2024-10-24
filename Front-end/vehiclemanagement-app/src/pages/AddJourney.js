import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AddJourney() {
    const navigate = useNavigate();
    const params = useParams();
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

    useEffect(()=>{

        const VehicleId = params.VehicleId;
        setVehicleId(VehicleId);
          
      }, );


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
              setShowAlert(true);-
      
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
                      <input  type="text" className="form-control w-100" id="vehicleIdInput" value={params.VehicleId} readOnly/>

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
  )
}
