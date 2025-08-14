import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import BelprintLogoBlack from "../../assets/BELPRINT-LOGO.svg";
import { FaPrint } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

// Data matching the structure of multiple invoices
const initialInvoiceData = [
  {
    id: "INV-20250806",
    customer: "User",
    email: "user@email.com",
    phone: "+501-600-0000",
    date: "2025-08-06",
    items: [
      {
        item: "Business Cards (Full Color, 300gsm, 100pcs)",
        qty: 2,
        unitPrice: 25.0,
        total: 50.0,
      },
      {
        item: "Flyers (A5, Glossy, 500pcs)",
        qty: 1,
        unitPrice: 60.0,
        total: 60.0,
      },
      {
        item: "Banner (3ft x 6ft, Full Color)",
        qty: 1,
        unitPrice: 40.0,
        total: 40.0,
      },
    ],
  },
  {
    id: "INV-20250720",
    customer: "User",
    email: "user@example.com",
    phone: "+501-601-1111",
    date: "2025-07-20",
    items: [
      {
        item: "T-shirt Printing (Front & Back)",
        qty: 10,
        unitPrice: 15.0,
        total: 150.0,
      },
      {
        item: "Mugs (Custom Design)",
        qty: 5,
        unitPrice: 12.0,
        total: 60.0,
      },
    ],
  },
];

// Expanded component for detailed invoice view
const ExpandedComponent = ({ data }) => {
  const subtotal = data.items.reduce((sum, item) => sum + item.total, 0);
  const gst = subtotal * 0.125;
  const total = subtotal + gst;

  const invoiceColumns = [
    { name: "Item", selector: (row) => row.item, grow: 2 },
    { name: "Qty", selector: (row) => row.qty, center: true },
    {
      name: "Unit Price",
      selector: (row) => `$${row.unitPrice.toFixed(2)}`,
      center: true,
    },
    {
      name: "Total",
      selector: (row) => `$${row.total.toFixed(2)}`,
      center: true,
    },
  ];

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
    <div className="p-10 rounded-xl bg-gray-100 flex justify-center">
           {" "}
      <div className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg border-2 border-gray-300">
                {/* Header Section */}       {" "}
        <div className="mb-4 flex items-center justify-between border-b border-gray-300 pb-4">
                   {" "}
          <div className="flex items-center">
                       {" "}
            <img
              src={BelprintLogoBlack}
              alt="Belprint Logo"
              className="mr-4 h-auto w-40"
            />
                       {" "}
            <div>
                           {" "}
              <h4 className="mb-1 text-lg font-semibold">
                Belprint Printing Shop
              </h4>
                           {" "}
              <div className="text-sm text-gray-500">
                                Seagull Street, San Pedro, Belize              
                  <br />
                                +501-628-8081                 <br />           
                    info@belprint.bz              {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
                   {" "}
          <div className="text-right">
                        <h5 className="mb-1 text-xl font-semibold">INVOICE</h5> 
                     {" "}
            <div className="text-gray-700">
                            <strong>#{data.id}</strong>           {" "}
            </div>
                        <div className="text-gray-500">Date: {data.date}</div> 
                   {" "}
          </div>
                 {" "}
        </div>
                {/* Billed To Section */}       {" "}
        <div className="mb-6 mt-5">
                   {" "}
          <h6 className="mb-2 text-sm font-semibold text-gray-700">
            Billed To:
          </h6>
                   {" "}
          <div className="text-sm text-gray-700">
                       {" "}
            <div>
              <strong>{data.customer}</strong>
            </div>
                        <div>Email: {data.email}</div>           {" "}
            <div>Phone: {data.phone}</div>         {" "}
          </div>
                 {" "}
        </div>
                {/* Invoice Items Table */}       {" "}
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
                   {" "}
          <DataTable
            columns={invoiceColumns}
            data={data.items}
            customStyles={customStyles}
            noHeader
          />
                 {" "}
        </div>
                {/* Totals Section */}       {" "}
        <div className="mt-6 flex justify-end">
                   {" "}
          <div className="w-full text-right sm:w-1/2 md:w-1/3">
                       {" "}
            <div className="py-1">
                            <span className="text-gray-600">Subtotal:</span>   
                       {" "}
              <span className="ml-2 font-semibold text-gray-800">
                ${subtotal.toFixed(2)}
              </span>
                         {" "}
            </div>
                       {" "}
            <div className="py-1">
                            <span className="text-gray-600">GST (12.5%):</span> 
                         {" "}
              <span className="ml-2 font-semibold text-gray-800">
                ${gst.toFixed(2)}
              </span>
                         {" "}
            </div>
                       {" "}
            <div className="border-t border-gray-300 pt-2 text-lg font-bold">
                            <span className="text-gray-900">Total:</span>       
                   {" "}
              <span className="ml-2 text-blue-600">${total.toFixed(2)}</span>   
                     {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
                        {/* Print Button */}       {" "}
        <div className="text-right mt-6">
                   {" "}
          <button
            className="flex items-center justify-center gap-3 p-3 rounded-lg border-2 text-blue-500 border-blue-500 font-medium hover:bg-blue-600 hover:text-white transition-colors hover:cursor-pointer"
            onClick={() => window.open(`/invoice-pdf/${data.id}`, "_blank")}
          >
            Print PDF          {" "}
          </button>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
};

// Main component with the data table and search functionality
export default function Invoice() {
  const [filterText, setFilterText] = useState("");

  const updatedInvoiceData = initialInvoiceData.map((invoice) => {
    const subtotal = invoice.items.reduce(
      (sum, item) => sum + item.qty * item.unitPrice,
      0
    );
    const gst = subtotal * 0.125;
    const total = subtotal + gst;
    return { ...invoice, subtotal, gst, total };
  });

  const filteredData = useMemo(() => {
    if (!filterText) {
      return updatedInvoiceData; // Return all data if no filter is applied
    }
    return updatedInvoiceData.filter(
      (item) =>
        (item.id && item.id.toLowerCase().includes(filterText.toLowerCase())) ||
        (item.date &&
          item.date.toLowerCase().includes(filterText.toLowerCase()))
    );
  }, [filterText]);

  const invoiceListColumns = [
    {
      name: "Invoice #",
      selector: (row) => row.id,
      sortable: true,
      grow: 1,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    { name: 'Subtotal', selector: row => `$${row.subtotal.toFixed(2)}`, sortable: true, center:true},
    { name: 'GST', selector: row => `$${row.gst.toFixed(2)}`, sortable: true, center:true },
    { name: 'Total', selector: row => `$${row.total.toFixed(2)}`, sortable: true, center:true },
  ];

  return (
    <div className="mx-auto max-w-full p-10">
           {" "}
      <h1 className="mb-8 text-3xl md:text-4xl  font-bold text-gray-900 text-start  ">
        Invoices
      </h1>
                 {" "}
      <div className="relative w-full max-w-sm mb-6 mt-10">
               {" "}
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
               {" "}
        <input
          type="search"
          id="search-input"
          placeholder="Search by Invoice # or Date..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        />
               {" "}
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <CiSearch />       {" "}
        </div>
             {" "}
      </div>
           {" "}
      <div className="w-full">
               {" "}
        <DataTable
          columns={invoiceListColumns}
          data={filteredData}
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          pagination
          striped
          highlightOnHover
          customStyles={{ headRow: { style: { backgroundColor: '#e2e3e5' } }, rows: { style: { fontSize: '1.15rem' } }}}
        />
             {" "}
      </div>
         
    </div>
  );
}
