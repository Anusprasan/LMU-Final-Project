import React from 'react'
import {useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

  

export default function Journeyclientdetails() {
  const navigate = useNavigate();
  const [clientName, setClientName] = useState('');  
  const [lastJourneyId,setLastJourneyId] = useState('');
  const [clientPhoneNo, setClientPhoneNo] = useState('');
  const [clientAddress, setClientAddress] = useState(''); 
  const [clientNIC, setClientNIC] = useState(''); 

  useEffect(()=>{
    fetch('https://localhost:7096/api/Journey/GetJourneyId')
    .then((response) =>{
        if(!response.ok){
            throw new Error('network reponse was not ok');
        }

        return response.json();
    })
    .then((data)=>{
        setLastJourneyId(data)
    })
    .catch((error)=>{
        console.error(error)
    })
  },[]);

  function handleSubmit(e){
    e.preventDefault(); 
    const clientdata ={
        name : clientName,
        phone_no : clientPhoneNo,
        address: clientAddress,
        nic_no :clientNIC,
        Journey_id: lastJourneyId
        

    };

    if(!clientName||!clientPhoneNo||!clientAddress||!clientNIC||!lastJourneyId){
        alert("Check Your Fields")
    }
    else{
        fetch('https://localhost:7096/api/Client/AddClients',
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
    
                body:JSON.stringify(clientdata)
        
            })
            .then(response =>{
                if(!response.ok){
                    console.log('Response',response);
                    throw new Error(`Http error! Status:${response.status}`);
    
                }
                return response.json();
            })
            .then(data =>{
                console.log(data);
                alert("Journey Added Successfully");
            })
            .catch((err)=>{
                console.log(err);
               
                alert("Operation Failed: " + err.message);
            });
    
    
    }

    
 
  }

  function handleCancelSubmit (){
        fetch(`https://localhost:7096/api/Client/CancelJourney?journeyId=${lastJourneyId}`,
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },

                

            })
            .then(response =>{
                if(!response.ok){
                    throw new Error( `Http error status: ${response.status}`);
                }
                return response.json();
            })
            .then(data =>{
                alert("Journey Cancelled Succussfully");
                navigate("/Journey/")

            })
            .catch((err)=>{
                console.error(err.message)
                alert("Operation Failed")
            })

  }

  return (
    <div>
        {lastJourneyId}
        {/* FOR TESTING PURPOSE
        
        {clientName}
        {clientPhoneNo}
        {clientAddress}
        {clientNIC} */}
    
        <div className='row justify-content-center'>
            <div className='col-6'>
                <div className='card mt-5'>
                    <div className='card-header'>
                        <h3 className='text-center'>Client Details</h3>
                    </div>
                    <div className='card-body'>
                    
                        {/* clientname row */}
                    <div className="row mt-4 mx-2">
                        <label for="clientnameinput" className="form-label">Name</label>
                        <input  type="text" className="form-control w-100" id="clientnameinput" onChange={(e) => setClientName(e.target.value)} />
                    </div>
                    {/* clientphoneNo */}
                    <div className="row mt-4 mx-2">
                       <label for="clientphonenoinput" className="form-label">Phone No</label>
                        <input  type="tel" className="form-control w-100" id="clientphonenoinput" value={clientPhoneNo} onChange={(e) => setClientPhoneNo(e.target.value.replace(/\D/g, ''))} maxLength={10}/>
                    </div>
                    {/* Address */}
                    <div className="row mt-4 mx-2">
                       <label for="clientphonenoinput" className="form-label">Address</label>
                        <input  type="text" className="form-control w-100" id="clientphonenoinput" value={clientAddress}onChange={(e) => setClientAddress(e.target.value)}/>
                    </div>
                    {/* NIC */}
                    <div className="row mt-4 mx-2">
                        <label for="nicnoinput" className="form-label">NIC No</label>
                        <input  type="text" className="form-control w-100" id="nicnoinput" value={clientNIC} onChange={(e) => setClientNIC(e.target.value)}/>
                    </div>
                    {/* uploaddrivinglicense
                    <div className="row mt-4 mx-2">
                        <div className="col-4">
                        <label for="uploadinput" className="form-label">Driving License Photo</label>
                        </div>
                        <div className="col-6">
                        <input class="form-control" type="file" id="formFileMultiple" onChange={(e) => setDrivingLicensePhoto(e.target.files[0])}/>
                        </div>
                    </div> */}

                    <div class="row justify-content-center mt-4"> 
                        <div class="col-6"> 
                            <div class="form-group">
                            <button class="form-control btn btn-success" name="btnSubmitTrip" id="btnSubmitTrip" onClick={handleSubmit}>Book Trip Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="row justify-content-center mt-4"> 
                        <div class="col-3"> 
                            <div class="form-group">
                            <button class="form-control btn btn-danger" name="journey cancel" id="journey cancel" onClick={handleCancelSubmit}>Cancel </button>
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
