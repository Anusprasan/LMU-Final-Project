import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {useEffect,useState } from 'react';

export default function AddService() {
    const [userId,setUserId] = useState('');
    const [vehicleIds, setVehicleIds] = useState([]);
    const [serviceVehicleId, setServiceVehicleId] = useState('');
    const [vehicleServicedate, setVehicleServiceDate] = useState();
    const [serviceOdoReading, setServiceOdoReading] = useState();
    const [service,setService] = useState('');
    const [servicePhoneNo, setServicePhoneNo] = useState('');
    const [serviceDescription, setServiceDescription] = useState('');
    const [serviceTotalAmount,setServiceTotalAmount] = useState('');
    const [companyId,setCompanyId] = useState('');
    const [allRepairsData,setAllRepairsData] = useState([]);

    useEffect(()=>{
        const userid = localStorage.getItem("userId");
        setUserId(userid);
    
        const CompanyId = localStorage.getItem("companyId");
        setCompanyId(CompanyId);
    
    
        fetch(`https://localhost:7096/api/Repair/GetVehicleId?userId=${userid}`)
        .then(response=>{
          if(!response.ok){
            throw new Error ('Network response was not ok ');
          }
          return response.json();
        })
        .then(data =>{
            setVehicleIds(data);
        
        })
        .catch(err =>{
    
          console.error(err)
        })
      },[]);
    
      function handleServiceSubmit(){

        const serviceData ={
          vehicle_Id : serviceVehicleId,
          service_center : service,
          phone_no : servicePhoneNo,
          odometer_reading : serviceOdoReading,
          description : serviceDescription,
          date :vehicleServicedate,
          amount :serviceTotalAmount,
          created_by : userId,
          companyId,
          userId
        
    
        }
    
        if(!serviceVehicleId||!service||!servicePhoneNo||!serviceOdoReading||!serviceDescription||!serviceOdoReading||!vehicleServicedate||!serviceTotalAmount){
          alert("Enter valid data for all fields");
        }else{
            fetch ('https://localhost:7096/api/Service/InsertService',
          {
            method : "POST",
            headers:{
              "Content-Type": "application/json"
            },
    
            body:JSON.stringify(serviceData)
    
          }
        )
        .then(response =>{
          if(!response.ok){
            throw new Error(`Http error!Status :${response.status}`);
          }
          return response.json();
        })
        .then(data =>{
          console.log(data);
    
          alert("Service Added SuccessFully")
        })
        .catch(err=>{
          console.log(err);
          alert("operaton Failed");
        })
        }
    
      
      }

      function handleServiceCancel(){
        setServiceVehicleId('');
        setVehicleServiceDate('');
        setServiceOdoReading('');
        setService('');
        setServicePhoneNo('');
        setServiceDescription('');
        setServiceTotalAmount('');
      }

  return (
    <div>
        <div className='row justify-content-center'>
                <div className="col-6">
                  <div className='card'>
                    <div className='card-header'>
                      <h4 className='text-center'>General Services</h4>
                    </div>

                    <div className='card-body'>
                      {/* plateno */}
                      <div className="row mt-4 mx-2 ">
                          <div className="col-5">
                            <label for="plateno" className="form-label">Vehicle Id</label>
                          </div>
                          
                          <div className="col-6">
                            
                            <select class="form-control " id="vehicleType" name="vehicleType" value={serviceVehicleId} onChange={(e) => setServiceVehicleId(e.target.value)}>
                            <option value="" disabled selected>Select Vehicle </option>
                            {vehicleIds.map((ids,index)=>(
                               <option key={index} >{ids}</option>
                            ))}
                                
                               
                               
                            </select>
                          

                          </div>
                      </div>

                      
              
                      
                      

                      {/* date row */}
                      <div className="row mt-4 mx-2 ">
                        <div className="col-5">
                          <label for="dateinput" className="form-label">Date</label>
                        </div>
                        <div className="col-6" >
                        <input type="Datetime-local" className='form-control' id="dateinput" value={vehicleServicedate} onChange={(e)=> setVehicleServiceDate(e.target.value)}/>
                        </div>
                      </div>

                      {/* odemeter reading row */}
                      <div className="row  mx-2">
                        <div className="col">
                          <label for="odometerreadinginput" className="form-label" >Odometer Reading(Km)</label>
                          <input  type="text" className="form-control w-100" id="odometerreadinginput" value={serviceOdoReading} onChange={(e) => setServiceOdoReading(e.target.value.replace(/\D/g, ''))}  maxLength={10}/>
                        </div>
                      </div>

                      {/* Service Center */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="servicecenterinput" className="form-label">Service Center</label>
                          <input  type="text" className="form-control w-100" id="servicecenterinput" value={service} onChange={(e)=>setService(e.target.value)}/>
                        </div>
                      </div>                         
                          
                      {/* Service  Phone No */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="centerphonenoinput" className="form-label">Phone No</label>
                          <input  type="text" className="form-control " id="centerphonenoinput" value={servicePhoneNo} onChange={(e)=>setServicePhoneNo(e.target.value.replace(/\D/g, ''))} maxLength={10}/>
                        </div>
                      </div>
                        
                      {/* Service Description */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="servicedescriptioninput" className="form-label">Service Description </label>
                          <textarea className="form-control " id="servicedescriptioninput" value={serviceDescription} onChange={(e)=>setServiceDescription(e.target.value)}/>
                        </div>
                      </div>
                        
                      {/* Total Payment */}
                      <div className="row  mx-2 ">
                        <div className="col">
                          <label for="totalamountinput" className="form-label">Total Amount</label>
                          <input  type="number" className="form-control " id="totalamountinput" value={serviceTotalAmount} onChange={(e)=>setServiceTotalAmount(e.target.value)}/>
                        </div>
                      </div>
                        
                      {/* save and cancel row */}
                      <div className="row justify-content-center my-2  mx-2 "> 
                        <div className="col-6 d-flex gap-2">
                          <button type="button" class="btn btn-success w-100" onClick={handleServiceSubmit}>Save</button>
                        </div>
                      </div>

                      <div className="row justify-content-center my-1  mx-2 "> 
                        <div className="col-3 d-flex gap-2">
                          <button type="button" class="btn btn-danger w-100" onClick={handleServiceCancel} >Cancel</button>
                        </div>
                      </div>

                      
                        
                    
                    </div>

                  </div>
                  
                     

                      

                    
                    
              
                      

                      
                  

                </div>
              </div>
    </div>
  )
}
