import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Shield, Clock, Hammer, DollarSign, Lightbulb, Thermometer, Droplets } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BasementFinishingWoodstock() {
  const navigate = useNavigate();
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
      source: 'blog_basement_finishing_woodstock',
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
              <span className="text-sm font-semibold text-red-400 bg-red-900/30 px-3 py-1 rounded-full">
                Basement Finishing
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 27, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Basement Finishing Woodstock GA: Expert Basement Remodel Contractors &amp; Basement Renovation Woodstock GA
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/phoecon6.jpeg"
                alt="Basement finishing Woodstock GA - entertainment space with wet bar"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Searching for <strong>basement finishing Woodstock GA</strong> experts? Looking for trusted <strong>finished basement contractors near Woodstock GA</strong> or top-rated <strong>basement remodel contractors Woodstock GA</strong>? Phoenix Construction is Woodstock's premier <strong>basement remodeling Woodstock GA</strong> and <strong>basement renovation Woodstock GA</strong> specialist. As Cherokee County's #1 <strong>general contractor Woodstock GA</strong> for basement projects, we transform unfinished basements into beautiful, functional living spaces — from home theaters and wet bars to full in-law suites.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Investment for Woodstock Homeowners</h3>
                    <p className="text-gray-600"><strong>Basement finishing Woodstock GA</strong> projects typically return 70-75% of your investment at resale. Plus, you gain hundreds of square feet of living space at a fraction of the cost of building an addition - often $30-60 per square foot compared to $150-250+ for new construction.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                What to Expect from Finished Basement Contractors Near Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you hire Phoenix Construction as your <strong>finished basement contractors near Woodstock GA</strong>, here's what our comprehensive process includes:
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Droplets className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Moisture Assessment & Waterproofing</h3>
                      <p className="text-gray-600 text-sm">We evaluate your basement for moisture issues and implement proper waterproofing solutions. This critical first step protects your investment and ensures a healthy living environment.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Design & Space Planning</h3>
                      <p className="text-gray-600 text-sm">Our design team creates custom layouts that maximize your space while working around obstacles like columns, ductwork, and utilities.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Hammer className="text-slate-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Framing & Rough-In Work</h3>
                      <p className="text-gray-600 text-sm">Professional framing creates your room layout while electrical, plumbing, and HVAC rough-ins prepare for finished systems.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <Thermometer className="text-red-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Insulation & Climate Control</h3>
                      <p className="text-gray-600 text-sm">Proper insulation and HVAC extensions ensure your finished basement is comfortable year-round, not too hot in summer or cold in winter.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Basement Finishing Woodstock GA: Code Requirements
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As experienced <strong>basement remodel contractors Woodstock GA</strong> residents trust, we ensure your project meets all Cherokee County building codes:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Ceiling Height:</strong> Minimum 7 feet in habitable rooms (we can work with lower heights in some areas)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Egress Windows:</strong> Required for any bedroom - proper size and window well installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Smoke Detectors:</strong> Interconnected smoke and CO detectors required</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Electrical:</strong> Proper outlets, lighting, and panel capacity for the added space</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Permits:</strong> We pull all required permits and schedule inspections</span>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Finish Your Basement?</h3>
                <p className="text-gray-600 mb-4">
                  Phoenix Construction is among the most trusted <strong>finished basement contractors near Woodstock GA</strong>. Contact us today for a free <strong>basement finishing Woodstock GA</strong> consultation and estimate!
                </p>
                <a
                  href="tel:6784634893"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now: (678) 463-4893
                </a>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Basement Finishing Timeline
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                How long does <strong>basement finishing Woodstock GA</strong> take? Here's what to expect:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <Clock className="text-red-600 mb-3" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">Basic Finish</h3>
                  <p className="text-gray-600 text-sm mb-2">Open rec room with minimal walls</p>
                  <p className="font-semibold text-slate-900">4-6 weeks</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <Clock className="text-red-600 mb-3" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">Standard Finish</h3>
                  <p className="text-gray-600 text-sm mb-2">Multiple rooms with bathroom</p>
                  <p className="font-semibold text-slate-900">6-10 weeks</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <Clock className="text-red-600 mb-3" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">Entertainment Level</h3>
                  <p className="text-gray-600 text-sm mb-2">Bar, theater, custom features</p>
                  <p className="font-semibold text-slate-900">10-14 weeks</p>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <Clock className="text-red-600 mb-3" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">Full In-Law Suite</h3>
                  <p className="text-gray-600 text-sm mb-2">Bedroom, bath, kitchen</p>
                  <p className="font-semibold text-slate-900">12-16 weeks</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Choosing the Right Basement Remodel Contractors Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When selecting <strong>basement remodel contractors Woodstock GA</strong> residents recommend, look for these qualities:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center">
                    <CheckCircle className="mr-2" size={18} />
                    Green Flags
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Licensed and insured in Georgia</li>
                    <li>- Basement-specific experience</li>
                    <li>- Portfolio of completed projects</li>
                    <li>- Clear, detailed contracts</li>
                    <li>- Handles permits properly</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center">
                    <Shield className="mr-2" size={18} />
                    Red Flags
                  </h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- No local references</li>
                    <li>- Unusually low bids</li>
                    <li>- Large upfront deposits</li>
                    <li>- Pressure to sign quickly</li>
                    <li>- Avoiding permit discussion</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Home Remodeling Woodstock GA: More Than Just Basements
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As your full-service <strong>general contractor Woodstock GA</strong>, Phoenix Construction handles far more than basement finishing. We are also Woodstock's trusted choice for <strong>bathroom remodeling Woodstock GA</strong>, <strong>kitchen remodeling Woodstock GA</strong>, <strong>home remodeling Woodstock GA</strong>, <strong>roof replacement Woodstock GA</strong>, and <strong>deck repair Woodstock GA</strong>. Whether you need <strong>basement renovation Woodstock GA</strong>, <strong>bathroom renovations Woodstock</strong>, or a complete home transformation, our team delivers results Cherokee County homeowners love.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving Cherokee County and Beyond
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As leading <strong>finished basement contractors near Woodstock GA</strong>, we serve homeowners throughout:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['Woodstock', 'Canton', 'Holly Springs', 'Ball Ground', 'Towne Lake', 'Bridgemill', 'Eagle Watch', 'Kennesaw'].map((area) => (
                  <div key={area} className="flex items-center text-gray-600">
                    <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Hammer className="text-red-600 mr-3" size={24} />
                  The Phoenix Construction Difference
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Single point of contact throughout your project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Transparent pricing with no surprise change orders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Weekly progress photos and updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Workmanship warranty for your peace of mind</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Basement Estimate</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Looking for basement finishing Woodstock GA experts? Call us today!
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
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                    <div>
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
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your basement..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                      />
                    </div>
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
