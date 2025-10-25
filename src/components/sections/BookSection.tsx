'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import book from '@/assets/book.png';
import podcast from '@/assets/podcast.png';
import limitless from '@/assets/about_me.png';

const featuredItems = [
  {
    title: 'My Book — Limitless & Thriving',
    description:
      'A heartfelt and practical guide for professionals and founders navigating change and new beginnings. Rediscover purpose, build confidence, and create your next chapter...',
    image: book,
    cta: {
      text: 'Explore Book',
      href: '/book',
      style: 'bg-slate-800 text-white hover:bg-amber-700',
    },
  },
  {
    title: 'The Limitless & Thriving Podcast',
    description:
      'Honest conversations with founders, professionals, and innovators redefining what it means to thrive. Tune in for stories of resilience, reinvention, and social impact.',
    image: podcast,
    cta: {
      text: 'Listen Now',
      href: 'https://www.limitlessandthrivingpodcast.com',
      style: 'bg-amber-600 text-white hover:bg-slate-800',
      external: true,
    },
  },
  {
    title: 'Limitless Without Borders Event',
    description:
      'A global movement uniting 1,000+ professionals, founders, and changemakers each year to celebrate resilience, community, and transformation.',
    image: limitless,
    cta: {
      text: 'Join the Movement',
      href: '/events',
      style: 'bg-slate-800 text-white hover:bg-amber-700',
    },
  },
];

export default function BookSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore projects and platforms built to inspire resilience, purpose, and growth.
          </p>
        </motion.div>

        {/* 3-column layout */}
        <div className="grid md:grid-cols-3 gap-12">
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center border-t border-b border-gray-200 py-10 px-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <div className="relative w-full h-80 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

             
              <p className="text-start text-gray-700 mb-6">{item.description}</p>

              {item.cta.external ? (
                <a
                  href={item.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.cta.style} font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors`}
                >
                  {item.cta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <Link
                  href={item.cta.href}
                  className={`${item.cta.style} font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-colors`}
                >
                  {item.cta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
