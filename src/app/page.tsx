import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustedBySection from '@/components/sections/TrustedBySection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import SpecialServiceSection from '@/components/sections/SpecialServiceSection';
import BusinessSection from '@/components/sections/BusinessSection';
import BookSection from '@/components/sections/BookSection';
import { PreOrderPopup } from '@/components/sections/pre-order-popup';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <AboutSection />
         <SpecialServiceSection />
        <BusinessSection />
        <BookSection />
        <ContactSection />
          <PreOrderPopup />
      </main>
      <Footer />
    </div>
  );
}
