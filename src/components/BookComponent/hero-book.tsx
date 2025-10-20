'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroBook() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/asset/hero-banner.jpg')] bg-cover bg-center" />

      {/* Foreground Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            {/* ✅ MOBILE VIEW (inline AND) */}
            <div className="sm:hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                LIMITLESS{' '}
                <span className="bg-red-600 text-white px-3 py-1 rounded-md text-xl font-bold">
                  AND
                </span>{' '}
                <span className="italic text-amber-500">THRIVING</span>
              </h1>
            </div>

            {/* ✅ DESKTOP VIEW (floating AND) */}
            <div className="hidden sm:block relative">
              {/* LIMITLESS */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[130px] font-extrabold text-white tracking-tight relative z-10">
                LIMITLESS
              </h1>

              {/* AND Badge */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                <span className="bg-red-600 text-white px-6 py-2 text-2xl sm:text-3xl font-extrabold rounded-lg shadow-xl">
                  AND
                </span>
              </div>

              {/* THRIVING */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[130px] font-bold italic text-white tracking-tight relative z-10">
                THRIVING
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-50 mt-6 mb-8 font-light">
              A practical and heartfelt guide to navigating change, building systems, <br />
              and thriving in every new beginning.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all hover:scale-105"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-amber-600 hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-full transition-all hover:scale-105"
            >
              Read Excerpt
            </Button>
          </motion.div>

          {/* Availability note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-12 text-slate-50 text-lg font-medium"
          >
            <p>Available in Hardcover, Paperback & E-book</p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
