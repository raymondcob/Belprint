import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { AppRoutes } from './routes/AppRoutes';
import ErrorBoundary from './components/common/ErrorBoundary';
import { LoadingSpinner } from './components/common/LoadingSpinner';

// Lazy load the PDF component
const QuotePDFViewer = lazy(() => import('./pages/Dashboard/PDFViews/QuotePDFViewer'));

// Component to handle conditional routing
function AppContent() {
  const location = useLocation();
  
  // Check if current path is a PDF route
  const isPDFRoute = location.pathname.startsWith('/quote-pdf/');
  
  if (isPDFRoute) {
    // Render PDF component without any layout
    return (
      <Suspense fallback={<LoadingSpinner size="large" className="min-h-screen" />}>
        <Routes>
          <Route path="/quote-pdf/:quoteId" element={<QuotePDFViewer />} />
        </Routes>
      </Suspense>
    );
  }
  
  // Render normal app with layout
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
