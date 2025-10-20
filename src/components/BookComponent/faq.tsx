'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What inspired you to write Limitless & Thriving?',
    answer: 'I wanted to create a book that speaks to anyone facing transitions,  career changes, relocation, business reinvention, or personal setbacks. After experiencing these myself, I realized many people struggle silently through change. This book offers both empathy and strategy for navigating new beginnings with confidence',
  },
  {
    question: 'Who is this book for?',
    answer: 'It’s for professionals, entrepreneurs, and anyone rebuilding, reinventing, or rediscovering themselves. Whether you’re starting over, feeling stuck, or seeking clarity in your next chapter,  this book is your companion for that journey.',
  },
  {
    question: 'What makes Limitless & Thriving different from other motivational books?',
    answer: 'It’s a blend of real-life storytelling and practical guidance. I share my personal journey alongside frameworks, reflection questions, and action steps that readers can apply immediately. It’s not just about inspiration,  it’s about transformation.',
  },
  {
    question: 'How can I get a copy of the book?',
    answer: 'You can pre-order directly through this website or via Amazon and major retailers. Early supporters also receive exclusive pre-order bonuses such as discounted access to workshops and masterclasses on thriving and business growth.',
  },
  {
    question: 'Will there be events or book signings?',
    answer: 'Yes!  Details about upcoming speaking events, masterclasses, and media appearances will be updated here regularly.',
  },
  {
    question: 'How can I invite Rukayat to speak or collaborate?',
    answer: 'You can reach out through the Contact section on this website. Or through Rukayat.alabi@rkycareers.com.  I’m open to speaking engagements, collaborations, podcast features, and partnerships aligned with resilience, career transformation, Breaking into Tech, Leveraging Tech,  business growth, and social sustainability.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HelpCircle className="h-12 w-12 mx-auto mb-6 text-amber-600" />
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600">
            Find answers to common questions about the book
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-slate-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
