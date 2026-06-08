import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Phoenix Construction | General Contractor Woodstock GA | Kitchen, Bathroom & Home Remodeling"
        description="Phoenix Construction — Woodstock GA's top-rated licensed general contractor for kitchen remodeling, bathroom renovations, basement finishing, custom home construction, roofing & deck building. Serving Cherokee County & Metro Atlanta. Free estimates — call (678) 463-4893."
        canonical="/"
        breadcrumbs={[{ name: 'Home', url: '/' }]}
        localBusiness={{
          cityName: 'Woodstock',
          citySlug: '',
          services: [
            'Kitchen Remodeling',
            'Bathroom Remodeling',
            'Basement Finishing',
            'Custom Home Construction',
            'Roofing',
            'Deck Installation',
          ],
          latitude: 34.1015,
          longitude: -84.5194,
        }}
        faqSchema={[
          {
            question: 'What does Phoenix Construction specialize in?',
            answer: 'Phoenix Construction is a licensed general contractor in Woodstock GA specializing in kitchen remodeling, bathroom renovations, basement finishing, custom home construction, roofing, and deck installation throughout Cherokee County and Metro Atlanta.',
          },
          {
            question: 'What areas does Phoenix Construction serve?',
            answer: 'Phoenix Construction serves Woodstock, Canton, Marietta, Roswell, Milton, Alpharetta, Kennesaw, Smyrna, and all of Cherokee County, Cobb County, and North Fulton County in Metro Atlanta, Georgia.',
          },
          {
            question: 'How do I get a free estimate from Phoenix Construction?',
            answer: 'Call (678) 463-4893 or fill out the contact form at phoenixconstructionwoodstock.com/contact. We offer free in-home consultations and detailed written estimates for all projects.',
          },
        ]}
      />
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
