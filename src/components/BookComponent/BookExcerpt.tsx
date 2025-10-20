'use client';

import { useRef, useState } from 'react';
import HTMLFlipBook, { type HTMLFlipBookType } from 'react-pageflip';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BookExcerpt() {
  const bookRef = useRef<HTMLFlipBookType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const nextPage = () => bookRef.current?.pageFlip().flipNext();
  const prevPage = () => bookRef.current?.pageFlip().flipPrev();

  const handleCoverClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      nextPage();
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-100 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8 sm:mb-10 text-center"
      >
        Read an Excerpt
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{
          scale: isOpen ? 1.05 : 1,
          transition: { duration: 0.6 },
        }}
        className="relative flex items-center justify-center w-full"
      >
        <div className="flex items-center justify-center w-[90vw] max-w-[600px]">
          <HTMLFlipBook
            ref={bookRef}
            width={400}
            height={550}
            size="stretch"
            minWidth={250}
            maxWidth={600}
            minHeight={350}
            maxHeight={800}
            drawShadow
            flippingTime={1000}
            usePortrait={false}
            showCover
            mobileScrollSupport
            className="rounded-xl overflow-hidden bg-[#f8f5f0] mx-auto shadow-xl"
          >
            {/* FRONT COVER */}
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={handleCoverClick}
              data-density="hard"
            >
              <Image
                src="/excerpts/hero-bg.png"
                alt="Book Cover"
                fill
                className="object-cover rounded-xl"
                priority
              />
              {!isOpen && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold tracking-wide">
                    Click to Open
                  </p>
                </div>
              )}
            </div>

            {/* INSIDE PAGES */}
            {[1, 2, 3].map((num) => (
              <div key={num} className="relative w-full h-full">
                <Image
                  src={`/excerpts/${num}.png`}
                  alt={`Excerpt Page ${num}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
              </div>
            ))}

            {/* BACK COVER */}
            <div className="relative w-full h-full" data-density="hard">
              <Image
                src="/excerpts/hero-bg.png"
                alt="Back Cover"
                fill
                className="object-cover"
              />
            </div>
          </HTMLFlipBook>
        </div>

        {/* NAVIGATION BUTTONS */}
        {isOpen && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-3 sm:-left-12 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-amber-500 transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextPage}
              className="absolute right-3 sm:-right-12 top-1/2 transform -translate-y-1/2 bg-amber-600 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-amber-500 transition"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}
      </motion.div>

      {/* DOWNLOAD BUTTON */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-10 text-center"
      >
        <a
          href="/files/Limitless_Excerpt.pdf"
          download="Limitless_Excerpt.pdf"
          className="bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-500 transition"
        >
          Download Excerpt
        </a>
      </motion.div>
    </section>
  );
}
