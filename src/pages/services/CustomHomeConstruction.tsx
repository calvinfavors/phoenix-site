import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomHomeConstruction() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9354.WEBP" alt="Custom home interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Custom Home Construction
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Build your dream home from the ground up with personalized design and superior craftsmanship
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Custom Home Builder in Woodstock, GA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Building a custom home is one of the most rewarding investments you'll ever make. At Phoenix Construction, we guide you through every step of creating your dream home, from initial concept to final walkthrough.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our experienced team works closely with you to ensure your new home reflects your unique vision, lifestyle, and budget. We combine quality craftsmanship, attention to detail, and transparent communication to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services Include</h3>
              <ul className="space-y-3">
                {[
                  'Architectural design collaboration',
                  'Site evaluation and preparation',
                  'Foundation and structural framing',
                  'Custom floor plans',
                  'Complete interior finishing',
                  'Exterior work and siding',
                  'Roofing and gutters',
                  'Landscaping coordination',
                  'Energy-efficient solutions',
                  'Smart home integration',
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Build Custom?</h3>
                <ul className="space-y-3">
                  {[
                    'Complete design flexibility',
                    'Choose your ideal location',
                    'Select all materials and finishes',
                    'Maximize energy efficiency',
                    'Built for your lifestyle',
                    'Long-term value investment',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="mb-6 text-gray-300">
                  Schedule your custom home consultation today
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
