/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import author from '@/assets/about.jpg';
import { GraduationCap, Bot, Briefcase, Globe, Podcast } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";





  const businesses = [
    {
      icon: GraduationCap,
      title: "The RKY Scholarship Grants",
      subtitle: "Personally funded by Rukayat as a philanthropic act.",
      description:
        "the RKY Scholarships have supported hundreds of professionals through education and career transformation. Since 2023, she has contributed over £30,000 toward scholarships, including the £20,000 RKY Scholarship Grant 2.0 and the £10,000 Scholarship for Mums, helping individuals upskill, transition into tech, and pursue new beginnings with confidence",
      gradient: "from-amber-100 to-amber-800",
    },
    {
      icon: Bot,
      title: "The Limitless Launchpad",
      subtitle: "Empowers early-stage founders to turn their ideas into income.",
      description: "An initiative close to her heart, this £5,000 business competition empowers early-stage founders to turn their ideas into income. Winners receive 10 weeks of business coaching, marketing funding, and a spotlight at Limitless Without Borders, giving them visibility, mentorship, and the tools to scale ",
      gradient: "from-amber-100 to-slate-100",
    },
    // {
    //   icon: Briefcase,
    //   title: "RKY Business Hub",
    //   subtitle: "Supporting Founders to Start, Scale, and Succeed",
    //   description:
    //     "A business coaching and accelerator ecosystem designed for entrepreneurs and small business owners. Through programs like the Idea to-Income Accelerator and Legacy & Visibility Coaching, founders gain strategy, systems, and confidence to build thriving ventures.",
    //   cta: "Discover RKY Business Hub",
    //   gradient: "from-slate-100 to-amber-100",
    // },
    // {
    //   icon: Globe,
    //   title: "Limitless Without Borders",
    //   subtitle: "A Global Platform for Change",
    //   description:
    //     "A growing movement and annual event uniting over 1,000 professionals and founders to celebrate resilience, leadership, and entrepreneurship. Each year, it hosts the Limitless Launchpad competition, awards segment, and masterclasses on thriving through change.",
    //   cta: "Join the Movement",
    //   gradient: "from-amber-100 to-amber-100",
    // },
    // {
    //   icon: Podcast,
    //   title: "The Limitless & Thriving Podcast",
    //   subtitle: "Conversations That Inspire",
    //   description:
    //     "Honest conversations with founders, professionals, and innovators redefining what it means to thrive. Each episode explores themes of resilience, reinvention, and social sustainability, blending real world stories with actionable insights.",
    //   cta: "Listen Now",
    //   gradient: "from-amber-100 to-slate-100",
    // },
  ];

export default function ScholarshipDetailsSection() {
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  //   const { toast } = useToast();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<ContactFormData>({
  //   resolver: zodResolver(contactSchema),
  // });

  // const onSubmit = async (data: ContactFormData) => {
  //   setIsSubmitting(true);
  //   // Simulate form submission
  //   //await new Promise(resolve => setTimeout(resolve, 1000));
  //   //console.log('Form submitted:', data);
  //    try {
  //     const res = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     });

  //     if (!res.ok) throw new Error('Failed to send');

  //     toast({
  //       title: 'Message sent successfully!',
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });

  //     reset();
  //       setIsSubmitted(true);
  //   setIsSubmitting(false);
  //   } catch (error) {
  //     toast({
  //       title: 'Error sending message',
  //       description: 'Please try again later.',
  //       variant: 'destructive',
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  //   setIsSubmitted(true);
  //   setIsSubmitting(false);
  
  // };

  // if (isSubmitted) {
  //   return (
  //     <section className="py-20 bg-white text-slate-800">
  //       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
  //         <motion.div
  //           initial={{ scale: 0.9, opacity: 0 }}
  //           animate={{ scale: 1, opacity: 1 }}
  //           transition={{ duration: 0.5 }}
  //           className="text-center"
  //         >
  //           <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
  //           <h2 className="text-3xl font-bold mb-4">About Rukayat</h2>
  //           <p className="text-slate-800 mb-8">
  //             Your message has been sent successfully. Rukayat Alabi will get back to you soon.
  //           </p>
  //           <Button 
  //             onClick={() => setIsSubmitted(false)}
  //             className="bg-amber-600 text-slate-800 hover:bg-amber-500"
  //           >
  //             Send Another Message
  //           </Button>
  //         </motion.div>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-800">Impact, Creating Pathways for Others</h2>
           </motion.div>

        <div className="grid lg:grid-cols-2  gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1 aspect-square overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={author}
              alt="Rukayat Alabi"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          </motion.div>
           
               <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center space-y-4 text-gray-700 text-center lg:text-left"
              >
           <p className="text-xl text-slate-800 max-w-3xl mx-auto">
          At the heart of Rukayat’s mission is a deep commitment to creating access, opportunity, and transformation for others.
          </p>
                <p>Through her personal philanthropic initiatives, she has funded scholarships, launched programs, and created platforms that empower others to thrive, especially underrepresented professionals and aspiring founders.   </p>
  
      

              </motion.div>
        
        </div>
      <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center my-16"
        >
                 <div className="grid lg:grid-cols-1 gap-2 space-y-8 mb-8">
            {businesses.map((business, index) => (
                  <motion.div
                    key={index}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <div className={`bg-gradient-to-br ${business.gradient} p-8 md:p-12`}>
                    <div className="flex items-start gap-6">
                      <div className="bg-white p-4 rounded-2xl shadow-lg flex-shrink-0">
                        <business.icon className="text-amber-600" size={36} />
                      </div>
                      <div className="flex-1 text-start">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                          {business.title}
                        </h3>
                        <p className="text-amber-600 font-semibold text-lg mb-4">
                          {business.subtitle}
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed mb-6">
                          {business.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-600">
          Through these efforts, Rukayat continues to prove that when one person rises, entire communities are uplifted. Her vision for impact is simple:
        
          </h2>
          <p className="text-xl text-slate-800 max-w-3xl mx-auto">
         To empower others to thrive, because thriving is contagious.
           </p>
        </motion.div>
      </div>
    </section>
  );
}