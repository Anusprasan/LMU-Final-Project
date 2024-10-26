import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export default function EndJourney() {
  const params = useParams();
  const navigate = useNavigate();
  const vehicleId = params.VehicleId;
  const journeyId = params.JourneyId;
  const [arivalDate,setArivalDate] = useState('');
  const [readAFJourney,setReadAFJourney] = useState('');
  const [payment,setPayment] = useState('');
  const [vehicleStatus,setVehicleStatus] = useState('');

  const handelSubmit = () =>{
    const journeyData = {
      vehicle_id: vehicleId,
      journey_id: journeyId,
      end_date:arivalDate,
      odometerreading_afterjourney :readAFJourney,
      payment,
      vehicleStatus_afterjourney:vehicleStatus

    }
    const fetchData = async ()=>{


      try{
        const responseEndJourneyUpdate = await fetch("https://localhost:7096/api/Journey/InsertEndJourney",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
  
          body:JSON.stringify(journeyData)
        });
  
        if(responseEndJourneyUpdate.status == 400){
          alert("Update Failed");
  
        }
        else if(responseEndJourneyUpdate.status == 404){
          alert("Invalid Data Given");
  
        }
        else if(responseEndJourneyUpdate.status.ok){
          
          alert("End Journey Successfully Updated");
  
        }
        else{
          throw new Error (`Http error:${responseEndJourneyUpdate.status}`)
        }
      }
      catch(err){
        console.error(`Error:`,err)
  
      }
      

  
    }
    fetchData();
    
  }

  const handleClear= ()=>
  {
  
  setArivalDate("");
  setReadAFJourney("");
  setPayment("");
  setVehicleStatus("");

  }

  const handleClose = ()=>{
    navigate("/Journey")
  }
  return (
    <div>
      

            <div className="row justify-content-center my-5">
              <div className="col-6">
                
              <div className='row mt-3'>
                <div className='col-12 d-flex justify-content-end'>
                 <button type="button" className="btn-close btn-success" aria-label="Close" onClick={handleClose} ></button>
                </div>
              </div>
                    
                   {/* VehicleId */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                        <div className="col-5">
                          <label for="vehicleId" className="form-label">Vehicle Id</label>
                        </div>
                        <div className="col-4">   
                          <input type="text" className='form-control' id="vehicleIdinput" value={vehicleId} readOnly />          
                        </div>
                      </div>

                    {/* Journey Id */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                        <div className="col-5">
                          <label for="journeyId" className="form-label">Journey Id</label>
                        </div>
                        <div className="col-4">   
                          <input type="text" className='form-control' id="journeyId" value={journeyId} readOnly />          
                        </div>
                    </div>

                    {/* date row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="dateinput" className="form-label">Date</label>
                      </div>
                      <div className="col-4" >
                      <input type="Datetime-local" className='form-control' id="dateinput" value={arivalDate} onChange={(e)=>setArivalDate(e.target.value)} />
                      </div>
                    </div>

                    

                    {/* odemeter reading row */}
                    <div className="row mt-4 mx-2 d-flex justify-content-center">
                      <div className="col-5">
                        <label for="odometerreadinginput" className="form-label">Odometer Reading(Km)</label>
                      </div>
                      <div className="col-4">
                        
                        <input  type="text" className="form-control w-100" id="odometerreadinginput" value={readAFJourney} onChange={(e)=>setReadAFJourney(e.target.value.replace(/\D/g, ''))} maxLength={6}/>
                      </div>
                    </div>
                   

                  {/* Other Vehicle Expenses*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="paymentinput" className="form-label"> Payement</label>
                    </div>
                    <div className="col-4">
                      
                      <input  type="number" className="form-control " id="othervehicleexpensesinput" value={payment} onChange={(e)=>setPayment(e.target.value)}/>
                    </div>
                  </div>

                  {/* Malfunctions/Scratch*/}
                  <div className="row mt-4 mx-2 d-flex justify-content-center">
                    <div className="col-5">
                      <label for="malfunctioninput" className="form-label">Malfunction/Scratch</label>
                    </div>
                    <div className="col-4">
                      
                      <textarea className="form-control " id="malfunctioninput" value={vehicleStatus}   onChange={(e)=>setVehicleStatus(e.target.value)}/>
                    </div>
                  </div>

                  {/* save and cancel row */}
                  <div className="row d-flex justify-content-center mt-5"> 
                    <div className="col-4 d-flex gap-2">
                      <button type="button" class="btn btn-success w-100"  onClick={handelSubmit}>Submit</button>
                      <button type="button" class="btn btn-danger w-100" onClick={handleClear}>Clear</button>
                    </div>
                    
                  </div>
            
                     

                    
                

              </div>
            </div>
            
            
          
    </div>
  )
}
