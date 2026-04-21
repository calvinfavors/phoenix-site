import { CheckCircle, ArrowRight, Phone, MapPin, Home, Shield, Tv, Wine, Dumbbell, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BasementRemodeling() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9351.WEBP" alt="Basement remodeling Woodstock GA - finished living space" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Basement Remodeling Woodstock GA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Expert basement finishing Woodstock GA and basement remodel contractors you can trust. Transform your unfinished basement into premium living space.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Basement Finishing Woodstock GA & Surrounding Areas
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Looking for <strong>basement remodeling Woodstock GA</strong> services? Phoenix Construction is the premier <strong>basement finishing Woodstock GA</strong> company that homeowners trust. Whether you need complete <strong>basement renovation Woodstock GA</strong> or you're searching for <strong>basement remodel contractors Woodstock GA</strong>, our experienced team delivers exceptional results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As the leading <strong>finished basement contractors near Woodstock GA</strong>, we transform unfinished basements into entertainment spaces, home theaters, bars, in-law suites, and more. Most Woodstock homes have 800-1,500+ square feet of untapped potential - let us help you unlock it.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <Home className="text-green-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock Your Home's Hidden Potential</h3>
                <p className="text-gray-600"><strong>Basement remodeling Woodstock GA</strong> projects cost 50-70% less per square foot than building an addition. With potential returns of 70-75% ROI, basement finishing is one of the smartest home investments you can make.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Tv className="text-red-600" size={24} />
                <h3 className="font-bold text-slate-900">Home Theater</h3>
              </div>
              <p className="text-gray-600 text-sm">Soundproofed rooms with 4K projection, Dolby Atmos, and comfortable seating for the ultimate movie experience.</p>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Wine className="text-red-600" size={24} />
                <h3 className="font-bold text-slate-900">Wet Bar & Entertainment</h3>
              </div>
              <p className="text-gray-600 text-sm">Custom bars with wine storage, beverage centers, and seating areas for hosting friends and family.</p>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Dumbbell className="text-red-600" size={24} />
                <h3 className="font-bold text-slate-900">Home Gym</h3>
              </div>
              <p className="text-gray-600 text-sm">Rubber flooring, mirrors, and proper ventilation for a workout space that rivals commercial gyms.</p>
            </div>
            <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <Gamepad2 className="text-red-600" size={24} />
                <h3 className="font-bold text-slate-900">Game Room</h3>
              </div>
              <p className="text-gray-600 text-sm">Pool tables, arcade games, and gaming setups for family fun and entertaining guests.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Basement Remodeling Services</h3>
              <ul className="space-y-3">
                {[
                  'Complete basement finishing Woodstock GA',
                  'Basement remodeling Woodstock GA',
                  'Basement renovation Woodstock GA',
                  'Waterproofing and moisture control',
                  'Framing and drywall installation',
                  'Flooring installation (LVP, carpet, tile)',
                  'Bedroom and bathroom additions',
                  'Home theater installations',
                  'HVAC system integration',
                  'Egress window installation',
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
                    'Local basement remodel contractors Woodstock GA',
                    'Free basement finishing consultation',
                    'Cherokee County code expertise',
                    'Proper waterproofing solutions',
                    'Licensed, bonded, and insured',
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
                <h3 className="text-2xl font-bold mb-4">Ready to Finish Your Basement?</h3>
                <p className="mb-6 text-gray-300">
                  Get your free basement remodeling estimate today
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Basement Finishing Process</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                {
                  step: '1',
                  title: 'Assessment',
                  description: 'Evaluate space and check for moisture issues',
                },
                {
                  step: '2',
                  title: 'Design',
                  description: 'Create custom layout optimized for your needs',
                },
                {
                  step: '3',
                  title: 'Waterproofing',
                  description: 'Address moisture and prepare the space',
                },
                {
                  step: '4',
                  title: 'Construction',
                  description: 'Framing, electrical, plumbing, and finishes',
                },
                {
                  step: '5',
                  title: 'Completion',
                  description: 'Final walkthrough and your satisfaction',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <MapPin className="text-red-600 mr-3" size={24} />
              Finished Basement Contractors Near You
            </h3>
            <p className="text-gray-600 mb-4">
              As your local <strong>finished basement contractors near Woodstock GA</strong>, we serve homeowners throughout:
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
                  to={area === 'Roswell, GA' ? '/blog/basement-remodeling-roswell-ga' : area === 'Alpharetta, GA' ? '/blog/basement-remodeling-alpharetta-ga' : area === 'Marietta, GA' ? '/blog/basement-remodeling-marietta-ga' : '#'}
                  className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
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
                <span className="text-gray-600">20+ years of basement remodeling experience in Metro Atlanta</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Workmanship warranty on all basement finishing projects</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-600">Transparent pricing with no hidden fees</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link
              to="/blog/basement-remodeling-woodstock-ga"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Basement Remodeling Woodstock GA Guide</h4>
              <p className="text-gray-600 text-sm mb-3">Complete guide to basement remodeling Woodstock GA services, costs, and ideas.</p>
              <span className="text-red-600 font-semibold text-sm flex items-center">
                Read More <ArrowRight size={16} className="ml-1" />
              </span>
            </Link>
            <Link
              to="/blog/basement-finishing-woodstock-ga"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-slate-900 mb-2">Basement Finishing Guide</h4>
              <p className="text-gray-600 text-sm mb-3">Expert basement finishing Woodstock GA and finished basement contractors near you.</p>
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
