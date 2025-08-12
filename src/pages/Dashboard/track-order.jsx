import React, { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// Your existing order tracking data
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

export default function OrderTracking() {
  const [filterText, setFilterText] = useState('');
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    return orderTrackingData.filter(
      (item) => item.invoiceId && item.invoiceId.toLowerCase().includes(filterText.toLowerCase()),
    );
  }, [filterText]);

  const handleViewDetails = (row) => {
    navigate(`/order/${row.invoiceId}`, { state: { order: row } });
  };

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
    <main className="w-full p-10 bg-gray-50 min-h-screen font-sans">
      <div className="w-full mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Track Your Orders</h2>
        <div className="relative w-full max-w-sm mb-6 mt-10">
          <input
            type="search"
            placeholder="Search by Invoice ID..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FaSearch className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md">
          <DataTable
            columns={columns}
            data={filteredData}
            pagination
            striped
            highlightOnHover
            pointerOnHover
          />
        </div>
      </div>
    </main>
  );
}