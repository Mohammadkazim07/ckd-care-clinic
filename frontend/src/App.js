import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DoctorSection from "./doctorSection";
import Header from "./Header";
import Footer from "./Footer";
import JournalsPublished from "./JournalsPublished";
import Services from "./Services";
import AchievementsSection from "./Achievement";
import ImageSlider from "./components/ImageSlider";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

/* ======================
   HOME PAGE
   ====================== */
const Home = () => {
  return (
    <>
      <Header />
      <DoctorSection />
      <ImageSlider/>
      <JournalsPublished />
      <Services />
      <AchievementsSection />
      <Footer />
    </>
  );
};

/* ======================
   APP ROUTES
   ====================== */
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route path="/" element={<Home />} />

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
