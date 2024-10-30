import React from 'react'




import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';


import { useState,useEffect } from 'react';


export default function Journey() {
  const navigate = useNavigate();
  const [allVehicleId,setAllVehicleId]= useState([]);
  const [journeyClientDatas,setJourneyClientData] = useState([]);
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
  const [searchTerm,setSearchTerm] = useState('');
  const [journeyIdInput,setJourneyIdInput] = useState('');
  const [mobileNumberInput,setMobileNumberInput] = useState('');
  const smsUserId = "94771161760";
  const smsPassword = "4489";
  const no="0762328496";
  const [smsMessage,setSmsMessage] = useState('');

  
  // For Modal Box
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      if(!mobileNumberInput == ''){
        setModalOpen(true);
      }
      else
      {
        alert('Enter Valid Mobile Number');
      }
        
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSmsMessage('');
    };
 
  // const [journey,setJouney] = useState({

  // })
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
          const responseJourenyClientData= await fetch(`https://localhost:7096/api/Journey/GetJourneyClient`);

          if(responseJourenyClientData.status==400){
            console.log(responseJourenyClientData.status)
          }else if(!responseJourenyClientData.ok){
            throw new Error(`Http error! status:${
              responseJourenyClientData.status
            }`);
          }else{
            const data = await responseJourenyClientData.json();
            console.log(data);
            setJourneyClientData(data);

            
          }

        }
        catch(err){
          console.error('Error',err);
        }
    }

    fetchData();

  },[]);

  const filterJourneyClientDatas = journeyClientDatas.filter((data)=>{
    return(
      data.journey.journey_id.toString().includes(searchTerm)||
      data.journey.vehicle_id.toString().includes(searchTerm)||
      data.client.name.toLowerCase().includes(searchTerm.toLowerCase())||
      data.client.phone_no.toString().includes(searchTerm)|| 
      data.journey.started_date.toLowerCase().includes(searchTerm.toLowerCase())||
      data.journey.journeyStatus.toLowerCase().includes(searchTerm.toLowerCase())  
    )
  })

  const handleAddButtonClick = ()=>
  {
    navigate("/Vehicle");
  } 

  const handleUpdateClick = ()=>{
    const inputValidate= async ()=>{
        try{
          const CompanyId = localStorage.getItem("companyId");
          const UserId = localStorage.getItem('userId');
          
        
          if(journeyIdInput ==""){
              alert("Please Provide Vehicle ID");
              return;
          }
          else{
            const responseJourneyUpdateData = await fetch(`https://localhost:7096/api/Journey/CheckDataForJourneyUpdate?userId=${UserId}&journeyId=${journeyIdInput}`,{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              }
            });

            if(responseJourneyUpdateData.status == 403){
              alert("You Do not Have Permission to Update This Data");
            }
            else if(responseJourneyUpdateData.status == 404){
              alert("Enter Valid Journey ID");
            }
            else if(!responseJourneyUpdateData.ok){
              alert("An Error Occured");
              throw new Error(`Http error!:${responseJourneyUpdateData.status}`);

            }
            else{
              const data = await responseJourneyUpdateData.json();
              console.log(data)
              navigate(`/JourneyUpdate/${journeyIdInput}`);
            }

          }
          

          

        }
        catch(err){
          console.error(`Error:${err}`)
        }
    }
    inputValidate();
  }

  const handleJourneyEnd = (journeyId,vehicleId) =>{
    navigate(`/EndJourney/${journeyId}/${vehicleId}`)
  }

  const handleDelete = ()=>{
    const uploadDeleteData = async ()=>{
      try{
          const UserId = localStorage.getItem('userId');
          if(journeyIdInput ==""){
            alert("Enter Journey Id")
          }
          else{
            const responseDeleteData = await fetch(`https://localhost:7096/api/Journey/DeleteJourneyData?journeyId=${journeyIdInput}&userId=${UserId}`,{
              method : "POST",
              headers :{
                "Content-type":"application/json"
              }
            });

            if(responseDeleteData.status == 404){
              if(message =="This User Do not Have Permission To Delete This Data"){
                alert("This User Do not Have Permission To Delete This Data");

              }else{
                alert("Invalid Journey Id");
              }
            }
            else if(responseDeleteData.status == 400){
              alert("Failed to Delete");
            }
            else if(!responseDeleteData.status.ok){
              throw new Error ( `Http error:${responseDeleteData.status}`)
            }
            else{
              alert("Deleted Successfully");
            }
          }
      }
      catch(err){
        console.error(`Error:`,err)
      }

    }
    uploadDeleteData();
  }

    const handleTableRowClick = (journey_id,phone_no,clientName)=>{
      setJourneyIdInput(journey_id);
      setMobileNumberInput(phone_no);
      setClientName(clientName);
      

    }

    const handleSmsSend = () => {
      const fetchData = async () => {
       
          try {
            const encodeMessage = encodeURIComponent(smsMessage);
              const smsData ={
                phoneNumber:mobileNumberInput,
                message:encodeMessage
              }
  
              const response = await fetch("https://localhost:7096/api/Journey/SendSms", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body:JSON.stringify(smsData)
              });
  
            
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
  
              const data = await response.json(); 
              console.log('SMS sent successfully:', data);
              alert("SMS sent successfully");
              handleCloseModal();
          } catch (error) {
              console.error("Error sending SMS:", error);
          }
      }
  
      fetchData();
  }
  
    const handleInputMessageChange = (event)=>{
        const message = event.target.value;
      
        setSmsMessage(message);
    }
 

  return (
    <div>
       
      {/* navigation row */}
      <div className="row ">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Journey History</button>
            <button class="nav-link" id="nav-Journeyend-tab" data-bs-toggle="tab" data-bs-target="#nav-Journeyend" type="button" role="tab" aria-controls="nav-Journeyend" aria-selected="false">Journey End</button>
           
            
          </div>
        </nav>
          <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

          <div className="row mx-1 mt-3">
            <div className="col-2">
              <input
                type="text"
                className="form-control w-100"
                placeholder="Mobile Number..."
                value={mobileNumberInput}
                
                
              />
            </div>
            <div className='col'>
              <button className='btn btn-warning' onClick={handleOpenModal}>SMS</button>
            </div>
          </div> 
           {/* Modal */}
           <div className={`modal ${modalOpen ? 'show' : ''}`} style={{ display: modalOpen ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Message To : {clientName}</h5>
                            
                        </div>
                        <div className="modal-body">
                            <textarea className='form-control' id ='SMSMessage Input' value={smsMessage} onChange={handleInputMessageChange}></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                Close
                            </button><button type="button" className="btn btn-success" onClick={handleSmsSend}>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

          <div className="row mx-1 mt-3">
            <div className="col">
              <input
                type="text"
                className="form-control w-25"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                
              />
            </div>
            <div className="col-5 d-flex justify-content-end mx-1">
              <input
                className="form-control "
                type="text"
                id="updateRepair"
                placeholder="Enter VehicleId..."
                value={journeyIdInput}
                onChange={(e) => setJourneyIdInput(e.target.value.replace(/\D/g, ''))}
              />
              <button
                className="btn btn-success mx-1"
                onClick={handleUpdateClick}
              >
                Update
              </button>
              <button
                className="btn btn-primary w-50 mx-1"
                onClick={() => handleAddButtonClick()}
              >
                Add Journey
              </button>
              {/* <button className='btn btn-info mx-1'>More</button> */}
              <button className='btn btn-danger mx-1' onClick={handleDelete}>Delete</button>
            </div>
          </div>
              <div className='row justify-content-center mt-3 mx-1'>
                <div class =" col-md-12">
                  <table id="tblCategory" class=" table table-striped table-bordered table-hover" >
                    <thead>
                      <tr>
                        <th>Journey ID</th>
                        <th>Vehicle ID</th>
                        <th>Client Name</th>
                        <th>Conatact Number</th>
                        <th>Date of Departure</th>
                        <th>Estimated Arrival Date</th>
                        <th>Package</th>
                        <th>Journey Status</th>
                        <th></th>
                        
                      </tr>

                    </thead>
                    <tbody>
                      {filterJourneyClientDatas.length>0?(
                        filterJourneyClientDatas.map((data)=>(
                          <tr onClick={()=>handleTableRowClick(data.journey.journey_id,data.client.phone_no,data.client.name)}>
                             <td>{data.journey.journey_id}</td>
                             <td>{data.journey.vehicle_id}</td>
                             <td>{data.client.name}</td>
                             <td>{data.client.phone_no}</td>
                             <td>{data.journey.started_date.split('T')[0]}</td>
                             <td>{data.journey.estimatedArrivalDate}</td>
                             <td>{data.journey.package}</td>
                             <td style={{ color: data.journey.journeyStatus === "Completed" ? "red" : "green" }}>{data.journey.journeyStatus}</td>
                            <td className='text-center'>{data.journey.journeyStatus === 'In Progress' && (
                              <button className='btn btn-dark w-75' onClick={() => handleJourneyEnd(data.journey.journey_id, data.journey.vehicle_id)}>
                                  End
                              </button>
                          )}</td>
                         </tr>
                        ))
                      ):(
                        <tr>
                          <td colSpan="7" className="text-center">
                               No results found
                          </td>
                        </tr>
                      )};
                                        
                    </tbody>
                  </table>
                </div>
              </div>
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
                      <button type="button" class="btn w-100" style={{backgroundColor:"#24314C",color:"white"}} >Save</button>
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
              
            
          </div>
          </div>
         
        </div>
      
      </div>
    
  )
}
