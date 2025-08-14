import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import BelprintLogo from "../assets/BELPRINT-LOGO.png";
import PriceMatch from "../assets/PriceMatch.jpg";
import ProcessBar from "../components/common/ProcessBar";

function QuoteInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quote } = location.state || {};
  const [selectedItems, setSelectedItems] = useState([]);
  const [totals, setTotals] = useState({ subtotal: 0, gst: 0, total: 0 });

  useEffect(() => {
    if (!quote) {
      navigate('/quotes', { replace: true });
    }
  }, [quote, navigate]);

  useEffect(() => {
    const newSubtotal = selectedItems.reduce((sum, item) => sum + (item.qty * item.unitCost), 0);
    const newGst = newSubtotal * 0.125;
    const newTotal = newSubtotal + newGst;
    setTotals({ subtotal: newSubtotal, gst: newGst, total: newTotal });
  }, [selectedItems]);

  if (!quote) {
    return null;
  }

  const handleRowSelected = ({ allSelected, selectedRows }) => {
    setSelectedItems(selectedRows);
  };

  const handleSelectAll = () => {
    if (selectedItems.length === quote.items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(quote.items);
    }
  };

  const expandedQuoteCols = [
    { name: "Item", selector: row => row.description, sortable: true },
    { name: "Qty", selector: row => row.qty, sortable: true, center: true, width: '80px' },
    { name: "Size", selector: row => row.size, sortable: true, center: true },
    { name: "Unit Cost", selector: row => `$${row.unitCost.toFixed(2)}`, sortable: true, center: true },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10 font-sans">
      <div className="max-w-7xl  mx-auto">
        <Link to="/quotes" className="inline-flex items-center text-blue-500 hover:underline mb-8">
          <FaArrowLeft className="mr-2" /> Back to Quotes
        </Link>
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-6xl ">

              {/*HEADER */}
              <div className="flex justify-between items-center  border-b border-blue-300 p-2 mb-4">
                  {/*QUOTE INFO */}
                  <div className="flex flex-col ">
                    <h4 className="text-3xl font-bold text-gray-800 mb-2">
                      Quote: <span className="text-red-600">{quote.id}</span>
                    </h4>
                    <p className='font-semibold text-lg'>Date : {quote.date}</p>
                    <p className='font-semibold text-lg text-red-500'>Wanted Date : {quote.date}</p>

                  </div>
                  {/*COMPANY INFO */}
                  <div className="flex flex-col">
                    <h4 className="text-3xl font-bold text-gray-800 mb-2">
                      Belprint
                    </h4>
                    <p className=' text-lg'>TIN #344458</p>
                    <p className=' text-lg '>#13 Seagull Street</p>
                    <p className=' text-lg '>San Pedro , Ambergis Caye</p>
                    <p className=' text-lg '>Belize</p>

                  </div>
                  {/*CUSTOMER INFO */}
                  <div className="flex flex-col  justify-center items-center">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2 ">
                      TO:
                    </h4>
                    <p className=' text-lg'>{quote.customer}</p>
                    <p className=' text-lg'>NA</p>
                    <p className=' text-lg'>{quote.email}</p>
                    <p className=' text-lg'>{quote.location}</p>
                  </div>
                   {/*BELPRINT LOGO*/}
                   <img src={BelprintLogo} alt='Belprint Logo' className='h-20 w-35'/>
              </div>
              
             
           
          {/*MAIN CONTENT*/}
          <DataTable
            columns={expandedQuoteCols}
            data={quote.items}
            selectableRows
            onSelectedRowsChange={handleRowSelected}
            selectedRows={selectedItems}
            customStyles={{
              headRow: { style: { backgroundColor: '#e2e3e5' } },
              rows: { style: { fontSize: '1.15rem' } }
            }}
            noHeader
          />
          {/*TOTALS CALCULATIONS*/}
          <div className="flex justify-between border-t border-blue-300 mb-2">
            <img src={PriceMatch} alt='Price Match Badge' className='w-70 h-60 mt-4'/>

            <div className="mt-8 p-10 bg-gray-100 rounded-lg shadow-inner w-90">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-lg">
                  <span className="font-medium text-gray-600">Subtotal:</span>
                  <span className="font-bold text-gray-800">${totals.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="font-medium text-gray-600">GST (12.5%):</span>
                  <span className="font-bold text-gray-800">${totals.gst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t-2 border-gray-300 pt-2">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-blue-600">${totals.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
           {/*FOOTER*/}
                 <div className="flex justify-between items-center  border-t border-blue-300 p-3 mb-4">
                  {/*CONTACT INFO */}
                  <div className="flex flex-col ">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Contact Information:
                    </h4>
                    <p className=' text-lg'>Email: Sales@belprint.com</p>
                    <p className=' text-lg'>Location: #13 Seagull Street</p>
                    <p className=' text-lg'>Phone Number: {quote.contact}</p>
                  </div>
                  {/*PAYMENT INFO */}
                  <div className="flex flex-col justify-center items-center ">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Payment Details:
                    </h4>
                    <p className=' text-lg'>DEPOSITS: BELPRINT LTD</p>
                    <p className=' text-lg'>GST: 12.5% TAX INCLUDED</p>
                    <p className=' text-lg'>BELIZE BANK A/C #: 25294201012000</p>
                  
                  </div>
                  {/*NOTES */}
                  <div className="flex flex-col justify-center items-center ">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Notes:
                    </h4>
                    <p className=' text-lg'>Full Payment Required</p>
                    <p className=' text-lg'>Production Time 2-3 days</p>
                  
                  </div>
              </div>
              
          </div>
          <ProcessBar/>
      </div>
    </div>
  );
}

export default QuoteInfo;