import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, ChefHat, Shield, Sparkles, TrendingUp, Sun, Home, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function SpringKitchenRemodelingMarietta() {
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
      source: 'blog_spring_kitchen_remodeling_marietta',
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
              Spring Kitchen Remodeling Marietta GA: Why Cobb County Homeowners Are Renovating Now
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
                alt="Spring kitchen remodeling Marietta GA - Cobb County kitchen renovation"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Spring has arrived in Cobb County, and <strong>kitchen remodeling Marietta GA</strong> projects are booking up fast. For Marietta homeowners, spring is far more than a season of dogwoods and warm weather — it's the perfect window to invest in a <strong>kitchen remodel Marietta GA</strong> that transforms the heart of your home. From East Cobb estates to historic properties near Marietta Square, Phoenix Construction is helping families create kitchens they love.
              </p>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Home className="text-emerald-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Marietta's Kitchen Remodeling Season Is Here</h3>
                    <p className="text-gray-600">Cobb County's competitive real estate market rewards updated kitchens handsomely. Spring <strong>kitchen renovation Marietta GA</strong> projects consistently deliver some of the highest ROI of any home improvement, with updated kitchens recouping 60-80% of remodeling costs at resale.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                5 Reasons Spring Is Perfect for Kitchen Remodeling in Marietta GA
              </h2>

              <div className="space-y-6 my-8">
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Ideal Working Conditions</h3>
                    <p className="text-gray-600 text-sm">Georgia's spring temperatures are perfect for construction work. Contractors perform their best in mild weather, meaning better quality workmanship on your <strong>kitchen remodel Marietta GA</strong>.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Ready for Summer Entertaining</h3>
                    <p className="text-gray-600 text-sm">Begin your kitchen renovation in April and you'll have a stunning, functional kitchen ready for Memorial Day, July 4th cookouts, and all your summer hosting occasions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Spring Real Estate Market</h3>
                    <p className="text-gray-600 text-sm">If you're planning to sell, a renovated kitchen can set your Marietta home apart in spring's competitive market. Updated kitchens consistently sell faster and for more money.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Natural Light for Design Decisions</h3>
                    <p className="text-gray-600 text-sm">Spring's longer days give you more natural light to evaluate cabinet colors, countertop materials, and tile selections — so you make design choices you'll love for years.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Open Windows During Construction</h3>
                    <p className="text-gray-600 text-sm">Spring lets you ventilate your home naturally during demolition and painting phases, reducing dust, fumes, and disruption to your family's comfort.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                What Marietta Homeowners Are Choosing This Spring
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The most popular <strong>kitchen renovation Marietta GA</strong> features this season include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Custom inset cabinetry</strong> with soft-close hardware and built-in organizers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Waterfall-edge quartz islands</strong> that serve as a focal point and gathering hub</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Subway tile backsplashes</strong> in handmade and zellige styles for artisan character</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Professional-grade appliances</strong> — 48-inch ranges, panel-ready refrigerators, built-in coffee systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Warm wood accents</strong> — floating shelves, butcher block details, and natural wood hood surrounds</span>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Don't Wait — Spring Calendars Fill Up Fast</h3>
                <p className="text-gray-600 mb-4">
                  Phoenix Construction's spring schedule for <strong>kitchen remodeling Marietta GA</strong> is filling quickly. Call today for a free consultation and secure your spot.
                </p>
                <a href="tel:6784634893" className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                  <Phone size={20} className="mr-2" />
                  Call Now: (678) 463-4893
                </a>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Marietta Kitchen Remodeling Investment Guide
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Scope</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Investment</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Est. ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Minor Refresh</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$15,000 - $30,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">75-80%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Mid-Range Remodel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$30,000 - $65,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">65-75%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Full Renovation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$65,000 - $110,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">60-70%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Luxury Kitchen</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$110,000+</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">55-65%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="text-amber-400 mr-3" size={24} />
                  Marietta Kitchen Remodeling Areas Served
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['East Cobb', 'West Cobb', 'Marietta Square', 'Whitlock Ave', 'Lassiter', 'Walton', 'Pope', 'Sprayberry', 'Wheeler'].map((area) => (
                    <div key={area} className="flex items-center text-gray-300">
                      <Sparkles className="text-amber-400 mr-2 flex-shrink-0" size={14} />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Shield className="text-red-600 mr-3" size={24} />
                  Why Marietta Homeowners Choose Phoenix Construction
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Deep knowledge of Cobb County homes and building codes</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">20+ years of kitchen remodeling across Metro Atlanta</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Licensed, bonded, and insured</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} /><span className="text-gray-600">Comprehensive workmanship warranty</span></li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Free Marietta Kitchen Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">Spring spots are limited. Call now!</p>
                  <a href="tel:6784634893" className="flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-all w-full">
                    <Phone size={20} className="mr-2" />
                    (678) 463-4893
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Get Your Free Spring Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                      <option value="kitchen">Full Kitchen Remodel</option>
                      <option value="kitchen-cabinets">Cabinet Replacement</option>
                      <option value="kitchen-countertops">Countertops & Island</option>
                      <option value="kitchen-layout">Open Concept Layout</option>
                    </select>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your Marietta kitchen project..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70">
                      {isSubmitting ? <><Loader2 size={20} className="animate-spin mr-2" />Sending...</> : <><Send size={20} className="mr-2" />Get Free Estimate</>}
                    </button>
                  </form>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <TrendingUp className="text-amber-500 mr-2" size={18} />
                    Spring Kitchen ROI Facts
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Kitchen remodels average 65-75% ROI</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Updated kitchens sell homes 15% faster</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />#1 room buyers focus on</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Spring is peak buying season in GA</li>
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
