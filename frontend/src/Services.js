import React, { useState } from "react";
const API =
  process.env.REACT_APP_API_URL || "https://ckd-care-clinic.onrender.com";
const AppointmentModal = ({ isOpen, closeModal, title }) => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      phone,
      appointmentDate,
      symptoms,
      serviceType: title, // ✅ FIXED (LOGIC ONLY)
    };

    try {
      const response = await fetch(
        `${API}/api/service-appointments`, // ✅ FIXED
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to book appointment");
        return;
      }

      alert("Appointment booked successfully!");
      closeModal();
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-red-600"
        >
          X
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          Book an Appointment: {title}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Write with country code like +91##########"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Preferred Date</label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Symptoms</label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const services = [
    {
      title: "Respiratory Consultation",
      description:
        "Consult with an expert if you have respiratory issues such as asthma, bronchitis, or other lung-related conditions.",
    },
    {
      title: "Cardiology Consultation",
      description:
        "Get expert advice for heart conditions, high blood pressure, and other cardiovascular health issues.",
    },
    {
      title: "Neurology Consultation",
      description:
        "Consult with a neurologist for conditions such as migraines, epilepsy, and other neurological disorders.",
    },
    {
      title: "Pediatric Consultation",
      description:
        "Consult with pediatricians for the health and wellbeing of your child, from infants to teenagers.",
    },
    {
      title: "General Checkup",
      description:
        "A comprehensive health checkup to ensure your overall health is in good condition.",
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden bg-gradient-to-br from-sky-100 to-blue-200 py-10">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-5xl text-4xl font-bold title-font text-gray-900" id="2">
            Our Services
          </h1>
          <p className="text-lg text-black mt-2">
            Explore the different consultations we offer and book your appointment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -m-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg bg-white shadow-lg border-2 border-gray-300 flex flex-col">
                <h3 className="text-xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="mb-4">{service.description}</p>
                <button
                  className="bg-indigo-600 text-white py-2 px-6 rounded-full"
                  onClick={() => openModal(service.title)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={modalTitle}
      />
    </section>
  );
};

export default Services;
