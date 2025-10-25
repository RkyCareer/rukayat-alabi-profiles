'use client';

import { motion } from 'framer-motion';
//import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
//import rukayat from '@/assets/ruky.png';
//import author from '@/assets/1.png';
import author2 from '@/assets/hero-3.png';
//import HeroImageCarousel from './HeroImageCarousel';
import Link from 'next/link';


export default function HeroSection() {
  return (
    // <section className="bg-amber-600 text-white relative overflow-hidden">
    <section className="bg-gradient-to-br from-rose-600 via-amber-600 to-amber-600 text-white rounded-lg shadow-lg relative overflow-hidden">

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
            {/* Small tagline */}     

            {/* Main heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              {/* <div className="flex items-start justify-start">

           <Image src={rukayat} width={200} height={30} alt="name" />
              </div> */}
              
              <span className="block">Rukayat Alabi</span>
              {/* <span className="block text-slate-600">THRIVING</span> */}
              {/* <span className="block italic">THRIVING</span> */}
            </motion.h1>
              <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg font-medium tracking-wide"
            >
           Author, Speaker, Entrepreneur, and Visionary for Change
            </motion.p>
             {/* <Image
          src="/asset/hero-bg.png" // <-- Replace with your preferred bg
          alt="Background texture"
          fill
          className="object-cover opacity-10" // control fade with opacity
          priority
        /> */}

            {/* Description */}
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2 text-lg text-gray-300"
            >
              <p className="font-semibold">Empowering Change,</p>
              <p className="font-semibold">Growth, </p>
              <p className="font-semibold">and Impact</p>
            </motion.div> */}

            {/* CTA Button */}
                <motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.7 }}
  className="flex flex-col sm:flex-row gap-4 relative z-10"
>
  <Link 
    href="/contact"
    className="bg-slate-800 text-white hover:bg-amber-600 hover:text-slate-800 font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
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


  {/* <a 
    href="https://www.limitlessandthrivingpodcast.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-slate-800 hover:bg-slate-800 hover:text-white font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
  >
    Podcast
    <ArrowRight className="ml-2 h-4 w-4" />
  </a> */}
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