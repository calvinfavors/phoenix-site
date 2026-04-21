import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function KitchenRemodeling() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/IMG_9350.WEBP" alt="Modern kitchen remodel" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kitchen Remodeling
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Create the heart of your home with expert kitchen remodeling services
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Kitchen Remodeling in Woodstock, GA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The kitchen is the heart of your home—where families gather, meals are prepared, and memories are made. At Phoenix Construction, we transform outdated kitchens into beautiful, functional spaces that reflect your style and meet your family's needs.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From modern contemporary designs to classic traditional styles, our experienced team will work with you to create a kitchen that's both stunning and practical. We handle every aspect of your kitchen remodel, ensuring a seamless process from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services Include</h3>
              <ul className="space-y-3">
                {[
                  'Custom cabinet design and installation',
                  'Countertop selection and installation',
                  'Kitchen island construction',
                  'Backsplash tile work',
                  'Appliance installation',
                  'Lighting and electrical upgrades',
                  'Flooring installation',
                  'Plumbing updates',
                  'Pantry organization systems',
                  'Open concept conversions',
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Popular Upgrades</h3>
                <ul className="space-y-3">
                  {[
                    'Quartz and granite countertops',
                    'Soft-close cabinet hardware',
                    'Undermount sinks',
                    'Smart appliances',
                    'LED lighting systems',
                    'Custom range hoods',
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
                  Get your free kitchen remodeling estimate today
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

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Featured Project: Marietta Kitchen Transformation
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              This complete kitchen remodel in Marietta showcases our craftsmanship with custom cabinetry, premium countertops, and modern design elements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: '/7282333538409288563.jpg', alt: 'Marietta kitchen remodel - View 1' },
                { src: '/7423111862792765421.jpg', alt: 'Marietta kitchen remodel - View 2' },
                { src: '/7656679026852238890.jpg', alt: 'Marietta kitchen remodel - After renovation' },
              ].map((image, index) => (
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
