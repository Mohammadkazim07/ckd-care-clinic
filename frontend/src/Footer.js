import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* MAP SECTION */}
          <div className="w-full md:w-2/5">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">
              Our Location
            </h4>
            <div className="rounded-lg overflow-hidden shadow-lg w-full">
              <iframe
                title="Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.5313413246436!2d87.4701932!3d26.1288301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef89c0d39655e7%3A0x603b5380eba35327!2sDr%20Mohammad%20Aamir&#39;s%20Clinic!5e1!3m2!1sen!2sin!4v1735311648630!5m2!1sen!2sin"
                width="100%"
                height="220"
                loading="lazy"
                allowFullScreen
                className="border-2 border-indigo-300"
              ></iframe>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="w-full md:w-1/3 text-center">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">
              Contact Us
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                📞 <span className="font-medium">+91 8862905807 / +91 7992284672</span>
              </li>
              <li>
                📧{" "}
                <a
                  href="mailto:ckdcareclinic@gmail.com"
                  className="font-medium underline hover:text-yellow-300 transition"
                >
                  ckdcareclinic@gmail.com
                </a>
              </li>
              <li>
                📍 <span className="font-medium">
                  Meer Nagar Road, Near Sadar Hospital, Araria
                </span>
              </li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="w-full md:w-1/4 text-center">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">
              Follow Us
            </h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/share/15ciLRAKke/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 hover:bg-yellow-400 transition"
              >
                <FaFacebookF className="text-indigo-600" size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 hover:bg-yellow-400 transition"
              >
                <FaInstagram className="text-pink-600" size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-3 hover:bg-yellow-400 transition"
              >
                <FaLinkedinIn className="text-blue-600" size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-white/30"></div>

        {/* BOTTOM */}
        <div className="text-center mt-6 space-y-2">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">
              Chest, Kidney and Digestive Care Clinic
            </span>. All rights reserved.
          </p>

          <p className="text-xs text-white/70">
            Developed by <span className="font-semibold">Er. Mohammad Kazim</span> | 📧{" "}
            <a
              href="mailto:mohammadkazim07@gmail.com"
              className="underline hover:text-yellow-300"
            >
              mohammadkazim07@gmail.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
