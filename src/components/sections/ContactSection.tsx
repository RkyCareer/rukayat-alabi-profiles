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

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@rukayatalabi.com',
    href: 'mailto:info@rukayatalabi.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'London, UK',
    href: '#'
  }
];

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    //await new Promise(resolve => setTimeout(resolve, 1000));
    //console.log('Form submitted:', data);
     try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({
        title: 'Message sent successfully!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
        setIsSubmitted(true);
    setIsSubmitting(false);
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
    setIsSubmitted(true);
    setIsSubmitting(false);
  
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-8">
              Your message has been sent successfully. Rukayat Alabi will get back to you soon.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-amber-600 text-slate-800 hover:bg-amber-500"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your career or business? Let&apos;s discuss how we can work 
            together to achieve extraordinary results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      {...register('name')}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-600"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-600"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-white mb-2 block">
                    Company
                  </Label>
                  <Input
                    id="company"
                    {...register('company')}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-600"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white mb-2 block">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    {...register('subject')}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-600"
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    rows={6}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-600 resize-none"
                    placeholder="Tell Joy about your goals and how she can help..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 text-slate-800 hover:bg-amber-500 font-semibold py-3"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Whether you&apos;re looking to transform your career, scale your business, 
                or bring Joy in as a keynote speaker, let&apos;s connect and explore the 
                possibilities together.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="bg-amber-600 text-slate-800 p-3 rounded-full">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

           
          </motion.div>
        </div>
      </div>
    </section>
  );
}