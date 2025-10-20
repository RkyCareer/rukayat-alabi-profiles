'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Replace these with your actual logo images
import aws from '@/assets/logos/Artboard-1-copy-10.png';
import microsoft from '@/assets/logos/Artboard-1-copy-11.png';
import google from '@/assets/logos/Artboard-1-copy-2.png';
import oracle from '@/assets/logos/Artboard-1-copy-3.png';
import oracle2 from '@/assets/logos/Artboard-1-copy-5.png';
import oracle3 from '@/assets/logos/Artboard-1-copy-7.png';
import oracle4 from '@/assets/logos/Artboard-1-copy-8.png';
import ibm from '@/assets/logos/Artboard-1.png';
//import salesforce from '@/assets/logos/salesforce.png';

const companies = [
  { name: 'Amazon Web Services', logo: aws },
  { name: 'Microsoft', logo: microsoft },
  { name: 'Google', logo: google },
  { name: 'IBM', logo: ibm },
  { name: 'Oracle', logo: oracle },
  { name: 'Oracle2', logo: oracle2 },
  { name: 'Oracle3', logo: oracle3 },
  { name: 'Oracle4', logo: oracle4 },
  
];

export default function TrustedBySection() {
  return (
    <section className="py-4 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-600 mt-4 font-medium tracking-wide uppercase">
            Trusted by Global Leaders
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex gap-12 min-w-full"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear',
            }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0  flex items-center justify-center hover:shadow-md transition"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="object-contain"
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
