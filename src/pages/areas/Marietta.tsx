import { MapPin, Phone, Home } from 'lucide-react';

export default function Marietta() {
  const kitchenImages = [
    { src: '/7282333538409288563.jpg', alt: 'Kitchen remodel in Marietta - Before renovation' },
    { src: '/7423111862792765421.jpg', alt: 'Kitchen remodel in Marietta - Renovation in progress' },
    { src: '/7656679026852238890.jpg', alt: 'Kitchen remodel in Marietta - After renovation' },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Services in Marietta, GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Quality construction and remodeling services for Marietta residents
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Marietta Construction Services
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Phoenix Construction extends our exceptional services to Marietta, Georgia. We understand the rich history and diverse architecture of Marietta, from charming historic homes in the square area to contemporary residences throughout Cobb County.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our experienced team delivers top-quality construction and remodeling services tailored to meet the specific needs of Marietta homeowners, maintaining the character of your home while incorporating modern amenities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="text-red-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services in Marietta</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Kitchen Remodeling</li>
                <li>• Bathroom Renovations</li>
                <li>• Basement Finishing</li>
                <li>• Custom Home Construction</li>
                <li>• Roofing Services</li>
                <li>• Deck Installation</li>
                <li>• Historic Home Restoration</li>
                <li>• Complete Remodeling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us in Marietta?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Expertise with historic preservation</li>
                <li>✓ Understanding of Cobb County codes</li>
                <li>✓ Serving all Marietta neighborhoods</li>
                <li>✓ Licensed Georgia contractors</li>
                <li>✓ Transparent project pricing</li>
                <li>✓ Free consultations</li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Recent Kitchen Remodel in Marietta
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              See the stunning transformation of this Marietta kitchen, featuring custom cabinetry, granite countertops, and modern appliances.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {kitchenImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Marietta Project?
            </h2>
            <p className="text-lg text-gray-200 mb-8">
              Get in touch with Phoenix Construction for expert service in Marietta
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
