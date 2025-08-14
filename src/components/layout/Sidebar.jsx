import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiUploadSimpleFill } from "react-icons/pi";
import { MdFavorite, MdHistory, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FiCompass } from "react-icons/fi";
import { FaFileInvoice } from "react-icons/fa";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const Sidebar = ({ isVisible, onHide }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { type: "link", icon: RxDashboard, label: "Dashboard", href: "/dashboard" },
    { type: "header", label: "Workspace" },
    { type: "link", icon: PiUploadSimpleFill, label: "My Uploads", href: "/uploads" },
    { type: "link", icon: MdFavorite, label: "Favorites", href: "/favorites" },
    { type: "header", label: "Orders" },
    { type: "link", icon: MdHistory, label: "Order History", href: "/orders" },
    { type: "link", icon: FaEnvelopeOpenText, label: "Quotes", href: "/quotes" },
    { type: "link", icon: FaFileInvoice, label: "Invoice", href: "/invoice" },
    { type: "link", icon: FiCompass, label: "Track Order", href: "/track-order" },
    { type: "header", label: "Settings" },
    { type: "link", icon: CiSettings, label: "Account Settings", href: "/acct-settings" },
  ];

  return (
    <>
      {/* Mobile Overlay with Backdrop Blur */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-2 z-50 lg:hidden bg-white text-gray-900 p-2 rounded-md shadow-lg transition-transform hover:scale-105"
      >
        <TbLayoutSidebarRightExpand size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 
          bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out w-72 
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:block
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Account Dashboard</h2>
            {/* The close button is now part of the mobile toggle and handled by the overlay */}
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <li key={index} className="mt-4 first:mt-0">
                      <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider px-3">
                        {item.label}
                      </h3>
                    </li>
                  );
                } else {
                  const isActive = location.pathname === item.href;
                  return (
                    <li key={index}>
                      <Link
                        to={item.href}
                        onClick={() => isMobileOpen && setIsMobileOpen(false)} // Close sidebar on mobile after clicking a link
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors
                          ${isActive 
                            ? "bg-gray-100 text-gray-900 font-semibold" 
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                          }`}
                      >
                        <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-gray-900" : "text-gray-500"}`} />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>© 2024 BelPrint</p>
              <p>Belize</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;