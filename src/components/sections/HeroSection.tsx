'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import author2 from '@/assets/hero_banner.png';
import Link from 'next/link';


export default function HeroSection() {
  return (
      <section className="bg-gradient-to-br from-slate-800 to-slate-800 text-white rounded-lg shadow-lg relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-0 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-3 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >

            {/* Main heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
                         
              <span className="block">Rukayat Alabi</span>
            </motion.h1>
              <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg font-medium tracking-wide"
            >
           Author, Speaker, Entrepreneur, and Visionary for Change
            </motion.p>
          {/* CTA Button */}
                <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="flex flex-col sm:flex-row gap-4 relative z-10"
>
  <Link 
    href="/contact"
    className="bg-amber-600 text-white hover:bg-slate-800 hover:text-white font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
  >
    Engage Rukayat
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>

  <Link 
    href="/book"
    className="border bg-white border-white text-amber-600 bg-transparent hover:bg-white hover:text-slate-800 px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
  >
    Explore Book
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>

</motion.div>
    <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-xs font-medium tracking-wide"
            >
           Featured in Forbes, The Guardian, Business Insider, Arise TV, and more.
            </motion.p>

          </motion.div>

  {/* Main Image */}
  <Image
    src={author2} 
    alt="Rukayat Alabi"
    className="object-cover"
    width={600}
    height={600}
  />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-amber-600/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-amber-600/20 rounded-full" />
    </section>
  );
}