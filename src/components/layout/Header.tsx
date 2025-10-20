'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Instagram, Linkedin, Mail } from 'lucide-react';
import { navigationItems, socialLinks } from '@/constants/navigation';

const iconMap = {
  Instagram,
  Linkedin,
  Mail,
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <div className="bg-amber-600 text-white px-3 py-2 rounded font-bold text-xl">
                RA
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:bg-amber-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-2">
              {socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white hover:text-white transition-colors duration-200"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + 0.1 * index }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-white hover:text-white focus:outline-none focus:text-amber-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:bg-amber-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 px-3">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white hover:text-amber-600 transition-colors duration-200"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}