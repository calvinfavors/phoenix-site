import { CheckCircle, ArrowRight, Phone, MapPin, Star, Bath, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function BathroomRemodelingMilton() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Bathroom Remodeling Milton GA | Luxury Estate Bathroom Renovations | Phoenix Construction"
        description="Luxury bathroom remodeling Milton GA for estate homes and custom properties. Master bath renovations, spa showers, and premium finishes for North Fulton's most discerning homeowners. Call (678) 463-4893."
        canonical="/bathroom-remodeling-milton-ga"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Milton', url: '/milton' }, { name: 'Bathroom Remodeling Milton GA', url: '/bathroom-remodeling-milton-ga' }]}
        serviceSchema={{ name: 'Bathroom Remodeling Milton GA', description: 'Luxury bathroom remodeling services in Milton GA for estate properties including master suite renovations, custom spa bathrooms, and premium finishes throughout North Fulton.', areaServed: ['Milton, GA', 'Crabapple, GA', 'Alpharetta, GA', 'Roswell, GA', 'North Fulton County, GA'] }}
        faqSchema={[
          { question: 'How much does a luxury bathroom remodel cost in Milton GA estate homes?', answer: 'Bathroom remodeling in Milton typically ranges from $15,000–$35,000 for a mid-range master bath, $40,000–$75,000 for a full luxury remodel, and $80,000–$100,000+ for a complete primary suite transformation with premium materials. Contact Phoenix Construction at (678) 463-4893 for a free estimate.' },
          { question: 'How long does an estate bathroom remodel take?', answer: 'A standard master bath refresh takes 4–6 weeks. A full luxury remodel with custom finishes and high-end fixtures typically runs 10–14 weeks. A complete primary suite transformation can take 14–18 weeks depending on scope and custom elements.' },
          { question: 'Do I need a permit for a bathroom remodel in Milton GA?', answer: 'Yes, for any work involving new electrical circuits, plumbing re-routes, or structural changes. Estate properties often require special inspections. Phoenix Construction handles all permit applications and works with Milton building codes.' },
        ]}
      />
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9354.WEBP" alt="Bathroom remodeling Milton GA - luxury estate bathroom renovation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bathroom Remodeling Milton GA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Luxury estate bathroom remodeling for Milton's most discerning homeowners. Custom spa bathrooms, premium finishes, and white-glove service.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Luxury Estate Bathroom Remodel Milton GA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Looking for <strong>bathroom remodeling Milton GA</strong> services you can trust? Phoenix Construction is the premier <strong>bathroom remodel contractor Milton GA</strong> homeowners choose for luxury bathroom renovations on estate properties. Whether you need a complete <strong>bathroom renovation Milton GA</strong> transformation or a custom <strong>master bath Milton GA</strong> update, our experienced team delivers exceptional results with premium finishes and white-glove service.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From custom spa shower systems to freestanding soaking tubs, heated marble floors, and smart home bathroom integration, we handle every aspect of your luxury bathroom remodel. As the trusted <strong>bathroom remodel near me Milton GA</strong> solution for estate properties, we serve homeowners throughout Milton, Crabapple, and the surrounding North Fulton communities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Milton's estate properties in The Manor, White Columns, and the Crabapple equestrian communities demand premium materials and exceptional craftsmanship. Our clients expect the finest finishes and personalized service—and we deliver exactly that for every luxury master bath renovation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Star className="text-red-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Milton's Premier Estate Bathroom Remodel Contractors</h3>
                <p className="text-gray-600">With 20+ years of experience in <strong>bathroom remodeling Milton GA</strong>, we've transformed hundreds of luxury bathrooms in estate properties throughout North Fulton. Our expertise with large-scale master suites and premium finishes makes us the choice for Milton's most discerning homeowners.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Estate Luxury Services</h3>
              <ul className="space-y-3">
                {[
                  'Complete bathroom remodel Milton GA',
                  'Luxury master suite renovation',
                  'Custom spa bathroom design',
                  'Freestanding soaking tub installation',
                  'Steam shower systems',
                  'Heated marble & stone floors',
                  'Custom millwork & cabinetry',
                  'Designer plumbing fixtures',
                  'Smart home bathroom integration',
                  'Accessibility modifications for aging in place',
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
                    'Experience with Milton\'s estate-scale projects',
                    'Premium material sourcing and designer partnerships',
                    'White-glove service for discerning homeowners',
                    'Licensed, bonded, and insured',
                    'Familiar with Milton building codes',
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
                <h3 className="text-2xl font-bold mb-4">Ready for Your Estate Bathroom?</h3>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Estate Bathroom Remodeling Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'In-Home Consultation',
                  description: 'We visit your estate to discuss your luxury vision and requirements',
                },
                {
                  step: '2',
                  title: 'Premium Design',
                  description: 'Create detailed plans with designer materials and custom elements',
                },
                {
                  step: '3',
                  title: 'Expert Craftsmanship',
                  description: 'Elite craftsmen execute your custom bathroom with precision',
                },
                {
                  step: '4',
                  title: 'Final Walkthrough',
                  description: 'Personal walkthrough ensuring absolute satisfaction with details',
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
              Areas We Serve for Estate Bathroom Remodeling
            </h3>
            <p className="text-gray-600 mb-4">
              As your local premium <strong>bathroom remodel near me</strong> solution for estate homes, we serve homeowners throughout:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                'Milton, GA',
                'Crabapple, GA',
                'Alpharetta, GA',
                'Roswell, GA',
                'Johns Creek, GA',
                'Woodstock, GA',
                'Canton, GA',
                'Kennesaw, GA',
              ].map((area) => (
                <Link
                  key={area}
                  to={area === 'Milton, GA' ? '/milton' : area === 'Alpharetta, GA' ? '/alpharetta' : area === 'Roswell, GA' ? '/roswell' : '#'}
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
                <span className="text-gray-600">20+ years of luxury estate bathroom remodeling in North Fulton</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Workmanship warranty on all premium bathroom renovation projects</span>
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
              <h4 className="font-bold text-slate-900 mb-2">Bathroom Remodeling North Fulton: Real Costs & Data</h4>
              <p className="text-gray-600 text-sm mb-3">Complete guide to luxury bathroom remodel costs in Milton, Alpharetta & Roswell GA.</p>
              <span className="text-red-600 font-semibold text-sm flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            <Link
              to="/blog/master-bath-remodeling-metro-atlanta"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Master Bath Renovation Guide</h4>
              <p className="text-gray-600 text-sm mb-3">Expert tips for luxury master bath renovations and estate property bathroom design.</p>
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
