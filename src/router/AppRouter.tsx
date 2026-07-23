import { Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyProteckt from "../components/home/WhyProteckt";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <WhyProteckt/>
        <Process/>
        <Testimonials/>
        <FAQ/>
        <CTA/>
      </main>

      <Footer />
    </>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;