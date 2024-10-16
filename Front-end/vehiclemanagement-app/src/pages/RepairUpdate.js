
import React, { useEffect, useState } from 'react';
import { Link ,useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function RepairUpdate() {
  const params = useParams();
  const navigate = useNavigate();
  const [repairId, setRepairId] = useState('');
  const [allRepairDatas,setAllRepairDatas] = useState({});
  const [companyId,setCompanyId] = useState('');
  const [userId,setUserId] = useState('');
  const [vehicleId,setVehicleId] =useState('');
  const [garageName,setGarageName] = useState('');
  const [repairDate,setRepairDate] = useState('');
  const [address,setAddress] = useState('');
  const [phoneNo,setPhoneNo] = useState('');
  const [malfunctionDetails,setMalfunctionDetails] =useState('');
  const [totalAmount, setTotalAmount] =useState('');

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const RepairId = params.RepairId;
        setRepairId(RepairId);

        const userid = localStorage.getItem("userId");
        setUserId(userid);

        const CompanyId = localStorage.getItem("companyId");
        setCompanyId(CompanyId);

        const response = await fetch(`https://localhost:7096/api/Repair/GetRepairDataByRepairId?repairId=${RepairId}`);
        if (!response.ok) {
          throw new Error(`Http error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllRepairDatas(data);

        // Populate the fields with fetched data
        setVehicleId(data.vehicle_id);
        setGarageName(data.garage_name);
        setRepairDate(data.date);
        setAddress(data.address);
        setPhoneNo(data.phone_no);
        setMalfunctionDetails(data.malfunction_details);
        setTotalAmount(data.total_amount);
        console.log("Anush")
        console.log("Andsddsdsdsdush")
      } catch (error) {
        console.error('Error Fetching Vehicle Repair Data:', error);
        alert("You don't have any data for the given RepairId");
        navigate("/Maintenance")
      }
    };

    fetchData(); // Call the async function

  }, []);

  // useEffect(()=>{

  //   // console.log("Anush")
    
      
  // },[])

  function handleClose(){
    navigate('/Maintenance');
  }

  const handleClearSubmit =()=>{
    setRepairDate('');
    setGarageName('');
    setAddress('');
    setPhoneNo('');
    setMalfunctionDetails('');
    setTotalAmount('');
  }

  const handleRepairUpdate = ()=>{


  }
  return (
    <div>
      {/* {phoneNo} */}
    {/* {garageName} */}
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
                  <label htmlFor='dateInput' className='form-label'>Date</label>
                  <input type='datetime-local' className='form-control' id='dateInput' name='dateInput' value={repairDate} onChange={(e)=>setRepairDate(e.target.value)}/>
                </div>
              </div>

              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='garageNameInput' className='form-label'>Garage Name</label>
                  <input type='text' className='form-control' id='garageNameInput' name='garageNameInput' value={garageName}  onChange={(e)=>setGarageName(e.target.value)}/>
                </div>
              </div>
              
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='addressInput' className='form-label'>Address</label>
                  <input type='text' className='form-control' id='addressInput' name='addressInput' value={address}  onChange={(e)=>setAddress(e.target.value)}/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='contactNoInput' className='form-label'>Contact Number</label>
                  <input type='text' className='form-control' id='contactNoInput' name='contactNoInput'value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} />
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='malfunctionDetailsInput' className='form-label'>Malfunction Details</label>
                  <textarea className='form-control' id='malfunctionDetailsInput' name='malfunctionDetailsInput' value={malfunctionDetails}  onChange={(e)=>setMalfunctionDetails(e.target.value)}/>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col'>
                  <label htmlFor='totalAmountInput' className='form-label'>Total Amount</label>
                  <input type="text" className='form-control' id='totalAmountInput' name='totalAmountInput'value={totalAmount} onChange={(e)=>setTotalAmount(e.target.value.replace(/\D/g, ''))} />
                </div>
              </div>

              
              <div className='row mt-3'>
                <div className='col text-center '>
                  <button type="button" className="btn btn-success w-25 mx-1" aria-label="Close" onClick={handleRepairUpdate} >Update</button>
                  <button type="button" className="btn btn-danger w-25 mx-1" aria-label="Close" onClick={handleClearSubmit}>Clear</button>
                </div>
              </div>
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
