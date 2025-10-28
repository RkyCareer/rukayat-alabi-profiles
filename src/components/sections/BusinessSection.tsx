'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import profile from '@/assets/speak.jpg';
import profile3 from '@/assets/profile-3.jpg';
import profile5 from '@/assets/profile.jpg';
import profile4 from '@/assets/about_me.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const achievements = [
  { icon: Award, label: 'Leveraging Tech for Career and Business Growth' },
  { icon: Briefcase, label: 'Future-proofing Your Career with Tech' },
  { icon: Users, label: 'The Entrepreneurial Mindset' },
  { icon: Award, label: 'From Employee to Entrepreneur' },
  { icon: Briefcase, label: 'Navigating Change & Transitions' },
  { icon: Users, label: 'Building Resilience in Career & Business' },
];

// Add your images here
const speakingImages = [
  { src: profile, alt: 'Rukayat Alabi Speaking 1' },
  { src: profile5, alt: 'Rukayat Alabi Speaking 3' },
  { src: profile3, alt: 'Rukayat Alabi Speaking 2' }, 
  { src: profile4, alt: 'Rukayat Alabi Speaking 3' },
  
];

export default function BusinessSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % speakingImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % speakingImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + speakingImages.length) % speakingImages.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ✅ Content Column */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10 order-1 lg:order-1"
          >
            <div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 text-center lg:text-left"
              >
                Speaking & Coaching
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2 text-gray-700 text-center lg:text-left"
              >
                <p>
                  As a sought-after speaker and business coach, Rukayat inspires
                  global audiences to navigate change, embrace technology, and
                  thrive in the evolving world of work and business.
                </p>
                <p>
                  She has shared stages with industry leaders at events hosted by{' '}
                  <span className="font-bold">
                    Citi, Barclays, Business Insider, the UK Black Business Show,
                  </span>{' '}
                  and more, blending storytelling, strategy, and actionable
                  insights that leave audiences motivated to act.
                </p>
              </motion.div>
            </div>

            {/* ✅ Achievements Grid (icons + label only) */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-start justify-center"
            >
                <p className='font-bold'>Signature Topics Include:</p>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center text-center my-2 gap-2 transition-shadow duration-200"
                >
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-md">
                    <achievement.icon className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-[12px] lg:text-base">
                    {achievement.label}
                  </h4>
                </motion.div>
              ))}
            </motion.div>

             <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-2 text-gray-700 text-center lg:text-left"
              >
                <p>
                 Her sessions are known for being    <span className="font-bold">transformative, relatable, and results driven, </span>
                 offering audiences practical frameworks for thriving in an ever changing world.
                </p>
              </motion.div>
                        {/* CTA Button */}
                <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="flex flex-col sm:flex-row gap-4 relative z-10"
>
  <Link 
    href="/contact"
    className="bg-slate-800 text-white hover:bg-amber-600 hover:text-slate-800 font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20"
  >
    Book Rukayat to speak
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
</motion.div>
          </motion.div>

          {/* ✅ Image Carousel Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <AnimatePresence initial={false}>
                {speakingImages.map((image, index) => (
                  index === currentImageIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-slate-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-slate-800" />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {speakingImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-8 bg-amber-500'
                        : 'w-2 bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}