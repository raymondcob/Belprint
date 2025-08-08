import React from 'react';
import DataTable from 'react-data-table-component';
import { FaDownload,FaTrash } from "react-icons/fa";

// Sample data for the table
const data = [
  { id: 1, fileName: 'example1.pdf', category: 'Business Cards', date: '2024-05-01' },
  { id: 2, fileName: 'photo.png', category: 'Photos', date: '2024-05-02' },
  { id: 3, fileName: 'document.docx', category: 'Other', date: '2024-05-03' },
];

const columns = [
  {
    name: 'File Name',
    selector: row => row.fileName,
    sortable: true,
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true,
    cell: row => {
      let colorClass;
      switch (row.category) {
        case 'Business Cards':
          colorClass = 'bg-blue-200 text-blue-800';
          break;
        case 'Photos':
          colorClass = 'bg-green-200 text-green-800';
          break;
        case 'Other':
          colorClass = 'bg-yellow-200 text-yellow-800';
          break;
        default:
          colorClass = 'bg-gray-200 text-gray-800';
      }
      return <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${colorClass}`}>{row.category}</span>;
    },
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Action',
    cell: row => (
      <div className="flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <FaDownload/>
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FaTrash/>
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const customStyles = {
  header: {
    style: {
      minHeight: '56px',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f1f5f9', // slate-100
    },
  },
  headCells: {
    style: {
      fontSize: '1.25rem', // text-xl
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
  cells: {
    style: {
      fontSize: '1.125rem', // text-lg
      paddingLeft: '16px',
      paddingRight: '16px',
    },
  },
};

export default function Uploads() {
  return (
    <>
    <div className="mb-9 text-start ml-4">
        <h2 className="text-4xl font-bold text-gray-900">My Uploads</h2>
      </div>
    <div className="container mx-auto px-4 py-8">
      
      
      {/* Upload Box Section */}
      <div className="mb-8 flex justify-center">
        <div
          className="w-full max-w-xl rounded-lg border-2 border-dashed border-gray-400 bg-white p-10 text-center shadow-md"
        >
          <i className="bi bi-upload text-5xl text-gray-400"></i>
          <h3 className="mt-4 mb-4 text-2xl font-semibold text-gray-700">
            Drag and Drop Your Files Here or Click the Upload Button
          </h3>
          <input type="file" id="hiddenFileInput" className="hidden" />
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Upload File
          </button>
        </div>
      </div>

      {/* Uploaded Files Table Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-4xl rounded-lg bg-white shadow-lg">
          <div className="p-6">
            <h4 className="mb-4 text-3xl font-semibold text-gray-800">Uploaded Files</h4>
            <DataTable
              columns={columns}
              data={data}
              pagination
              highlightOnHover
              pointerOnHover
              customStyles={customStyles}
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </div>
    
    </>
    
  );
}