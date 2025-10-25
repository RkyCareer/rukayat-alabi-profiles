'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const awards = [
  'Top 25 Entrepreneurs Changing the Face of Education',
  'Black British Business Awards Finalist',
  'EdTech CEO of the Year',
  'Black Tech Achievement Awards, UK – Finalist',
  'Outstanding Coach & Mentor',
  'Innovative Entrepreneur of the Year',
  'Global Recognition Award',
];

export default function TrustedBySection() {
  return (
    <section className="py-4 bg-amber-600 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
    
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm text-white mt-4 font-medium tracking-wide uppercase">
            Recognition & Media Features
          </p>
        </motion.div>

        {/* Scrolling Awards */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-12 min-w-full"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: 'linear',
            }}
          >
            {[...awards, ...awards].map((award, index) => (
              <div
                key={index}
                className="flex items-center gap-3 flex-shrink-0 whitespace-nowrap px-4 py-2"
              >
                <Trophy className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-lg font-medium text-white">
                  {award}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
