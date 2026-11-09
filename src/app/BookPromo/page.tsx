'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import doorCover from '@/assets/byq-door-cover.jpg';

const PREORDER_URL = 'https://selar.com/beforeyouquitthe9to5toownershiptransitionplan';

export default function BookPromo() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl bg-[#0b1530] p-6 text-white shadow-2xl sm:p-10 md:grid-cols-5"
      >
        <div className="mx-auto w-full max-w-[260px] md:col-span-2 md:max-w-xs">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
            <Image
              src={doorCover}
              alt="Before You Quit by Rukayat Alabi"
              fill
              sizes="(min-width: 768px) 320px, 70vw"
              className="object-cover object-center mix-blend-multiply"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-500">
            New book from Rukayat Alabi
          </p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase leading-none sm:text-6xl">
            Before You <span className="text-orange-500">Quit</span>
          </h2>
          <p className="mt-3 text-lg font-semibold text-slate-200">
            The 9 to 5 to Ownership Transition Plan
          </p>
          <p className="mt-4 max-w-lg text-slate-300">
            Quitting is not the plan. It is the last step of the plan. Build your way out of
            employment, one deliberate step at a time.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/before-you-quit"
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-700"
            >
              Learn more <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={PREORDER_URL}
              className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#0b1530]"
            >
              Pre-order now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
