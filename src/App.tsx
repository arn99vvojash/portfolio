import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Works from './components/Works';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Grain from './components/Grain';

function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f0f0f0] selection:bg-[#f0f0f0] selection:text-[#0d0d0d]">
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Works />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
