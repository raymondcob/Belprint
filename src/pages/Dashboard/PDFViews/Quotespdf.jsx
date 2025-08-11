import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import QuoteDocument from './QuoteDocument'; // Import your PDF document component
import PDFLayout from '../../../layouts/PDFLayout'; // Import the new layout component

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

  // Find the quote data based on the quoteId from the URL
  const quoteData = initialQuoteData.find(quote => quote.id === quoteId);

  if (!quoteData) {
    return <div>Quote not found.</div>;
  }

  return (
    <PDFLayout> {/* Wrap with the new PDFLayout */}
      <PDFViewer width="100%" height="100%">
        <QuoteDocument quoteData={quoteData} />
      </PDFViewer>
    </PDFLayout>
  );
};

export default QuotePDFView;
