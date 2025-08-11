import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Shop from "./pages/Shop.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Uploads from "./pages/Dashboard/uploads.jsx";
import Favorites from "./pages/Dashboard/favorites.jsx";
import Invoice from "./pages/Dashboard/invoice.jsx";
import AccountSettings from "./pages/Dashboard/acct-settings.jsx";
import Orders from "./pages/Dashboard/orders.jsx";
import Quotes from "./pages/Dashboard/quotes.jsx";
import TrackOrder from "./pages/Dashboard/track-order.jsx";
import QuotePDFView from "./pages/Dashboard/PDFViews/Quotespdf.jsx"

function AppContent() {
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const validSidebarPaths = [
  "/dashboard",
  "/uploads",
  "/favorites",
  "/orders",
  "/quotes",
  "/invoice",
  "/track-order",
  "/acct-settings"
];

// Check if the current path is included in the list
const shouldShowSidebar = validSidebarPaths.includes(location.pathname);


  useEffect(() => {
    // Automatically show sidebar when navigating to dashboard
    if (location.pathname === "/dashboard" || location.pathname === "/uploads" || location.pathname === "/favorites" || location.pathname === "/orders" || location.pathname === "/quotes" || location.pathname === "/invoice" || location.pathname === "/track-order" || location.pathname === "/acct-settings") {
      setIsSidebarVisible(true);
    } else {
      setIsSidebarVisible(false);
    }
  }, [location.pathname]);

 

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onShowSidebar={showSidebar} />
      <div className="flex flex-1">
        {shouldShowSidebar && (
          <Sidebar isVisible={isSidebarVisible} onHide={hideSidebar} />
        )}
        <main
          className={`p-10 bg-gray-50 ${
            shouldShowSidebar ? "flex-1" : "w-full"
          }`}
        >
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/uploads" element={<Uploads/>} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/track-order" element={<TrackOrder />} />
            <Route path="/acct-settings" element={<AccountSettings />} />
            <Route path="/quote-pdf/quote:id" element={<QuotePDFView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
