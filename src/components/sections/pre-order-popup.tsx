/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';
import author from "@/assets/1.png";

// ✅ Validation schema
const preorderSchema = z.object({
  full_name: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export function PreOrderPopup() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof preorderSchema>>({
    resolver: zodResolver(preorderSchema),
    defaultValues: { full_name: '', email: '' },
  });

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPreOrderPopup');
    if (!hasSeenPopup) {
      const timer = setTimeout(() => setIsOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit = async (values: z.infer<typeof preorderSchema>) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/pre-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Failed to send');

      toast({
        title: 'Pre order sent successfully!',
        description: "Thank you for ordering. I'll get back to you soon.",
      });

      localStorage.setItem('hasSeenPreOrderPopup', 'true');
      form.reset();
      setIsSuccess(true); // ✅ Show success message
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden rounded-2xl shadow-2xl border-0">
        <div className="flex flex-col md:flex-row">
          {/* ✅ Left side image */}
          <div className="relative md:w-1/2 h-64 md:h-auto">
            <Image
              src={author}
              alt="Book preview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30" />
          </div>

          {/* ✅ Right side content */}
          <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
            {!isSuccess ? (
              <>
                <div className="relative mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="absolute top-0 right-0"
                  >
                    <Sparkles className="h-8 w-8 text-amber-400 opacity-40" />
                  </motion.div>

                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-slate-800">
                      Limited Time Offer!
                    </DialogTitle>
                    <DialogDescription className="text-slate-600 text-base mt-1">
                      Pre-order now and get exclusive bonuses.
                    </DialogDescription>
                  </DialogHeader>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="full_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-900 text-base">Full name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Full name"
                              className="mt-2 h-12 text-base"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-900 text-base">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email"
                              className="mt-2 h-12 text-base"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    >
                      {isSubmitting ? 'Submitting...' : 'Pre-Order Now'}
                    </Button>
                  </form>
                </Form>
              </>
            ) : (
              // ✅ Success message section
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6 py-10"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h2 className="text-2xl font-bold text-slate-800">
                  Thank you for your pre-order!
                </h2>
                <p className="text-slate-600 text-base">
                  Your request has been received. I’ll reach out to you soon with more details.
                </p>
                <Button
                  onClick={resetForm}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md"
                >
                  Submit another response
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
