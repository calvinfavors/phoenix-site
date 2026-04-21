import { MapPin, Phone, Home, Star } from 'lucide-react';

export default function Alpharetta() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Construction Services in Alpharetta, GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted local contractor serving Alpharetta and surrounding communities
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Alpharetta's Premier Construction Company
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Phoenix Construction is proud to serve Alpharetta, Georgia, one of the most desirable communities in the Atlanta metro area. Known for its excellent schools, thriving tech corridor, and beautiful neighborhoods, Alpharetta homeowners deserve construction services that match the quality of their community.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you're upgrading a home in Windward, renovating a property near Avalon, or adding to your residence in one of Alpharetta's established neighborhoods, our team brings the expertise and attention to detail that discerning homeowners expect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Home className="text-red-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Services in Alpharetta</h3>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us in Alpharetta?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Experienced with Alpharetta's upscale homes</li>
                <li>Familiar with local building codes and HOA requirements</li>
                <li>Fast response times in the area</li>
                <li>Strong reputation with North Fulton homeowners</li>
                <li>Licensed and insured in Georgia</li>
                <li>Free estimates for Alpharetta residents</li>
              </ul>
            </div>
          </div>

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

          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Alpharetta Neighborhoods We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <div>Windward</div>
              <div>Avalon Area</div>
              <div>Downtown Alpharetta</div>
              <div>Crabapple</div>
              <div>Alpharetta Country Club</div>
              <div>Haynes Bridge</div>
              <div>North Point</div>
              <div>Webb Bridge</div>
              <div>All Alpharetta areas</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Alpharetta Project?
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
