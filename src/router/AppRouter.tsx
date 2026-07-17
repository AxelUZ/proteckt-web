import { Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";

function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
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