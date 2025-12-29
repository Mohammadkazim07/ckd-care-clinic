import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"; // Social Media Icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 via-indigo-500 to-purple-500 text-white py-12">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Top Section: Flex Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Google Maps Embed: Left Section */}
          <div className="lg:w-2/5 mb-8 lg:mb-0">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Our Location</h4>
            <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.5313413246436!2d87.4701932!3d26.1288301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef89c0d39655e7%3A0x603b5380eba35327!2sDr%20Mohammad%20Aamir&#39;s%20Clinic!5e1!3m2!1sen!2sin!4v1735311648630!5m2!1sen!2sin"
              width="80%"
              height="200"
              style={{ minHeight: '200px' }}
              allowFullScreen=""
              loading="lazy"
              className="border-2 border-indigo-300"
            ></iframe>
            </div>
          </div>

          {/* Contact Us: Center Section */}
          <div className="flex flex-col items-center lg:w-1/3">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300 text-center" id="3">Contact Us</h4>
            <ul className="text-sm space-y-3 text-center">
              <li>📞 <span className="font-medium">+918862905807 / +917992284672</span></li>
              <li>📧 <span className="font-medium">ckdcareclinic@gmail.com</span></li>
              <li>📍 <span className="font-medium">Meer Nagar Road, Near Sadar Hospital, Araria</span></li>
            </ul>
          </div>

          {/* Social Media Links: Right Section */}
          <div className="flex flex-col items-center lg:w-1/4 lg:items-center">
            <h4 className="text-2xl font-bold mb-4 text-yellow-300 text-center">Follow Us</h4>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/15ciLRAKke/"
                className="bg-white rounded-full p-3 hover:bg-yellow-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-indigo-600" size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="bg-white rounded-full p-3 hover:bg-yellow-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-600" size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-mohammad-aamir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="bg-white rounded-full p-3 hover:bg-yellow-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-blue-600" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/30"></div>

        {/* Footer Bottom */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/80">
            &copy; {new Date().getFullYear()} <span className="font-semibold">Chest, Kidney and Digestive Care Clinic</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
