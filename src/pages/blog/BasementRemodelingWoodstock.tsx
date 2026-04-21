import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Shield, Tv, Dumbbell, Wine, Gamepad2, Hammer, Users } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BasementRemodelingWoodstock() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'basement',
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
      source: 'blog_basement_remodeling_woodstock',
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
                Basement Remodeling
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 28, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Basement Remodeling Woodstock GA: Basement Renovation, Basement Finishing &amp; Basement Remodel Contractors Woodstock GA
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/phoecon4.jpeg"
                alt="Basement remodeling Woodstock GA - finished living space"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Are you searching for <strong>basement remodeling Woodstock GA</strong> services? Whether you need <strong>basement finishing Woodstock GA</strong> to convert raw space, looking for trusted <strong>basement remodel contractors Woodstock GA</strong>, or planning a complete <strong>basement renovation Woodstock GA</strong> project, Phoenix Construction is your local expert. We're the <strong>finished basement contractors near Woodstock GA</strong> that homeowners trust.
              </p>

              <div className="bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Home className="text-slate-700 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Unlock Your Home's Hidden Potential</h3>
                    <p className="text-gray-600">Most Woodstock homes have 800-1,500+ square feet of unfinished basement space. <strong>Basement remodeling Woodstock GA</strong> projects typically cost 50-70% less per square foot than building an addition, making it one of the smartest home investments you can make.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular Basement Remodeling Ideas for Woodstock Homes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When it comes to <strong>basement finishing Woodstock GA</strong> projects, homeowners are creating incredible spaces:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Tv className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Home Theater</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Soundproofed rooms with projector screens, surround sound, and comfortable seating for the ultimate movie experience.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Wine className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Wet Bar & Entertainment</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Custom bars with wine storage, beverage centers, and seating areas for hosting friends and family.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Dumbbell className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Home Gym</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Rubber flooring, mirrors, and proper ventilation for a workout space that rivals commercial gyms.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Gamepad2 className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Game Room</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Pool tables, arcade games, and gaming setups for family fun and entertaining.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">In-Law Suite</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Complete living quarters with bedroom, bathroom, and kitchenette for extended family or rental income.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Home Office</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Quiet, dedicated workspace away from household distractions for remote work productivity.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Local Basement Remodel Contractors Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When searching for <strong>basement remodel contractors Woodstock GA</strong> homeowners trust, Phoenix Construction offers distinct advantages:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Georgia Code Expertise:</strong> We understand Cherokee County building codes for egress windows, ceiling heights, and safety requirements.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Moisture Management:</strong> We address Georgia's humidity challenges with proper waterproofing and vapor barriers.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Radon Testing:</strong> We can coordinate radon testing and mitigation if needed for your basement renovation Woodstock GA project.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Permit Handling:</strong> We manage all Cherokee County permits and inspections for a hassle-free experience.</span>
                </li>
              </ul>

              <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4">Our Basement Finishing Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold">Assessment & Planning</h4>
                      <p className="text-gray-400 text-sm">Evaluate moisture levels, check for issues, and design your ideal layout</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold">Waterproofing & Prep</h4>
                      <p className="text-gray-400 text-sm">Address any moisture issues and prepare the space for construction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold">Framing & Rough-Ins</h4>
                      <p className="text-gray-400 text-sm">Build walls, run electrical, plumbing, and HVAC as needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold">Insulation & Drywall</h4>
                      <p className="text-gray-400 text-sm">Insulate for comfort and energy efficiency, then finish walls and ceilings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-semibold">Flooring & Finishes</h4>
                      <p className="text-gray-400 text-sm">Install flooring, paint, trim, lighting, and all final touches</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Finish Your Basement?</h3>
                <p className="text-gray-600 mb-4">
                  As experienced <strong>finished basement contractors near Woodstock GA</strong>, we're ready to transform your unfinished space. Contact Phoenix Construction for a free <strong>basement remodeling Woodstock GA</strong> consultation!
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
                Basement Renovation Woodstock GA Cost Factors
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Investment for <strong>basement renovation Woodstock GA</strong> projects varies based on:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Project Scope</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Basic Finish (800 sq ft)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$30,000 - $50,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Mid-Range with Bathroom</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$50,000 - $80,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">High-End Entertainment Space</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$80,000 - $120,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Full In-Law Suite</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$100,000 - $150,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Essential Basement Finishing Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Must-Haves</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Egress windows for bedrooms</li>
                    <li>- Proper ceiling height (7'+ minimum)</li>
                    <li>- Moisture barrier and waterproofing</li>
                    <li>- Adequate lighting plan</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Popular Upgrades</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- LVP or engineered flooring</li>
                    <li>- Drop or coffered ceilings</li>
                    <li>- Recessed LED lighting</li>
                    <li>- Mini-split HVAC system</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Hammer className="text-red-600 mr-3" size={24} />
                  Why Choose Phoenix Construction
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">20+ years of basement remodeling experience in Metro Atlanta</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">In-house design team for custom layouts and 3D visualization</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">All trades under one roof - electrical, plumbing, HVAC, and finish work</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Clear communication with weekly progress updates</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Basement Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready for basement remodeling Woodstock GA? Call us today for a free estimate!
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
                        <option value="basement">Full Basement Finish</option>
                        <option value="entertainment">Entertainment Space</option>
                        <option value="in-law-suite">In-Law Suite</option>
                        <option value="home-gym">Home Gym</option>
                        <option value="home-office">Home Office</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your basement project..."
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
