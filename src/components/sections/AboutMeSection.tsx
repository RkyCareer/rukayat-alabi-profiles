/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { motion } from 'framer-motion';
//import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {Mail } from 'lucide-react';
import Image from 'next/image';
import author from '@/assets/about.jpg';
import { GraduationCap, Bot, Briefcase, Globe, Podcast } from "lucide-react";
import { useRef } from "react";
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@rukayatalabi.com',
    href: 'mailto:info@rukayatalabi.com'
  },
  // {
  //   icon: Phone,
  //   label: 'Phone',
  //   value: '+1 (555) 123-4567',
  //   href: 'tel:+15551234567'
  // },
  // {
  //   icon: MapPin,
  //   label: 'Location',
  //   value: 'London, UK',
  //   href: '#'
  // }
];

  const businesses = [
    {
      icon: GraduationCap,
      title: "RKY Careers",
      subtitle: "Bridging the Skills & Work Experience Gap",
      description:
        "A multi award winning EdTech company helping professionals transition into high demand tech and business roles. Through hands on bootcamps in Data, Project Management, Business Analysis, and Digital Marketing, RKY Careers has empowered over 5,000 professionals across the UK.",
      cta: "Explore RKY Careers",
         href:"https://www.rkycareers.com",
      gradient: "from-amber-100 to-amber-800",
    },
    {
      icon: Bot,
      title: "Apply Buddy",
      subtitle: "Your AI Powered Job Application Assistant",
      description:
        "A job application as a service platform that simplifies the job hunt. Apply Buddy helps users apply smarter with AI job matching, CV optimization, visa sponsorship filters, and end to end application support and customer experience service at your finger tips.",
      cta: "Visit Apply Buddy",
      href:"https://www.applybuddy.co.uk",
      gradient: "from-amber-100 to-slate-100",
    },
    {
      icon: Briefcase,
      title: "RKY Business Hub",
      subtitle: "Supporting Founders to Start, Scale, and Succeed",
      description:
        "A business coaching and accelerator ecosystem designed for entrepreneurs and small business owners. Through programs like the Idea to-Income Accelerator and Legacy & Visibility Coaching, founders gain strategy, systems, and confidence to build thriving ventures.",
      cta: "Discover RKY Business Hub",
      href:"",
      gradient: "from-slate-100 to-amber-100",
    },
    {
      icon: Globe,
      title: "Limitless Without Borders",
      subtitle: "A Global Platform for Change",
      description:
        "A growing movement and annual event uniting over 1,000 professionals and founders to celebrate resilience, leadership, and entrepreneurship. Each year, it hosts the Limitless Launchpad competition, awards segment, and masterclasses on thriving through change.",
      cta: "Join the Movement",
        href:"https://www.limitlesswithoutborders.com",
      gradient: "from-amber-100 to-amber-100",
    },
    {
      icon: Podcast,
      title: "The Limitless & Thriving Podcast",
      subtitle: "Conversations That Inspire",
      description:
        "Honest conversations with founders, professionals, and innovators redefining what it means to thrive. Each episode explores themes of resilience, reinvention, and social sustainability, blending real world stories with actionable insights.",
      cta: "Listen Now",
      href:"https://www.limitlessandthrivingpodcast.com",
      gradient: "from-amber-100 to-slate-100",
    },
  ];

export default function AboutMeSection() {
    const ref = useRef(null);

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">About Rukayat</h2>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto">
            Author, Speaker, Entrepreneur, and Visionary for Change
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
             <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
               <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4 text-gray-700 text-center lg:text-left"
              >
                <p>
                Rukayat “Ruky” Alabi is a multi award winning entrepreneur, author, digital empowerment, and global voice for resilience, reinvention, and inclusive growth through technology.
   </p>
                    <p>
             She is the Founder and CEO of RKY Group, a multi brand ecosystem that empowers professionals and founders through career transformation, business growth, and community development.
                </p>
                <p>
            With over 12 years of experience across the UK and Nigerian banking industries, Rukayat transitioned from corporate finance to tech entrepreneurship, building RKY Careers. This multi award winning EdTech company has helped over 5,000 professionals transition into tech and thrive in high demand industries.

                </p>
            
                <p>
         Her work extends through initiatives like Limitless Without Borders, Apply Buddy, RKY Business Hub, and the Limitless & Thriving Podcast, all focused on helping individuals rise beyond limitations and build sustainable impact.
                </p>
                <p>
         Rukayat’s journey embodies the power of turning change into opportunity. She continues to inspire professionals and entrepreneurs to embrace reinvention, pursue purpose, and thrive without borders and without limits.
   </p>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 bg-white w-full">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-full flex  items-center justify-center gap-2 p-4 rounded-lg bg-slate-600 hover:bg-white hover:text-slate-800 transition-colors duration-200"
                >
                  <div className="bg-amber-600 text-slate-800 hover:bg-slate-800 p-3 rounded-full">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div className="text-gray-300 hover:text-slate-800">
                    <p className="font-medium">{info.label}</p>
                    <p className="text-gray-300 hover:text-slate-800">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

           
          </motion.div>
        </div>
      <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center my-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-600">
            My Businesses, The RKY Ecosystem
          </h2>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-600">
               Building Ecosystems That Empower Careers, Businesses, and Communities
        
          </h2>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto">
          Through the RKY Group, Rukayat leads a family of impact driven brands designed to help people build skills, launch businesses, and thrive in the evolving world of work.
      
           </p>
        </motion.div>

       <div className="grid lg:grid-cols-2 gap-8 items-stretch">
  {businesses.map((business, index) => (
    <motion.div
      key={index}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center flex flex-col h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
        <div className={`bg-gradient-to-br ${business.gradient} p-8 md:p-12 flex flex-col flex-1`}>
          <div className="flex items-start gap-6 flex-1">
            <div className="bg-white p-4 rounded-2xl shadow-lg flex-shrink-0">
              <business.icon className="text-amber-600" size={36} />
            </div>
            <div className="flex-1 text-start">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                {business.title}
              </h3>
              <p className="text-amber-600 font-semibold text-lg mb-4">
                {business.subtitle}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6 flex-grow">
                {business.description}
              </p>
              <Link
                href={business.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white p-4 rounded-lg hover:bg-slate-800 transition-colors duration-200 inline-block"
              >
                {business.cta}
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}