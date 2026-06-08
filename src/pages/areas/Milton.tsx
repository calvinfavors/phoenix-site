import { CheckCircle, ArrowRight, MapPin, Phone, Star, Home, Bath, UtensilsCrossed, Layers, Shield, Hammer, Plus, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function Milton() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Contractor Milton GA | Kitchen Remodeling, Bathroom Renovations & Custom Home Construction | Phoenix Construction"
        description="Phoenix Construction serves Milton GA's estate properties and custom homes with expert kitchen remodeling, bathroom renovations, and full home construction. Call (678) 463-4893 for a free estimate."
        canonical="/milton"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Milton', url: '/milton' }]}
        localBusiness={{ cityName: 'Milton', citySlug: 'milton', services: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Basement Finishing', 'Custom Home Construction', 'Roofing', 'Deck Installation'], latitude: 34.1354, longitude: -84.3135 }}
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Remodeling Contractor Milton GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              North Fulton's trusted builder for estate homes, luxury kitchens & custom bathrooms
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Intro Prose */}
          <div className="prose max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Phoenix Construction specializes in Milton's estate properties — from equestrian communities in Birmingham and Freemanville to the luxury developments in The Manor, White Columns, and Crooked Creek. Milton homeowners have some of the highest expectations in Metro Atlanta, and our project approach is built around that standard.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Our Milton projects typically involve premium material sourcing, custom millwork, and close coordination with designers and architects. We serve as the single point of contact from permit to punch list — so you spend less time managing and more time anticipating the result.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Services - LEFT */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Home className="text-red-600 mr-3" size={28} />
                Services in Milton
              </h3>
              <div className="space-y-3">
                <Link to="/kitchen-remodeling-milton-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
                  <UtensilsCrossed className="text-red-600 mr-3 flex-shrink-0" size={18} />
                  <span>Kitchen Remodeling</span>
                </Link>
                <Link to="/bathroom-remodeling-milton-ga" className="flex items-center text-gray-700 hover:text-red-600 transition-colors py-1">
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
                  <span>Complete Home Remodeling</span>
                </Link>
              </div>
            </div>

            {/* Why Choose Us - RIGHT */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Estate-scale project experience in Milton</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Premium material & finish sourcing</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Single point of contact from permit to punch list</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>North Fulton County building code expertise</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Licensed, bonded & insured in Georgia</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span>Free in-home consultations for Milton residents</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Project */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Featured: Custom Irish Bar & Wine Room
            </h2>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="grid grid-cols-2 gap-2 p-2">
                  {[
                    { src: '/IMG_9316.JPG', alt: 'Custom Irish bar - Full view' },
                    { src: '/IMG_9319.JPG', alt: 'Custom Irish bar - Bar detail' },
                    { src: '/IMG_9320.JPG', alt: 'Custom Irish bar - Seating area' },
                    { src: '/IMG_9322.JPG', alt: 'Custom Irish bar - Wine room' },
                  ].map((image, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-white text-lg leading-relaxed mb-6">
                    "We hired Phoenix Construction for a huge basement overhaul. This was a lifetime dream basement for my husband that included a sports memorabilia room, a custom built Irish bar, an exquisite wine room and so much more. Mitch and his team were incredible and the attention to detail was like no other. If you want your job done to perfection, this is the team. Also, Mitch has great vision for your dream and helps make your dream better."
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
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Milton Neighborhoods We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-lg">
              <div>Crabapple</div>
              <div>Birmingham</div>
              <div>Deerfield</div>
              <div>White Columns</div>
              <div>Crooked Creek</div>
              <div>The Manor</div>
              <div>Champions View</div>
              <div>Freemanville</div>
              <div>All Milton areas</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Milton Project?
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
