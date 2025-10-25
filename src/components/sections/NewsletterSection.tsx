'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Send, CheckCircle, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Failed to subscribe');

      toast({
        title: 'Subscription successful!',
        description: 'You’ve been added to the Limitless Community.',
      });

      setIsSuccess(true);
      setEmail('');
    } catch (error) {
        console.log(error)
      toast({
        title: 'Error subscribing',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => setIsSuccess(false);

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-br from-rose-600 via-amber-600 to-rose-600 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center px-6 sm:px-12 md:px-24"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full shadow-lg">
            <Users className="w-12 h-12" />
          </div>
        </motion.div>

        {/* Headings */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="text-xl mb-6 opacity-95 max-w-2xl mx-auto">
          Join the Limitless Community, a global network of professionals and founders
          committed to thriving through change.
        </p>
        <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
          Receive exclusive insights, event updates, and resources straight to your inbox.
        </p>

        {/* ✅ Form / Success */}
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/95 text-slate-800 border-0 h-12 text-base placeholder:text-slate-500"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-slate-800 hover:bg-slate-900 text-white h-12 px-8 group font-medium"
              >
                {isSubmitting ? (
                  'Joining...'
                ) : (
                  <>
                    <Mail className="mr-2" size={20} />
                    Join
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </form>
        ) : (
          // ✅ Success message
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 py-8"
          >
            <CheckCircle className="w-16 h-16 text-white mx-auto drop-shadow-lg" />
            <h2 className="text-2xl font-bold">Thank you for subscribing!</h2>
            <p className="text-lg opacity-90">
              You’ll start receiving our latest updates and exclusive insights soon.
            </p>
            <Button
              onClick={handleReset}
              className="bg-white text-slate-800 hover:bg-gray-200 px-8 py-3 text-lg font-medium rounded-lg"
            >
              Subscribe another email
            </Button>
          </motion.div>
        )}

        {/* Footer text */}
        {!isSuccess && (
          <p className="text-sm mt-8 opacity-80">
            Join thousands of professionals and founders on their thriving journey.
          </p>
        )}
      </motion.div>
    </section>
  );
}
