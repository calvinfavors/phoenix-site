import { CheckCircle, ArrowRight, Phone, MapPin, Star, UtensilsCrossed, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function KitchenRemodelingMarietta() {
  const services = [
    'Complete kitchen remodel Marietta GA',
    'Custom cabinet installation',
    'Quartz & granite countertops',
    'Kitchen island design & build',
    'Hardwood & tile flooring',
    'Modern appliance upgrades',
    'Under-cabinet & recessed lighting',
    'Backsplash tile installation',
    'Open-concept layout conversions',
    'Custom pantry & storage'
  ];

  const areasServed = [
    { name: 'Marietta GA', path: '/marietta' },
    { name: 'East Cobb GA', path: '/east-cobb' },
    { name: 'Smyrna GA', path: '/smyrna' },
    { name: 'Kennesaw GA', path: '/kennesaw' },
    { name: 'Acworth GA', path: '/acworth' },
    { name: 'Woodstock GA', path: '/woodstock' },
    { name: 'Canton GA', path: '/canton' },
    { name: 'Mableton GA', path: '/mableton' }
  ];

  const faqSchema = [
    {
      question: 'How much does kitchen remodeling cost in Marietta GA?',
      answer: 'Minor refresh $10k–$25k, mid-range full remodel $30k–$65k, high-end Cobb County remodel $70k–$150k+. Call (678) 463-4893 for a free estimate.'
    },
    {
      question: 'How long does a kitchen remodel take in Marietta?',
      answer: 'Minor updates 3–4 weeks. Full mid-range remodel 8–12 weeks. Gut renovation with layout changes 12–20 weeks.'
    },
    {
      question: 'Do I need permits for kitchen remodeling in Cobb County?',
      answer: 'Yes for plumbing, electrical, and structural changes. Phoenix Construction handles all Cobb County permit applications.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Kitchen Remodeling Marietta GA | Custom Cabinets, Islands & Full Kitchen Renovation | Phoenix Construction"
        description="Expert kitchen remodeling Marietta GA. Custom cabinets, quartz countertops, kitchen islands, and full gut renovations for Cobb County homes. Licensed, insured. Free estimates — call (678) 463-4893."
        canonical="/kitchen-remodeling-marietta-ga"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Phoenix Construction',
          phone: '(678) 463-4893',
          areaServed: ['Marietta, GA', 'East Cobb, GA', 'Smyrna, GA', 'Kennesaw, GA', 'Cobb County, GA'],
          serviceType: 'Kitchen Remodeling'
        }}
      />

      {/* Hero Section */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9320.JPG" alt="Kitchen Remodeling Marietta GA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kitchen Remodeling Marietta GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Transform your Cobb County kitchen with Phoenix Construction. From elegant East Cobb estates to classic Marietta Square homes, we deliver stunning kitchen renovations tailored to your vision and budget.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro Prose */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p>
              Marietta kitchens vary from 1960s galley kitchens in older neighborhoods to open-concept renovations in East Cobb. We understand both ends of the spectrum. Whether you're refreshing a historic Marietta Square home or creating a modern open-concept layout in an East Cobb estate, Phoenix Construction brings 20+ years of Metro Atlanta experience to every Cobb County kitchen remodel.
            </p>
          </div>

          {/* Star Badge Highlight */}
          <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">20+ Years of Cobb County Kitchen Remodeling</h3>
                <p className="text-slate-700">
                  Local Marietta contractor familiar with East Cobb home styles, Cobb County permit requirements, and the premium finishes Marietta homeowners expect.
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Kitchen Services</h2>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <UtensilsCrossed className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose Us + CTA */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Choose Phoenix?</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Local Marietta/Cobb County contractor</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Familiar with East Cobb home styles</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Cobb County permit expertise</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">20+ years Metro Atlanta experience</span>
                </li>
              </ul>
              <a href="tel:(678) 463-4893" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                <Phone className="w-5 h-5" />
                (678) 463-4893
              </a>
            </div>
          </div>

          {/* 4-Step Process */}
          <div className="mb-12 bg-slate-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'Consultation', desc: 'Free in-home estimate & design discussion' },
                { step: 2, title: 'Design', desc: 'Custom plans & material selection' },
                { step: 3, title: 'Build', desc: 'Expert installation & project management' },
                { step: 4, title: 'Completion', desc: 'Final walkthrough & your new kitchen' }
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-3">
                    {step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Areas Served */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Areas We Serve</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {areasServed.map((area, i) => (
                <Link
                  key={i}
                  to={area.path}
                  className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition border border-slate-200 hover:border-blue-300"
                >
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">{area.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Phoenix Guarantee */}
          <div className="mb-12 bg-blue-50 border border-blue-200 p-8 rounded-lg">
            <div className="flex gap-4 items-start">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Phoenix Guarantee</h3>
                <p className="text-slate-700 mb-3">
                  Licensed, insured, and committed to your satisfaction. We handle all Cobb County permits, manage timelines professionally, and stand behind every project with warranty protection.
                </p>
                <p className="text-slate-700">
                  Contact us for a free consultation: <strong>(678) 463-4893</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Blog Links */}
          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Link
              to="/blog/kitchen-remodeling-marietta"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Kitchen Remodeling Marietta GA: Guide & Trends</h3>
              <p className="text-slate-600 mb-4">Learn about the latest kitchen design trends and remodeling options for Marietta homes.</p>
              <span className="text-blue-600 font-semibold flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/blog/spring-kitchen-remodeling-marietta-ga"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Spring Kitchen Remodeling in Marietta</h3>
              <p className="text-slate-600 mb-4">Discover why spring is the perfect time to start your Marietta kitchen renovation project.</p>
              <span className="text-blue-600 font-semibold flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* View All Services */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
