import React from 'react';
import { useSidebar } from '../../hooks/useSidebar';
import Header from './Header';
import Sidebar from './Sidebar';

export const AppLayout = ({ children }) => {
  const { isSidebarVisible, shouldShowSidebar, showSidebar, hideSidebar } = useSidebar();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header onShowSidebar={showSidebar} />
      <div className="flex flex-1">
        {shouldShowSidebar && (
          <Sidebar isVisible={isSidebarVisible} onHide={hideSidebar} />
        )}
        <main className={`bg-gray-50 ${shouldShowSidebar ? "flex-1" : "w-full"}`}>
          {children}
        </main>
      </div>
    </div>
  );
};
