import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">

        {/* Column 1 - Logo & About */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img src={logo} alt="Clinic Logo" className="w-14 h-14 object-contain" />
            <h2 className="text-2xl font-bold text-primary">
              Aarogya Physiotherapy Clinic
            </h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Providing expert physiotherapy care with advanced techniques 
            for pain relief, rehabilitation, and better mobility.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link to="/" className="hover:text-primary transition">About</Link>
            <Link to="/services" className="hover:text-primary transition">Services</Link>
            <Link to="/gallery" className="hover:text-primary transition">Gallery</Link>
            <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          </div>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Contact Info
          </h3>

          <div className="flex flex-col gap-4 text-gray-300">

            <div className="flex items-center gap-3">
              <Phone className="text-green-400" size={20} />
              <span>+91 8625926777</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-blue-400" size={20} />
              <span>dr.pradnyakoli@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-red-400" size={20} />
              <span>Islampur, Maharashtra</span>
            </div>

          </div>
        </div>

        {/* Column 4 - Social & Appointment */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-primary">
            Connect With Us
          </h3>

          <div className="flex flex-col gap-5">

            <a
              href="https://wa.me/918625926777?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0AContact%20Number:%20%0APreferred%20Date:%20%0AProblem:%20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-full text-center font-medium transition"
            >
              WhatsApp Appointment
            </a>

            <a
              href="https://www.instagram.com/0516_pradnya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-400 transition"
            >
              <Instagram size={20} />
              Instagram
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 Aarogya Physiotherapy Clinic. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;