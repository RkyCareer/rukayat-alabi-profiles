'use client';

import { motion } from 'framer-motion';

// const companies = [
//   { name: 'Amazon Web Services', logo: 'AWS' },
//   { name: 'Microsoft', logo: 'MS' },
//   { name: 'Google', logo: 'GGL' },
//   { name: 'IBM', logo: 'IBM' },
//   { name: 'Oracle', logo: 'ORC' },
//   { name: 'Salesforce', logo: 'SF' },
// ];

export default function SpecialServiceSection() {
  return (
    <section className="py-10 bg-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className=" flex flex-col gap-2 sm:flex-row items-center justify-center  text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
  
              
              <span className="block text-white">Achieve career</span>
              <span className="block text-slate-800">and business</span>
              <span className="block text-white">success</span>
            </motion.h1>
        </motion.div>

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-lg p-4 w-20 h-16 flex items-center justify-center">
                <span className="text-gray-700 font-bold text-sm">
                  {company.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}