import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



export default function JourneyUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    const [journeyId , setJourneyId] = useState('');
    const [vehicleId,setVehicleId] = useState('');
    const [userId,setUserId] = useState('');
    const [clientId ,setClientId] = useState('');
    const [startedDate, setStartedDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [readingBFJourney,setReadingBFJourney] = useState('');
    const [readingAFJourney , setReadingAFJourney] = useState('');
    const [statusBFJourney,setStatusBFJourney] = useState('');
    const [statusAFJourney,setStatusAFJourney] = useState('');
    const [journeyDescription,setJourneyDescripption] =  useState ('');
    const [journeyStatus,setJourneyStatus] = useState('');
    const [clientName,setClientName] = useState('');
    const [clientAddress,setClientAddress] = useState('');
    const [clientNumber,setClientNumber] = useState('');
    const [clientNicNo,setClientNicNo] = useState('');

    const [JourneyClientData,setJourneyClientData] = useState({});
    useEffect(()=>{
        
        const fetchData = async ()=>{
            
            try{
              const JourneyId = params.JourneyId;
             
              const responseJourenyClientData= await fetch(`https://localhost:7096/api/Journey/GetJourneyClientById?journeyId=${JourneyId}`);
    
              if(responseJourenyClientData.status==404){
               if(message=="JourneyClient Data Not Found"){
                console.log(`Error 404:${message}`);
               }
               else{
                console.log(`Error 404: Invalid Journey Id `)
               }
              }else if(!responseJourenyClientData.ok){
                throw new Error(`Http error! status:${
                  responseJourenyClientData.status
                }`);
              }else{
                const data = await responseJourenyClientData.json();
                console.log(data);
                setJourneyClientData(data);
                setVehicleId(data.journey.vehicle_id);
                setJourneyId(data.journey.journey_id);
                setUserId(data.journey.userId);
                setStartedDate(data.journey.started_date);
                setEndDate(data.journey.end_date);
                setStatusBFJourney(data.journey.vehiclestatus_beforejourney);
                setJourneyStatus(data.journey.journeyStatus);
                setReadingBFJourney(data.journey.odometerreading_beforejourney);
                setJourneyDescripption(data.journey.journey_description);
                setClientId(data.client.client_id);
                setClientName(data.client.name)
                setClientAddress(data.client.address);
                setClientNumber(data.client.phone_no);
                setClientNicNo(data.client.nic_no);
              }
    
            }
            catch(err){
              console.error('Error',err);
            }
        }
    
        fetchData();
    
      },[]);

      const handleClose = ()=>{
        navigate("/Journey");
      }
  return (
    <div>
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-12 d-flex justify-content-end'>
                <button type="button" className="btn-close btn-success" aria-label="Close" onClick={handleClose}></button>
                </div>
            </div>
            <div className='row text-center justify-content-center'>
                
                    <div className='col-2'>
                    <label htmlFor='vehicleIdInput' className='form-label'>Vehicle Id</label>
                    <input type='text' className='form-control' id='vehicleIdInput' name='vehicleIdInput'  value={vehicleId}/>
                    </div>
                    <div className='col-2'>
                    <label htmlFor='journeyIdInout' className='form-label'>Journey Id</label>
                    <input type='text' className='form-control' id='journeyIdInout' name='journeyIdInout'value={journeyId}/>
                    </div>
                    <div className='col-2'>
                    <label htmlFor='userIdInput' className='form-label'>User Id</label>
                    <input type='text' className='form-control' id='userIdInput' name='userIdInput'  value={userId}/>
                    </div>
                    <div className='col-2'>
                    <label htmlFor='clientIdInput' className='form-label'>Client Id</label>
                    <input type='text' className='form-control' id='clientIdInput' name='clientIdInput' value={clientId}  />
                    </div>
                    
            </div>
            <div className='row mt-3 mx-5'>
                <div className='col-12'>
                <div className='row justify-content-center'>
                    
                    <div className='col-6'>
                       <div className='row mt-3 text-center'>
                            <h4>Journey Details</h4>
                       </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='journeyStartInput' className='form-label'>Journey Started Date</label>
                                <input type="text" className='form-control' id='journeyStartInput' name="journeyStartInput"  value={startedDate}/>
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='journeyEndInput' className='form-label'>Journey End Date</label>
                            <input type='text' className='form-control' id='journeyEndInput' name='journeyEndInput'  value={endDate}/>
                            </div>               
                        </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='odoReBeforeJourney' className='form-label'>OdoMeter Reading Before Journey</label>
                                <input type="text" className='form-control' id='odoReBeforeJourney' name="odoReBeforeJourney"  value={readingBFJourney}/>
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='odoReEndJourney' className='form-label'>OdoMeter Reading End Of Journey</label>
                            <input type='text' className='form-control' id='odoReEndJourney' name='odoReEndJourney'  value={readingAFJourney}/>
                            </div>               
                        </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='vehicleStatusBFJourney' className='form-label'>Vehicle Status Before Journey</label>
                                <textarea className='form-control' id='vehicleStatusBFJourney' name="vehicleStatusBFJourney"  value={statusBFJourney} />
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='vehicleStatusAFJourney' className='form-label'>Vehicle Status After Journey</label>
                            <textarea type='text' className='form-control' id='vehicleStatusAFJourney' name='vehicleStatusAFJourney'  value={statusAFJourney} />
                            </div>               
                        </div>

                        <div className='row mt-3'>
                            <div className='col-6'>
                                <label htmlFor='journeyDescription' className='form-label'>Journey Description</label>
                                <input type="text" className='form-control' id='journeyDescription' name="journeyDescription"  value={journeyDescription}/>
                                
                            </div>
                                         
                        </div>

                        {/* <div className='row mt-3  text-center'>
                            <div className='col'>
                            <h4></h4>
                            
                                
                            </div>             
                        </div> */}

                    

                    

                    
                        {/* <div className='row mt-3'>
                            <div className='col text-center '>
                            
                            <button type="button" className="btn btn-danger w-25 mx-1" aria-label="Close" >Cancel</button>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-6'>
                        <div className='row mt-3 text-center'>
                                <h4>Client Details</h4>
                        </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='clientName' className='form-label'>Name</label>
                                <input type="text" className='form-control' id='clientInput' name="clientInput"  value={clientName}/>
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='addressInput' className='form-label'>Address</label>
                            <input type='text' className='form-control' id='addressInput' name='addressInput' value={clientAddress} />
                            </div>               
                        </div>

                        <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='phoneNoInput' className='form-label'>Contact Number</label>
                                <input type="text" className='form-control' id='phoneNoInput' name="phoneNoInput"  value={clientNumber}/>
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='nicNoInput' className='form-label'>Nic No</label>
                            <input type='text' className='form-control' id='nicNoInput' name='nicNoInput'  value={clientNicNo}/>
                            </div>               
                        </div>

                        {/* <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='licenceValidFromInput' className='form-label'>Licence Activation Date</label>
                                <input type="text" className='form-control' id='licenceValidFromInput' name="licenceValidFromInput" />
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='licenceExpiryInput' className='form-label'>Licence Expiry Date</label>
                            <input type='text' className='form-control' id='licenceExpiryInput' name='licenceExpiryInput'  />
                            </div>               
                        </div> */}

                        {/* <div className='row mt-3'>
                            <div className='col'>
                                <label htmlFor='insuranceActivationDateInput' className='form-label'>Insurance Activation Date</label>
                                <input type="text" className='form-control' id='insuranceActivationDateInput' name="insuranceActivationDateInput" />
                                
                            </div>
                            <div className='col'>
                            <label htmlFor='InsuranceExpiryInput' className='form-label'>Insurance Expiry Date</label>
                            <input type='text' className='form-control' id='InsuranceExpiryInput' name='InsuranceExpiryInput' />
                            </div>                
                        </div> */}

                        {/* <div className='row mt-3  text-center'>
                            <div className='col'>
                            <h4></h4>
                            
                                
                            </div>             
                        </div> */}

                    

                    

                    
                        
                    </div>
                    
                
                </div>

                
                </div>
            </div>
            <div className='row text-center justify-content-center'>
            
                <div className='col-6 text-center justify-content-center d-flex my-4'>
                    <button type="button" className="btn btn-success w-25 mx-1" aria-label="Close" >Update</button>
                    <button type="button" className="btn btn-danger w-25 mx-1" aria-label="Close" >Clear</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
 