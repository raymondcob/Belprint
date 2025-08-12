import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DASHBOARD_ROUTES } from '../config/routes';

export const useSidebar = () => {
  const location = useLocation();
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
  const shouldShowSidebar = DASHBOARD_ROUTES.includes(location.pathname);
  
  useEffect(() => {
    setIsSidebarVisible(shouldShowSidebar);
  }, [location.pathname, shouldShowSidebar]);

  return {
    isSidebarVisible,
    shouldShowSidebar,
    showSidebar: () => setIsSidebarVisible(true),
    hideSidebar: () => setIsSidebarVisible(false)
  };
};
