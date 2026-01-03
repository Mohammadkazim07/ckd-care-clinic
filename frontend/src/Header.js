import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import banner from "./assets/banner1.PNG";

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
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 🔹 BACKGROUND OVERLAY (50% OPACITY) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      ></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 py-4">

        {/* TOP ROW */}
        <div className="flex items-center gap-4">

          {/* LOGO (TRANSPARENT BACKGROUND) */}
          <div
            onClick={() => navigate("/")}
            className="p-2 rounded-md cursor-pointer"
          >
            <img
              src={logo}
              alt="CKD Care Clinic"
              className="w-40 h-35 object-contain"
            />
          </div>

          {/* TITLE WITH CLEAN WHITE OUTLINE (NO OVERLAP) */}
          <h1
            className="
              px-6
              py-3
              font-extrabold
              tracking-wide
              text-[30px]
              md:text-[36px]
              lg:text-[50px]
              leading-none
            "
            style={{
              textShadow: `
                -1px -1px 0 #ffffff,
                 1px -1px 0 #ffffff,
                -1px  1px 0 #ffffff,
                 1px  1px 0 #ffffff,
                 0px  2px 8px rgba(0,0,0,0.6)
              `
            }}
          >
            <span style={{ color: "#7f1322ff" }}>
              CHEST,
            </span>{" "}
            <span style={{ color: "#046670ff" }}>
              KIDNEY AND DIGESTIVE CARE CLINIC
            </span>
          </h1>
        </div>

        {/* NAVBAR ROW */}
        <div className="mt-4 flex justify-end items-center gap-4 flex-wrap">
          <a href="#1" className="text-blue font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Profile
          </a>
          <a href="#4" className="text-blue font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Publications
          </a>
          <a href="#2" className="text-blue font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
            Services
          </a>
          <a href="#5" className="text-blue font-semibold text-lg hover:bg-[#8b1d2c] px-2 py-1 rounded">
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
