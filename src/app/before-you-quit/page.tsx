'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Anton, Syne } from 'next/font/google';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Check, Gift } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const anton = Anton({ weight: '400', subsets: ['latin'] }); // matches the condensed cover title
const syne = Syne({ weight: ['500', '700', '800'], subsets: ['latin'] }); // matches the wide cover subtitle

/* -------------------------------------------------------------------------- */
/*  EDIT THESE FIRST                                                          */
/* -------------------------------------------------------------------------- */
const PREORDER_URL = '#'; // paste your retailer link
const RELEASE_DATE = 'Nov 5th 2026';
const FORMATS = 'Hardcover and E-book';
const BONUS_DEADLINE = 'Nov 30th 2026';
const BONUS_TIMING = '11:59 PM';
const DISCOUNT = '15%';

// Which cover design the whole page uses: 'door' (orange suit) or 'pen' (white wave)
const COVER: 'door' | 'pen' = 'door';

// Her portrait for the author section. Save it in /public/asset/
const AUTHOR_IMAGE = '/asset/rukayat-portrait.jpg';

// Add two or three advance reader quotes and the section appears automatically
const PRAISE: { quote: string; name: string; role: string }[] = [];

const COVERS = {
  door: {
    standalone: '/assets/byq-door-cover.jpg',
    spread: '/assets/byq-door-spread.jpg',
  },
  pen: {
    standalone: '/assets/byq-pen-cover.jpg',
    spread: '/assets/byq-pen-spread.jpg',
  },
};
/* -------------------------------------------------------------------------- */

const NAVY = 'bg-[#0b1530]';

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PreorderButton({
  label = 'Pre-order now',
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      href={PREORDER_URL}
      className={`${syne.className} inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-lg transition-colors duration-200 ${
        light
          ? 'bg-white text-[#0b1530] hover:bg-orange-100'
          : 'bg-orange-600 text-white hover:bg-orange-700'
      }`}
    >
      {label}
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}

// Crops the 3D mockup (white studio background) so the book fills the frame
function CoverShot({ className = '' }: { className?: string }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-white ${className}`}>
      <Image
        src={COVERS[COVER].standalone}
        alt="Before You Quit by Rukayat Alabi, book cover"
        fill
        priority
        sizes="(min-width: 1024px) 480px, 90vw"
        className="object-cover object-center mix-blend-multiply"
      />
    </div>
  );
}

const outcomes = [
  {
    title: 'Assess your readiness honestly',
    text: 'Look at your finances, your skills and your emotional readiness before you set a date.',
  },
  {
    title: 'Turn expertise into income',
    text: 'Build income streams from what you already know, alongside your job.',
  },
  {
    title: 'Create stability before you leave',
    text: 'Use assets such as digital products and property to build a foundation that does not depend on a payslip.',
  },
  {
    title: 'Plan your exit with a timeline',
    text: 'Replace a leap of faith with clear milestones and a date you can trust.',
  },
];

const bonuses = [
  {
    title: 'The Ownership Readiness Workbook',
    text: 'A printable companion to the 12-question Ownership Readiness Quiz, so you can track your progress as you read.',
  },
  {
    title: 'Live launch session with Ruky',
    text: 'An online session on building your transition plan, with time for questions.',
  },
  {
    title: `${DISCOUNT} off 9 to 5 to Ownership coaching`,
    text: 'An exclusive discount for pre-order readers ready for hands-on support.',
  },
  {
    title: 'Signed bookplate',
    text: 'A personally signed bookplate for your copy.',
  },
];

const faqs = [
  { q: 'When does the book come out?', a: `${RELEASE_DATE}. Pre-orders are delivered on release day.` },
  {
    q: 'Who is this book for?',
    a: 'Employed professionals who want to build a business or independent income, and want to leave their job with a plan rather than a gamble.',
  },
  {
    q: 'Do I need a business idea already?',
    a: 'No. The book helps you identify what you can build from the skills and experience you already have.',
  },
  {
    q: 'Do I need to read Limitless & Thriving first?',
    a: 'No. Each book stands on its own. Together, they take you from mindset to method.',
  },
  { q: 'Which formats are available?', a: `${FORMATS}.` },
  {
    q: 'How do I claim my pre-order bonuses?',
    a: `Submit your order number through the form on this page before ${BONUS_DEADLINE}.`,
  },
  {
    q: 'Can I order copies for my team or community?',
    a: 'Yes. For bulk orders or to book Ruky to speak, get in touch.',
  },
];

export default function BeforeYouQuitPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [claimSent, setClaimSent] = useState(false);
  const [quizSent, setQuizSent] = useState(false);

  // Connect these two handlers to your email tool or an API route
  const handleClaim = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClaimSent(true);
  };
  const handleQuiz = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuizSent(true);
  };

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/30';
  const display = `${anton.className} uppercase leading-[0.95] tracking-tight`;

  return (
    <main className="bg-white text-slate-800">
      {/* 1. HERO (light, so the white studio mockup blends in) */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-4 lg:px-8 lg:pb-20 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className={`${syne.className} text-xs font-bold uppercase tracking-[0.3em] text-orange-600 sm:text-sm`}>
              New book from Rukayat Alabi
            </p>
            <h1 className={`${display} mt-5 text-[4.5rem] text-[#0b1530] sm:text-8xl lg:text-[8rem]`}>
              Before
              <br />
              You <span className="text-orange-600">Quit</span>
            </h1>
            <p className={`${syne.className} mt-6 text-xl font-bold text-[#0b1530] sm:text-2xl`}>
              The <span className="text-orange-600">9 to 5</span> to{' '}
              <span className="text-orange-600">Ownership</span> Transition Plan
            </p>
            <p className="mt-4 max-w-md text-lg text-slate-600">
              Build your way out of employment, one deliberate step at a time.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PreorderButton />
              <a
                href="#quiz"
                className={`${syne.className} rounded-full border-2 border-[#0b1530] px-8 py-[14px] text-sm font-bold uppercase tracking-wider text-[#0b1530] transition-colors hover:bg-[#0b1530] hover:text-white`}
              >
                Take the quiz
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Available in {FORMATS}. Releasing {RELEASE_DATE}.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-xl"
          >
            <CoverShot />
          </motion.div>
        </div>
      </section>

      {/* 2. WHO IT'S FOR */}
      <section className={`${NAVY} relative overflow-hidden text-white`}>
        <span
          aria-hidden
          className={`${anton.className} pointer-events-none absolute -right-6 -top-10 select-none text-[22rem] leading-none text-white/[0.04]`}
        >
          ?
        </span>
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <h2 className={`${display} text-5xl sm:text-7xl`}>
              Have you been quietly <span className="text-orange-500">planning your exit?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-8 text-lg leading-relaxed text-slate-300 md:grid-cols-2">
            <p>
              Maybe you have a business idea that keeps you up at night. Maybe you have a side
              income that is starting to grow. Or maybe you simply know your job is no longer
              where your future lives.
            </p>
            <p>
              If you are a high-achieving professional who wants ownership of your time, your
              work and your income, but you are not willing to gamble everything on a leap of
              faith, this book was written for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. THE IDEA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal className="text-center">
          <p className={`${syne.className} text-xs font-bold uppercase tracking-[0.3em] text-orange-600`}>
            The idea
          </p>
          <h2 className={`${display} mx-auto mt-4 max-w-4xl text-5xl text-[#0b1530] sm:text-7xl`}>
            Quitting is not the plan. It is the{' '}
            <span className="text-orange-600">last step</span> of the plan.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 grid max-w-4xl gap-8 text-lg leading-relaxed text-slate-600 md:grid-cols-2">
          <p>
            Most advice about leaving your job starts at the exit. Hand in your notice, trust
            yourself, figure it out on the other side. For many people, that leap ends in
            pressure, debt and a quick return to employment.
          </p>
          <p>
            Before You Quit starts much earlier. It shows you how to build income, assets and
            confidence while your salary still pays the bills, so that when you do leave, it is a
            decision, not a jump.
          </p>
        </Reveal>

        {/* The path: quit is the final step */}
        <Reveal delay={0.15} className="mx-auto mt-14 max-w-4xl">
          <div className="relative flex items-start justify-between">
            <div className="absolute left-0 right-0 top-[14px] h-0.5 bg-slate-200" />
            {['Assess', 'Build', 'Stabilise', 'Quit'].map((step, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center gap-3">
                <span
                  className={`h-7 w-7 rounded-full border-4 border-white ${
                    i === 3 ? 'bg-orange-600 ring-2 ring-orange-600' : 'bg-[#0b1530]'
                  }`}
                />
                <span
                  className={`${syne.className} text-xs font-bold uppercase tracking-widest sm:text-sm ${
                    i === 3 ? 'text-orange-600' : 'text-[#0b1530]'
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 4. WHAT YOU'LL LEARN */}
      <section className="bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <h2 className={`${display} text-5xl text-[#0b1530] sm:text-6xl`}>
              Inside the book, you will learn how to:
            </h2>
          </Reveal>
          <div className="mt-12 border-t-2 border-[#0b1530]">
            {outcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.06}>
                <div className="grid items-baseline gap-4 border-b border-slate-300 py-8 md:grid-cols-12">
                  <span className={`${anton.className} text-5xl text-orange-600 md:col-span-2 md:text-6xl`}>
                    0{i + 1}
                  </span>
                  <h3 className={`${syne.className} text-xl font-extrabold text-[#0b1530] md:col-span-4 md:text-2xl`}>
                    {o.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-600 md:col-span-6">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE BOOK (full cover spread) */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal className="overflow-hidden rounded-3xl bg-[#d8d8d8]">
          <Image
            src={COVERS[COVER].spread}
            alt="Before You Quit full cover, front and back"
            width={2000}
            height={1333}
            sizes="(min-width: 1280px) 1200px, 95vw"
            className="h-auto w-full"
          />
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl text-center">
          <h2 className={`${display} text-4xl text-[#0b1530] sm:text-6xl`}>
            What if the smartest way to leave your job is to start <span className="text-orange-600">building</span>?
          </h2>
          <div className="mt-8 space-y-5 text-left text-lg leading-relaxed text-slate-600">
            <p>
              Many professionals dream of working for themselves, but the usual advice tells them
              to take a bold leap and figure it out later. In Before You Quit: The 9 to 5 to
              Ownership Transition Plan, Rukayat Alabi offers a different path.
            </p>
            <p>
              Drawing on twelve years in international banking, and her own move from full-time
              employment to running a multi-brand enterprise, she shows how to build income,
              skills and confidence while your salary still pays the bills. You will learn how to
              assess your readiness honestly, turn your expertise into income streams, build
              assets that create stability, and plan your exit with a clear timeline instead of a
              leap of faith.
            </p>
            <p>
              A companion to Limitless & Thriving, this book moves from mindset to method. It is
              for the ambitious professional who wants ownership of their time, work and future,
              and wants a plan that respects the risks as much as the rewards.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 6. MESSAGE FROM THE AUTHOR */}
      <section className={`${NAVY} text-white`}>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-5 lg:px-8">
          <Reveal className="mx-auto w-full max-w-xs lg:col-span-2 lg:max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-orange-600">
              <Image
                src={AUTHOR_IMAGE}
                alt="Rukayat Alabi"
                fill
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover object-top"
              />
            </div>
            <p className={`${syne.className} mt-5 text-center text-xl font-extrabold`}>Rukayat “Ruky” Alabi</p>
            <p className="mt-2 text-center text-sm leading-relaxed text-slate-400">
              Multi-award-winning entrepreneur, author and speaker, and Founder and CEO of RKY
              Group. After twelve years in international banking, she built her businesses and
              passive income before leaving full-time employment, and has since helped more than
              5,000 professionals transform their careers.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <h2 className={`${display} text-5xl sm:text-6xl`}>
              A message from <span className="text-orange-500">Ruky</span>
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-300">
              <p>Dear Reader,</p>
              <p>
                For twelve years, I built a career in international banking. I was good at my
                job, and for a long time I thought that was the whole story.
              </p>
              <p>
                What changed everything was not a dramatic resignation. It was a season of
                leave, when I had space to grow the businesses I had been building on the side.
                By the time I walked away from full-time employment, I already had income from
                investment properties and digital products waiting on the other side.
              </p>
              <p>
                That is the journey I want for you. Not a leap, but a bridge you build plank by
                plank.
              </p>
              <p>
                Before You Quit is the plan I wish I had been handed years ago. Take your time
                with it. Your future is worth building properly.
              </p>
              <p className={`${syne.className} font-bold text-white`}>With love, Ruky</p>
            </div>
            <div className="mt-8">
              <PreorderButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. PRE-ORDER BONUSES */}
      <section className="bg-stone-100">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-orange-600/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700`}>
              <Gift className="h-4 w-4" /> Limited time offer
            </span>
            <h2 className={`${display} mt-5 text-5xl text-[#0b1530] sm:text-6xl`}>
              Pre-order and get more than the book
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Pre-order before {RELEASE_DATE} and receive these bonuses as a thank you.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {bonuses.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className={`${syne.className} text-lg font-extrabold text-[#0b1530]`}>{b.title}</h3>
                    <p className="mt-2 text-slate-600">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className={`${NAVY} mx-auto mt-14 max-w-xl rounded-3xl p-8 text-white shadow-2xl sm:p-10`}>
            <h3 className={`${display} text-4xl`}>How to claim</h3>
            <p className="mt-3 text-slate-300">
              Pre-order from your preferred retailer, then submit your order number below. Your
              bonuses will arrive by email {BONUS_TIMING}.
            </p>
            {claimSent ? (
              <p className="mt-6 rounded-lg bg-green-500/15 p-4 font-medium text-green-300">
                Thank you. We have your order number and your bonuses are on the way.
              </p>
            ) : (
              <form onSubmit={handleClaim} className="mt-6 space-y-4">
                <input className={inputClass} type="text" placeholder="Full name" required />
                <input className={inputClass} type="email" placeholder="Email address" required />
                <input className={inputClass} type="text" placeholder="Order number" required />
                <button
                  type="submit"
                  className={`${syne.className} w-full rounded-full bg-orange-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-700`}
                >
                  Claim my bonuses
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* 8. QUIZ */}
      <section id="quiz" className="bg-orange-600 text-[#0b1530]">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24">
          <Reveal>
            <h2 className={`${display} text-5xl sm:text-7xl`}>Not sure if you are ready?</h2>
            <p className="mt-5 text-lg font-medium text-[#0b1530]/80">
              Take the free 12-question Ownership Readiness Quiz and find out where you stand
              today, and what to focus on next.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            {quizSent ? (
              <p className="mt-8 rounded-lg bg-white p-4 font-semibold text-green-700">
                You are in. Check your inbox for the quiz link.
              </p>
            ) : (
              <form onSubmit={handleQuiz} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input className={inputClass} type="email" placeholder="Your email address" required />
                <button
                  type="submit"
                  className={`${syne.className} shrink-0 rounded-full bg-[#0b1530] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-black`}
                >
                  Take the quiz
                </button>
              </form>
            )}
            <p className="mt-4 text-sm text-[#0b1530]/80">
              You will also receive Limitless Moves, my newsletter on building a career and
              business on your own terms. Unsubscribe anytime.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. EARLY PRAISE (shows only when PRAISE has entries) */}
      {PRAISE.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <Reveal>
            <h2 className={`${display} text-center text-5xl text-[#0b1530] sm:text-6xl`}>
              What early readers are saying
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PRAISE.map((p) => (
              <Reveal key={p.name}>
                <blockquote className="h-full rounded-2xl border border-slate-200 bg-stone-50 p-8">
                  <p className="text-lg leading-relaxed text-slate-700">“{p.quote}”</p>
                  <footer className="mt-6">
                    <p className={`${syne.className} font-extrabold text-[#0b1530]`}>{p.name}</p>
                    <p className="text-sm text-slate-500">{p.role}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 10. COMPANION BOOK */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-10 rounded-3xl bg-stone-100 p-8 sm:p-12 lg:grid-cols-5">
            <div className="mx-auto w-44 lg:col-span-2 lg:w-60">
              <Image
                src="/asset/book-2.png"
                alt="Limitless and Thriving book cover"
                width={400}
                height={560}
                className="h-auto w-full rounded-md shadow-2xl"
              />
            </div>
            <div className="lg:col-span-3">
              <p className={`${syne.className} text-xs font-bold uppercase tracking-[0.3em] text-orange-600`}>
                Companion book
              </p>
              <h2 className={`${display} mt-3 text-4xl text-[#0b1530] sm:text-6xl`}>
                Start with Limitless & Thriving
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Before You Quit is the companion to Limitless & Thriving, my guide to thriving
                through change, setbacks and new beginnings. If Limitless & Thriving helps you
                find the courage to change, Before You Quit gives you the plan to do it.
              </p>
              <Link
                href="/book"
                className={`${syne.className} mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1530] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-orange-600`}
              >
                Explore Limitless & Thriving <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 11. FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 md:pb-28">
        <Reveal>
          <h2 className={`${display} text-center text-5xl text-[#0b1530] sm:text-6xl`}>
            Frequently asked questions
          </h2>
        </Reveal>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className={`${syne.className} flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-[#0b1530] hover:text-orange-600`}
                >
                  {f.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-orange-600 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 leading-relaxed text-slate-600">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-slate-600">
          For bulk orders or speaking enquiries,{' '}
          <Link href="/contact" className="font-semibold text-orange-700 underline">
            get in touch
          </Link>
          .
        </p>
      </section>

      {/* 12. CLOSING CALL */}
      <section className={`${NAVY} text-white`}>
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-2">
          <Reveal>
            <h2 className={`${display} text-5xl sm:text-7xl`}>
              Your exit deserves <span className="text-orange-500">a plan.</span>
            </h2>
            <p className={`${syne.className} mt-5 text-xl font-bold text-slate-300`}>
              Start building yours today.
            </p>
            <div className="mt-9">
              <PreorderButton label="Pre-order Before You Quit" light />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto w-full max-w-xs">
            <CoverShot className="rounded-3xl shadow-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Sticky mobile pre-order bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href={PREORDER_URL}
          className={`${syne.className} block rounded-full bg-orange-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-white`}
        >
          Pre-order
        </a>
      </div>
      <div className="h-16 md:hidden" />
    </main>
  );
}
