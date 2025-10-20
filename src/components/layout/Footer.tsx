'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { navigationItems, socialLinks } from '@/constants/navigation';

const iconMap = {
  Instagram,
  Linkedin,
  Mail,
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center mb-4">
              <div className="bg-amber-600 text-slate-800 px-3 py-2 rounded font-bold text-xl mr-3">
                RA
              </div>
              <span className="text-xl font-bold">Rukayat Alabi</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering professionals to achieve career and business success through 
              expert coaching, strategic guidance, and transformational leadership.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-amber-600 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a 
    href="https://www.rkycareers.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-amber-600 transition-colors duration-200">
                 RKY Careers
                </a>
              </li>
              <li>
                                <a 
    href="https://www.applybuddy.co.uk"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-amber-600 transition-colors duration-200">
                  Apply Buddy
                </a>
              </li>
              <li>
               <a 
                  href="https://www.limitlessandthrivingpodcast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors duration-200">
               Limitless and Thriving Podcast
                </a>
              </li>
              <li>
             <a 
                  href="https://www.limitlesswithoutborders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 transition-colors duration-200">
              
               Limitless Without Borders
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Rukayat Alabi Consulting. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-amber-600 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-amber-600 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}