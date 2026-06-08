import { CheckCircle, ArrowRight, Phone, Award, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PoolConstruction() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/PhoenixPool1.jpeg" alt="Custom pool construction" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-red-500" size={32} />
              <span className="text-red-400 font-semibold text-lg">20+ Years of Experience</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Pool Construction
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Custom inground pool design and construction for Metro Atlanta homeowners
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Clock className="text-red-600 mx-auto mb-3" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">20+ Years</h3>
              <p className="text-gray-600">Pool building experience</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Shield className="text-red-600 mx-auto mb-3" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Full protection guaranteed</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Award className="text-red-600 mx-auto mb-3" size={40} />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600">Tailored to your vision</p>
            </div>
          </div>

          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Expert Pool Construction in Metro Atlanta
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With over two decades of experience building custom pools throughout Metro Atlanta, Phoenix Construction brings unmatched expertise to every pool project. We understand that a pool is more than just a place to swim—it's the centerpiece of your outdoor living space and a long-term investment in your property.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our team specializes in designing and constructing gunite and concrete pools that are built to last. From the initial consultation through final completion, we handle every detail with precision and care, ensuring your pool meets the highest standards of quality and craftsmanship.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Whether you envision a classic rectangular pool, a freeform oasis, or a modern geometric design with spa features, our experienced team will bring your vision to life while navigating Georgia's specific permitting requirements and soil conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Pool Services</h3>
              <ul className="space-y-3">
                {[
                  'Custom pool design and planning',
                  'Gunite and concrete pool construction',
                  'Spa and hot tub integration',
                  'Pool deck and coping installation',
                  'Water features and fountains',
                  'LED lighting systems',
                  'Automatic pool covers',
                  'Equipment installation and setup',
                  'Permit acquisition and inspections',
                  'Landscaping coordination',
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Popular Pool Features</h3>
                <ul className="space-y-3">
                  {[
                    'Tanning ledges and sun shelves',
                    'Built-in spas and spillovers',
                    'Beach entry and zero-edge designs',
                    'Waterfalls and rock features',
                    'Fire and water combinations',
                    'Swim-up bars and seating',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Start Your Pool Project</h3>
                <p className="mb-6 text-gray-300">
                  Get your free pool construction estimate today
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
              Pool Construction in Progress
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              See our craftsmanship in action with this custom pool build featuring steel reinforcement, professional plumbing, and expert excavation work.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/PhoenixPool1.jpeg', alt: 'Pool excavation and steel framework' },
                { src: '/phoenixpool2.jpeg', alt: 'Pool construction with spa feature' },
                { src: '/phoenixpool3.jpeg', alt: 'Professional pool plumbing installation' },
                { src: '/phoenixpool4.jpeg', alt: 'Spa detail with steel reinforcement' },
                { src: '/1000011179.jpg', alt: 'Completed custom pool — finished water surface' },
                { src: '/1000011187.jpg', alt: 'Custom pool with spa and deck — finished project' },
              ].map((image, index) => (
                <div key={index} className="relative group aspect-square overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Pool Building Process</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Design Consultation', desc: 'We meet to discuss your vision, budget, and site requirements' },
                { step: '02', title: 'Engineering & Permits', desc: 'Our team handles all permits and structural engineering' },
                { step: '03', title: 'Excavation & Steel', desc: 'Expert excavation followed by steel reinforcement installation' },
                { step: '04', title: 'Finish & Enjoy', desc: 'Plumbing, gunite, tile, deck, and final touches' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
