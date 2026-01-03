import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import headerBg from "./assets/banner.PNG"; // 👈 ADD THIS

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleAdminClick = () => {
    navigate(token ? "/admin/dashboard" : "/admin");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header
      className="w-full relative"
      style={{
        backgroundImage: `linear-gradient(
          rgba(31, 58, 95, 0.85),
          rgba(31, 58, 95, 0.85)
        ), url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* CONTENT */}
      <div className="w-full px-6 py-4">

        {/* TOP ROW */}
        <div className="flex items-center gap-4">

          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="bg-white p-2 rounded-md cursor-pointer"
          >
            <img
              src={logo}
              alt="CKD Care Clinic"
              className="w-40 h-35 object-contain"
            />
          </div>

          {/* TITLE */}
          <h1
            className="
              bg-white
              rounded-md
              px-6
              py-3
              font-extrabold
              tracking-wide
              text-[30px]
              md:text-[36px]
              lg:text-[50px]
              leading-none
            "
          >
            <span className="text-[#8b1d2c]">CHEST, </span>
            <span className="text-[#0f766e]">
              KIDNEY AND DIGESTIVE CARE CLINIC
            </span>
          </h1>
        </div>

        {/* NAVBAR ROW */}
        <div className="mt-4 flex justify-end items-center gap-4 flex-wrap">
          <a href="#1" className="text-white font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Profile
          </a>
          <a href="#4" className="text-white font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Publications
          </a>
          <a href="#2" className="text-white font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Services
          </a>
          <a href="#5" className="text-white font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Achievements
          </a>

          <button
            onClick={handleAdminClick}
            className="bg-white text-[#8b1d2c] border border-[#8b1d2c] px-4 py-2 rounded-md font-semibold hover:bg-[#8b1d2c] hover:text-white transition"
          >
            Admin Login
          </button>

          {token && (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
