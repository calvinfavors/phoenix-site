import { CheckCircle, ArrowRight, Phone, MapPin, Star, Bath, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function BathroomRemodeling() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Bathroom Remodeling Woodstock GA | Walk-In Showers, Vanities & Full Renovations | Phoenix Construction"
        description="Expert bathroom remodeling contractors in Woodstock GA. Walk-in showers, tub-to-shower conversions, vanity installation, custom tile, and full gut renovations. Serving Cherokee County & Metro Atlanta. Free estimates — call (678) 463-4893."
        canonical="/bathroom-remodeling-in-woodstock-ga"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Bathroom Remodeling', url: '/bathroom-remodeling-in-woodstock-ga' }]}
        serviceSchema={{ name: 'Bathroom Remodeling Woodstock GA', description: 'Complete bathroom remodeling services in Woodstock GA including master bath renovation, shower remodel, tub to shower conversion, vanity installation, and custom tile work throughout Cherokee County and Metro Atlanta.', areaServed: ['Woodstock, GA', 'Canton, GA', 'Marietta, GA', 'Roswell, GA', 'Milton, GA', 'Alpharetta, GA', 'Cherokee County, GA'] }}
        faqSchema={[
          { question: 'How much does a bathroom remodel cost in Woodstock GA?', answer: 'Bathroom remodeling in Woodstock GA typically ranges from $5,000–$12,000 for a cosmetic refresh, $15,000–$32,000 for a full mid-range remodel, and $35,000–$75,000+ for a primary suite transformation. Contact Phoenix Construction at (678) 463-4893 for a free in-home estimate.' },
          { question: 'How long does a bathroom remodel take?', answer: 'A cosmetic refresh takes 2–3 weeks. A full gut remodel of a standard bathroom runs 4–6 weeks. A master bath renovation with custom tile and layout changes typically takes 8–12 weeks.' },
          { question: 'Do I need a permit for a bathroom remodel in Cherokee County?', answer: 'Yes, for any work involving new electrical circuits, plumbing re-routes, or structural changes. A licensed contractor handles permit applications and inspections. Phoenix Construction pulls all required Cherokee County permits.' },
        ]}
      />
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9352.WEBP" alt="Bathroom remodeling Woodstock GA - luxury bathroom renovation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bathroom Remodeling Woodstock GA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Expert bathroom remodel contractors Woodstock GA homeowners trust. From shower remodel to tub to shower conversion, we transform your bathroom into a luxurious retreat.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Expert Bathroom Remodel Woodstock GA & Surrounding Areas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Looking for <strong>bathroom remodeling Woodstock GA</strong> services you can trust? Phoenix Construction is the premier <strong>bathroom remodel contractor Woodstock GA</strong> homeowners choose for beautiful, functional bathroom renovations. Whether you need a complete <strong>bathroom renovation Woodstock GA</strong> transformation or a targeted <strong>shower remodel Woodstock GA</strong> update, our experienced team delivers exceptional results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From <strong>tub to shower conversion Woodstock GA</strong> projects to luxury master bath renovations, we handle every aspect of your bathroom remodel. As the trusted <strong>bathroom remodel near me Woodstock GA</strong> solution, we serve homeowners throughout Cherokee County including Canton, Holly Springs, and Ball Ground.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Star className="text-red-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Woodstock's Trusted Bathroom Remodel Contractors</h3>
                <p className="text-gray-600">With 20+ years of experience in <strong>bathroom remodeling Woodstock GA</strong>, we've transformed hundreds of bathrooms throughout Metro Atlanta. Our local expertise means we understand the unique needs of Cherokee County homes.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Bathroom Remodeling Services</h3>
              <ul className="space-y-3">
                {[
                  'Complete bathroom remodel Woodstock GA',
                  'Shower remodel Woodstock GA',
                  'Tub to shower conversion Woodstock GA',
                  'Master bath renovation',
                  'Walk-in shower installations',
                  'Custom tile work and flooring',
                  'Modern vanity and sink installation',
                  'Custom cabinetry and storage solutions',
                  'Accessibility modifications',
                  'Heated flooring options',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Phoenix Construction?</h3>
                <ul className="space-y-3">
                  {[
                    'Local bathroom remodel contractors Woodstock GA',
                    'Free bathroom remodel consultation',
                    'Licensed, bonded, and insured',
                    'Quality materials and fixtures',
                    'Timely project completion',
                    'Workmanship warranty',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Bathroom Remodel?</h3>
                <p className="mb-6 text-gray-300">
                  Get your free bathroom remodeling estimate today
                </p>
                <a
                  href="tel:6784634893"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone size={20} className="mr-2" />
                  Call (678) 463-4893
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Bathroom Remodeling Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  description: 'We visit your home to discuss your bathroom remodel vision',
                },
                {
                  step: '2',
                  title: 'Custom Design',
                  description: 'Create a detailed plan with material and fixture selections',
                },
                {
                  step: '3',
                  title: 'Expert Construction',
                  description: 'Skilled craftsmen bring your bathroom renovation to life',
                },
                {
                  step: '4',
                  title: 'Final Walkthrough',
                  description: 'We ensure your complete satisfaction with every detail',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <MapPin className="text-red-600 mr-3" size={24} />
              Areas We Serve for Bathroom Remodeling
            </h3>
            <p className="text-gray-600 mb-4">
              As your local <strong>bathroom remodel near me</strong> solution, we serve homeowners throughout:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Woodstock, GA',
                'Canton, GA',
                'Holly Springs, GA',
                'Ball Ground, GA',
                'Roswell, GA',
                'Alpharetta, GA',
                'Marietta, GA',
                'Kennesaw, GA',
              ].map((area) => (
                <Link
                  key={area}
                  to={area === 'Woodstock, GA' ? '/woodstock' : area === 'Canton, GA' ? '/blog/bathroom-remodeling-canton-ga' : area === 'Roswell, GA' ? '/roswell' : area === 'Alpharetta, GA' ? '/alpharetta' : area === 'Marietta, GA' ? '/marietta' : area === 'Kennesaw, GA' ? '/kennesaw' : '#'}
                  className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Bath className="text-red-600 mr-2 flex-shrink-0" size={16} />
                  <span>{area}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="text-red-600 mr-3" size={24} />
              The Phoenix Construction Guarantee
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Licensed, bonded, and insured for your protection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">20+ years of bathroom remodeling experience in Metro Atlanta</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Workmanship warranty on all bathroom renovation projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Transparent pricing with no hidden fees</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              to="/blog/bathroom-remodeling-woodstock-ga"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Bathroom Remodeling Woodstock GA Guide</h4>
              <p className="text-gray-600 text-sm mb-3">Complete guide to bathroom remodel Woodstock GA services, costs, and trends.</p>
              <span className="text-red-600 font-semibold text-sm flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            <Link
              to="/blog/shower-remodel-woodstock-ga"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Shower Remodel & Tub Conversion</h4>
              <p className="text-gray-600 text-sm mb-3">Expert shower remodel Woodstock GA and tub to shower conversion services.</p>
              <span className="text-red-600 font-semibold text-sm flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              <ArrowRight className="mr-2 rotate-180" size={20} />
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
