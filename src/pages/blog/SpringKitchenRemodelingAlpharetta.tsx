import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, ChefHat, Shield, Award, TrendingUp, Sun, Star, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function SpringKitchenRemodelingAlpharetta() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'kitchen',
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
      source: 'blog_spring_kitchen_remodeling_alpharetta',
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
            <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-semibold text-amber-400 bg-amber-900/30 px-3 py-1 rounded-full">
                Kitchen Remodeling
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 9, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Spring Kitchen Remodeling Alpharetta GA: Luxury Kitchen Renovations for North Fulton Homes
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9322.JPG"
                alt="Spring kitchen remodeling Alpharetta GA - luxury North Fulton kitchen renovation"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Alpharetta homeowners have high standards — and spring is when the most ambitious <strong>kitchen remodeling Alpharetta GA</strong> projects get underway. For North Fulton's discerning homeowners in communities like Windward, Country Club of the South, and St. Ives, a spring <strong>kitchen remodel Alpharetta GA</strong> is both a lifestyle upgrade and a savvy investment. Phoenix Construction delivers the premium craftsmanship that Alpharetta kitchens demand.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Award className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Alpharetta's Premier Spring Kitchen Specialists</h3>
                    <p className="text-gray-600">In Alpharetta's luxury real estate market, kitchens can make or break a home sale. A premium <strong>kitchen renovation Alpharetta GA</strong> completed this spring positions your home at the top of the market — whether you're staying or selling.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Spring Is the Best Time for Kitchen Remodeling in Alpharetta GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                North Fulton homeowners who renovate their kitchens this spring benefit from several strategic advantages:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-green-600" size={24} />
                    <h3 className="font-bold text-slate-900">Peak Real Estate Season</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Spring and summer are when Alpharetta's most desirable properties move. A new kitchen completed by May or June can dramatically improve your negotiating position.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="text-amber-500" size={24} />
                    <h3 className="font-bold text-slate-900">Natural Light Decisions</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Spring's abundant natural light is invaluable when selecting cabinet finishes, countertop materials, and tile colors — ensuring your choices look stunning in real-world conditions.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ChefHat className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Summer Hosting Ready</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Alpharetta's social scene peaks in summer. A finished spring kitchen renovation means you'll host with confidence in your new gourmet space all season long.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="text-amber-500" size={24} />
                    <h3 className="font-bold text-slate-900">Secure Top Contractors</h3>
                  </div>
                  <p className="text-gray-600 text-sm">The best kitchen remodeling contractors in Alpharetta GA are in high demand. Booking in spring ensures you get the team that delivers luxury-level results.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Luxury Kitchen Features Alpharetta Homeowners Are Choosing in Spring 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most sought-after elements in this spring's <strong>kitchen remodeling Alpharetta GA</strong> projects:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Chef-Grade Appliances:</strong>
                    <span className="text-gray-600"> Wolf, Sub-Zero, and Miele appliance suites that turn everyday cooking into a gourmet experience. Panel-ready refrigerators that blend seamlessly into custom cabinetry.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Oversized Waterfall Islands:</strong>
                    <span className="text-gray-600"> 10-12 foot islands with waterfall-edge calacatta quartz, deep prep sinks, warming drawers, and seating for 4-6 — the centerpiece of any Alpharetta kitchen.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Full-Height Custom Cabinetry:</strong>
                    <span className="text-gray-600"> Floor-to-ceiling custom cabinets with integrated appliance garages, spice pullouts, and pantry systems that maximize every inch of space.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Dramatic Backsplashes:</strong>
                    <span className="text-gray-600"> Full-slab marble or quartzite backsplashes behind the range, arabesque tile, and handmade ceramic for one-of-a-kind visual impact.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Butler's Pantry & Wine Room:</strong>
                    <span className="text-gray-600"> Dedicated wine storage, a secondary prep sink, and additional cabinetry that make entertaining effortless in your renovated Alpharetta kitchen.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Your Spring Kitchen Remodel in Alpharetta</h3>
                <p className="text-gray-600 mb-4">
                  Phoenix Construction's spring calendar for <strong>kitchen remodeling Alpharetta GA</strong> is filling up. Contact us today for a free in-home consultation and detailed estimate.
                </p>
                <a href="tel:6784634893" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                  <Phone size={20} className="mr-2" />
                  Call Now: (678) 463-4893
                </a>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Alpharetta Kitchen Remodeling Investment Guide
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Project Scope</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Investment Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Premium Refresh</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$40,000 - $70,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">3-5 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Full Renovation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$70,000 - $130,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">6-10 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Luxury Kitchen</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$130,000 - $200,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">10-14 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Ultra-Premium Build</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$200,000+</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">14-20 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="text-amber-400 mr-3" size={24} />
                  Alpharetta Communities We Serve
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Windward', 'Country Club of the South', 'St Ives', 'The Manor', 'Polo Fields', 'Crooked Creek', 'Seven Oaks', 'Preston Reserve', 'Haynes Manor'].map((area) => (
                    <div key={area} className="flex items-center text-gray-300">
                      <Star className="text-amber-400 mr-2 flex-shrink-0" size={14} />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Shield className="text-red-600 mr-3" size={24} />
                  The Phoenix Construction Difference
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">20+ years serving North Fulton's most prestigious communities</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Access to premium luxury materials and custom cabinetry</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Licensed, bonded, and fully insured</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Workmanship warranty on every kitchen project</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Transparent pricing — no surprises, no hidden costs</span></li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Free Alpharetta Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">Spring slots are limited. Book yours today!</p>
                  <a href="tel:6784634893" className="flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-all w-full">
                    <Phone size={20} className="mr-2" />
                    (678) 463-4893
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Get Your Free Spring Estimate</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                      <option value="kitchen">Full Kitchen Remodel</option>
                      <option value="kitchen-cabinets">Custom Cabinetry</option>
                      <option value="kitchen-luxury">Luxury Kitchen Build</option>
                      <option value="kitchen-butlers-pantry">Butler's Pantry Addition</option>
                    </select>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your Alpharetta kitchen project..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70">
                      {isSubmitting ? <><Loader2 size={20} className="animate-spin mr-2" />Sending...</> : <><Send size={20} className="mr-2" />Get Free Estimate</>}
                    </button>
                  </form>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <Award className="text-amber-500 mr-2" size={18} />
                    Alpharetta Kitchen Value Facts
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Kitchens add $50K-$150K+ to home value</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />North Fulton buyers prioritize kitchens</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Spring = strongest buyer demand</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Best contractors book 2-3 months out</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
