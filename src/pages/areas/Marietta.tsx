import { CheckCircle, ArrowRight, MapPin, Phone, Star, Home, Bath, UtensilsCrossed, Layers, Shield, Hammer, Plus, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function Marietta() {
  const kitchenImages = [
    { src: '/7282333538409288563.jpg', alt: 'Kitchen remodel in Marietta - Before renovation' },
    { src: '/7423111862792765421.jpg', alt: 'Kitchen remodel in Marietta - Renovation in progress' },
    { src: '/7656679026852238890.jpg', alt: 'Kitchen remodel in Marietta - After renovation' },
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Contractor Marietta GA | Kitchen Remodeling, Bathroom Renovations & Home Building | Phoenix Construction"
        description="Phoenix Construction serves Marietta GA with expert kitchen remodeling, bathroom renovations, basement finishing, and custom home construction. Licensed, insured, free estimates. Call (678) 463-4893."
        canonical="/marietta"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Marietta', url: '/marietta' }]}
        localBusiness={{ cityName: 'Marietta', citySlug: 'marietta', services: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Basement Finishing', 'Custom Home Construction', 'Roofing', 'Deck Installation'], latitude: 33.9526, longitude: -84.5499 }}
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Remodeling Contractor Marietta GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Cobb County's trusted kitchen remodeling, bathroom renovation & home building team
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro Prose */}
          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Phoenix Construction serves Marietta and Cobb County with kitchen remodeling, bathroom renovations, basement finishing, and home construction. From the historic square area to East Cobb's established neighborhoods, we understand the diverse architecture of Marietta homes — from 1960s split-levels and ranch homes to new construction in West Cobb.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Cobb County homeowners choose us for our local knowledge of Cobb County building codes and permit process, our track record in the area, and our commitment to delivering quality craftsmanship on time and on budget. Every project comes with a free consultation and transparent pricing.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services - LEFT */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Home className="text-red-600 mr-3" size={28} />
                Services in Marietta
              </h3>
              <div className="space-y-3">
                <Link to="/kitchen-remodeling-marietta-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <UtensilsCrossed className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Kitchen Remodeling</span>
                </Link>
                <Link to="/bathroom-remodeling-marietta-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Bath className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Bathroom Renovations</span>
                </Link>
                <Link to="/basement-remodeling-in-woodstock-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Layers className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Basement Finishing</span>
                </Link>
                <Link to="/home-construction-in-woodstock-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Home className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Custom Home Construction</span>
                </Link>
                <Link to="/roofing-in-woodstock-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Shield className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Roofing Services</span>
                </Link>
                <Link to="/deck-installation-and-repair-in-woodstock-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Hammer className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Deck Installation</span>
                </Link>
                <Link to="/contact" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Plus className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Home Additions</span>
                </Link>
                <Link to="/services" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <Wrench className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Complete Remodeling</span>
                </Link>
              </div>
            </div>

            {/* Why Choose Us - RIGHT */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Cobb County permit & code expertise</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Experience with East Cobb's established home styles</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>20+ years Metro Atlanta track record</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Licensed, bonded & insured in Georgia</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Transparent pricing, no hidden fees</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Free in-home consultations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Project */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
              Featured: Marietta Kitchen Transformation
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Open-concept kitchen renovation with custom cabinetry, quartz countertops, and hardwood flooring in an East Cobb home.
            </p>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Images */}
                <div className="grid grid-cols-3 gap-3">
                  {kitchenImages.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                {/* Testimonial */}
                <div className="flex flex-col justify-center">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed mb-6">
                    "We hired Phoenix Construction for a huge basement overhaul. This was a lifetime dream basement for my husband that included a sports memorabilia room, a custom built Irish bar, an exquisite wine room and so much more. Mitch and his team were incredible and the attention to detail was like no other. If you want your job done to perfection, this is the team."
                  </blockquote>
                  <div className="border-t border-slate-700 pt-6">
                    <p className="text-white font-semibold text-lg">Carolyn Russell</p>
                    <p className="text-gray-400">Google Review - July 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Marietta Neighborhoods We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-lg">
              <div>East Cobb</div>
              <div>Marietta Square Area</div>
              <div>West Cobb</div>
              <div>Kennesaw</div>
              <div>Smyrna</div>
              <div>Mableton</div>
              <div>Lost Mountain</div>
              <div>Powder Springs</div>
              <div>All Cobb County areas</div>
            </div>
          </div>

          {/* CTA */}
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
