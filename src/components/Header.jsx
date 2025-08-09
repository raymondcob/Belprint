import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/belprint.png";
import top1 from "../assets/icons/top-1.svg";
import top2 from "../assets/icons/top-2.svg";
import { RxDashboard, RxFontSize } from "react-icons/rx";
import { TbHistory } from "react-icons/tb";
import { IoGiftOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Header = ({ onShowSidebar }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  // Effect to lock scrolling when any modal is open
  useEffect(() => {
    if (isMobileMenuOpen || isAccountModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isAccountModalOpen]);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAccountModal = (e) => {
    e.preventDefault();
    setIsAccountModalOpen(!isAccountModalOpen);
  };

  const handleDashboardClick = () => {
    setIsAccountModalOpen(false);
    navigate("/dashboard");
  };

  return (
    <>
      {/* Mobile Menu (Modal Overlay) */}
      <div
        className={`fixed inset-0 z-[9998] min-h-screen bg-black text-white transition-all duration-500 ease-in-out md:hidden
          ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        <ul className="list-none p-0 my-24">
          <li className="block relative border-b border-gray-700">
            <Link
              to="/blog"
              className="main-menu__link block p-5 text-white font-bold text-lg hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="block relative border-b border-gray-700">
            <Link
              to="/shop"
              className="main-menu__link block p-5 text-white font-bold text-lg hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li className="block relative border-b border-gray-700">
            <Link
              to="/about"
              className="main-menu__link block p-5 text-white font-bold text-lg hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="block relative border-b border-gray-700">
            <Link
              to="/contact"
              className="main-menu__link block p-5 text-white font-bold text-lg hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
          <li className="block relative border-b border-gray-700">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsAccountModalOpen(true);
              }}
              className="main-menu__link block p-5 text-white font-bold text-lg hover:bg-gray-800 w-full text-left"
            >
              Account
            </button>
          </li>
          <li className="block relative border-b border-gray-700">
            <Link
              to="/cart"
              className="main-menu__link block p-5 text-white font-bold text-lg hover:bg-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>

      {/* Background Overlay for Modal */}
      {isAccountModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999]"
          onClick={toggleAccountModal}
        ></div>
      )}

      {/* Main Header */}
      <header className="bg-black text-white relative px-4 sm:px-12">
        {/* Mobile Hamburger Button */}
        <div className="absolute top-5 right-6 z-[9999] md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="w-8 h-8 relative focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {/* Span 1 */}
            <span
              className={`block absolute h-0.5 w-full bg-black rounded-sm transition-all duration-300 ease-in-out
                ${isMobileMenuOpen ? "rotate-45 translate-y-[10px] bg-white" : "top-0"}`}
            ></span>
            {/* Span 2 */}
            <span
              className={`block absolute h-0.5 w-full bg-black rounded-sm transition-all duration-300 ease-in-out
                ${isMobileMenuOpen ? "opacity-0 " : "top-[10px]"}`}
            ></span>
            {/* Span 3 */}
            <span
              className={`block absolute h-0.5 w-full bg-black rounded-sm transition-all duration-300 ease-in-out
                ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-[10px] bg-white" : "top-5"
                }`}
            ></span>
          </button>
        </div>

        {/* Logo (Absolute Position) */}
        <Link
          to="/"
          className="absolute top-[4%] left-[0.9%] cursor-pointer hidden md:block"
        >
          <img
            src={logo}
            alt="Belprint Logo"
            className="w-full max-w-[250px] h-auto"
          />
        </Link>

        {/* Top Nav (Desktop Only) */}
        <nav className="hidden md:flex md:justify-end items-center pt-5">
          <div className="flex gap-6 justify-end items-center">
            {/* Contact Info */}
            <div className="flex items-center gap-2 text-base text-white">
              <img src={top1} alt="Location Icon" className="w-4 h-4" />
              Seagull Street, San Pedro, Belize
            </div>
            <div className="flex items-center gap-2 text-base text-white">
              <img src={top2} alt="Phone Icon" className="w-4 h-4" />
              +501-628-8081
            </div>

            {/* Socials */}
            <ul className="flex list-none gap-6 p-0 m-0">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5016288081&amp;text=Hello!%20I%20need%20assistance%20with%20one%20of%20your%20services."
                  className="text-white text-2xl hover:text-gray-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/belprintbz/"
                  className="text-white text-2xl hover:text-gray-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/belprintbelize"
                  className="text-white text-2xl hover:text-gray-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <hr className="hidden md:block border-t-[2.5px] border-white mt-4" />

        {/* Bottom Nav (Desktop Only) */}
        <nav className="hidden md:grid grid-cols-7 gap-6 py-4 pb-6 ml-36 text-right">
          <Link
            to="/blog"
            className="font-bold uppercase text-white hover:text-gray-400 transition-colors tracking-widest text-sm"
          >
            Blog
          </Link>
          <Link
            to="/shop"
            className="font-bold uppercase text-white hover:text-gray-400 transition-colors tracking-widest text-sm"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="font-bold uppercase text-white hover:text-gray-400 transition-colors tracking-widest text-sm"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="font-bold uppercase text-white hover:text-gray-400 transition-colors tracking-widest text-sm"
          >
            Contact Us
          </Link>

          {/* Account Dropdown as a Modal */}
          <div className="relative">
            <a
              onClick={toggleAccountModal}
              className="font-bold uppercase text-white hover:text-gray-400 transition-colors tracking-widest cursor-pointer text-sm"
              aria-expanded={isAccountModalOpen}
            >
              Account
            </a>
          </div>

          <Link
            to="/cart"
            className="font-bold uppercase text-white hover:text-gray-400 transition-colors tracking-widest text-sm"
          >
            Cart
          </Link>
        </nav>
      </header>
      <div className="bg-animated-gradient h-2 hidden md:block"></div>

      {/* The Account Modal/Panel */}
      <div
        className={`fixed top-0 right-0 z-[10000] h-screen w-[75%] md:w-[20%] bg-black/90 text-white shadow-lg transform transition-transform duration-500 ease-in-out
          ${isAccountModalOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="relative p-2">
          <button
            onClick={toggleAccountModal}
            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-500 focus:outline-none hover:cursor-pointer"
            aria-label="Close account menu"
          >
            <FaTimes />
          </button>
          <h6 className="text-center text-xl font-semibold mt-6 mb-6">
            Welcome, Guest
          </h6>
          <ul className="list-none text-left">
            <li className="border-b border-t border-gray-700 hover:text-gray-500 ">
              <button
                onClick={handleDashboardClick}
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 hover:cursor-pointer rounded-md transition-colors w-full text-left"
              >
                <RxDashboard size={24} />
                <span className="font-medium md:font-large">
                  Account Dashboard
                </span>
              </button>
            </li>
            <li className="border-b border-gray-700">
              <a
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 rounded-md transition-colors"
                href="/pages/PurchaseHistory.html"
              >
                <TbHistory size={24} />
                <span className="font-medium">Purchase History</span>
              </a>
            </li>
            <li className="border-b border-gray-700">
              <a
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 rounded-md transition-colors"
                href="/pages/RewardsHub.html"
              >
                <IoGiftOutline size={24} />
                <span className="font-medium">Rewards Hub</span>
              </a>
            </li>
            <li className="border-b border-gray-700">
              <a
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 rounded-md transition-colors"
                href="/pages/Cards&Accounts.html"
              >
                <CiCreditCard1 size={24} />
                <span className="font-medium">Cards & Accounts</span>
              </a>
            </li>
            <li className="border-b border-gray-700">
              <a
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 rounded-md transition-colors"
                href="/pages/PayCreditCardBill.html"
              >
                <CiMoneyBill size={24} />
                <span className="font-medium">Pay Credit Card Bill</span>
              </a>
            </li>
            <li className="border-b border-gray-700">
              <a
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 rounded-md transition-colors"
                href="/pages/Profile.html"
              >
                <CiUser size={24} />
                <span className="font-medium">Profile</span>
              </a>
            </li>
            <li className="border-b border-gray-700">
              <a
                className="flex items-center gap-4 px-3 py-3 lg:py-6 text-white hover:text-gray-500 hover:bg-opacity-10 rounded-md transition-colors"
                href="/pages/MilitaryDiscountBenefit.html"
              >
                <CiMedal size={24} />
                <span className="font-medium">Military Discount Benefit</span>
              </a>
            </li>
            <li>
              <a
                className="flex flex-col items-center gap-2 px-3 py-3  text-white hover:text-red-400 transition-colors"
                href="#"
              >
                <span className="font-medium">Sign Out</span>
                <span className="h-1 w-10 bg-white rounded "></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
