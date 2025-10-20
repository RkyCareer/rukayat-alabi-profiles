import { AuthorMessage } from "@/components/BookComponent/author-message";
import { Bonuses } from "@/components/BookComponent/bonuses";
import BookExcerpt from "@/components/BookComponent/BookExcerpt";
import { Contact } from "@/components/BookComponent/contact";
//import { Excerpt } from "@/components/BookComponent/excerpt";
import { FAQ } from "@/components/BookComponent/faq";
import { HeroBook } from "@/components/BookComponent/hero-book";
import { Testimonials } from "@/components/BookComponent/testimonials";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";



export default function Book() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* <Hero /> */}
      <main>
        <HeroBook />
      <Testimonials />
      <AuthorMessage />
      {/* <Excerpt /> */}
      <BookExcerpt />
      <Bonuses />
      <Contact />
      <FAQ />
      </main>
      <Footer />
      {/* <Toaster />
        <PreOrderPopup /> */}
    </main>
  );
}