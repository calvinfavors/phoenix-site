import { CheckCircle, Users, Award, MessageCircle } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Trusted Local Expertise',
      description:
        'As a leading Woodstock builder, we understand the unique needs of homeowners in Woodstock, Kennesaw, Marietta, and beyond.',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description:
        'Every project is executed with meticulous attention to detail and built to the highest standards.',
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description:
        'We prioritize open dialogue, ensuring your vision guides every step of the process.',
    },
    {
      icon: CheckCircle,
      title: 'Commitment to Excellence',
      description:
        'Our team is dedicated to building homes and lasting relationships based on trust and integrity.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                About Phoenix Construction
              </h2>
              <div className="w-24 h-1 bg-red-600 mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                As your trusted Woodstock builder, Phoenix Construction takes pride in delivering
                exceptional home remodeling, kitchen renovations, bathroom transformations, and custom
                construction services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just build structures; we create homes that reflect your unique style and needs.
                From your first consultation to the final walkthrough, we're with you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/IMG_9350.WEBP"
                alt="Kitchen remodel by Phoenix Construction"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                loading="lazy"
              />
              <img
                src="/IMG_9352.WEBP"
                alt="Bathroom renovation by Phoenix Construction"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                loading="lazy"
              />
              <img
                src="/IMG_9351.WEBP"
                alt="Living room by Phoenix Construction"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
                loading="lazy"
              />
              <img
                src="/IMG_9354.WEBP"
                alt="Dining room by Phoenix Construction"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-red-100 p-3 rounded-lg group-hover:bg-red-600 transition-colors w-fit mb-4">
                    <Icon className="text-red-600 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Home?
                </h3>
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  Whether you're dreaming of a modern kitchen, a luxurious bathroom, or a custom-built home,
                  we're the Woodstock builder you can trust.
                </p>
                <a
                  href="tel:6784634893"
                  className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg w-fit"
                >
                  Call (678) 463-4893
                </a>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img
                  src="/IMG_9354.WEBP"
                  alt="Phoenix Construction dining room project"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
