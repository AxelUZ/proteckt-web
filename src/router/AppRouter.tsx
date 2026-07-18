import { Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyProteckt from "../components/home/WhyProteckt";
import Process from "../components/home/Process";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <WhyProteckt/>
        <Process/>
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