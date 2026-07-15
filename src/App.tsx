import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero/>
      </main>

      <Footer />
    </>
  );
}

export default App;