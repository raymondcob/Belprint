import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pdf } from '@react-pdf/renderer';
import QuoteDocument from './QuoteDocument';

// Sample quote data (same as in your other components)
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

const QuotePDFViewer = () => {
  const { quoteId } = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generatePDF = async () => {
      try {
        // Find the quote data
        const quoteData = initialQuoteData.find(quote => quote.id === quoteId);
        
        if (!quoteData) {
          setError('Quote not found');
          setLoading(false);
          return;
        }

        // Generate the PDF blob
        const blob = await pdf(<QuoteDocument quoteData={quoteData} />).toBlob();
        
        // Create a URL for the PDF blob
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setLoading(false);

        // Set the document title
        document.title = `Quote ${quoteData.id} - ${quoteData.customer}`;
        
        // Apply full-screen styles
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.backgroundColor = '#525659';
        
      } catch (err) {
        console.error('Error generating PDF:', err);
        setError('Failed to generate PDF');
        setLoading(false);
      }
    };

    generatePDF();

    // Cleanup function
    return () => {
      // Reset body styles when component unmounts
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.backgroundColor = '';
    };
  }, [quoteId]); // Remove pdfUrl from dependencies to prevent infinite loop

  // Separate useEffect for cleanup of pdfUrl
  useEffect(() => {
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl]);

  if (loading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>Generating PDF...</p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f3f4f6',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ color: '#ef4444', fontSize: '24px', marginBottom: '16px' }}>Error</h1>
          <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '20px' }}>{error}</p>
          <button 
            onClick={() => window.close()}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Close Window
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <iframe
        src={pdfUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title={`Quote ${quoteId}`}
      />
    </div>
  );
};

export default QuotePDFViewer;
