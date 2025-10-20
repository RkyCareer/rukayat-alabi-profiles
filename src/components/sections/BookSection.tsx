'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import book from '@/assets/book.png'; // ✅ Ensure this file exists (e.g., src/assets/book.png)
import Link from 'next/link';

const achievements = [
  {
    icon: Award,
    label: 'Award-winning',
    description: 'Sales Performance Coach',
  },
  {
    icon: Briefcase,
    label: '16+ Years',
    description: 'International Career',
  },
  {
    icon: Users,
    label: 'Keynote',
    description: 'Speaker & Leader',
  },
];

export default function BookSection() {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid with 2 columns on desktop */}
          
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ✅ LEFT COLUMN — Content */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1 shadow-2xl p-8 rounded-2xl"
          >
            
            <div>
             
             <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className=" flex flex-col py-4 gap-2 sm:flex-row items-start justify-start  text-2xl sm:text-4xl font-bold leading-tight"
            >
  
              
              <span className="block">LIMITLESS</span>
              <span className="block text-amber-600">AND</span>
              <span className="block ">THRIVING</span>
            </motion.h1>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-700 text-center lg:text-left"
              >
               
                <p>
                  With a passion for driving innovation and unlocking potential,
                  Rukayat helps professionals and organizations achieve extraordinary
                  results through strategic guidance and transformational leadership.
                </p>
              </motion.div>
            </div>

            {/* ✅ Achievements Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <achievement.icon className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h4 className="font-bold text-slate-800 mb-1">{achievement.label}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* ✅ CTA Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <Link 
                href="/book"
                className="flex items-center justify-center bg-slate-800 text-white hover:bg-amber-700 rounded-lg font-semibold px-8 py-3"
              >
                Explore Book
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ✅ RIGHT COLUMN — Image with animation */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
            className="relative w-full h-[700px] rounded-2xl overflow-hidden order-1 lg:order-2"
          >
            {/* Main Image */}
            <Image
              src={book}
              alt="Rukayat Alabi"
              fill
              className="object-cover"
              priority
            />

          
          </motion.div>

        </div>
      </div>
    </section>
  );
}
