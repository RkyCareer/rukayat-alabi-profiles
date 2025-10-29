'use client';

import Image from 'next/image';
import Link from 'next/link';
import scholarship from '@/assets/scholarship_image.png';

export default function ScholarshipSection() {
  return (
    <section className="relative flex items-center justify-center w-full h-[300px] sm:h-[400px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={scholarship}
        alt="Scholarship"
      width={1250}
      height={550}
      />

      {/* Overlay Button */}
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        <Link
          href="/scholarship"
              className="
            bg-amber-600 text-white hover:bg-slate-800 font-semibold
            px-4 py-2 text-sm
            sm:px-6 sm:py-3 sm:text-base
            lg:px-10 lg:py-4 lg:text-lg
            rounded-lg shadow-lg transition-all duration-300 flex items-center gap-2
          "    >
          Learn more
        </Link>
      </div>
    </section>
  );
}
