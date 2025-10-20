'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import author from '@/assets/3.png';

export function AuthorMessage() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* === Background Faded Image === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/asset/hero-bg.png" // <-- Replace with your preferred bg
          alt="Background texture"
          fill
          className="object-cover opacity-10" // control fade with opacity
          priority
        />
        {/* Optional overlay tint for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />
      </div>

      {/* === Foreground Content === */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heart className="h-12 w-12 mx-auto mb-6 text-rose-500" />
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            A Message From The Author
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left: Author Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={author}
                  alt="Author"
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-lg">Rukayat Alabi</p>
                <p className="text-sm opacity-90">Author & Speaker</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Author Message */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 sm:p-12">
                <div className="space-y-6 text-lg leading-relaxed text-slate-700">
                  <p className="text-2xl font-semibold text-slate-900">
                    Dear Reader,
                  </p>
                  <p>
                    Change has a way of finding us when we least expect it.
                     Sometimes it looks like a setback, 
                    other times a complete redirection. For me, it was both,  several times over.
                 </p>
                  <p>
                   From switching careers and countries to building new beginnings from the ground up, I’ve learned 
                   that thriving isn’t about avoiding change; it’s about transforming through it.
                  </p>
                  <p>
                  Limitless & Thriving was born out of that truth, a heartfelt and practical 
                  guide for anyone navigating transitions, uncertainty, or reinvention. 
                  It’s more than my story; it’s a mirror for yours.
                  </p>
                  <p className="text-slate-900 font-semibold">
                    My hope is that as you turn each page, you find courage where there was doubt,
                     clarity where there was confusion, and a renewed sense of possibility, 
                    no matter what chapter of life you’re in.
                  </p>
                  <p>
                    You are not behind. You are becoming.
                  </p>

                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transition-all hover:scale-105"
                    >
                      Order Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
