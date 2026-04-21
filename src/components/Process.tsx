import { ClipboardCheck, Users as UsersIcon, Wrench, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      number: '01',
      title: 'Thorough Assessment & Planning',
      description:
        'Every project begins with a detailed evaluation of your needs. We outline clear objectives, set realistic timelines, and allocate the right resources to ensure success. Our transparent planning process keeps you informed every step of the way.',
    },
    {
      icon: UsersIcon,
      number: '02',
      title: 'Skilled Execution & Coordination',
      description:
        'Our experienced project managers and skilled workers collaborate seamlessly to bring your vision to life. From kitchen renovations to custom home construction, tasks are executed with care and precision while prioritizing safety.',
    },
    {
      icon: Wrench,
      number: '03',
      title: 'Adaptability & Problem-Solving',
      description:
        'Construction projects can be complex, but our team is ready to tackle any challenge. With diverse skills and perspectives, we find innovative solutions to keep projects on track and deliver exceptional results.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Delivering Exceptional Results',
      description:
        'By working together towards a common goal, we ensure each project meets and exceeds client expectations. Our commitment to quality craftsmanship shines through in every detail, from concept to completion.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How We Work</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures every project is executed with precision, quality, and
            timeliness
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white text-2xl font-bold px-4 py-2 rounded-lg shadow-lg">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center my-8 md:my-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                      <Icon className="text-red-500" size={56} />
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-red-600 to-transparent transform -translate-x-1/2"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
