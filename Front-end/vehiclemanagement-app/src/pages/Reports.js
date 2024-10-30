import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

const PdfGenerator = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [incomeMonth,setInComeMonth] = useState('');
  const [incomeYear,setIncomeYear]  = useState('');
  const [pdfUrl, setPdfUrl] = useState(null);
 
  const [userName,setUserName] = useState('');

  const handleGenerateReport = async () => {
    const UserName = localStorage.getItem('fullName');
    setUserName(UserName);

    if (!month || !year) {
      alert("Please enter both month and year.");
      return;
    }

    try {
      const response = await fetch(
        `https://localhost:7096/GenrateMonthlyExpenseReport?month=${month}&year=${year}`
      );
      const data = await response.json();
      
      generatePdf(data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  };
 
  const handleGenerateIncomeReport = async () => {

    const UserName = localStorage.getItem('fullName');
    setUserName(UserName);
    if(!incomeMonth || !incomeYear){
      alert("Please Enter both month and year.")
      return;

      
    }
    try{
      const response = await fetch(`https://localhost:7096/GetMonthlyIncome?month=${incomeMonth}&year=${incomeYear}`);
      const data = await response.json();

      generateIncomePdf(data);
    }
    catch(err){
        console.error('Error fetching report data:',err);
    }
  };

  const generateIncomePdf =(data)=>{
    const doc = new  jsPDF();
    console.log("Received data:",data);

    doc.text(`City Taxi (PVT)LTD`, 10, 10);
    doc.text(`Monthly Income Report for ${incomeMonth}/${incomeYear}`, 10, 20);
    doc.text(`Prepared By: ${userName} `, 10, 30);

    const totalAmount = data.reduce((sum,record) => sum+record.amount,0);
    

    autoTable(doc, {
      startY: 40,
      head: [[' Date', 'Vehicle ID', 'Description', 'Amount']],  // Table header
      body: [
        ...data.map(record => [
        record.date,
        record.vehicleId,
        
        record.description,
        `LKR ${record.amount.toFixed(2)}`  // Format cost
      ]),
      [{ content: 'Total', colSpan: 3, styles: { halign: 'right' } }, `LKR ${totalAmount.toFixed(2)}`] // Total row
    ]
    });
    
    // Open the PDF in a new tab
    const pdfDataUrl = doc.output('bloburl');
    window.open(pdfDataUrl);


  }
  const generatePdf = (data) => {
    const doc = new jsPDF();
    console.log("Received data:", data);

    // Header 
    doc.text(`City Taxi (PVT)LTD`, 10, 10);
    doc.text(`Monthly Maintenance Report for ${month}/${year}`, 10, 20);
    doc.text(`Prepared By: ${userName} `, 10, 30);

    const totalAmount = data.reduce((sum,record) => sum+record.amount,0);
    
    
    autoTable(doc, {
      startY: 40,
      head: [['Service Date', 'Vehicle ID', 'Description', 'Cost']],  // Table header
      body: [
        ...data.map(record => [
        record.expensesDate,
        record.vehicleId,
        
        record.description,
        `LKR ${record.amount.toFixed(2)}`  // Format cost
      ]),
      [{ content: 'Total', colSpan: 3, styles: { halign: 'right' } }, `LKR ${totalAmount.toFixed(2)}`] // Total row
    ]
    });
    
    // Open the PDF in a new tab
    const pdfDataUrl = doc.output('bloburl');
    window.open(pdfDataUrl);
  };

  return (
    <div>
     
      <div className='row '>
        <div className='col text-center'>
          <h2>Generate PDF Reports</h2>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col d-flex justify-content-center'>
          <div className='card'>
            <div className='card-header text-center'>
              <h4>Monthly Maintenance Report</h4>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col d-flex'>
                  <label className='form-label' htmlFor="monthInput">Month:</label>
                  <input
                    className='form-control'
                    id="monthInput"
                    type="number"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="MM"
                    min="1"
                    max="12"
                    required
                    style={{ margin: '0 10px' }}
                  />
                </div>

                <div className='col d-flex'>
                  <label className='form-label' htmlFor="yearInput">Year:</label>
                  <input
                    className='form-control'
                    id="yearInput"
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="YYYY"
                    min="2000"
                    required
                    style={{ margin: '0 10px' }}
                  />
                </div>

                <div className='col d-flex'>
                  <button className='btn btn-success' onClick={handleGenerateReport}>Generate Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        
        <div className='col d-flex justify-content-center'>
          <div className='card'>
            <div className='card-header text-center'>
              <h4>Monthly Income Report</h4>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col d-flex'>
                  <label className='form-label' htmlFor="monthInput">Month:</label>
                  <input
                    className='form-control'
                    id="monthInput"
                    type="number"
                    value={incomeMonth}
                    onChange={(e) => setInComeMonth(e.target.value)}
                    placeholder="MM"
                    min="1"
                    max="12"
                    required
                    style={{ margin: '0 10px' }}
                  />
                </div>

                <div className='col d-flex'>
                  <label className='form-label' htmlFor="yearInput">Year:</label>
                  <input
                    className='form-control'
                    id="yearInput"
                    type="number"
                    value={incomeYear}
                    onChange={(e) => setIncomeYear(e.target.value)}
                    placeholder="YYYY"
                    min="2000"
                    required
                    style={{ margin: '0 10px' }}
                  />
                </div>

                <div className='col d-flex'>
                  <button className='btn btn-success' onClick={handleGenerateIncomeReport}>Generate Report</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {pdfUrl ? (
        <iframe
          src={pdfUrl}
          title="PDF Preview"
          width="100%"
          height="800px"
          style={{ border: '1px solid #ccc' }}
        ></iframe>
      ) : (
        <p>No report to display.</p>
      )}
    </div>
  );
};

export default PdfGenerator;
