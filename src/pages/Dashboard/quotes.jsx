import React, { useState, useMemo, useRef } from 'react';
import DataTable from 'react-data-table-component';
import BelprintLogoBlack from "../../assets/BELPRINT-LOGO.svg";
import { FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Data for the main table and expanded details
const initialQuoteData = [
  {
    id: 'Q-001',
    date: '8/6/2025',
    wantedDate: '8/21/2025',
    customer: 'San Pedro High school',
    email: 'secretary@sphs.edu.bz',
    location: 'San Pedro Town',
    contact: '+501-628-8081',
    notes: 'Full Payment Required. Production Time 2-3 days',
    paymentDetails: 'DEPOSITS: BELPRINT LTD. GST: 12.5% TAX INCLUDED. BELIZE BANK A/C #: 25294201012000',
    items: [
      { id: 1, qty: 4, description: 'Double Sided Signs PVC, Matte Vinyl', size: '3 ft (W) X 3 ft (L)', unitCost: 47.50 },
      { id: 2, qty: 3, description: 'Double Sided Signs PVC, Alum Bond', size: '2 ft (W) X 2 ft (L)', unitCost: 45.00 },
    ],
  },
  {
    id: 'Q-002',
    date: '8/7/2025',
    wantedDate: '8/22/2025',
    customer: 'Belize Bank Ltd.',
    email: 'info@belizebank.bz',
    location: 'Belize City',
    contact: '+501-227-7083',
    notes: 'Please provide official PO.',
    paymentDetails: 'DEPOSITS: BELPRINT LTD. GST: 12.5% TAX INCLUDED. BELIZE BANK A/C #: 25294201012000',
    items: [
      { id: 1, qty: 1, description: 'Large Glossy Banner', size: '10 ft (W) X 5 ft (L)', unitCost: 150.00 },
    ],
  },
];

// Sub-component for the nested items table
const ExpandedQuoteItems = ({ items}) => {


  const itemColumns = [

    { name: '#', selector: row => row.id, width: '60px' },
    { name: 'Qty', selector: row => row.qty, width: '80px' },
    { name: 'Description', selector: row => row.description, grow: 2 },
    { name: 'Size', selector: row => row.size },
    { name: 'Unit Cost', selector: row => `$${(row.unitCost || 0).toFixed(2)}` },
  ];
  return (
    <DataTable
      columns={itemColumns}
      data={items}
      customStyles={{ headRow: { style: { backgroundColor: '#f1f5f9' } }, rows: { style: { fontSize: '0.95rem' } }}}
      noHeader
    />
  );
};

// Component for the expanded row content (your design)
const ExpandedComponent = ({ data }) => {
  const navigate = useNavigate(); // Initialize useNavigate inside the component


  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.customer} - ${data.id}`,
  });

  return (
    <div className="p-4 rounded-xl bg-gray-100 flex justify-center" >
      <div ref={componentRef} className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg border-2 border-gray-300">
        <div className="flex justify-between items-start mb-6 border-b border-blue-300">
          <img src={BelprintLogoBlack} alt="Belprint Logo" className="w-32 h-auto" />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Quote <span className='text-red-500'>{data.id}</span></h1>
            <p className="text-sm text-gray-600 mt-1">Date: {data.date}</p>
            <p className="text-sm font-semibold text-red-500">Wanted Date: {data.wantedDate}</p>
          </div>
          
        </div>
        <ExpandedQuoteItems
          items={data.items}
        />
        <div className="flex justify-end mt-4"> {/* Added margin top for spacing */}
         <button
            className=' text-red-600 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-red-600 font-medium hover:bg-red-600 hover:text-white transition-colors hover:cursor-pointer'
            onClick={() => window.open(`/quote-pdf/${data.id}`, '_blank')} 
         >
                <FaPrint /> View PDF
        </button>
        </div>
      </div>
    </div>
  );
};

// Main component with the data table and search functionality
export default function Quotes() {
  const [filterText, setFilterText] = useState('');

  const filteredData = useMemo(() => {
    return initialQuoteData.filter(
      (item) => item.id && item.id.toLowerCase().includes(filterText.toLowerCase()) ||
               item.date && item.date.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText]);

  const quoteColumns = [
    { name: 'Quote #', selector: row => row.id, sortable: true, grow: 1 },
    { name: 'Date', selector: row => row.date, sortable: true },
    
  ];

  return (
    <main className="w-full py-4 px-8">
      <h2 className="text-4xl font-bold mb-4">Quotes</h2>
      <div className="relative w-full max-w-sm mb-6 mt-10">
        <label htmlFor="search-input" className="sr-only">Search</label>
        <input
          type="search"
          id="search-input"
          placeholder="Search by Quote # or Date..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /></svg>
        </div>
      </div>
      <div className="w-full">
        <DataTable
          columns={quoteColumns}
          data={filteredData}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          customStyles={{ headRow: { style: { backgroundColor: '#e2e3e5' } }, rows: { style: { fontSize: '1.15rem' } }}}
          pagination
          striped
          highlightOnHover
        />
      </div>
    </main>
  );
}
