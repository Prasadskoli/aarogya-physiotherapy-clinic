import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "mr" : "en");
  };

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav className="fixed top-0 left-0 w-full 
      bg-white/30 backdrop-blur-xl border-b border-white/40 
      shadow-lg px-6 md:px-14 py-4 md:py-6 
      flex justify-between items-center z-40">

        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Clinic Logo"
            className="w-12 h-14 object-contain"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
            {t("clinicName")}
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 items-center text-gray-800 text-lg font-semibold">

          <Link to="/" className="hover:text-primary transition">
            {t("about")}
          </Link>

          <Link to="/services" className="hover:text-primary transition">
            {t("services")}
          </Link>

          <Link to="/gallery" className="hover:text-primary transition">
            {t("gallery")}
          </Link>

          <Link to="/contact" className="hover:text-primary transition">
            {t("contact")}
          </Link>

          <button
            onClick={changeLanguage}
            className="px-5 py-2 rounded-full 
            bg-primary text-white text-sm
            shadow-lg hover:scale-105 transition"
          >
            {i18n.language === "en" ? "मराठी" : "English"}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={30} />
        </button>
      </nav>


      {/* MOBILE SIDEBAR */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar Panel */}
          <div className="relative bg-white w-64 h-full shadow-xl p-6 flex flex-col">

            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 text-lg font-medium">

              <button
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
                className="text-left hover:text-primary"
              >
                {t("about")}
              </button>

              <button
                onClick={() => {
                  navigate("/services");
                  setIsOpen(false);
                }}
                className="text-left hover:text-primary"
              >
                {t("services")}
              </button>

              <button
                onClick={() => {
                  navigate("/gallery");
                  setIsOpen(false);
                }}
                className="text-left hover:text-primary"
              >
                {t("gallery")}
              </button>

              <button
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
                className="text-left hover:text-primary"
              >
                {t("contact")}
              </button>

              <button
                onClick={() => {
                  changeLanguage();
                  setIsOpen(false);
                }}
                className="mt-6 px-5 py-2 rounded-full bg-primary text-white"
              >
                {i18n.language === "en" ? "मराठी" : "English"}
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;