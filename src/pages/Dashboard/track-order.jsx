import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { FaSearch } from "react-icons/fa";

// Data for the order tracking system
const orderTrackingData = [
  {
    invoiceId: 'INV-20250806',
    customer: 'San Pedro High school',
    currentStatus: 'Graphic Department',
    trackingTimeline: [
      { step: 'Quote', icon: '📝', completed: true },
      { step: 'Customer Approval', icon: '✅', completed: true },
      { step: 'Payment is Processed', icon: '💵', completed: true },
      { step: 'The Order', icon: '🛒', completed: true },
      { step: 'Invoice', icon: '📄', completed: true },
      { step: 'Graphic Department', icon: '🎨', completed: false },
      { step: 'Production Department', icon: '⚙️', completed: false },
      { step: 'Quality Check', icon: '🔍', completed: false },
      { step: 'Shipping', icon: '🚚', completed: false },
      { step: 'Ended', icon: '🎉', completed: false },
    ],
  },
  {
    invoiceId: 'INV-20250720',
    customer: 'San Pedro High School',
    currentStatus: 'Shipping',
    trackingTimeline: [
      { step: 'Quote', icon: '📝', completed: true },
      { step: 'Customer Approval', icon: '✅', completed: true },
      { step: 'Payment is Processed', icon: '💵', completed: true },
      { step: 'The Order', icon: '🛒', completed: true },
      { step: 'Invoice', icon: '📄', completed: true },
      { step: 'Graphic Department', icon: '🎨', completed: true },
      { step: 'Production Department', icon: '⚙️', completed: true },
      { step: 'Quality Check', icon: '🔍', completed: true },
      { step: 'Shipping', icon: '🚚', completed: false },
      { step: 'Ended', icon: '🎉', completed: false },
    ],
  },
];

// Expanded component to show the detailed tracking timeline
const ExpandedComponent = ({ data }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-inner">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Tracking Timeline for Invoice: <span className="text-blue-600">{data.invoiceId}</span>
      </h3>
      <div className="relative">
        <div className="absolute top-6 left-6 w-1 bg-gray-300 h-full"></div>
        <div className="absolute top-6 left-6 w-1 bg-blue-500 h-full transition-all duration-700"
          style={{ height: `${(data.trackingTimeline.findIndex(item => item.step === data.currentStatus)) * 10}%` }}>
        </div>

        {data.trackingTimeline.map((item, index) => (
          <div key={item.step} className="flex items-center mb-6">
            <div className={`relative flex items-center justify-center h-12 w-12 rounded-full z-10 transition-colors duration-500
              ${item.step === data.currentStatus ? 'bg-blue-600 shadow-xl' :
                item.completed ? 'bg-green-500 shadow-lg' : 'bg-gray-300'}`}>
              <span className={`text-2xl ${item.step === data.currentStatus ? 'animate-pulse' : ''}`}>
                {item.step === data.currentStatus ? item.icon : item.completed ? '✔️' : item.icon}
              </span>
            </div>
            <div className={`ml-4 px-4 py-2 rounded-lg transition-all duration-500 ease-in-out w-full
              ${item.step === data.currentStatus ? 'bg-blue-500 text-white shadow-md transform animation-pulse ' :
                item.completed ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-500'}`}>
              <p className={`font-semibold text-lg ${item.step === data.currentStatus ? 'text-white' : 'text-gray-900'}`}>
                {item.step}
              </p>
              {item.step === data.currentStatus && (
                <p className="text-sm font-medium">In Progress...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Main component with the data table and search functionality
export default function OrderTracking() {
  const [filterText, setFilterText] = useState('');

  const filteredData = useMemo(() => {
    return orderTrackingData.filter(
      (item) => item.invoiceId && item.invoiceId.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, [filterText]);

  const columns = [
    { name: 'Invoice ID', selector: row => row.invoiceId, sortable: true, grow: 1 },
    { name: 'Customer', selector: row => row.customer, sortable: true, grow: 2 },
    {
      name: 'Current Status',
      selector: row => row.currentStatus,
      sortable: true,
      cell: row => (
        <span className={`px-3 py-1 rounded-full text-xs font-semibold
          ${row.currentStatus === 'Ended' ? 'bg-green-100 text-green-800' :
            row.currentStatus === 'Shipping' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'}`}>
          {row.currentStatus}
        </span>
      ),
    },
  ];

  return (
    <main className="w-full py-4 px-8">
      <h2 className="text-4xl font-bold mb-4">Track Your Orders</h2>
      <div className="relative w-full max-w-sm mb-6 mt-10">
        <input
          type="search"
          placeholder="Search by Invoice ID..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FaSearch className="w-4 h-4 text-gray-500" />
        </div>
      </div>
      <div className="w-full">
        <DataTable
          columns={columns}
          data={filteredData}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          striped
          highlightOnHover
        />
      </div>
    </main>
  );
}