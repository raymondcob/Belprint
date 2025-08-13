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
    <h2 className="text-4xl font-bold text-gray-900 text-center md:text-start  mt-7 ml-7">My Uploads</h2>
      
    <div className="container mx-auto px-4 py-8 flex flex-col content-center justify-center w-full ">
      
      
      {/* Upload Box Section */}

       <div class=" flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-15 w-[50%]  mt-4 mb-4 mx-auto">
            <div class="text-center">
              <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="mx-auto size-12 text-gray-300">
                <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm/6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-600 hover:text-blue-500">
                  <span>Upload a file</span>
                  <input id="file-upload" type="file" name="file-upload" class="sr-only" />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
     

      {/* Uploaded Files Table Section */}
      <div className="flex justify-center  ">
        <div className="w-full max-w-4xl rounded-lg bg-white shadow-lg">
          <div className="p-6 w-full">
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