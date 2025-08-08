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

function AppContent() {
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Show sidebar only when on dashboard route
  const shouldShowSidebar = location.pathname === "/dashboard";

  useEffect(() => {
    // Automatically show sidebar when navigating to dashboard
    if (location.pathname === "/dashboard") {
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
          className={`p-6 bg-gray-50 ${
            shouldShowSidebar ? "flex-1" : "w-full"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
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
