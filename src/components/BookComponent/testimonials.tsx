'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Ademola Odeyemi',
    role: 'Managing Director, Optimus Bank ',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'A powerful and practical guide for anyone going through change. Rukayat’s story is proof that resilience and reinvention can coexist beautifully',
    rating: 5,
  },
  {
    name: 'Tosin A.',
    role: 'Business Strategist',
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'This book speaks to the heart of every professional and founder who has ever had to start again. Honest, strategic, and deeply inspiring.”',
    rating: 5,
  },
  {
    name: 'Chiamaka O.',
    role: 'HR Professional',
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'Reading Limitless & Thriving felt like having a personal coach guiding me through my own season of transition. It’s not just motivational , it’s transformational.”',
    rating: 5,
  },
  {
    name: 'Daniel K.',
    role: 'Entrepreneur & RKY Alumni',
    image:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content:
      'Every chapter gives you a moment of reflection and a spark of possibility. It’s a reminder that new beginnings aren’t setbacks , they’re invitations.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative flex flex-col items-center justify-center py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-200 to-amber-100 overflow-hidden">
      {/* === Animated background text carousel === */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          className="flex flex-col items-center space-y-32"
          animate={{ y: ['0%', '-100%'] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...Array(2)].map((_, i) => (
            <h1
              key={i}
              className="text-center text-[6rem] sm:text-[10rem] lg:text-[20rem] font-extrabold text-slate-50 leading-none tracking-tighter opacity-20"
              style={{
                textShadow: '2px 2px 10px rgba(0,0,0,0.05)',
              }}
            >
              RUKAYAT ALABI
            </h1>
          ))}
        </motion.div>
      </div>

      {/* === Foreground content === */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-10 sm:gap-12 lg:gap-16 items-center z-10">
        {/* Left testimonial */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <Card className="max-w-md border-0 hover:shadow-xl transition bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                {testimonials[0].content}
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonials[0].image} alt={testimonials[0].name} />
                  <AvatarFallback>
                    {testimonials[0].name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-900">{testimonials[0].name}</p>
                  <p className="text-sm text-slate-600">{testimonials[0].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Center static image */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src="/asset/book-2.png"
              alt="Book"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right testimonial */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <Card className="max-w-md border-0 hover:shadow-xl transition bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonials[1].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                {testimonials[1].content}
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={testimonials[1].image} alt={testimonials[1].name} />
                  <AvatarFallback>
                    {testimonials[1].name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-900">{testimonials[1].name}</p>
                  <p className="text-sm text-slate-600">{testimonials[1].role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
