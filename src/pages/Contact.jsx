import { Phone, MapPin, Instagram, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="min-h-screen pt-32 px-12 pb-20 bg-gradient-to-br from-blue-50 to-teal-50">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          We’re here to help you move pain-free
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">

        {/* LEFT SIDE - CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 space-y-8"
        >

          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="text-primary w-8 h-8" />
            <div>
              <h3 className="font-semibold text-xl">Call Us</h3>
              <p className="text-gray-700">+91 8625926777</p>
            </div>
          </div>

        {/* WhatsApp */}
<div className="flex items-center gap-4">
  <Phone className="text-green-500 w-8 h-8" />
  <div>
    <h3 className="font-semibold text-xl">WhatsApp</h3>
    <a
      href="https://wa.me/918625926777?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0AContact%20Number:%20%0APreferred%20Date:%20%0AProblem:%20"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 hover:underline"
    >
      Message on WhatsApp
    </a>
  </div>
</div>

          {/* Instagram */}
          <div className="flex items-center gap-4">
            <Instagram className="text-pink-500 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-xl">Instagram</h3>
              <a
                href="https://www.instagram.com/0516_pradnya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline"
              >
                @0516_pradnya
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="text-red-500 w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-xl">Location</h3>
              <a
                href="https://maps.app.goo.gl/nJviYWwnnTfyVx8z6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-center gap-4">
            <Clock className="text-teal-600 w-8 h-8" />
            <div>
              <h3 className="font-semibold text-xl">Clinic Hours</h3>
              <p className="text-gray-700">
                Monday – Saturday <br />
                9:00 AM – 8:00 PM
              </p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT SIDE - GOOGLE MAP */}
        {/* RIGHT SIDE - GOOGLE MAP */}
{/* RIGHT SIDE - GOOGLE MAP */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="rounded-3xl overflow-hidden shadow-2xl border border-white/40"
>
  <iframe
    src="https://www.google.com/maps?output=embed&q=Aarogya+Physiotherapy+Clinic+Islampur"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="Aarogya Physiotherapy Clinic Location"
  ></iframe>
  <div className="mt-6 text-center">
  <a
    href="https://maps.app.goo.gl/nJviYWwnnTfyVx8z6"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-6 py-3 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition"
  >
    Open in Google Maps
  </a>
</div>
</motion.div>

      </div>
    </section>
  );
}

export default Contact;