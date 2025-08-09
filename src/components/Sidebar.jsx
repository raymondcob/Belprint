import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { PiUploadSimpleFill } from "react-icons/pi";
import { MdFavorite, MdHistory,MdKeyboardDoubleArrowRight,MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { FiCompass } from "react-icons/fi";
import { FaFileInvoice } from "react-icons/fa";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const Sidebar = ({ isVisible, onHide }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
    { type: "header", label: "Settings " },
    { type: "link", icon: CiSettings, label: "Account Settings", href: "/acct-settings" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 mb-2 left-2 z-50 lg:hidden bg-black text-white p-2 rounded-md"
      >
        <TbLayoutSidebarRightExpand size={27}/>
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          bg-gray-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${
            isMobileOpen || isVisible
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          ${isCollapsed ? "w-16" : "w-64"}
          lg:block
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            {!isCollapsed && <h2 className="text-xl font-bold">Account Dashbaord</h2>}
            <div className="flex gap-2">
              {isVisible && (
                <button
                  onClick={onHide}
                  className="lg:hidden p-2 hover:bg-gray-700 rounded text-white"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="hidden lg:block p-2 hover:bg-gray-700 rounded"
              >
                {isCollapsed ?  <MdKeyboardDoubleArrowRight size={20}/> : <MdKeyboardDoubleArrowLeft size={20}/> }
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                if (item.type === "header") {
                  return (
                    <li key={index} className="mt-4">
                      {!isCollapsed && (
                        <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
                          {item.label}
                        </h3>
                      )}
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!isCollapsed && (
                          <span className="text-sm font-medium">{item.label}</span>
                        )}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            {!isCollapsed && (
              <div className="text-xs text-gray-400">
                <p>© 2024 BelPrint</p>
                <p>Belize</p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;