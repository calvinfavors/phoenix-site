import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <Contact />
    </>
  );
}
