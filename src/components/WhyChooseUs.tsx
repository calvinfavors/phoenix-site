import { Shield, Award, MessageSquare, Clock, Users, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Licensed and Insured',
      description:
        'Full licensing and comprehensive insurance coverage ensure your peace of mind. We adhere to all industry standards and regulations, protecting both our clients and team members.',
    },
    {
      icon: Award,
      title: 'Commitment to Quality',
      description:
        'From premium materials to meticulous finishing touches, our dedication to exceptional results sets us apart. Rigorous quality control ensures every phase meets the highest standards.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description:
        'Our skilled craftsmen and seasoned project managers bring extensive expertise to every project. We collaborate seamlessly to deliver outstanding results tailored to your vision.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description:
        'Clear and open communication throughout the process. Regular updates, honest feedback, and client-centered collaboration ensure you feel confident and informed every step of the way.',
    },
    {
      icon: Clock,
      title: 'Timely Project Completion',
      description:
        'We respect your time with detailed planning, proactive oversight, and streamlined execution. Quality craftsmanship delivered on schedule, without compromising standards.',
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description:
        'Exceeding expectations is our priority. With a client-focused approach, quality craftsmanship, and personalized attention, we ensure you\'re thrilled with the final outcome.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Separates Us From Other Builders
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Phoenix Construction, Inc., we're committed to quality, transparent communication, and
            timely project completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -mr-16 -mt-16 group-hover:bg-red-100 transition-colors"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-red-600 to-red-700 w-16 h-16 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Excellence with Phoenix Construction, Inc.
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We've built our reputation as the premier construction company in Woodstock, GA, by
              consistently delivering exceptional craftsmanship, meticulous attention to detail, and
              outstanding customer service.
            </p>
            <a
              href="tel:6784634893"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Call Us: (678) 463-4893
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
