import React, { useRef, useEffect } from 'react'; // Import useEffect
import { useParams } from 'react-router-dom';
import BelprintLogoBlack from "../../../assets/BELPRINT-LOGO.svg";
import { useReactToPrint } from "react-to-print";
import { FaPrint } from "react-icons/fa";

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

  // Auto-trigger print when component mounts
  useEffect(() => {
    if (componentRef.current) {
      handlePrint();
    }
  }, [componentRef.current]); // Dependency array ensures this runs only once after the component mounts

  if (!quoteData) {
    return <div>Quote not found.</div>;
  }

  // Calculate totals
  const subtotal = quoteData.items.reduce((sum, item) => sum + item.qty * item.unitCost, 0);
  const gst = subtotal * 0.125;
  const total = subtotal + gst;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${quoteData.customer} - ${quoteData.id}`,
  });

  return (
    <div className="p-4 rounded-xl bg-gray-100 flex justify-center" >
      <div ref={componentRef} className="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg border-2 border-gray-300">
        {/* Reuse the layout from your ExpandedComponent for the PDF view */}
        <div className="flex justify-between items-start mb-6 border-b border-blue-300">
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

        {/* Display Items in a simple list or table (without checkboxes) */}
        <h3 className="text-lg font-semibold mb-2">Items:</h3>
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
            {quoteData.items.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.qty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.size}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(item.unitCost || 0).toFixed(2)}</td> {/* Added safety check */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${((item.qty || 0) * (item.unitCost || 0)).toFixed(2)}</td> {/* Added safety check */}
              </tr>
            ))}
          </tbody>
        </table>


        <div className="flex justify-end border-t border-blue-300">
          <div className="w-1/2">
            <div className="bg-gray-100 p-4 rounded-lg mt-3">
              <div className="flex justify-between font-semibold text-gray-800"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm text-gray-600 mt-1"><span>GST (12.5%)</span><span>${gst.toFixed(2)}</span></div>
              <div className="flex justify-between font-bold text-xl text-gray-900 mt-2 border-t pt-2 border-gray-300"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-700 border-t border-blue-300 p-3">
          <div>
            <h4 className="font-bold text-gray-900">Contact Information:</h4>
            <p>Email: <a href={`mailto:sale@belprint.com`} className="text-blue-600">sale@belprint.com</a></p>
            <p>Location: #13 Seagull Street</p>
            <p>Phone Number: +501-628-8081</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Payment Details:</h4>
            <p>{quoteData.paymentDetails}</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Notes:</h4>
            <p>{quoteData.notes}</p>
          </div>
        </div>

        {/* Print Button (can keep this for manual printing if needed) */}
        <div className="text-right mt-6">
           {/* You can keep this button or remove it if you only want auto-print */}
           {/* <button
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-colors"
            onClick={handlePrint}
          >
            <FaPrint /> Print PDF
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default QuotePDFView;
