import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, ChevronDown, ChevronUp, Thermometer, Droplets, Zap, Home, DollarSign, Shield } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const faqs = [
  {
    question: 'Why is summer actually a great time to finish a basement?',
    answer: "Summer in Georgia is the perfect window for basement finishing projects. The dry, predictable weather means faster permit approvals and inspections. Contractors have more consistent scheduling. And with kids out of school and families spending more time at home, you\'ll immediately enjoy the new space. Most importantly, starting in summer means your finished basement is ready for fall football season and the holiday entertaining stretch.",
    icon: <Thermometer className="text-amber-500" size={22} />,
  },
  {
    question: 'Will a finished basement be too hot in the summer?',
    answer: "No — and this is one of the most common misconceptions. Basements are naturally the coolest part of your home because they\'re surrounded by earth, which maintains a steady 55–65°F year-round. A properly insulated and HVAC-extended basement will actually feel more comfortable than your main floor on a 95°F Georgia summer day. Proper insulation, a dehumidifier, and extending your existing HVAC are all we include in a full basement finishing project.",
    icon: <Thermometer className="text-red-500" size={22} />,
  },
  {
    question: 'How do I deal with humidity in a Georgia basement during summer?',
    answer: "Georgia summers bring serious humidity, and moisture management is the #1 priority before we ever frame a wall. Our process starts with a thorough moisture assessment, then we apply vapor barriers, use moisture-resistant drywall (like Dens-Armor), install proper drainage where needed, and size a whole-basement dehumidifier into your project. A finished basement done right is vapor-tight and comfortable — not musty.",
    icon: <Droplets className="text-blue-500" size={22} />,
  },
  {
    question: 'What is the most popular use for a finished basement in summer?',
    answer: "Entertainment spaces dominate our summer projects — and for good reason. A finished lower level with a wet bar, big screen area, and ample seating becomes the go-to destination for summer gatherings, pool parties that move inside when thunderstorms roll through, and weekend hangouts. Other top uses include playrooms and teen hangout rooms (keeping kids out of the heat), home gyms, and home offices where the cooler temps mean lower energy bills.",
    icon: <Home className="text-green-600" size={22} />,
  },
  {
    question: 'How long does a summer basement finishing project take?',
    answer: "A standard basement finishing in Cherokee County or Cobb County typically runs 6–12 weeks from permit approval to final walkthrough. Starting in May or June means you\'re ready for fall. Timeline breakdown: permits (1–2 weeks), framing and rough-in (2–3 weeks), inspections (1 week), insulation and drywall (1–2 weeks), finishes and fixtures (2–3 weeks). We coordinate every phase so there are no gaps in your schedule.",
    icon: <Calendar className="text-slate-600" size={22} />,
  },
  {
    question: 'Does a finished basement add value to my home?',
    answer: "Consistently yes. In Metro Atlanta markets like Woodstock, Marietta, and Alpharetta, a finished basement adds roughly 60–75% ROI at resale — and in competitive markets with inventory shortages, buyers actively seek homes with finished lower levels. A finished basement also adds appraised square footage when done with permits, directly increasing your home\'s market value. Some of our clients recoup the full cost when selling within 2–3 years.",
    icon: <DollarSign className="text-emerald-600" size={22} />,
  },
  {
    question: 'Do I need a permit to finish my basement in Cherokee County or Cobb County?',
    answer: "Yes — and you should always insist on permitted work. Permits are required for any work that involves framing, electrical, plumbing, or HVAC in Georgia. Unpermitted basements can create major headaches at resale (the square footage won\'t count) and potential insurance issues. Phoenix Construction pulls all permits and schedules all inspections on your behalf, so you never have to chase down the county yourself.",
    icon: <Shield className="text-slate-700" size={22} />,
  },
  {
    question: 'What should I budget for a basement finishing project in 2026?',
    answer: "In the Metro Atlanta area, expect to budget $35–$65 per finished square foot for a quality basement finishing project, depending on finishes and features. A 1,000 sq ft basement with a bedroom, full bath, and open entertainment area typically runs $45,000–$75,000. Adding a wet bar, home theater setup, or sauna will push costs higher. Phoenix Construction provides detailed, itemized estimates so you know exactly what you\'re getting — no surprise change orders.",
    icon: <DollarSign className="text-amber-600" size={22} />,
  },
  {
    question: 'Can I add a bedroom to my basement?',
    answer: "Absolutely — but it requires an egress window. Georgia building code mandates that any room designated as a bedroom must have an egress window of minimum net clear opening size for emergency exit. We handle egress window installation as part of your project, including proper window wells when needed. A basement bedroom with a full bath is one of the highest-value additions you can make, especially for multigenerational families or rental potential.",
    icon: <Home className="text-blue-600" size={22} />,
  },
  {
    question: 'Why should I choose Phoenix Construction for my basement project?',
    answer: "Phoenix Construction has been finishing basements across Cherokee, Cobb, and Fulton Counties for years. We handle everything in-house — design, permits, framing, electrical, plumbing, HVAC extensions, drywall, flooring, and final finishes. You get one point of contact, transparent pricing, and a crew that shows up on time. We back all our work with a workmanship warranty and our reviews across Google and Houzz speak for themselves.",
    icon: <Zap className="text-red-600" size={22} />,
  },
];

export default function SummerBasementFAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'basement-finishing',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      source: 'blog_summer_basement_faq',
      submitted_at: new Date().toISOString(),
    };

    try {
      const [supabaseResult, webhookResult] = await Promise.allSettled([
        supabase.from('contact_submissions').insert([payload]),
        fetch('https://hook.us2.make.com/2rjxdkxcu2jxgx67mzh2p1dnfm1hzx7e', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }),
      ]);

      if (supabaseResult.status === 'rejected' && webhookResult.status === 'rejected') {
        throw new Error('Failed to submit form');
      }

      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-semibold text-amber-400 bg-amber-900/30 px-3 py-1 rounded-full">
                Summer Basements
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 14, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Summer Basement FAQ: Everything Metro Atlanta Homeowners Ask Before Starting a Basement Finishing Project
            </h1>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              Considering finishing your basement this summer? We've answered the 10 most common questions from Cherokee County and Cobb County homeowners — from humidity and heat to permits, costs, and timelines.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/phoecon6.jpeg"
                alt="Finished basement entertainment space - summer basement finishing Metro Atlanta"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Summer is basement season.</strong> Georgia's brutal heat outside makes a cool, finished lower level one of the most valuable improvements you can make to your home. Below, we tackle every question we hear from homeowners in Woodstock, Marietta, Alpharetta, Roswell, and Canton before they start their project.
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {faq.icon}
                        <span className="font-semibold text-slate-900 text-base leading-snug pr-4">
                          {faq.question}
                        </span>
                      </div>
                      <div className="flex-shrink-0 ml-2">
                        {openIndex === index ? (
                          <ChevronUp className="text-red-600" size={20} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={20} />
                        )}
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="px-5 pb-5 bg-gray-50 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white">
                <h2 className="text-2xl font-bold mb-3">Ready to Start This Summer?</h2>
                <p className="text-gray-300 mb-5">
                  Phoenix Construction serves homeowners across Cherokee, Cobb, and Fulton Counties. Get your free basement estimate before summer fills up our schedule.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:6784634893"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
                  >
                    <Phone size={20} className="mr-2" />
                    Call (678) 463-4893
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Request Free Estimate
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Areas We Serve</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Woodstock', 'Canton', 'Marietta', 'Alpharetta', 'Roswell', 'Kennesaw', 'Milton', 'Smyrna', 'Sandy Springs'].map((area) => (
                    <div key={area} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="text-red-600 mr-2 flex-shrink-0" size={16} />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Free Basement Estimate</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Summer slots fill fast. Get your free basement finishing estimate today.
                  </p>
                  <a
                    href="tel:6784634893"
                    className="flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-all w-full"
                  >
                    <Phone size={20} className="mr-2" />
                    (678) 463-4893
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Get Your Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                    >
                      <option value="basement-finishing">Basement Finishing</option>
                      <option value="entertainment">Entertainment Space</option>
                      <option value="in-law-suite">In-Law Suite</option>
                      <option value="home-office">Home Office</option>
                      <option value="home-gym">Home Gym</option>
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your basement..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Get Free Estimate
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
