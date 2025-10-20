'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import profile from '@/assets/2.png'; // ✅ ensure this path is correct
import Link from 'next/link';

const achievements = [
  { icon: Award, label: 'Speaking', description: 'Inspiring, actionable keynotes on career reinvention, leadership, and business resilience.', cta: "Invite Ruky", link:"/contact" },
  { icon: Briefcase, label: 'The Book – Limitless & Thriving', description: 'A practical and heartfelt guide to navigating change, building systems, and thriving in every new beginning.', cta: "Discover the Book" , link:"/book"},
  { icon: Users, label: 'The Podcast – Limitless & Thriving', description: 'Real conversations with professionals and founders who are building, evolving, and thriving beyond limits.', cta: "Listen Now" ,  link:"https://www.limitlessandthrivingpodcast.com/" },
];

export default function BusinessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ✅ Content Column (now on the left) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-1"
          >
            <div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 text-center lg:text-left"
              >
                About Preview
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-700 text-center lg:text-left"
              >
                <p>
                  From the banking halls of Lagos to boardrooms and global 
                  stages in London, my journey is a story of reinvention.
                </p>
                <p>
                  Through the RKY Group ecosystem — including RKY Careers, RKY 
                  Business Hub, Apply Buddy, and the Limitless Without Borders Event — 
                  I have helped over 1,500 professionals and hundreds of founders turn
                  setbacks into strategy and build thriving careers and businesses.
                </p>
              </motion.div>
            </div>

            {/* ✅ Achievements Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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

                  {/* ✅ CTA Button */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-center lg:justify-start py-4"
                  >
                    <Link
                      href={achievement.link}
                      className="flex items-center justify-center gap-2 rounded-lg bg-amber-600 text-white hover:bg-slate-700 font-semibold px-8 py-3"
                    >
                      {achievement.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ✅ Image Column (now on the right) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-2"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={profile}
                alt="Rukayat Alabi"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
