import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function VehicleViewMore() {
    const params = useParams();
    const navigate = useNavigate();
    const [vehicleId,setVehicleId] = useState('');
    const [companyId,setCompanyId] = useState('');
    const [userId , setUserId] = useState('');
    const [type,setType] = useState('');
    const [brand,setBrand] = useState('');
    const [model,setModel] = useState('');
    const [platNo, setPlateNo] = useState('');
    const [licenceIssuedDate,setLicenceIssuedDate] = useState('');
    const [licenceExpiryDate,setLicenceExpiryDate] = useState('');
    const [insuranceIssuedDate,setInsuranceIssuedDate] = useState('');
    const [insuranceExpiryDate,setInsuranceExpiryDate] = useState('');
    const [vehicleStatus,setVehicleStatus] = useState('');

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const VehicleId = params.VehicleId;
                

                const CompanyId = localStorage.getItem('companyId');

                const responseVehicleData = await fetch(`https://localhost:7096/api/Vehicle/GetVehicleDatasById?companyId=${CompanyId}&vehicleId=${VehicleId}`);

                if(!responseVehicleData.ok){
                    throw new Error(`Http error! status:${responseVehicleData.status}`)
                }
                const data = await responseVehicleData.json();
                console.log(data);

                setVehicleId(data.vehicle_id);
                setCompanyId(data.companyId);
                setUserId(data.user_id);
                setType(data.type);
                setBrand(data.brand);
                setModel(data.model);
                setPlateNo(data.plate_no);
                setLicenceIssuedDate(data.licenceIssuedDate.split('T')[0]);
                setLicenceExpiryDate(data.licenceExpiryDate.split('T')[0]);
                setInsuranceIssuedDate(data.insuranceIssuedDate.split('T')[0]);
                setInsuranceExpiryDate(data.insuranceExpiryDate.split('T')[0]);
                setVehicleStatus(data.vehicleStatus);



            }
            catch(err){
                console.error('Error fetching Vehice Data',err);
            }
        }
        fetchData();
    },[])
    const handleClose = ()=>{
        navigate("/Vehicle");
    }
  return (
    <div>
        
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
                  <label htmlFor='vehicleIdInput' className='form-label'>Vehicle Id</label>
                  <input type='text' className='form-control' id='vehicleIdInput' name='vehicleIdInput' value={vehicleId} readOnly />
                </div>
                <div className='col'>
                  <label htmlFor='companyIdInput' className='form-label'>Company Id</label>
                  <input type='text' className='form-control' id='companyIdInput' name='companyIdInput' value={companyId} readOnly />
                </div>
                <div className='col'>
                  <label htmlFor='userIdInput' className='form-label'>User Id</label>
                  <input type='text' className='form-control' id='userIdInput' name='userIdInput' value={userId} readOnly />
                </div>
                
              </div>

              <div className='row mt-3'>
                <div className='col'>
                    <label htmlFor='typeInput' className='form-label'>Vehicle Type</label>
                    <input type="text" className='form-control' id='typeInput' name="typeInput" value={type} readOnly/>
                    
                </div>
                <div className='col'>
                  <label htmlFor='brandInput' className='form-label'>Vehicle Brand</label>
                  <input type='text' className='form-control' id='brandInput' name='brandInput' value={brand} readOnly/>
                </div>               
              </div>

              <div className='row mt-3'>
                <div className='col'>
                    <label htmlFor='modelInput' className='form-label'>Vehicle Model</label>
                    <input type="text" className='form-control' id='modelInput' name="modelInput" value={model} readOnly/>
                    
                </div>
                <div className='col'>
                  <label htmlFor='plateNoInput' className='form-label'>Vehicle Plate No</label>
                  <input type='text' className='form-control' id='plateNoInput' name='plateNoInput' value={platNo} readOnly/>
                </div>               
              </div>

              <div className='row mt-3'>
                <div className='col'>
                    <label htmlFor='licenceValidFromInput' className='form-label'>Licence Activation Date</label>
                    <input type="text" className='form-control' id='licenceValidFromInput' name="licenceValidFromInput" value={licenceIssuedDate} readOnly/>
                    
                </div>
                <div className='col'>
                  <label htmlFor='licenceExpiryInput' className='form-label'>Licence Expiry Date</label>
                  <input type='text' className='form-control' id='licenceExpiryInput' name='licenceExpiryInput'  value={licenceExpiryDate} readOnly/>
                </div>               
              </div>

              <div className='row mt-3'>
                <div className='col'>
                    <label htmlFor='insuranceActivationDateInput' className='form-label'>Insurance Activation Date</label>
                    <input type="text" className='form-control' id='insuranceActivationDateInput' name="insuranceActivationDateInput" value={insuranceIssuedDate} readOnly/>
                    
                </div>
                <div className='col'>
                  <label htmlFor='InsuranceExpiryInput' className='form-label'>Insurance Expiry Date</label>
                  <input type='text' className='form-control' id='InsuranceExpiryInput' name='InsuranceExpiryInput' value={insuranceExpiryDate} readOnly/>
                </div>                
              </div>

              <div className='row mt-3  text-center'>
                <div className='col'>
                   <h4>{vehicleStatus}</h4>
                   
                    
                </div>             
              </div>

              

              

              
              <div className='row mt-3'>
                <div className='col text-center '>
                  
                  <button type="button" className="btn btn-danger w-25 mx-1" aria-label="Close" onClick={handleClose} >Cancel</button>
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
