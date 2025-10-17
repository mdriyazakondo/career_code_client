import React from "react";
import { Link } from "react-router";
import {
  FaBox,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Top wave shape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform">
        <svg
          className="relative block w-full h-12 text-gray-900"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>

      <div className="bg-gray-900 pt-16 pb-8">
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* About */}
            <div className="col-span-1 md:col-span-5">
              <div className="flex items-center mb-5">
                <FaBox className="text-2xl text-blue-500 mr-2" />
                <h3 className="text-2xl font-bold text-white">
                  Subscription Box
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Join our subscription box service and receive carefully curated
                items delivered right to your doorstep. Perfect for those who
                love surprises and discovering new premium products every month!
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/md.rijoanmaruf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2.5 rounded-lg transition-all transform hover:scale-110 flex items-center justify-center w-10 h-10 shadow-md"
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="https://github.com/mdrijoanmaruf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white p-2.5 rounded-lg transition-all transform hover:scale-110 flex items-center justify-center w-10 h-10 shadow-md"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.instagram.com/rijoanmaruf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-2.5 rounded-lg transition-all transform hover:scale-110 flex items-center justify-center w-10 h-10 shadow-md"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mdrijoanmaruf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-2.5 rounded-lg transition-all transform hover:scale-110 flex items-center justify-center w-10 h-10 shadow-md"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-3 md:pl-4">
              <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-gray-700">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500" />{" "}
                    Home
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500" />{" "}
                    Blog
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500" />{" "}
                    Privacy policy
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    to="/terms-and-conditions"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500" />{" "}
                    Terms and conditions
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    to="/login"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500" />{" "}
                    Login
                  </Link>
                </li>
                <li className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    to="/signup"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaChevronRight className="text-xs mr-2 text-blue-500" />{" "}
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-1 md:col-span-4 md:pl-4">
              <h3 className="text-lg font-bold text-white mb-5 pb-2 border-b border-gray-700">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-600 p-2 rounded-lg mt-1 mr-3 shadow-lg">
                    <FaEnvelope className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm mb-1">Email</h4>
                    <a
                      href="mailto:rijoanmaruf@gmail.com"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      mdriyazakondo265@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 p-2 rounded-lg mt-1 mr-3 shadow-lg">
                    <FaPhone className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm mb-1">Phone</h4>
                    <span className="text-gray-400">+01639834**</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-600 p-2 rounded-lg mt-1 mr-3 shadow-lg">
                    <FaMapMarkerAlt className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-300 text-sm mb-1">Address</h4>
                    <p className="text-gray-400">
                      House-194/A , Road-7
                      <br />
                      Block-C , Bashundhara R/A
                      <br />
                      Dhaka , Bangladesh
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear}{" "}
                <span className="text-blue-400">Subscription Box</span>. All
                rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/privacy-policy"
                  className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/faq"
                  className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
            <div className="text-center mt-6 text-xs text-gray-600">
              Designed with <span className="text-red-500">♥</span> by{" "}
              <a
                href="https://rijoan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Md Riyaz Akondo
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
