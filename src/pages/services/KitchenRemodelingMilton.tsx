import { CheckCircle, ArrowRight, Phone, MapPin, Star, UtensilsCrossed, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function KitchenRemodelingMilton() {
  const services = [
    'Estate kitchen renovation',
    'Custom inset cabinetry',
    'Marble & quartzite island fabrication',
    'Sub-Zero / Wolf / Miele appliance packages',
    'Natural stone & wide-plank hardwood flooring',
    'Custom range hood & ventilation systems',
    'Built-in refrigerator integration',
    'Wine storage & cellar design',
    'Butler\'s pantry with prep sink',
    'Smart kitchen lighting & automation'
  ];

  const areasServed = [
    { name: 'Milton GA', path: '/milton' },
    { name: 'Crabapple GA', path: '/crabapple' },
    { name: 'Alpharetta GA', path: '/alpharetta' },
    { name: 'Roswell GA', path: '/roswell' },
    { name: 'Johns Creek GA', path: '/johns-creek' },
    { name: 'Woodstock GA', path: '/woodstock' },
    { name: 'Canton GA', path: '/canton' },
    { name: 'Kennesaw GA', path: '/kennesaw' }
  ];

  const faqSchema = [
    {
      question: 'How much does kitchen remodeling cost in Milton GA?',
      answer: 'Mid-range remodel $45k–$90k. Luxury estate kitchen renovation $100k–$250k+. Milton\'s estate market typically demands premium finishes. Call (678) 463-4893 for an accurate estimate.'
    },
    {
      question: 'What are popular kitchen styles for Milton estate homes?',
      answer: 'Traditional with custom inset cabinetry, transitional with marble and natural stone, and European contemporary designs are most common in Milton\'s estate communities.'
    },
    {
      question: 'How do you handle large Milton estate kitchens?',
      answer: 'We project-manage the full scope including custom cabinet makers, appliance suppliers, stone fabricators, and specialty finish contractors with one point of contact throughout.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Kitchen Remodeling Milton GA | Luxury Custom Kitchen Renovations for Estate Homes | Phoenix Construction"
        description="Luxury kitchen remodeling Milton GA for estate homes and custom properties. Custom cabinetry, marble islands, chef-grade appliances for North Fulton's most discerning homeowners. Call (678) 463-4893."
        canonical="/kitchen-remodeling-milton-ga"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Phoenix Construction',
          phone: '(678) 463-4893',
          areaServed: ['Milton, GA', 'Crabapple, GA', 'Alpharetta, GA', 'Roswell, GA', 'North Fulton County, GA'],
          serviceType: 'Kitchen Remodeling'
        }}
      />

      {/* Hero Section */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/phoenix6.jpeg" alt="Kitchen Remodeling Milton GA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kitchen Remodeling Milton GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Transform your Milton estate with a custom luxury kitchen from Phoenix Construction. Premium materials, bespoke design, and white-glove project management for North Fulton's finest homes.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro Prose */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p>
              Milton estate properties—from Crabapple and Birmingham communities to The Manor and White Columns—demand a different approach. These homeowners require white-glove service, premium material sourcing from European and domestic craftsmen, and a seamless build process. Phoenix Construction brings specialized expertise in large-scale estate kitchen renovations, managing every detail from custom cabinet makers to specialty finish contractors, always with one dedicated point of contact.
            </p>
          </div>

          {/* Star Badge Highlight */}
          <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Estate-Scale Kitchen Specialists</h3>
                <p className="text-slate-700">
                  Specialized in luxury Milton estate kitchens. Premium European and domestic material sourcing, custom inset cabinetry, sub-zero appliances, and full white-glove project management for discerning North Fulton homeowners.
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Estate Kitchen Services</h2>
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
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Phoenix?</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Estate-scale project experience</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Premium material sourcing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">White-glove build management</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Milton building code familiarity</span>
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
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Our Estate Process</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'Discovery', desc: 'Deep-dive design consultation & vision setting' },
                { step: 2, title: 'Curation', desc: 'Premium material selection & custom design' },
                { step: 3, title: 'Execution', desc: 'Expert coordination & white-glove installation' },
                { step: 4, title: 'Unveil', desc: 'Final presentation of your estate kitchen' }
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Milton & Surrounding Communities</h2>
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">The Phoenix Commitment</h3>
                <p className="text-slate-700 mb-3">
                  Licensed, insured, and dedicated to perfection. We curate premium materials from acclaimed makers, manage complex timelines seamlessly, and deliver estate kitchens worthy of the homes they grace.
                </p>
                <p className="text-slate-700">
                  Begin your estate kitchen journey: <strong>(678) 463-4893</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Blog Links */}
          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Link
              to="/blog/spring-kitchen-remodeling-alpharetta-ga"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Spring Kitchen Remodeling: Alpharetta & North Fulton</h3>
              <p className="text-slate-600 mb-4">Expert guidance for Milton and North Fulton estate kitchens, from planning to execution.</p>
              <span className="text-blue-600 font-semibold flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/blog/kitchen-bathroom-contractor-north-georgia"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Choosing the Right Kitchen Contractor in North Georgia</h3>
              <p className="text-slate-600 mb-4">Learn how to select an experienced contractor for your Milton estate kitchen renovation.</p>
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
