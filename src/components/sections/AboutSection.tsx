
'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
//import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';
import author from '@/assets/3.png';
import Link from 'next/link';

// ✅ Simple count-up animation
function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60); // ~60fps
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [inView, end, duration]);

  return <motion.span ref={ref}>{count}</motion.span>;
}

const achievements = [
  {
    icon: Award,
    label: 100,
    description: 'businesses coached and scaled',
  },
  {
    icon: Briefcase,
    label: 1500,
    description: 'career transformations',
  },
  {
    icon: Users,
    label: 1000,
    description: 'event attendees',
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ✅ Image Column (simplified) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 aspect-square overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={author}
              alt="Rukayat Alabi"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 text-center lg:text-left"
              >
                About Rukayat
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-700 text-center lg:text-left"
              >
                <p>
                  I am Rukayat “Ruky” Alabi, a multi-award-winning entrepreneur, 
                  career & business coach, and speaker helping professionals and 
                  founders navigate change, build resilience, and create lasting 
                  impact through strategy, technology, and social sustainability.
                </p>
              </motion.div>
            </div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <achievement.icon className="h-8 w-8 text-amber-500 mx-auto mb-3" />
                  <h4 className="font-bold text-slate-800 mb-1">
                    <CountUp end={achievement.label} />+
                  </h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex gap-4 justify-center lg:justify-start"
            >
               <Link 
                 href="/contact"
                 className="bg-amber-600 text-white hover:bg-slate-800 font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
                  >
             
                Book Rukky
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                 href="/book"
                 className="bg-white text-amber-600 hover:bg-slate-800 font-semibold px-8 py-3 rounded-md flex items-center gap-2 cursor-pointer transition-colors relative z-20" // Added z-20
                >
                Explore Book
                <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
