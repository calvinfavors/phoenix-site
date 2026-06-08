import { MapPin, Phone, Home } from 'lucide-react';
import SEO from '../../components/SEO';

export default function Atlanta() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Contractor Atlanta GA | Kitchen Remodeling, Bathroom Renovations & Home Remodeling | Phoenix Construction"
        description="Phoenix Construction provides expert kitchen remodeling, bathroom renovations, basement finishing, and custom home construction throughout Atlanta GA and Metro Atlanta. Call (678) 463-4893."
        canonical="/atlanta"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Atlanta', url: '/atlanta' }]}
        localBusiness={{ cityName: 'Atlanta', citySlug: 'atlanta', services: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Basement Finishing', 'Custom Home Construction', 'Roofing', 'Deck Installation'], latitude: 33.749, longitude: -84.388 }}
      />
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Services in Atlanta, GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Premier construction and remodeling services for Atlanta homeowners
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Atlanta's Trusted Construction Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Phoenix Construction brings our commitment to excellence to the greater Atlanta area. From Buckhead to Midtown, from historic neighborhoods to modern developments, we understand the diverse architectural styles and homeowner needs across the city.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team has extensive experience working in Atlanta's established neighborhoods, navigating city permits, and delivering results that enhance both the beauty and value of your home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="text-red-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services in Atlanta</h3>
              <ul className="space-y-2 text-gray-700">
                <li>* Kitchen Remodeling</li>
                <li>* Bathroom Renovations</li>
                <li>* Basement Finishing</li>
                <li>* Custom Home Construction</li>
                <li>* Roofing Services</li>
                <li>* Deck Installation</li>
                <li>* Historic Home Restoration</li>
                <li>* Complete Home Remodeling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Atlanta Advantage</h3>
              <ul className="space-y-3 text-gray-700">
                <li>* Experience with Atlanta building codes</li>
                <li>* Knowledge of historic district requirements</li>
                <li>* Serving all Atlanta neighborhoods</li>
                <li>* Licensed and fully insured</li>
                <li>* Competitive metro Atlanta pricing</li>
                <li>* Free project consultations</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Atlanta Areas We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <div>* Buckhead</div>
              <div>* Midtown</div>
              <div>* Virginia Highland</div>
              <div>* Inman Park</div>
              <div>* Decatur</div>
              <div>* Sandy Springs</div>
              <div>* Brookhaven</div>
              <div>* Dunwoody</div>
              <div>* All Metro Atlanta</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Atlanta Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact Phoenix Construction today for expert service in Atlanta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6784634893"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Call (678) 463-4893
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
