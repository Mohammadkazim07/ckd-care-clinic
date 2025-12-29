import React, { useState } from "react";
import doctorImage from "./assets/dp.jpeg"; // Ensure the photo is in the correct path
//import axios from "axios";
const API =
  process.env.REACT_APP_API_URL || "https://ckd-care-clinic.onrender.com";
const DoctorSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // State to toggle form visibility

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen); // Toggle the form visibility
  };

  const handleCancel = () => {
    setIsFormOpen(false); // Close the form when cancel is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing on submit

    const formData = {
      fullName: e.target.fullName.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      appointmentDate: e.target.appointmentDate.value,
    };

    fetch(`${API}/api/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        setIsFormOpen(false);
        alert("Your appointment has been booked successfully!");
      })
      .catch(() => {
        alert("There was an error booking your appointment. Please try again.");
      });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center bg-gradient-to-br from-sky-100 to-blue-200 shadow-xl rounded-lg">
        {/* Left Section - Doctor's Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
              src={doctorImage}
              alt="Dr. Mohammad Aamir"
            />
          </div>
        </div>

        {/* Right Section - Doctor's Info */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-grey-700 leading-tight">
            Dr. MOHAMMAD AAMIR
          </h1>

          <div className="text-gray-700 space-y-2 mb-6">
            <p className="text-lg font-medium"><span className="text-black font-bold">BAMS(Hons), MD Medicine(Ay.) - AKU Patna</span></p>
            <p className="text-lg font-medium"><span className="text-black font-bold">Regn No. - 2710</span></p>
            <p className="text-lg font-medium"><span className="text-black font-bold">Consultant - Mental Health Rehabilitation Centre, Patna</span></p>
            <p className="text-lg font-medium"><span className="text-black font-bold">Govt. Medical Officer - Purnea, Bihar</span></p>
            <p className="text-lg font-medium"><span className="text-black font-bold">Ex Resident - Advanced Neuro Hospital, Patna</span></p>
            <p className="text-lg font-medium"><span className="text-black font-bold">Director, CKD Care Clinic, Araria</span></p>
            <p className="text-lg font-medium"><span className="text-black font-bold">Experience - 7 years</span></p>
          </div>

          <h2 className="inline-block text-3xl font-semibold text-white bg-gray-700 px-4 py-2 mb-6 rounded-md">
            About Dr. Mohammad Aamir
          </h2>

          <p className="mb-8 text-black leading-relaxed text-base sm:text-lg">
            Dr. Mohammad Aamir, a distinguished General physician, completed his schooling
            at JNV Araria and later pursued medical entrance preparation in Kota, finishing
            his 10+2 in 2011. He graduated from Government Ayurveda College, Patna, in 2019,
            earning the prestigious Ayurvisharda award from Himalaya for outstanding
            performance. Subsequently, he completed his MD in Medicine from the same
            institution under Aryabhatta Knowledge University, Patna.
            <br /><br />
            Dr. Aamir has conducted extensive research in complex renal and chest
            pathologies, liver diseases, skin conditions, and bronchial asthma. His work
            has been published in renowned journals like JAIMS, IJAR, and WJPR. He has
            participated in over 50 seminars, organized 25+ health camps, and received
            accolades such as the ISSN Best Researcher in Ayurveda. As the founder and
            director of Chest, Kidney & Digestive Care Clinic, Dr. Aamir continues to
            contribute significantly to Ayurvedic & Integrated medicine and healthcare.
          </p>

          <section className="w-full bg-white py-12">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-3xl font-semibold text-[#1F3A5F] mb-6">
                  Dr. Mohammad Aamir&apos;s Membership
                </h2>

                <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed">
                  <li>Member of International Society For Scientific Network.</li>
                  <li>Lifetime Member of NASYA, Bihar, India.</li>
                  <li>Lifetime Member of All India Ayurvedic Congress.</li>
                  <li>Lifetime Member of Alumni, Govt. Ayurvedic College Patna.</li>
                  <li>Lifetime Member of Vishva Ayurved Parishad Patna.</li>
                  <li>Lifetime Member of Vishva Ayurved Parishad Patna.</li>
                  <li>Lifetime Member of JNVAA, Araria.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-12 mt-10">
            <button
              onClick={toggleForm}
              className="inline-block bg-gray-700 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              Book an Appointment
            </button>

            <a
              href="#3"
              className="inline-block bg-gray-200 hover:bg-green-500 text-gray-700 hover:text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Conditionally Render Appointment Form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
              Book an Appointment
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-medium">
                  PATIENT NAME
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 font-medium">
                  AGE
                </label>
                <input
                  type="number"
                  id="age"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                  min="1"
                  max="120"
                  placeholder="Enter your age"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 font-medium">
                  GENDER
                </label>
                <input
                  type="text"
                  id="gender"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 font-medium">
                  ADDRESS
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium">
                  MOBILE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                  pattern="[0-9 +]{13}" // Ensures 10 digits only
                  maxLength="13"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="appointmentDate" className="block text-gray-700 font-medium">
                  APPOINTMENT DATE
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DoctorSection;
