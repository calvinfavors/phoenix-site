import { CheckCircle, ArrowRight, Phone, MapPin, Star, Bath, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function BathroomRemodelingRoswell() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Bathroom Remodeling Roswell GA | Luxury Master Baths, Walk-In Showers & Renovations | Phoenix Construction"
        description="Premium bathroom remodeling Roswell GA. Luxury master baths, custom showers, and full renovations for North Fulton homes. Trusted by Roswell & Sandy Springs homeowners. Call (678) 463-4893."
        canonical="/bathroom-remodeling-roswell-ga"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Roswell', url: '/roswell' }, { name: 'Bathroom Remodeling Roswell GA', url: '/bathroom-remodeling-roswell-ga' }]}
        serviceSchema={{ name: 'Bathroom Remodeling Roswell GA', description: 'Premium bathroom remodeling services in Roswell GA including luxury master bath renovation, custom spa showers, and high-end renovations throughout North Fulton County.', areaServed: ['Roswell, GA', 'Sandy Springs, GA', 'Alpharetta, GA', 'Milton, GA', 'North Fulton County, GA'] }}
        faqSchema={[
          { question: 'How much does a luxury bathroom remodel cost in Roswell GA?', answer: 'Bathroom remodeling in premium Roswell GA typically ranges from $8,000–$20,000 for a mid-range update, $25,000–$50,000 for a full luxury remodel, and $60,000–$80,000+ for a primary suite transformation with high-end finishes. Contact Phoenix Construction at (678) 463-4893 for a free estimate.' },
          { question: 'How long does a bathroom remodel take?', answer: 'A standard bathroom refresh takes 3–4 weeks. A full luxury remodel with custom tile and high-end fixtures typically runs 8–12 weeks. A master suite transformation can take 12–16 weeks depending on scope.' },
          { question: 'Do I need a permit for a bathroom remodel in North Fulton County?', answer: 'Yes, for any work involving new electrical circuits, plumbing re-routes, or structural changes. A licensed contractor handles permit applications and inspections. Phoenix Construction pulls all required North Fulton County permits.' },
        ]}
      />
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9353.WEBP" alt="Bathroom remodeling Roswell GA - luxury bathroom renovation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bathroom Remodeling Roswell GA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Premium bathroom remodel contractors Roswell GA homeowners trust. From luxury spa showers to custom master baths, we create stunning bathroom spaces.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Premium Bathroom Remodel Roswell GA & North Fulton
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Looking for <strong>bathroom remodeling Roswell GA</strong> services you can trust? Phoenix Construction is the premier <strong>bathroom remodel contractor Roswell GA</strong> homeowners choose for beautiful, high-end bathroom renovations. Whether you need a complete <strong>bathroom renovation Roswell GA</strong> transformation or a luxury <strong>master bath Roswell GA</strong> update, our experienced team delivers exceptional results with premium finishes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From custom spa shower design to freestanding tub installations and heated tile floors, we handle every aspect of your luxury bathroom remodel. As the trusted <strong>bathroom remodel near me Roswell GA</strong> solution, we serve homeowners throughout North Fulton County including Sandy Springs, Alpharetta, Milton, and Johns Creek.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether your home is near historic Canton Street in downtown Roswell or in the newer developments near Holcomb Bridge, we specialize in luxury bathroom renovations for the North Fulton premium market. Our clients expect high-end finishes, and we deliver exactly that.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Star className="text-red-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Roswell & North Fulton's Premium Bathroom Remodel Contractors</h3>
                <p className="text-gray-600">With 20+ years of experience in <strong>bathroom remodeling Roswell GA</strong>, we've transformed hundreds of luxury bathrooms throughout Metro Atlanta. Our expertise with premium materials and North Fulton's discerning homeowners makes us the choice for high-end bathroom renovations.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Luxury Bathroom Services</h3>
              <ul className="space-y-3">
                {[
                  'Complete bathroom remodel Roswell GA',
                  'Luxury master bath renovation',
                  'Custom spa shower design',
                  'Freestanding tub installation',
                  'Heated tile floors',
                  'Custom cabinetry & built-ins',
                  'Designer fixture selection',
                  'Tub to shower conversion',
                  'Guest bath updates',
                  'Accessibility modifications',
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
                    'Premium North Fulton contractor with luxury market expertise',
                    'Experience with high-end finishes and designer materials',
                    'Serving Roswell, Sandy Springs, Alpharetta & Milton',
                    'Licensed, bonded, and insured',
                    'White-glove service for discerning homeowners',
                    'Timely luxury project completion',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Luxury Bathroom?</h3>
                <p className="mb-6 text-gray-300">
                  Get your free luxury bathroom remodeling estimate today
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
                  description: 'We visit your home to discuss your luxury bathroom vision',
                },
                {
                  step: '2',
                  title: 'Premium Design',
                  description: 'Create a detailed plan with designer materials and fixtures',
                },
                {
                  step: '3',
                  title: 'Expert Construction',
                  description: 'Skilled craftsmen bring your luxury bathroom to life',
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
              Areas We Serve for Premium Bathroom Remodeling
            </h3>
            <p className="text-gray-600 mb-4">
              As your local premium <strong>bathroom remodel near me</strong> solution, we serve homeowners throughout:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Roswell, GA',
                'Sandy Springs, GA',
                'Alpharetta, GA',
                'Milton, GA',
                'Johns Creek, GA',
                'Dunwoody, GA',
                'Kennesaw, GA',
                'Woodstock, GA',
              ].map((area) => (
                <Link
                  key={area}
                  to={area === 'Roswell, GA' ? '/roswell' : area === 'Alpharetta, GA' ? '/alpharetta' : area === 'Milton, GA' ? '/milton' : '#'}
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
                <span className="text-gray-600">20+ years of premium bathroom remodeling experience in Metro Atlanta</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Workmanship warranty on all luxury bathroom renovation projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Transparent pricing with no hidden fees</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              to="/blog/bathroom-remodeling-alpharetta-milton-ga"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Bathroom Remodeling North Fulton: Costs & Data</h4>
              <p className="text-gray-600 text-sm mb-3">Complete guide to luxury bathroom remodel costs in Roswell, Alpharetta & Milton GA.</p>
              <span className="text-red-600 font-semibold text-sm flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            <Link
              to="/blog/master-bath-remodeling-metro-atlanta"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Master Bath Renovation Guide for Metro Atlanta</h4>
              <p className="text-gray-600 text-sm mb-3">Expert tips for luxury master bath renovations in premium North Fulton neighborhoods.</p>
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
