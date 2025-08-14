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
    contact: '+(501) 628-8081',
    notes: 'Full Payment Required. Production Time 2-3 days',
    items: [
      { id: 1, qty: 4, description: 'Double Sided Signs PVC, Matte Vinyl', size: '3 ft (W) X 3 ft (L)', unitCost: 47.50, },
      { id: 2, qty: 3, description: 'Double Sided Signs PVC, Alum Bond', size: '2 ft (W) X 2 ft (L)', unitCost: 45.00 , },
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
    items: [
      { id: 1, qty: 1, description: 'Large Glossy Banner', size: '10 ft (W) X 5 ft (L)', unitCost: 150.00 },
    ],
  },
];




const ExpandedComponent = ({ data }) => {

  const navigate = useNavigate(); 

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.customer} - ${data.id}`,
  });

   const expandedQouteCols = [
       {name: "Item",selector: row => row.description, sortable: true,},
       {name: "Qty",selector: row => row.qty, sortable: true,center: true},
       {name: "Size",selector: row => row.size, sortable: true,center: true},
       {name: "UnitCost",selector: row => row.unitCost, sortable: true,center: true},
   ]
   const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f1f5f9",
        fontSize: "0.9rem",
        fontWeight: "bold",
        color: "#4b5563",
      },
    },
    cells: {
      style: {
        fontSize: "0.8rem",
      },
    },
  };

  return (
    <div className="p-4 rounded-xl bg-gray-100 flex justify-center" >
      <div ref={componentRef} className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg border-2 border-gray-300">

        {/*Header*/}
        <div className="flex justify-between items-start mb-6 p-3 border-b border-blue-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Quote <span className='text-red-500'>{data.id}</span></h1>
          </div>
        </div>
        {/*Main Content Table */}
        <DataTable
          columns={expandedQouteCols}
          data={data.items}
          customStyles={customStyles}

          />

        <div className="flex justify-end mt-4"> {/* Added margin top for spacing */}
         
        </div>
      </div>
    </div>
  );
};

// Main component with the data table and search functionality
export default function Quotes() {

  const [filterText, setFilterText] = useState('');
  const navigate = useNavigate();
 const updatedQuoteData = initialQuoteData.map(quote => {
  const subtotal = quote.items.reduce((sum, item) => sum + item.qty * item.unitCost, 0);
  const gst = subtotal * 0.125;
  const total = subtotal + gst;
  return { ...quote, subtotal, gst, total };
});

    const handleViewDetails = (row) => {
       navigate(`/quote/${row.id}`, { state: { quote: row } });
     };

  const filteredData = useMemo(() => {
  if (!filterText) {
    return updatedQuoteData; // Return all data if no filter is applied
  }
  return updatedQuoteData.filter(
    (item) => item.id && item.id.toLowerCase().includes(filterText.toLowerCase()) ||
    item.date && item.date.toLowerCase().includes(filterText.toLowerCase())
  );
}, [filterText]);

  const quoteColumns = [
  { name: 'Quote #', selector: row => row.id, sortable: true, grow: 1 },
  { name: 'Date', selector: row => row.date, sortable: true, center:true },
  { name: 'Subtotal', selector: row => `$${row.subtotal.toFixed(2)}`, sortable: true, center:true},
  { name: 'GST', selector: row => `$${row.gst.toFixed(2)}`, sortable: true, center:true },
  { name: 'Total', selector: row => `$${row.total.toFixed(2)}`, sortable: true, center:true },
  {
      name: 'Actions',
      cell: row => (
        <button
          onClick={() => handleViewDetails(row)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-1 rounded-md text-sm transition-colors duration-200"
        >
          View Details
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
];

  return (
    <main className="w-full p-10 ">
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
