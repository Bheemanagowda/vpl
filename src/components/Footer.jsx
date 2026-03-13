import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#122c2e] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* About VPL */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            <img src="/images/vpl-logo.png" alt="" className="h-[70px]" />
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            The Vanajabhavi Premier League (VPL) is a village cricket tournament
            that brings together talented players and passionate supporters.
            It promotes sportsmanship, unity, and entertainment for the entire
            community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About</li>
            <li className="hover:text-orange-400 cursor-pointer">Teams</li>
            <li className="hover:text-orange-400 cursor-pointer">Gallery</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-orange-400" />
              Vanajabhavi, Tq: Yalaburga,<br />
              District: Koppal, Karnataka
            </li>

            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              +91 XXXXX XXXXX
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-400" />
              vplleague@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            <a href="#" className="bg-[#1b3a3d] p-3 rounded-full hover:bg-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#1b3a3d] p-3 rounded-full hover:bg-orange-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#1b3a3d] p-3 rounded-full hover:bg-orange-500 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Vanajabhavi Premier League. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;