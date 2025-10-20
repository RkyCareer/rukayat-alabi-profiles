'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gift, FileText, Video, Headphones, ArrowRight } from 'lucide-react';

const bonuses = [
  {
    icon: FileText,
    title:'Personalized Signed Copy of Limitless & Thriving',
    subtitle: 'A keepsake that inspires.',
    description:
      'Receive an exclusive signed copy of Limitless & Thriving — personally autographed by Rukayat Alabi. Each signed edition is a reminder to keep believing, evolving, and thriving through every season of change.',
  },
  {
    icon: Video,
    title: 'Exclusive Mini Guide: “10 Business & Career Trends to Thrive in 2026”',
    subtitle:'Stay ahead of the curve',
    description:
      'Discover the top emerging trends shaping the future of work and entrepreneurship. This powerful digital guide will help you position yourself for success, adapt early, and make smart moves in 2026',
  },
  {
    icon: Headphones,
    title: '20% Off Ticket to Limitless Without Borders 2026',
    subtitle:'Be part of something extraordinary.',
    description:
      'Join over 1,000+ visionaries, professionals, and founders for the next Limitless Without Borders event — the global gathering for growth and impact. Your pre-order gives you early access plus 20% off your 2026 ticket.',
  },
  {
    icon: Gift,
    title: 'Free Pass: “Thriving Masterclass 2026”',
    subtitle:'Learn. Evolve. Thrive.',
    description:
      'Gain exclusive access to Rukayat Alabi’s Thriving Masterclass 2026 — a live session on navigating change, building resilience, and designing a limitless life and career. Perfect for anyone ready to grow in 2026.',
  },
  {
    icon: Gift,
    title: 'Instant Access to the RKY Limitless Tribe',
    subtitle:'Join a community that grows with you.',
    description:
      'Connect with ambitious professionals and founders who are committed to thriving. Get access to ongoing insights, live sessions, and opportunities within the RKY Limitless Tribe private community.',
  },
  {
    icon: Gift,
    title: '5% Off the “Idea to Income Accelerator (2026 Cohorts)”',
    subtitle:'Turn your ideas into income.',
    description:
      'Enjoy an exclusive 5% discount on Rukayat’s signature Idea to Income Accelerator — the 10-week business coaching program designed to help you launch and scale your business in the UK with clarity, confidence, and systems.',
  },
];

export function Bonuses() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('/asset/book-2.png')] bg-cover bg-center opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-amber-50/90" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="h-4 w-4" />
            Limited Time Offer
          </div>
          <h2 className="text-4xl sm:text-2xl font-bold text-slate-900 mb-4">
            Get Your Pre-Order Bonuses
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            Exclusive when you pre-order before launch day!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white/90 backdrop-blur-md">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-amber-100 rounded-lg">
                        <Icon className="h-8 w-8 text-amber-700" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {bonus.title}
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {bonus.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 border-0 shadow-2xl">
            <CardContent className="p-8">
              <p className="text-white text-lg mb-4">
                Pre-order today and claim all bonuses instantly
              </p>
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-slate-100 px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
              >
                Claim Your Bonuses Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
