/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import author from '@/assets/about.jpg';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export function PreOrderPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

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

  const onSubmit = () => {
    setIsSubmitting(true);
    router.push(
      'https://docs.google.com/forms/d/e/1FAIpQLScMk6mBvhtLgbolu21Mbf6kSH-8F9tGAV2GKhpuPXm5INh8kw/viewform'
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl p-0 overflow-hidden rounded-2xl shadow-2xl border-0">
        <div className="flex flex-col md:flex-row">

          {/* LEFT */}
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

          {/* RIGHT */}
          <div className="flex-1 bg-white p-8 md:p-10 flex flex-col justify-center">
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
                  Stay Connected
                </DialogTitle>
                <DialogDescription className="text-slate-600 text-base mt-1">
                  Join the Limitless Community, a global network of professionals
                  and founders committed to thriving through change.
                </DialogDescription>
              </DialogHeader>
            </div>

            <Button
              onClick={onSubmit}
              disabled={isSubmitting}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? 'Joining...' : 'Join the Limitless Tribe!'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
