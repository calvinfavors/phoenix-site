import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, ChevronDown, ChevronUp, Thermometer, Users, Music, Zap, Home, Star, Wind, DollarSign } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const faqs = [
  {
    question: 'What does science say about why people prefer indoor gathering spaces in summer?',
    answer: "Research in environmental psychology consistently shows that thermal comfort is the single biggest predictor of social satisfaction at a gathering. When ambient temperatures exceed 85°F — a daily reality in Metro Atlanta from June through September — guests become physiologically stressed. Elevated cortisol levels from heat reduce enjoyment, shorten the time people want to stay, and increase irritability. A climate-controlled indoor space, especially one that runs 10–15 degrees cooler than the outdoors, creates measurable improvements in mood, conversation quality, and overall party success. Your finished basement, naturally 10°F cooler than upper floors, becomes a social refuge.",
    icon: <Thermometer className="text-amber-500" size={22} />,
  },
  {
    question: 'Is there a real connection between space design and how long guests stay?',
    answer: "Yes — and it's well-documented in hospitality and behavioral research. Environmental psychologists call it 'behavioral setting theory': the design of a space directly shapes how people behave in it. Spaces with defined zones (a bar area, seating clusters, a game area) encourage guests to circulate and linger. Open, uninterrupted spaces feel transactional and prompt early departures. A professionally finished basement with distinct areas — wet bar, lounge seating, game table, media wall — creates the layered environment that keeps parties going 2–3x longer than a plain room.",
    icon: <Users className="text-blue-500" size={22} />,
  },
  {
    question: 'How does sound science apply to basement entertainment spaces?',
    answer: "Basements have a unique acoustic advantage: the surrounding earth and concrete act as natural sound dampeners from outside noise, while the enclosed geometry allows you to shape the sound environment intentionally. Acoustic research shows that rooms with some sound absorption (area rugs, upholstered furniture, acoustic panels) and some reflectivity (hard bar surfaces, concrete accents) achieve the ideal 'warm liveness' RT60 rating of 0.3–0.6 seconds — perfect for conversation over music. We guide clients on material choices during the design phase that naturally optimize your basement's acoustics without expensive add-ons.",
    icon: <Music className="text-green-600" size={22} />,
  },
  {
    question: 'Why do summer storms make a finished basement even more valuable?',
    answer: "Georgia summers average 50+ thunderstorm days per year — more than almost any other state. Outdoor parties are routinely disrupted by afternoon pop-up storms that arrive with little warning. A finished basement solves this completely: it becomes your weather-proof party venue where the gathering simply moves inside without missing a beat. Families with pools tell us their finished basement is the #1 feature that allows them to keep a party going through a storm instead of sending guests home early. The ROI on that seamless hosting experience is hard to quantify but deeply felt.",
    icon: <Wind className="text-slate-600" size={22} />,
  },
  {
    question: 'What is the psychology of a dedicated party space vs. using a living room?',
    answer: "Behavioral research on 'place attachment' and social rituals shows that dedicated spaces carry psychological permission: guests feel more relaxed, louder, and more social in a space clearly designed for fun than in an everyday living room where they're unconsciously more restrained. A finished basement with a bar, pool table, or home theater signals 'this is where we let loose' — guests unconsciously grant themselves and each other more latitude to enjoy the night. Hosts also report feeling more relaxed because their everyday living space isn't being put at risk.",
    icon: <Star className="text-amber-600" size={22} />,
  },
  {
    question: 'How does lighting design in a basement affect a party atmosphere?',
    answer: "Lighting has been rigorously studied for its effect on social behavior. Research from Cornell and other institutions shows that lower, warmer light levels (2700–3000K color temperature, 50–150 lux) increase relaxation, extend dwell time, and encourage conversation. Recessed dimmers, LED strip lighting under bar counters, and accent lighting in media areas give you precise control over your basement's atmosphere. We spec all basement lighting systems with entertainment in mind — so you can go from bright work-mode to intimate party-mode with a single scene on your smart home app.",
    icon: <Zap className="text-yellow-500" size={22} />,
  },
  {
    question: 'Does having a wet bar really make that big of a difference for entertaining?',
    answer: "The data from our clients is clear: homes with a wet bar in the finished basement report hosting 3–4x more gatherings per year than before. Beyond convenience, a wet bar creates a natural social anchor — a place people gravitate toward, linger at, and use as a conversation starting point. From a design science standpoint, the bar counter is a 'semi-public' interaction zone that reduces the social friction of mingling. It gives guests something to do with their hands and a natural reason to approach and stay in a spot. For serious entertainers, a wet bar is the highest-leverage addition to any basement.",
    icon: <Home className="text-red-600" size={22} />,
  },
  {
    question: 'What features do the best summer party basements include?',
    answer: "Based on our years of finishing basements across Metro Atlanta — and the feedback we hear from homeowners after their first summer — the top features are: (1) Wet bar with under-counter beverage fridge and icemaker. (2) Large-format TV or projector wall for sports and movies. (3) Open floor plan with durable luxury vinyl plank flooring — easy to clean after parties. (4) Full or half bath so guests never need to go upstairs. (5) Sound system rough-in with in-ceiling speakers. (6) Dimmable LED lighting with smart controls. Any combination of these turns your basement into the most-used room in the house from Memorial Day to Labor Day.",
    icon: <Star className="text-green-600" size={22} />,
  },
  {
    question: 'How much value does an entertainment-focused finished basement add vs. a basic finish?',
    answer: "In competitive Metro Atlanta markets, an entertainment-focused basement (wet bar, media area, full bath) appraises and sells for $15,000–$30,000 more than a basic finished basement of the same square footage. Buyers in the $500K–$1M price range in markets like Alpharetta, Woodstock, and East Cobb specifically search for homes with finished entertainment basements — it's a documented search filter on MLS platforms. The incremental cost to go from basic to entertainment-grade is typically $10,000–$20,000, with a return that often exceeds 100% at resale.",
    icon: <DollarSign className="text-emerald-600" size={22} />,
  },
  {
    question: 'When should I start a basement project if I want it ready for summer entertaining?',
    answer: "Work backwards from your target date. If you want your basement finished by Memorial Day weekend, you need to start the design and permitting process no later than late February. For a July 4th target, beginning in April gives you a reasonable runway for a standard project. Phoenix Construction compresses timelines where possible, but we don't cut corners on inspections or code compliance — that's what protects your investment. Call us now and we'll map out a realistic schedule to get your summer entertainment basement ready on time.",
    icon: <Calendar className="text-slate-600" size={22} />,
  },
];

export default function SummerPartyBasementFAQ() {
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
      source: 'blog_summer_party_basement_faq',
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
              <span className="text-sm font-semibold text-green-400 bg-green-900/30 px-3 py-1 rounded-full">
                Summer Entertaining
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 14, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Science Behind Summer Parties and Why a Finished Basement Changes Everything
            </h1>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              From thermal comfort research to behavioral psychology, there's real science behind why homes with finished basements host better summer parties. We answer the questions Metro Atlanta homeowners are asking.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/PhoenixPool1.jpeg"
                alt="Summer entertaining - finished basement for summer parties Metro Atlanta"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>The best summer parties don't happen outside.</strong> Environmental psychology, acoustics research, and behavioral science all point to the same conclusion: a dedicated, climate-controlled, intentionally designed space is the foundation of a genuinely great gathering. Georgia's heat, storms, and humidity make a finished basement not just a luxury — but a summer hosting necessity.
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
                <h2 className="text-2xl font-bold mb-3">Build Your Summer Party Basement</h2>
                <p className="text-gray-300 mb-5">
                  Phoenix Construction designs and builds entertainment-focused finished basements across Metro Atlanta. Wet bars, media walls, full baths — we do it all under one contract.
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
                <h2 className="text-xl font-bold text-slate-900 mb-2">The Top Summer Entertainment Features We Install</h2>
                <p className="text-gray-500 text-sm mb-4">Our most-requested features for summer party basements across Cherokee, Cobb, and Fulton Counties</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Wet bar with under-counter fridge',
                    'Full or half bath for guests',
                    'Large-format TV or projector wall',
                    'In-ceiling speaker rough-in',
                    'Luxury vinyl plank flooring',
                    'Dimmable LED lighting scenes',
                    'Pool table / game area',
                    'Walk-out patio access',
                  ].map((feature) => (
                    <div key={feature} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="text-red-600 mr-2 flex-shrink-0" size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Plan Your Party Basement</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get a free design consultation for your summer entertainment basement.
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
                      <option value="entertainment">Entertainment Space / Bar</option>
                      <option value="home-theater">Home Theater</option>
                      <option value="in-law-suite">In-Law Suite</option>
                      <option value="home-gym">Home Gym</option>
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Describe your dream basement..."
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
