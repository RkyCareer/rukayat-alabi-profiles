'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

export function Excerpt() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <BookOpen className="h-16 w-16 mx-auto mb-6 text-amber-500" />
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Excerpt from Chapter 1 
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            “When Life Changes the Plan”
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8 sm:p-12">
              <div className="relative">
                <div className="absolute -left-4 -top-4 text-8xl text-amber-500 opacity-20 font-serif">
                  
                </div>
                <div className="relative space-y-6 text-lg leading-relaxed text-slate-200">
                  <p>
                   I once imagined a straight path to success, one degree, one job, one future. 
                   But life, in its unpredictable way, rewrote my story.
                      </p>
                  <p>
                    What was meant to be a simple gap year became a defining moment. 
                    A delay that introduced me to accounting instead of law,
                     a redirection that would later connect me to the world of finance, tech, and entrepreneurship.  
                  </p>
                  <p>
                  Looking back, I realize the power of that shift. 
                  Every disappointment carried direction. 
                  Every change was an invitation to grow.
                   </p>
                   <p>
                    We often think thriving means having everything figured out. 
                    But sometimes, thriving begins with surrender,  
                    with allowing life’s detours to reveal new destinations.
                   </p>
                     <p className="font-semibold">
                    Change didn’t derail my plan; it refined it.
                   </p>
                   <p>
                    And maybe, just maybe, your change is doing the same.
                   </p>
                </div>
                <div className="absolute -right-4 -bottom-4 text-8xl text-amber-500 opacity-20 font-serif">
                  <BookOpen />
                </div>
              </div>

              <div className="mt-12 flex justify-center">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
                >
                  Download Full Sample Chapter
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
