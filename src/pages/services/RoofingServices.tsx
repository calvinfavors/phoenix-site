import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function RoofingServices() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Roofing Woodstock GA | Roof Replacement, Roof Repair & Storm Damage | Phoenix Construction"
        description="Licensed roofing contractors in Woodstock GA. Roof replacement, roof repair, storm damage restoration, and free inspections throughout Cherokee County & Metro Atlanta. Call (678) 463-4893 for a free roof inspection."
        canonical="/roofing-in-woodstock-ga"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Roofing', url: '/roofing-in-woodstock-ga' }]}
        serviceSchema={{ name: 'Roofing Services Woodstock GA', description: 'Professional roof replacement, roof repair, and storm damage restoration in Woodstock GA. Free inspections, architectural and impact-resistant shingles, licensed and insured. Serving Cherokee County and Metro Atlanta.', areaServed: ['Woodstock, GA', 'Canton, GA', 'Marietta, GA', 'Roswell, GA', 'Alpharetta, GA', 'Cherokee County, GA'] }}
      />
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9316.JPG" alt="Roofing project" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Roofing Services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Protect your home with expert roofing installation, replacement, and repair services
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Roofing Services in Woodstock, GA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your roof is your home's first line of defense against the elements. At Phoenix Construction, we provide comprehensive roofing services including installations, replacements, and repairs to keep your family safe and your home protected.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you need a complete roof replacement, storm damage repair, or regular maintenance, our experienced roofing professionals deliver quality workmanship and lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services Include</h3>
              <ul className="space-y-3">
                {[
                  'Metal roofing installation',
                  'Asphalt shingle roofing',
                  'Complete roof replacement',
                  'Storm damage repair',
                  'Roof inspections',
                  'Leak detection and repair',
                  'Gutter installation and repair',
                  'Ventilation system upgrades',
                  'Soffit and fascia repair',
                  'Emergency roof repairs',
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Roofing Options</h3>
                <ul className="space-y-3">
                  {[
                    'Metal roofing systems',
                    'Architectural shingles',
                    '3-tab asphalt shingles',
                    'Impact-resistant materials',
                    'Energy-efficient options',
                    'Custom color selections',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Roofing Service?</h3>
                <p className="mb-6 text-gray-300">
                  Get your free roofing inspection and estimate
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
