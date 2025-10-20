import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import rukayat from "@/assets/ruky.png";
import author from "@/assets/1.png";
import author2 from "@/assets/2.png";
import author3 from "@/assets/3.png";
import author4 from "@/assets/4.png";
//import eventImg from "@/assets/author.jpg";
//import podcast from "@/assets/profile.jpg";

const images = [author4, author2,author3, author ]; // ✅ add as many as you like

export default function HeroImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4s per image
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="relative aspect-[4/5] rounded-2xl overflow-hidden"
    >
      {/* All images stacked — only one visible at a time */}
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.05, // tiny zoom effect on inactive ones
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={img}
            alt={`Hero image ${i + 1}`}
            fill
            className="object-cover"
            priority={i === index}
          />
        </motion.div>
      ))}

      {/* Name Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <Image
          src={rukayat}
          alt="Rukayat Name"
          width={250}
          height={80}
          className="opacity-90"
        />
      </div>
    </motion.div>
  );
}
