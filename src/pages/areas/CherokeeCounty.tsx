import { MapPin, Phone, Home } from 'lucide-react';

export default function CherokeeCounty() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Services in Cherokee County, GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted local contractor serving all of Cherokee County and surrounding communities
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Cherokee County's Premier Construction Company
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Phoenix Construction proudly serves all of Cherokee County, Georgia. From Woodstock to Canton, Ball Ground to Holly Springs, we bring exceptional craftsmanship and reliable service to homeowners throughout the county. Our team understands the unique character of Cherokee County communities and delivers quality construction that enhances both the beauty and value of your home.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you're in a lakeside property near Lake Allatoona, a historic home in Canton, or a newer subdivision in Woodstock, our experienced team has the local knowledge and expertise to handle any project with care and precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="text-red-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services in Cherokee County</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Kitchen Remodeling</li>
                <li>Bathroom Renovations</li>
                <li>Basement Finishing</li>
                <li>Custom Home Construction</li>
                <li>Roofing Services</li>
                <li>Deck Installation & Repair</li>
                <li>Home Additions</li>
                <li>Complete Home Remodeling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us in Cherokee County?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Based in Woodstock - central to all Cherokee County</li>
                <li>Familiar with local building codes and permits</li>
                <li>Fast response times throughout the county</li>
                <li>Strong reputation in the community</li>
                <li>Licensed and insured in Georgia</li>
                <li>Free estimates for Cherokee County residents</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Cherokee County Communities We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <div>Woodstock</div>
              <div>Canton</div>
              <div>Ball Ground</div>
              <div>Holly Springs</div>
              <div>Waleska</div>
              <div>Nelson</div>
              <div>Free Home</div>
              <div>Lake Allatoona Area</div>
              <div>All Cherokee County</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Cherokee County Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Contact Phoenix Construction today for a free consultation and estimate
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
