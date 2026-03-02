import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import img1 from "../assets/temp1.jpeg";
import img2 from "../assets/temp2.jpeg";
import img3 from "../assets/temp3.jpeg";
import img4 from "../assets/temp4.jpeg";
import img5 from "../assets/temp5.jpeg";
import video1 from "../assets/temp6.mp4";

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  const galleryItems = [
    { type: "image", src: img1 },
    { type: "image", src: img2 },
    { type: "image", src: img3 },
    { type: "image", src: img4 },
    { type: "image", src: img5 },
    { type: "video", src: video1 },
  ];

  return (
    <section className="min-h-screen pt-32 px-12 pb-20 bg-gradient-to-br from-blue-50 to-teal-50">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-primary">
          Our Gallery
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Glimpse of our clinic and treatments
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cursor-pointer overflow-hidden rounded-3xl shadow-xl 
            border border-white/40 bg-white/30 backdrop-blur-lg"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[400px] object-contain bg-white transition duration-500"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-[400px] object-contain bg-black"
                muted
              />
            )}
          </motion.div>
        ))}

      </div>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt="Full View"
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Gallery;