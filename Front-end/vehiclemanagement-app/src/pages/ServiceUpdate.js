import React, { useEffect, useState } from 'react';

import { createSearchParams, Link ,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ServiceUpdate() {
    const params = useParams();
    const navigate = useNavigate();
    const [serviceData,setServiceData] = useState({});
    const [serviceId,setServiceId] = useState('');
    const [companyId,setCompanyId] = useState('');
    const [userId,setUserId] = useState('');
    const [vehicleId, setVehicleId] = useState('');
    const [serviceCenter, setServiceCenter]=useState('');
    const [phoneNo,setPhoneNo] = useState('');
    const [odometerReading,setOdoMeterReading] = useState('');
    const [description, setDescription] = useState('');
    const [date,setDate] = useState('');
    const [amount,setAmount] = useState('');

    useEffect(()=>{
        const fetchData = async () =>
        {
            try{
                const ServiceId = params.ServiceId;
                setServiceId(ServiceId);


                const UserId = localStorage.getItem("userId");
                setUserId(UserId);

                const CompanyId = localStorage.getItem("companyId");
                setCompanyId(CompanyId);

                const serviceDataResponse = await fetch (`https://localhost:7096/api/Service/GetServiceDataById?serviceId=${ServiceId}`);

                if(!serviceDataResponse.ok){
                    throw new Error (`Http error! status: ${serviceDataResponse.status}`);
                }
                const data = await serviceDataResponse.json();
                setServiceData(data);

                setVehicleId(data.vehicle_Id);
                setServiceCenter(data.service_center);
                setPhoneNo(data.phone_no);
                setOdoMeterReading(data.odometer_reading);
                setDescription(data.description);
                setDate(data.date);
                setAmount(data.amount);

                







            }
            catch(err){
                console.error('Error Fetching Vehicle Service Data:',err);
            }
        }
        fetchData();
    },[])

    const handleClear =()=>{
        setDate('');
        setServiceCenter('');
        setOdoMeterReading('');
        setPhoneNo('');
        setDescription('');
        setAmount('');
    };

    const handleClose = ()=>{
        navigate("/Maintenance");
    }

    const handleUpdate= ()=>{

        const updateData ={
            service_id:serviceId,
            userId,
            vehicle_Id:vehicleId,
            companyId,
            service_center:serviceCenter,
            phone_no:phoneNo,
            odometer_reading:odometerReading,
            description,
            date,
            amount,

        }
        const fetchData = async () =>{
            try{

                if(!serviceCenter||!phoneNo||!odometerReading||!description||!date||!amount){
                    alert("Enter Valid Data For All Fields");
                }
                else{
                    const UpdateDataResponse = await fetch (`https://localhost:7096/api/Service/UpdateServiceData`,{
                        "method":"POST",
                        "headers":{
                            "Content-Type":"application/json"
                        },
    
                        body:JSON.stringify(updateData)
    
                    });

                    if(!UpdateDataResponse.ok){
                        throw new Error(`Http error! status:${UpdateDataResponse.status}`);
                    }

                    const data = await UpdateDataResponse.json();
                    console.log(data);
                    alert("Service Data Updated Successfully");
                }
                
            }
            catch(err){
                console.error('Error Updating Service Data',err);
                alert(`Error Updating Service Data,${err}`);
            }
        };

        fetchData();
    }
  return (
    <div>
    {/* {serviceId}
    {vehicleId}
    {serviceCenter}
    {date}
    {odometerReading}
    {phoneNo}
    {description}
    {amount}
    {date}
    {date} */}
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-12 d-flex justify-content-end'>
          <button type="button" className="btn-close btn-success" aria-label="Close" onClick={handleClose}></button>
        </div>
      </div>
      <div className='row mt-3 mx-5'>
        <div className='col-12'>
          <div className='row justify-content-center'>
            <div className='col-6'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='serviceInput' className='form-label'>Service Id</label>
                  <input type='text' className='form-control' id='serviceInput' name='serviceInput' value={serviceId} readOnly />
                </div>
                <div className='col'>
                  <label htmlFor='companyIdInput' className='form-label'>Company Id</label>
                  <input type='text' className='form-control' id='companyIdInput' name='companyIdInput' value={companyId}  readOnly />
                </div>
                <div className='col'>
                  <label htmlFor='userIdInput' className='form-label'>User Id</label>
                  <input type='text' className='form-control' id='userIdInput' name='userIdInput'  value={userId}  readOnly />
                </div>
                <div className='col'>
                  <label htmlFor='vehicleIdInput' className='form-label'>Vehicle Id</label>
                  <input type='text' className='form-control' id='vehicleIdInput' name='vehicleIdInput' value={vehicleId}  readOnly />
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='dateInput' className='form-label'>Date</label>
                  <input type='datetime-local' className='form-control' id='dateInput' name='dateInput' value={date} onChange={(e)=>setDate(e.target.value)} />
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='serviceCenterInput' className='form-label'>Service Center</label>
                  <input type='text' className='form-control' id='serviceCenterInput' name='serviceCenterInput' value={serviceCenter} onChange={(e)=>setServiceCenter(e.target.value)} />
                </div>
              </div>
              
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='odometerReadingInput' className='form-label'>OdoMeter Reading</label>
                  <input type='text' className='form-control' id='odometerReadingInput' name='odometerReadingInput' value={odometerReading}  onChange={(e)=>setOdoMeterReading(e.target.value.replace(/\D/g, '')) } maxLength={6}/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='contactNoInput' className='form-label'>Contact Number</label>
                  <input type='text' className='form-control' id='contactNoInput' name='contactNoInput' value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value.replace(/\D/g, ''))} maxLength={10}/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='descriptionInput' className='form-label'>Description</label>
                  <textarea className='form-control' id='descriptionInput' name='descriptionInput'  value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='totalAmountInput' className='form-label'>Total Amount</label>
                  <input type="text" className='form-control' id='totalAmountInput' name='totalAmountInput' value={amount}  onChange={(e)=>setAmount(e.target.value.replace(/\D/g, ''))}/>
                </div>
              </div>

              
              <div className='row mt-3'>
                <div className='col text-center '>
                  <button type="button" className="btn btn-success w-25 mx-1" aria-label="Close" onClick={handleUpdate}>Update</button>
                  <button type="button" className="btn btn-danger w-25 mx-1" aria-label="Close" onClick={handleClear}>Clear</button>
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
