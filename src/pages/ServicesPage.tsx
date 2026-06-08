import { Link } from 'react-router-dom';
import { Bath, UtensilsCrossed, Home, Hammer, Wrench, Square, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function ServicesPage() {
  const services = [
    {
      icon: Bath,
      title: 'Bathroom Remodeling Woodstock GA',
      slug: 'bathroom-remodeling-in-woodstock-ga',
      description:
        'Expert bathroom remodeling Woodstock GA, bathroom renovation, and bathroom remodel contractors serving Woodstock, Canton, Marietta, Alpharetta, and all of Metro Atlanta. Full bathroom renovations from powder rooms to luxury master suites.',
      features: [
        'Custom tile work and flooring',
        'Modern fixture installations',
        'Vanity and cabinet upgrades',
        'Walk-in showers and tubs',
        'Lighting and ventilation',
        'Complete plumbing updates',
      ],
    },
    {
      icon: UtensilsCrossed,
      title: 'Kitchen Remodeling Woodstock GA',
      slug: 'kitchen-remodeling-in-woodstock-ga',
      description:
        'Full kitchen remodeling Woodstock GA services. From kitchen renovations in Cherokee County to open-concept redesigns across Metro Atlanta — cabinets, countertops, islands, and complete home remodeling packages.',
      features: [
        'Custom cabinetry design',
        'Countertop installation',
        'Appliance upgrades',
        'Backsplash and tile work',
        'Kitchen island construction',
        'Lighting and electrical updates',
      ],
    },
    {
      icon: Home,
      title: 'Basement Finishing & Remodeling Woodstock GA',
      slug: 'basement-remodeling-in-woodstock-ga',
      description:
        'Expert basement finishing Woodstock GA and basement remodeling Woodstock GA. Our finished basement contractors near Woodstock GA handle everything — from basic basement renovation to full in-law suites and entertainment spaces.',
      features: [
        'Complete finishing services',
        'Waterproofing solutions',
        'Flooring installation',
        'Built-in storage and bars',
        'Home theater setups',
        'Bedroom and bathroom additions',
      ],
    },
    {
      icon: Hammer,
      title: 'Home Builders Woodstock GA | New Construction Kennesaw & Smyrna',
      slug: 'home-construction-in-woodstock-ga',
      description:
        'Trusted home builders in Woodstock GA, Woodstock builders, new construction Kennesaw GA, new home builders in Smyrna GA, and construction company Marietta GA. Build your custom dream home with Metro Atlanta\'s premier general contractor.',
      features: [
        'Architectural design collaboration',
        'Site preparation and foundation',
        'Structural framing',
        'Complete interior finishing',
        'Exterior work and landscaping',
        'Energy-efficient solutions',
      ],
    },
    {
      icon: Wrench,
      title: 'Roof Replacement & Roofing Woodstock GA',
      slug: 'roofing-in-woodstock-ga',
      description:
        'Professional roof replacement Woodstock GA and roofing Woodstock GA services. Complete roof replacements, storm damage repair, and GAF-certified installations by your trusted general contractor Woodstock GA.',
      features: [
        'Metal roofing installation',
        'Shingle roof replacement',
        'Roof inspections',
        'Storm damage repair',
        'Gutter installation',
        'Ventilation systems',
      ],
    },
    {
      icon: Square,
      title: 'Deck Repair & Woodstock Deck Builders',
      slug: 'deck-installation-and-repair-in-woodstock-ga',
      description:
        'Expert deck repair Woodstock GA and custom deck construction by trusted Woodstock deck builders. New decks, deck renovation, composite decking, and railing installation throughout Cherokee County and Metro Atlanta.',
      features: [
        'Custom deck design',
        'Composite and wood options',
        'Structural repairs',
        'Railing installation',
        'Staining and sealing',
        'Permit handling',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Home Remodeling Services Woodstock GA | Kitchen, Bathroom, Basement & More | Phoenix Construction"
        description="Browse Phoenix Construction's full range of services in Woodstock GA — kitchen remodeling, bathroom renovations, basement finishing, custom home construction, roofing, deck installation, and pool construction. Serving Cherokee County & Metro Atlanta."
        canonical="/services"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }]}
      />
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Home Remodeling & General Contractor Services Woodstock GA</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Phoenix Construction — your full-service <strong>general contractor Woodstock GA</strong>. Bathroom remodeling, kitchen remodeling, basement finishing, home building, roofing, and deck repair throughout Cherokee County & Metro Atlanta.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <Icon className="text-white z-10 transform group-hover:scale-110 transition-transform duration-500" size={64} />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <span className="text-red-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/${service.slug}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold group/link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation. We'll discuss your project goals and recommend the
              best solutions for your needs and budget.
            </p>
            <a
              href="tel:6784634893"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Call (678) 463-4893
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
