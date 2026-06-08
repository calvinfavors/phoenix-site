import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function DeckInstallation() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Deck Builders Woodstock GA | New Deck Installation, Repair & Composite Decking | Phoenix Construction"
        description="Expert deck builders in Woodstock GA. New deck construction, deck repair, composite decking, and screened porches throughout Cherokee County & Metro Atlanta. Free estimates — call (678) 463-4893."
        canonical="/deck-installation-and-repair-in-woodstock-ga"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: 'Deck Installation', url: '/deck-installation-and-repair-in-woodstock-ga' }]}
        serviceSchema={{ name: 'Deck Installation and Repair Woodstock GA', description: 'Professional deck building and repair services in Woodstock GA including new deck construction, composite decking, deck repair, and screened porches. Serving Cherokee County and Metro Atlanta.', areaServed: ['Woodstock, GA', 'Canton, GA', 'Marietta, GA', 'Roswell, GA', 'Cherokee County, GA'] }}
      />
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9319.JPG" alt="Custom deck project" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Deck Installation & Repair
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Expand your outdoor living space with beautiful, durable custom decks
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Deck Building & Repair in Woodstock, GA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A well-designed deck extends your living space outdoors and provides the perfect place for entertaining, relaxing, and enjoying the beautiful Georgia weather. Phoenix Construction specializes in creating custom decks that enhance your home's value and your outdoor lifestyle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From traditional wood decks to low-maintenance composite options, we build beautiful, structurally sound decks designed to last for years. We also provide professional repair services to restore and upgrade existing decks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services Include</h3>
              <ul className="space-y-3">
                {[
                  'Custom deck design',
                  'New deck construction',
                  'Deck repair and restoration',
                  'Railing installation',
                  'Deck staining and sealing',
                  'Structural reinforcement',
                  'Stairs and steps',
                  'Built-in seating and planters',
                  'Lighting installation',
                  'Permit procurement',
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Material Options</h3>
                <ul className="space-y-3">
                  {[
                    'Pressure-treated lumber',
                    'Cedar and redwood',
                    'Composite decking',
                    'PVC decking',
                    'Aluminum railings',
                    'Custom hardwood options',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready for a New Deck?</h3>
                <p className="mb-6 text-gray-300">
                  Get your free deck design consultation and estimate
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
