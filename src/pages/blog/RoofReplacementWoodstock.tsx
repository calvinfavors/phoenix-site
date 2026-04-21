import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Shield, Clock, Award, AlertTriangle, Home, Wrench } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function RoofReplacementWoodstock() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'roofing',
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
      source: 'blog_roof_replacement',
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
                Roofing
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 10, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Roof Replacement Woodstock GA: Roofing Woodstock GA Experts | General Contractor Woodstock GA
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9320.JPG"
                alt="Professional roof replacement in Woodstock GA"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Is your roof showing its age? If you're searching for <strong>roof replacement Woodstock GA</strong> services or a trusted <strong>roofing Woodstock GA</strong> contractor, Phoenix Construction is Cherokee County's premier choice. As a full-service <strong>general contractor Woodstock GA</strong>, we handle complete roof replacements, storm damage repairs, and inspections for <strong>home remodeling Woodstock GA</strong> clients throughout the area. This comprehensive guide covers everything you need to know about working with the best <strong>roofing Woodstock GA</strong> professionals.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Warning Signs You Need Roof Replacement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before investing in <strong>roof replacement Woodstock GA</strong> services, it's important to recognize the telltale signs that your roof has reached the end of its lifespan. Here's what experienced <strong>roofing Woodstock GA</strong> professionals look for:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Age of Roof</h3>
                      <p className="text-gray-600 text-sm">Most asphalt shingle roofs last 20-25 years. If yours is approaching this age, it's time for an inspection.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Curling Shingles</h3>
                      <p className="text-gray-600 text-sm">Shingles that curl at the edges or cup in the middle indicate weathering and potential leaks.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Missing Shingles</h3>
                      <p className="text-gray-600 text-sm">Bare spots leave your roof deck exposed to water damage and should be addressed immediately.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Granule Loss</h3>
                      <p className="text-gray-600 text-sm">Excessive granules in gutters signal advanced shingle deterioration and reduced protection.</p>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Daylight through roof boards:</strong> If you can see light in your attic, water can get in too.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Sagging roof deck:</strong> This indicates structural damage that requires immediate attention.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Water stains on ceilings:</strong> Interior damage often points to roof failure above.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Higher energy bills:</strong> Poor roof ventilation and insulation drive up HVAC costs.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Professional Roofing in Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When it comes to <strong>roofing Woodstock GA</strong> homeowners need, working with licensed professionals isn't optional - it's essential. Cherokee County has specific building codes, and Georgia's climate demands proper installation techniques to ensure your roof withstands everything Mother Nature throws at it.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Shield className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600 text-sm">Full protection for your home and peace of mind</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Award className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Manufacturer Certified</h3>
                  <p className="text-gray-600 text-sm">Extended warranty coverage on materials</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Clock className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Timely Service</h3>
                  <p className="text-gray-600 text-sm">Most roofs completed in 1-3 days</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Roofing Materials for Georgia Homes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When discussing <strong>roof replacement Woodstock GA</strong> options with contractors, you'll encounter several material choices, each with distinct advantages for our region:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Architectural Asphalt Shingles</h3>
                  <p className="text-gray-600 text-sm mb-2">The most popular choice for <strong>roofing Woodstock GA</strong> homes. These dimensional shingles offer excellent durability (30-50 year lifespan), wind resistance up to 130 mph, and come in numerous colors and styles to complement any home.</p>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">Best Value</span>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Metal Roofing</h3>
                  <p className="text-gray-600 text-sm mb-2">Growing in popularity for its 50+ year lifespan, energy efficiency (reflects solar heat), and exceptional durability. Standing seam and metal shingles offer modern or traditional aesthetics.</p>
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded">Premium Option</span>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Slate and Tile</h3>
                  <p className="text-gray-600 text-sm mb-2">For homeowners seeking luxury and longevity (75-100+ years), slate and clay tile roofs provide unmatched beauty and durability, though they require proper structural support.</p>
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded">Luxury Choice</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Roof Replacement Process
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding what happens during a <strong>roof replacement Woodstock GA</strong> project helps set proper expectations. Here's the typical process Phoenix Construction follows:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
                <li><strong>Initial Inspection:</strong> We thoroughly assess your current roof, attic, and ventilation system.</li>
                <li><strong>Detailed Estimate:</strong> You receive a comprehensive quote with material options and warranties explained.</li>
                <li><strong>Material Selection:</strong> Choose from a wide range of shingles, colors, and accessories.</li>
                <li><strong>Permit Acquisition:</strong> We handle all Cherokee County building permits.</li>
                <li><strong>Old Roof Removal:</strong> Complete tear-off down to the deck for proper installation.</li>
                <li><strong>Deck Inspection & Repair:</strong> Any damaged decking is replaced before new materials go on.</li>
                <li><strong>Underlayment & Flashing:</strong> Critical waterproofing layers are installed per code.</li>
                <li><strong>Shingle Installation:</strong> New roofing materials installed using manufacturer specifications.</li>
                <li><strong>Cleanup & Final Inspection:</strong> Magnetic sweeps, debris removal, and quality check.</li>
              </ol>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Need a Roof Inspection?</h3>
                <p className="text-gray-600 mb-4">
                  Whether you suspect damage or just want peace of mind, Phoenix Construction offers free roof inspections for Woodstock homeowners. Don't wait until a small problem becomes a major expense.
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
                Insurance Claims and Storm Damage
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Georgia sees its fair share of severe weather, and many <strong>roof replacement Woodstock GA</strong> projects are covered by homeowner's insurance. If your roof has storm damage, Phoenix Construction can:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Document damage with detailed photos and reports for your claim</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Meet with your insurance adjuster to ensure nothing is overlooked</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Work directly with your insurance company on pricing and scope</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Handle all repairs to manufacturer and code specifications</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving All of North Georgia
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we specialize in <strong>roofing Woodstock GA</strong> homes, Phoenix Construction provides expert roof replacement throughout Cherokee County and the greater Metro Atlanta area. Our service area includes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['Woodstock', 'Canton', 'Kennesaw', 'Marietta', 'Acworth', 'Roswell', 'Alpharetta', 'Holly Springs'].map((city) => (
                  <div key={city} className="flex items-center text-gray-600">
                    <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Wrench className="text-red-600 mr-3" size={24} />
                  Why Phoenix Construction for Your Roof?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Local Woodstock company - we're your neighbors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">GAF and Owens Corning certified installers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Workmanship warranty on all installations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">5-star rated on Google with 100+ reviews</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Roof Inspection</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Concerned about your roof? Call us for a no-obligation inspection today!
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Request a Free Quote</h3>
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
                        <option value="roofing">Roof Replacement</option>
                        <option value="roof-repair">Roof Repair</option>
                        <option value="storm-damage">Storm Damage Claim</option>
                        <option value="inspection">Roof Inspection</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your roofing needs..."
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
