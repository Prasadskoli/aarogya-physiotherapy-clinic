import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import pain1 from "../assets/pain1.jpg";
import pain2 from "../assets/pain2.jpg";
import pain3 from "../assets/pain3.jpg";
import pain4 from "../assets/pain4.jpg";
import pain5 from "../assets/pain5.jpg";
import pain6 from "../assets/pain6.jpg";
import pain7 from "../assets/pain7.jpg";
import pain8 from "../assets/pain8.jpg";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const images = [
  "/slide1.jpeg",
  "/slide2.png",
  "/slide3.png",
];

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 3000); // change every 3 seconds

  return () => clearInterval(interval);
}, []);

  return (
  <div className="overflow-x-hidden">

    <div className="absolute top-40 left-10 md:left-20 w-60 md:w-72 h-60 md:h-72 bg-blue-400/30 rounded-full blur-3xl -z-10"></div>
    <div className="absolute bottom-20 right-10 md:right-20 w-60 md:w-72 h-60 md:h-72 bg-green-400/30 rounded-full blur-3xl -z-10"></div>

    {/* HERO SECTION */}
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 lg:px-40 pt-28 md:pt-32 overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[1600px] w-full mx-auto gap-16 md:gap-24">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold 
          bg-gradient-to-r from-blue-600 via-primary to-teal-500 
          bg-clip-text text-transparent leading-tight">
            {t("clinicName")}
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 text-gray-800">
            {t("doctorName")}
          </h2>

          <p className="text-base md:text-lg text-gray-600 mt-1 font-medium">
            {t("doctorDegree")}
          </p>

          <h3 className="mt-6 md:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-snug">
            "{t("tagline")}"
          </h3>

          {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

  {/* CALL BUTTON */}
  <button
    onClick={() => {
      window.location.href = "tel:+918625926777";
    }}
    className="px-5 py-2 md:px-6 md:py-3 
    bg-primary text-white rounded-full 
    shadow-lg hover:scale-105 transition"
  >
    {t("callNow")}
  </button>

  {/* WHATSAPP BUTTON */}
  <button
    onClick={() => {
      window.open(
        "https://wa.me/918625926777?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0AContact%20Number:%20%0APreferred%20Date:%20%0AProblem:%20",
        "_blank"
      );
    }}
    className="px-5 py-2 md:px-6 md:py-3 
    bg-green-500 text-white rounded-full 
    shadow-lg hover:scale-105 transition"
  >
    {t("whatsapp")}
  </button>

</div>

          {/* Search */}
          <div className="mt-8 w-full max-w-full sm:max-w-[420px] mx-auto md:mx-0">
            <button
              onClick={() => navigate("/services")}
              className="w-full px-6 py-4 rounded-full text-base
              bg-white/70 backdrop-blur-xl
              border border-white/60
              text-gray-800
              shadow-xl hover:bg-white/80
              transition duration-300 flex items-center gap-3"
            >
              <span className="text-lg">🔍</span>
              <span>Search condition (e.g. Back Pain)</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative bg-white/30 backdrop-blur-xl p-4 md:p-6 
          rounded-3xl shadow-2xl border border-white/40 
          w-full max-w-md md:max-w-xl 
          h-[300px] sm:h-[400px] md:h-[500px]
          overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Clinic"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>


    {/* STATS SECTION */}
    <section className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white/30 backdrop-blur-2xl border border-white/40 
        rounded-3xl shadow-2xl p-8 md:p-16 
        grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {/* Patients */}
          <motion.div>
            <div className="text-4xl mb-4">👨‍⚕️</div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">500+</h3>
            <p className="text-gray-800 mt-2 text-sm md:text-lg">Patients Treated</p>
          </motion.div>

          {/* Experience */}
          <motion.div>
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">2+</h3>
            <p className="text-gray-800 mt-2 text-sm md:text-lg">Years Experience</p>
          </motion.div>

          {/* Recovery */}
          <motion.div>
            <div className="text-4xl mb-4">💯</div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">99%</h3>
            <p className="text-gray-800 mt-2 text-sm md:text-lg">Recovery Rate</p>
          </motion.div>

          {/* Support */}
          <motion.div>
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-3xl md:text-5xl font-bold text-primary">24/7</h3>
            <p className="text-gray-800 mt-2 text-sm md:text-lg">Support</p>
          </motion.div>

        </div>
      </div>
    </section>


    {/* PAIN CONDITIONS */}
    <section className="py-16 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="text-center mb-12 md:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-2xl font-bold text-primary">
          Pain Conditions We Treat
        </h2>
        <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-lg">
          Specialized care for various musculoskeletal conditions
        </p>
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="slider-track">
          {[pain1, pain2, pain3, pain4, pain5, pain6, pain7, pain8,
            pain1, pain2, pain3, pain4, pain5, pain6, pain7, pain8
          ].map((img, index) => (
            <div key={index} className="slide-item">
              <img
                src={img}
                alt="Pain Condition"
                className="w-full h-full object-cover rounded-3xl hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>


    {/* SERVICES */}
    <section className="py-16 md:py-28 px-6 bg-gradient-to-b from-transparent to-white/20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-12 md:mb-16">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

          {/* Card 1 */}
          <motion.div className="bg-white/30 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Pain Management</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Advanced physiotherapy techniques for chronic and acute pain relief.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div className="bg-white/30 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">🦴</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Rehabilitation Therapy</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Personalized recovery programs after surgery or injury.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div className="bg-white/30 backdrop-blur-lg p-6 md:p-8 rounded-3xl shadow-xl border border-white/40 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">🏃</div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Mobility Improvement</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Improve strength, flexibility, and overall physical performance.
            </p>
          </motion.div>

        </div>

      </div>
    </section>

  </div>
);
}

export default Home;