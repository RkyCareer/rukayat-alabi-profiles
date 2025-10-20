'use client';

import { motion } from 'framer-motion';
//import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import rukayat from '@/assets/ruky.png';
//import author from '@/assets/book_cover.jpg';
import HeroImageCarousel from './HeroImageCarousel';
import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="bg-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 lg:py-0">
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
              
              <span className="block">LIMITLESS AND</span>
              <span className="block text-amber-600">THRIVING</span>
              {/* <span className="block italic">THRIVING</span> */}
            </motion.h1>
              <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-lg font-medium tracking-wide"
            >
          Empowering Change, Growth and Impact
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
  className="flex flex-col sm:flex-row gap-4 relative z-10" // Added z-10 here
>
  <Link 
    href="/contact"
    className="bg-amber-600 text-white hover:bg-yellow-400 font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
  >
    Book Rukky
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>

  <Link 
    href="/book"
    className="border bg-white border-white text-amber-600 bg-transparent hover:bg-white hover:text-slate-800 px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
  >
    Explore Book
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>

  <a 
    href="https://www.limitlessandthrivingpodcast.com"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-amber-600 text-white hover:bg-yellow-400 font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
  >
    Podcast
    <ArrowRight className="ml-2 h-4 w-4" />
  </a>
</motion.div>

          </motion.div>

          {/* Right Column - Image/Visual */}
         <motion.div
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="relative aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden"
>
  {/* Main Image */}
  {/* <Image
    src={author} // ✅ Replace with your actual photo
    alt="Rukayat Alabi"
    fill
    className="object-cover"
    priority
  /> */}
  <HeroImageCarousel />

  {/* Name Overlay */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
    <Image
      src={rukayat} // ✅ this should be your amber text image
      alt="Rukayat Name"
      width={250} // adjust as needed
      height={80}
      className="opacity-90"
    />
  </div>
         </motion.div>


        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-amber-600/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-amber-600/20 rounded-full" />
    </section>
  );
}