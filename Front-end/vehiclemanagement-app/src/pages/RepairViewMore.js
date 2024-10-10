import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function RepairViewMore() {
  const params = useParams();
  const navigate = useNavigate();
  const [repairId, setRepairId] = useState('');
  const [allRepairDatas,setAllRepairDatas] = useState('');
  const [companyId,setCompanyId] = useState('');
  const [userId,setUserId] = useState('');
  const [vehicleId,setVehicleId] =useState('');
  const [garageName,setGarageName] = useState('');
  const [repairDate,setRepairDate] = useState('');
  const [address,setAddress] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [malfunctionDetails,setMalfunctionDetails] =useState('');
  const [totalAmount, setTotalAmount] =useState('');


  useEffect(()=>{
    const RepairId = params.RepairId;
    setRepairId(RepairId);

    const userid = localStorage.getItem("userId");
    setUserId(userid);

    const CompanyId = localStorage.getItem("companyId");
    setCompanyId(CompanyId);

    fetch(`https://localhost:7096/api/Repair/GetRepairDataByRepairId?repairId=${RepairId}`)
    .then(response =>{
      if(!response.ok){
        throw new Error (`Http error! status:${response.status}`);
      }
      return response.json();
    })
    .then(data =>{
        console.log(data);
        setAllRepairDatas(data);
        
    })
    .catch(error =>{
      console.error('Error Fetching Vehcle Repair Data:',error);
    })

    

  },[]);

  useEffect(()=>{

      setVehicleId(allRepairDatas.vehicle_id);
      setGarageName(allRepairDatas.garage_name);
      setRepairDate(allRepairDatas.date);
      setAddress(allRepairDatas.address);
      setPhoneNo(allRepairDatas.phone_no);
      setMalfunctionDetails(allRepairDatas.malfunction_details);
      setTotalAmount(allRepairDatas.total_amount);

  })

  function handleClose(){
    navigate('/Maintenance');
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
            <div className='row'>
              <div className='col-6'>
                <div className='row'>
                  <div className='col'>
                    <label htmlFor='repairIdInput' className='form-label'>Repair Id</label>
                    <input type='text' className='form-control' id='repairIdInput' name='repairIdInput' value={repairId} readOnly />
                  </div>
                  <div className='col'>
                    <label htmlFor='companyIdInput' className='form-label'>Company Id</label>
                    <input type='text' className='form-control' id='companyIdInput' name='companyIdInput' value={companyId} readOnly />
                  </div>
                  <div className='col'>
                    <label htmlFor='userIdInput' className='form-label'>User Id</label>
                    <input type='text' className='form-control' id='userIdInput' name='userIdInput' value={userId} readOnly />
                  </div>
                  <div className='col'>
                    <label htmlFor='vehicleIdInput' className='form-label'>Vehicle Id</label>
                    <input type='text' className='form-control' id='vehicleIdInput' name='vehicleIdInput' value={vehicleId} readOnly />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label htmlFor='garageNameInput' className='form-label'>Garage Name</label>
                    <input type='text' className='form-control' id='garageNameInput' name='garageNameInput' value={garageName} readOnly />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label htmlFor='dateInput' className='form-label'>Date</label>
                    <input type='text' className='form-control' id='dateInput' name='dateInput' value={repairDate} readOnly />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label htmlFor='addressInput' className='form-label'>Address</label>
                    <input type='text' className='form-control' id='addressInput' name='addressInput' value={address} readOnly />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label htmlFor='contactNoInput' className='form-label'>Contact Number</label>
                    <input type='text' className='form-control' id='contactNoInput' name='contactNoInput'value={phoneNo} readOnly />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label htmlFor='malfunctionDetailsInput' className='form-label'>Malfunction Details</label>
                    <textarea className='form-control' id='malfunctionDetailsInput' name='malfunctionDetailsInput' value={malfunctionDetails} readOnly />
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <label htmlFor='totalAmountInput' className='form-label'>Total Amount</label>
                    <input type="text" className='form-control' id='totalAmountInput' name='totalAmountInput'value={totalAmount} readOnly />
                  </div>
                </div>
              </div>
              <div className='col-6'></div>
            </div>

            <div className='row justify-content-center my-4 mx-4'>
              <div className='col-3 text-center'>
                <button type="button" className="btn btn-danger w-100" aria-label="Close" onClick={handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      {/* {repairId}
        <div className="d-flex justify-content-end my-4 mx-4">
    <button type="button" className="btn-close btn-success" aria-label="Close"></button>

  </div>
  <div className="d-flex justify-content-end my-4 mx-4">
    <button
      type="button"
      className="btn btn-danger"
      aria-label="Close"
      // Add your close function here
    >
      Close
    </button>
  </div> */}


    </div>
  )
}
