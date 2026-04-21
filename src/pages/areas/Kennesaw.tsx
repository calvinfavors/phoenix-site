import { MapPin, Phone, Home } from 'lucide-react';

export default function Kennesaw() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Services in Kennesaw, GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional construction and remodeling services for Kennesaw homeowners
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Trusted Kennesaw Contractor
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Phoenix Construction proudly serves Kennesaw, Georgia with comprehensive construction and remodeling services. Our team is familiar with the diverse housing styles in Kennesaw, from historic homes near Kennesaw Mountain to modern residences in newer developments.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We bring the same commitment to quality craftsmanship and customer service to every Kennesaw project, whether it's a kitchen remodel, bathroom renovation, or custom home construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="text-red-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services in Kennesaw</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kitchen Remodeling</li>
                <li>• Bathroom Renovations</li>
                <li>• Basement Finishing</li>
                <li>• Custom Home Construction</li>
                <li>• Roofing Services</li>
                <li>• Deck Installation</li>
                <li>• Home Additions</li>
                <li>• Complete Renovations</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Kennesaw Advantage</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Experienced with local building codes</li>
                <li>✓ Quick response throughout Kennesaw</li>
                <li>✓ Knowledge of area neighborhoods</li>
                <li>✓ Licensed and fully insured</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Free project estimates</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Kennesaw Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact us today for expert construction services in Kennesaw
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
