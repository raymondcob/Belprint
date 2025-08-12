import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BelprintLogoBlack from "../../../assets/BELPRINT-LOGO.svg";
import { useReactToPrint } from "react-to-print";
import { FaPrint, FaDownload, FaTimes } from "react-icons/fa";

// Data for the main table (you might fetch this from an API in a real app)
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


const QuotePDFView = () => {
  const { quoteId } = useParams();
  const componentRef = useRef();

  // Find the quote data based on the quoteId from the URL
  const quoteData = initialQuoteData.find(quote => quote.id === quoteId);

  if (!quoteData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Quote Not Found</h1>
          <p className="text-gray-600 mb-4">The requested quote could not be found.</p>
          <button 
            onClick={() => window.close()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  // Calculate totals
  const subtotal = quoteData.items.reduce((sum, item) => sum + item.qty * item.unitCost, 0);
  const gst = subtotal * 0.125;
  const total = subtotal + gst;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${quoteData.customer} - ${quoteData.id}`,
  });

  const handleDownload = () => {
    handlePrint();
  };

  const handleClose = () => {
    window.close();
  };

  // Apply full-screen styles when component mounts
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#f3f4f6';
    document.title = `Quote ${quoteData.id} - ${quoteData.customer}`;
    
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.backgroundColor = '';
    };
  }, [quoteData]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Action Bar */}
      <div className="fixed top-4 right-4 z-10 flex gap-2">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-lg"
        >
          <FaPrint /> Print
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2 shadow-lg"
        >
          <FaDownload /> Download
        </button>
        <button
          onClick={handleClose}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2 shadow-lg"
        >
          <FaTimes /> Close
        </button>
      </div>

      {/* PDF Content */}
      <div className="flex justify-center">
        <div ref={componentRef} className="w-full max-w-4xl bg-white p-8 shadow-xl border border-gray-200 mt-16">
          {/* Header */}
          <div className="flex justify-between items-start mb-6 border-b border-blue-300 pb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Quote <span className='text-red-500'>{quoteData.id}</span></h1>
              <p className="text-sm text-gray-600 mt-1">Date: {quoteData.date}</p>
              <p className="text-sm font-semibold text-red-500">Wanted Date: {quoteData.wantedDate}</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold text-gray-800">Belprint</h2>
              <p className="text-xs text-gray-600">TIN #344456</p>
              <p className="text-sm text-gray-600 mt-2">#13 Seagull Street</p>
              <p className="text-sm text-gray-600">San Pedro, Ambergris Caye</p>
              <p className="text-sm text-gray-600">Belize</p>
            </div>
            <div className="text-left">
              <h2 className="text-lg font-bold text-gray-800">To</h2>
              <p className="text-sm font-semibold text-gray-800">{quoteData.customer}</p>
              <p className="text-sm text-gray-600">{quoteData.email}</p>
              <p className="text-sm text-gray-600">{quoteData.location}</p>
            </div>
            <img src={BelprintLogoBlack} alt="Belprint Logo" className="w-32 h-auto" />
          </div>

          {/* Items Table */}
          <h3 className="text-lg font-semibold mb-4">Items:</h3>
          <table className="min-w-full divide-y divide-gray-200 mb-6">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Cost</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Line Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {quoteData.items.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.qty}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.unitCost.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${(item.qty * item.unitCost).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mb-6">
            <div className="w-64">
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span className="font-medium">GST (12.5%):</span>
                <span>${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Payment Details:</h4>
              <p className="text-sm text-gray-700">{quoteData.paymentDetails}</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Notes:</h4>
              <p className="text-sm text-gray-700">{quoteData.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePDFView;
