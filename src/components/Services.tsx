import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Bathroom Remodeling',
      slug: '/bathroom-remodeling-in-woodstock-ga',
      image: '/IMG_9352.WEBP',
      description:
        'Transform your bathroom into a modern, spa-like retreat with updated fixtures, smart storage, and luxurious finishes.',
    },
    {
      title: 'Kitchen Remodeling',
      slug: '/kitchen-remodeling-in-woodstock-ga',
      image: '/IMG_9350.WEBP',
      description:
        'Create beautiful, functional kitchens with custom cabinets, stylish countertops, and modern appliances.',
    },
    {
      title: 'Basement Remodeling',
      slug: '/basement-remodeling-in-woodstock-ga',
      image: '/IMG_9351.WEBP',
      description:
        'Transform your basement into a cozy family room, entertainment area, home office, or guest suite.',
    },
    {
      title: 'Custom Home Construction',
      slug: '/home-construction-in-woodstock-ga',
      image: '/IMG_9354.WEBP',
      description:
        'Build your dream home from the ground up with exceptional quality, craftsmanship, and personalized designs.',
    },
    {
      title: 'Roofing Services',
      slug: '/roofing-in-woodstock-ga',
      image: '/IMG_9316.JPG',
      description:
        'Protect your home with professional roofing services, including metal roofing, replacements, and repairs.',
    },
    {
      title: 'Deck Installation & Repair',
      slug: '/deck-installation-and-repair-in-woodstock-ga',
      image: '/IMG_9319.JPG',
      description:
        'Expand your outdoor living space with a beautiful custom deck or restore your existing one.',
    },
    {
      title: 'Pool Construction',
      slug: '/pool-construction-in-woodstock-ga',
      image: '/PhoenixPool1.jpeg',
      description:
        'Custom inground pool design and construction with 20+ years of experience. Transform your backyard into a private oasis.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and remodeling services tailored to transform your vision into
            reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.slug}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <span className="text-red-600 font-semibold group-hover:text-red-700 transition-colors inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Request a Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
