import { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Bone,
  HeartPulse,
  Dumbbell,
  Search,
  Footprints,
} from "lucide-react";

function Services() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const conditions = [
    { name: "Back Pain / कंबरदुखी", category: "Pain", icon: <Activity /> },
    { name: "Neck Pain / मानदुखी", category: "Pain", icon: <Activity /> },
    { name: "Knee Pain / गुडघेदुखी", category: "Pain", icon: <Activity /> },
    { name: "Shoulder Pain / खांदेदुखी", category: "Pain", icon: <Activity /> },
    { name: "Frozen Shoulder", category: "Pain", icon: <Bone /> },
    { name: "Sciatica / सायटिका", category: "Neuro", icon: <HeartPulse /> },
    { name: "Ligament Injury", category: "Injury", icon: <Dumbbell /> },
    { name: "Sports Injury / खेळातील दुखापत", category: "Injury", icon: <Dumbbell /> },
    { name: "Post-Operative Rehabilitation", category: "Rehab", icon: <Activity /> },
    { name: "Paralysis / Stroke / बेल्स पाल्सी", category: "Neuro", icon: <HeartPulse /> },
    { name: "Cervical / Spondylitis", category: "Pain", icon: <Bone /> },
    { name: "Arthritis / संधिवात", category: "Pain", icon: <Bone /> },
    { name: "Muscle Pain & Spasm", category: "Pain", icon: <Activity /> },
    {
      name: "Numbness / Tingling (हाता-पायात बधिरपणा / मुंग्या येणे)",
      category: "Neuro",
      icon: <HeartPulse />,
    },
   {
  name: "Heel Pain (टाच दुखणे)",
  category: "Pain",
  icon: <Footprints />,
},
  ];

  const filteredConditions = conditions.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="relative pt-32 pb-24 px-6">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-400/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-10">
          Conditions Treated
        </h1>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-md mx-auto">
          <Search className="absolute left-4 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search condition..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full 
            bg-white/30 backdrop-blur-lg border border-white/40 
            focus:outline-none shadow-md"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Pain", "Injury", "Neuro", "Rehab"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white/30 border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {filteredConditions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-lg border border-white/40 
              rounded-2xl shadow-xl p-6 hover:scale-105 transition duration-300"
            >
              <div className="flex items-center gap-3 mb-3 text-primary">
                {item.icon}
                <h3 className="font-semibold text-gray-800">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Appointment Button */}
        <div className="text-center mt-16">
          <a
            href="https://wa.me/918625926777?text=Hello%20Doctor,%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName:%20%0AContact%20Number:%20%0APreferred%20Date:%20%0AProblem:%20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-500 text-white 
            rounded-full shadow-xl hover:scale-105 transition"
          >
            Book Appointment on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;