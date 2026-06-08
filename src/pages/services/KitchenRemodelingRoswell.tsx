import { CheckCircle, ArrowRight, Phone, MapPin, Star, UtensilsCrossed, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function KitchenRemodelingRoswell() {
  const services = [
    'Complete luxury kitchen remodel',
    'Custom inset cabinetry',
    'Waterfall quartz & marble islands',
    'Chef-grade appliance packages',
    'Hardwood & stone flooring',
    'Custom range hood design',
    'Wine storage & beverage centers',
    'Under-cabinet lighting systems',
    'Butler\'s pantry design',
    'Open-concept conversions'
  ];

  const areasServed = [
    { name: 'Roswell GA', path: '/roswell' },
    { name: 'Sandy Springs GA', path: '/sandy-springs' },
    { name: 'Alpharetta GA', path: '/alpharetta' },
    { name: 'Milton GA', path: '/milton' },
    { name: 'Johns Creek GA', path: '/johns-creek' },
    { name: 'Dunwoody GA', path: '/dunwoody' },
    { name: 'Woodstock GA', path: '/woodstock' },
    { name: 'Marietta GA', path: '/marietta' }
  ];

  const faqSchema = [
    {
      question: 'How much does kitchen remodeling cost in Roswell GA?',
      answer: 'Mid-range remodel $35k–$75k, high-end North Fulton remodel $80k–$180k+. North Fulton homes command premium finishes that add value. Call (678) 463-4893.'
    },
    {
      question: 'What kitchen styles are popular in Roswell homes?',
      answer: 'Transitional (clean lines with warm materials), modern farmhouse, and classic white cabinet designs are most requested by Roswell and Sandy Springs homeowners.'
    },
    {
      question: 'How long does a kitchen remodel take in Roswell?',
      answer: 'Mid-range 8–12 weeks. Full luxury remodel with custom cabinets 14–22 weeks depending on lead times.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Kitchen Remodeling Roswell GA | Custom Luxury Kitchen Renovations for North Fulton | Phoenix Construction"
        description="Premium kitchen remodeling Roswell GA. Luxury custom cabinets, waterfall islands, chef-grade appliances for North Fulton homes. Serving Roswell, Sandy Springs & Alpharetta. Call (678) 463-4893."
        canonical="/kitchen-remodeling-roswell-ga"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Phoenix Construction',
          phone: '(678) 463-4893',
          areaServed: ['Roswell, GA', 'Sandy Springs, GA', 'Alpharetta, GA', 'Milton, GA', 'North Fulton County, GA'],
          serviceType: 'Kitchen Remodeling'
        }}
      />

      {/* Hero Section */}
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/phoecon4.jpeg" alt="Kitchen Remodeling Roswell GA" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Kitchen Remodeling Roswell GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Elevate your North Fulton home with a luxury kitchen from Phoenix Construction. Premium custom cabinetry, marble islands, and chef-grade finishes tailored to Roswell's distinguished aesthetic.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro Prose */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p>
              Roswell and North Fulton represent a premium market where kitchens are centerpieces of luxury homes. From Canton Street's historic estates to newer developments near Holcomb Bridge and Nesbit Ferry, Roswell homeowners expect premium material selections and meticulous attention to detail. Phoenix Construction specializes in translating your vision into a stunning kitchen that adds genuine value to your North Fulton property.
            </p>
          </div>

          {/* Star Badge Highlight */}
          <div className="mb-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">North Fulton Luxury Kitchen Specialists</h3>
                <p className="text-slate-700">
                  Serving Roswell, Sandy Springs, and Alpharetta with premium material sourcing, custom inset cabinetry, and expert project management for North Fulton's most discerning homeowners.
                </p>
              </div>
            </div>
          </div>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Luxury Kitchen Services</h2>
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
                  <span className="text-slate-700">North Fulton luxury experience</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Premium material sourcing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Serving Roswell, Sandy Springs & Alpharetta</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">Familiar with Fulton County permits</span>
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
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Our Luxury Process</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'Consultation', desc: 'In-depth design meeting & material exploration' },
                { step: 2, title: 'Design', desc: 'Custom renderings & premium material selection' },
                { step: 3, title: 'Build', desc: 'White-glove installation & project coordination' },
                { step: 4, title: 'Completion', desc: 'Final inspection & your luxury kitchen ready' }
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
            <h2 className="text-3xl font-bold mb-6 text-slate-900">North Fulton Service Area</h2>
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
                  Licensed, insured, and fully committed to exceeding expectations. We source premium materials from trusted suppliers, manage timelines with precision, and deliver kitchens that inspire for decades.
                </p>
                <p className="text-slate-700">
                  Schedule your luxury kitchen consultation: <strong>(678) 463-4893</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Blog Links */}
          <div className="mb-12 grid md:grid-cols-2 gap-6">
            <Link
              to="/blog/kitchen-remodeling-roswell"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Kitchen Remodeling in Roswell GA Guide</h3>
              <p className="text-slate-600 mb-4">Explore premium kitchen design trends and luxury renovation options for North Fulton homes.</p>
              <span className="text-blue-600 font-semibold flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/blog/spring-kitchen-remodeling-alpharetta-ga"
              className="p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">Spring Kitchen Remodeling: North Fulton Edition</h3>
              <p className="text-slate-600 mb-4">Discover timing, trends, and expert tips for your Roswell area kitchen remodel this spring.</p>
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
