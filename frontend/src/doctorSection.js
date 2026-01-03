import React, { useState } from "react";
import doctorImage from "./assets/dp.jpeg";

const API =
  process.env.REACT_APP_API_URL || "https://ckd-care-clinic.onrender.com";

const DoctorSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);
  const handleCancel = () => setIsFormOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setIsFormOpen(false);
        alert("Your appointment has been booked successfully!");
      })
      .catch(() => {
        alert("There was an error booking your appointment.");
      });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24 bg-gradient-to-br from-sky-100 to-blue-200 shadow-xl rounded-lg">

        {/* ===== IMAGE LEFT | TEXT RIGHT ===== */}
        <div className="flex flex-col lg:flex-row items-start gap-1">

          {/* ===== LEFT : IMAGE ===== */}
          <div className="lg:w-[40%] w-full flex justify-center lg:justify-start">
            <div className="max-w-lg w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={doctorImage}
                alt="Dr. Mohammad Aamir"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* ===== RIGHT : TEXT CONTENT ===== */}
          <div className="lg:w-[55%] w-full pl-0 lg:pl-2">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-700">
              Dr. MOHAMMAD AAMIR
            </h1>

            <div className="space-y-2 mb-6 text-gray-800">
              <p className="font-bold">BAMS(Hons), MD Medicine(Ay.) - AKU Patna</p>
              <p className="font-bold">Regn No. - 2710</p>
              <p className="font-bold">
                Consultant - Mental Health Rehabilitation Centre, Patna
              </p>
              <p className="font-bold">
                Govt. Medical Officer - Purnea, Bihar
              </p>
              <p className="font-bold">
                Ex Resident - Advanced Neuro Hospital, Patna
              </p>
              <p className="font-bold">
                Director, CKD Care Clinic, Araria
              </p>
              <p className="font-bold">Experience - 7 years</p>
            </div>

            <h2 className="inline-block text-2xl font-semibold text-white bg-gray-700 px-4 py-2 mb-6 rounded-md">
              About Dr. Mohammad Aamir
            </h2>

            <p className="mb-8 text-black leading-relaxed text-base sm:text-lg">
              Dr. Mohammad Aamir, a distinguished General physician, completed his
              schooling at JNV Araria and later pursued medical entrance
              preparation in Kota, finishing his 10+2 in 2011. He graduated from
              Government Ayurveda College, Patna, in 2019, earning the prestigious
              Ayurvisharda award from Himalaya for outstanding performance.
              Subsequently, he completed his MD in Medicine from the same
              institution under Aryabhatta Knowledge University, Patna.
              <br /><br />
              Dr. Aamir has conducted extensive research in complex renal and
              chest pathologies, liver diseases, skin conditions, and bronchial
              asthma. His work has been published in renowned journals like
              JAIMS, IJAR, and WJPR. He has participated in over 50 seminars,
              organized 25+ health camps, and received accolades such as the ISSN
              Best Researcher in Ayurveda.
            </p>
          </div>
        </div>

        {/* ===== MEMBERSHIP ===== */}
        <section className="w-full bg-white py-12 mt-10 rounded-xl">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="inline-block text-2xl font-semibold text-white bg-gray-700 px-4 py-2 mb-6 rounded-md">
              Dr. Mohammad Aamir&apos;s Membership
            </h2>

            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Member of International Society For Scientific Network.</li>
              <li>Lifetime Member of NASYA, Bihar, India.</li>
              <li>Lifetime Member of All India Ayurvedic Congress.</li>
              <li>Lifetime Member of Alumni, Govt. Ayurvedic College Patna.</li>
              <li>Lifetime Member of Vishva Ayurved Parishad Patna.</li>
              <li>Lifetime Member of JNVAA, Araria.</li>
            </ul>
          </div>
        </section>

        {/* ===== BUTTONS ===== */}
        <div className="flex justify-center lg:justify-start gap-12 mt-10">
          <button
            onClick={toggleForm}
            className="bg-gray-700 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            Book an Appointment
          </button>

          <a
            href="#3"
            className="bg-gray-200 hover:bg-green-500 text-gray-700 hover:text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ===== APPOINTMENT FORM ===== */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center text-indigo-700">
              Book an Appointment
            </h2>

            <form onSubmit={handleSubmit}>
              {[
                ["fullName", "PATIENT NAME", "text"],
                ["age", "AGE", "number"],
                ["gender", "GENDER", "text"],
                ["address", "ADDRESS", "text"],
                ["phone", "MOBILE NUMBER", "tel"],
                ["email", "EMAIL", "email"],
                ["appointmentDate", "APPOINTMENT DATE", "date"],
              ].map(([id, label, type]) => (
                <div key={id} className="mb-4">
                  <label className="block text-gray-700 font-medium">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
              ))}

              <div className="flex justify-between">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
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
