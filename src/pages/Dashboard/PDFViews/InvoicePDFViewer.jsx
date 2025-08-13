import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pdf } from '@react-pdf/renderer';
import InvoiceDocument from './InvoiceDocument';

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



const InvoicePDFViewer = () => {
  const { invoiceId } = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const generatePDF = async () => {
      try {
        // Find the quote data
        const invoiceData = initialInvoiceData.find(invoice => invoice.id === invoiceId);
        
        if (!invoiceData) {
          setError('Invoice not found');
          setLoading(false);
          return;
        }

        // Generate the PDF blob
        const blob = await pdf(<InvoiceDocument invoiceData={invoiceData} />).toBlob();
        
        // Create a URL for the PDF blob
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        setLoading(false);

        // Set the document title
        document.title = `${invoiceData.id} - ${invoiceData.customer}`;
        
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
  }, [invoiceId]); // Remove pdfUrl from dependencies to prevent infinite loop

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
        title={`Invoice ${invoiceId}`}
      />
    </div>
  );
};

export default InvoicePDFViewer;
