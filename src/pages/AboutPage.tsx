import { CheckCircle, Users, Award, MessageCircle, Clock, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Phoenix Construction</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted construction partner in Woodstock, GA, delivering exceptional quality and
              craftsmanship
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Phoenix Construction, Inc. has been serving the Woodstock, Georgia community and
                  surrounding areas with pride and dedication. We are a locally owned and operated
                  construction company that specializes in transforming houses into dream homes.
                </p>
                <p>
                  Our journey began with a simple mission: to provide homeowners with exceptional
                  construction and remodeling services that combine quality craftsmanship,
                  transparent communication, and timely project completion.
                </p>
                <p>
                  Today, we stand as one of the most trusted builders in Woodstock, with a portfolio
                  of satisfied clients and beautifully completed projects throughout Cherokee County,
                  Cobb County, and the greater Atlanta area.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border border-red-100">
                <Target className="text-red-600 mb-4" size={48} />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our mission is to build not just exceptional homes and spaces, but lasting
                  relationships with our clients based on trust, integrity, and superior
                  workmanship.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We believe every project, whether it's a kitchen remodel, bathroom renovation, or
                  custom home construction, deserves meticulous attention to detail and a commitment
                  to excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What Sets Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: 'Experienced Team',
                  description:
                    'Our skilled craftsmen and project managers bring years of expertise to every project, ensuring exceptional results.',
                },
                {
                  icon: Award,
                  title: 'Quality Craftsmanship',
                  description:
                    'We use only premium materials and proven techniques to deliver lasting quality that stands the test of time.',
                },
                {
                  icon: MessageCircle,
                  title: 'Clear Communication',
                  description:
                    'We keep you informed throughout the entire process with regular updates and open dialogue.',
                },
                {
                  icon: CheckCircle,
                  title: 'Licensed & Insured',
                  description:
                    'Full licensing and comprehensive insurance coverage provide you with complete peace of mind.',
                },
                {
                  icon: Clock,
                  title: 'On-Time Delivery',
                  description:
                    'We respect your time with detailed planning and efficient execution to meet agreed-upon deadlines.',
                },
                {
                  icon: Target,
                  title: 'Client-Focused',
                  description:
                    'Your vision guides every decision we make. We are committed to exceeding your expectations.',
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-red-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your space and bring your vision to life with
              exceptional craftsmanship and attention to detail.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
