import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);               // doctor
  const [serviceappointments, setServiceAppointments] = useState([]); // service
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      // Doctor appointments
      const doctorRes = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/appointments`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // Service appointments
      const serviceRes = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/service-appointments`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setAppointments(doctorRes.data);
      setServiceAppointments(serviceRes.data);
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  /* ===========================
     CONFIRM DOCTOR APPOINTMENT
     =========================== */
  const confirmAppointment = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/appointments/confirm/${id}`
      );
      alert("Appointment confirmed");
      fetchData();
    } catch (err) {
      console.error("Confirm failed:", err);
      alert("Failed to confirm appointment");
    }
  };

  /* ===========================
     CONFIRM SERVICE APPOINTMENT
     =========================== */
  const confirmServiceAppointment = async (id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/service-appointments/confirm/${id}`
      );
      alert("Service appointment confirmed");
      fetchData();
    } catch (err) {
      console.error("Service confirm failed:", err);
      alert("Failed to confirm service appointment");
    }
  };

  // ✅ SAFE calculations
  const totalAppointments =
    appointments.length + serviceappointments.length;
  
  const safeAppointments = Array.isArray(appointments) ? appointments : [];
  const safeServiceAppointments = Array.isArray(serviceappointments) ? serviceappointments : [];
  
  const pending =
    safeAppointments.filter(a => a.status === "Pending").length +
    safeServiceAppointments.filter(a => a.status === "Pending").length;

  const confirmed =
    safeAppointments.filter(a => a.status === "Confirmed").length +
    safeServiceAppointments.filter(a => a.status === "Confirmed").length;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">
          Admin Dashboard
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Total Appointments</h3>
          <p className="text-3xl font-bold">{totalAppointments}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-3xl font-bold text-yellow-500">{pending}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Confirmed</h3>
          <p className="text-3xl font-bold text-green-600">{confirmed}</p>
        </div>
      </div>

      {/* Doctor Appointments */}
      <div className="bg-white p-6 rounded shadow mb-10 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">
          General Appointments
        </h2>

        <table className="w-full text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a) => (
              <tr key={a._id} className="border-t">
                <td className="p-3">{a.fullName}</td>
                <td className="p-3">{a.email}</td>
                <td className="p-3">{a.phone}</td>
                <td className="p-3">{a.appointmentDate}</td>
                <td className="p-3 font-semibold">{a.status}</td>
                <td className="p-3">
                  {a.status === "Pending" && (
                    <button
                      onClick={() => confirmAppointment(a._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Service Appointments */}
      <div className="bg-white p-6 rounded shadow overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">
          Service Appointments
        </h2>

        <table className="w-full text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Service</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {serviceappointments.map((a) => (
              <tr key={a._id} className="border-t">
                <td className="p-3">{a.fullName}</td>
                <td className="p-3">{a.email}</td>
                <td className="p-3">{a.phone}</td>
                <td className="p-3">{a.serviceType}</td>
                <td className="p-3">{a.appointmentDate}</td>
                <td className="p-3 font-semibold">{a.status}</td>
                <td className="p-3">
                  {a.status === "Pending" && (
                    <button
                      onClick={() => confirmServiceAppointment(a._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Confirm
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
