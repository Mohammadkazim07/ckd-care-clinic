import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png"; // your logo

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleAdminClick = () => {
    if (token) {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row item-center">
        
        {/* Logo + Title */}
        <div
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="bg-white p-2 rounded-md shadow-sm mr-3">
            <img
              width="160"
              height="160"
              src={logo}
              className="custom-logo"
              alt="Chest & Kidney Care Centre"
              decoding="async"
            />
          </div>

          <span className="flex items-center sm:text-6xl text-6xl mb-4 font-bold bg-white border-0 py-2 px-4 w-auto focus:outline-none rounded">
            <span className="text-[#8b1d2c] mr-2">
              CHEST,
            </span>
            <span className="text-[#0f766e]">
              KIDNEY AND DIGESTIVE CARE CLINIC
            </span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white hover:bg-[#8b1d2c] font-semibold text-lg transition-all duration-200" href="#1">
            Profile
          </a>

          <a className="mr-5 text-white hover:bg-[#8b1d2c] font-semibold text-lg transition-all duration-200" href="#4">
            Publications
          </a>

          <a className="mr-5 text-white hover:bg-[#8b1d2c] font-semibold text-lg transition-all duration-200" href="#2">
            Services
          </a>

          <a className="mr-5 text-white hover:bg-[#8b1d2c] font-semibold text-lg transition-all duration-200" href="#5">
            Achievements
          </a>

          {/* Admin Button */}
          <button
            onClick={handleAdminClick}
            className="mr-5 text-[#8b1d2c] bg-white border border-[#8b1d2c] hover:bg-[#8b1d2c] hover:text-white cursor-pointer font-semibold text-lg transition-all duration-200 px-4 py-2 rounded-md shadow-sm"
          >
            Admin Login
          </button>

          {/* Logout (only if logged in) */}
          {token && (
            <button
              onClick={handleLogout}
              className="ml-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
