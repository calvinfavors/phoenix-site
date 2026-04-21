import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, ChefHat, Shield, Sparkles, TrendingUp, Sun, Clock, MapPin } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function SpringKitchenRemodelingWoodstock() {
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
      source: 'blog_spring_kitchen_remodeling_woodstock',
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
              Spring Kitchen Remodeling in Woodstock GA: Why Now Is the Best Time to Renovate
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
                alt="Spring kitchen remodeling Woodstock GA - beautiful kitchen renovation"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Spring is officially the best season for <strong>kitchen remodeling in Woodstock GA</strong> — and Woodstock homeowners who act now are already booking their spots with top contractors. Whether you've been dreaming of new cabinets, a fresh layout, or a complete <strong>kitchen renovation Woodstock GA</strong>, there's no better time than spring to make it happen. Here's why, and how Phoenix Construction can help.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Sun className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Spring 2026: The Kitchen Remodeling Sweet Spot</h3>
                    <p className="text-gray-600">Spring brings longer daylight hours, stable weather, and the natural urge to refresh your home. For Woodstock homeowners, this season is the perfect launching pad for a <strong>kitchen remodel Woodstock GA</strong> that will be enjoyed all year long.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Spring Is Prime Time for Kitchen Remodeling Woodstock GA
              </h2>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="text-amber-500" size={24} />
                    <h3 className="font-bold text-slate-900">Better Ventilation</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Open windows and fresh spring air make demolition, painting, and cabinet installation more comfortable for workers — and means less dust and fumes in your home.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="text-green-600" size={24} />
                    <h3 className="font-bold text-slate-900">Maximize Home Value</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Spring and summer are peak home-selling seasons. A renovated kitchen adds $30,000-$80,000+ to your home's value — and buyers pay premiums for updated kitchens.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-blue-600" size={24} />
                    <h3 className="font-bold text-slate-900">Be Ready for Summer Hosting</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Start your kitchen remodel in April or May and have your gorgeous new kitchen ready just in time for summer cookouts, graduation parties, and holiday gatherings.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-red-500" size={24} />
                    <h3 className="font-bold text-slate-900">Fresh Start Energy</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Spring naturally motivates renewal. Channel that energy into a kitchen renovation that will make cooking, gathering, and entertaining a true pleasure.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Top Spring Kitchen Remodeling Trends in Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Woodstock homeowners are embracing these popular kitchen updates this spring:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Open-Concept Layouts:</strong>
                    <span className="text-gray-600"> Removing walls between the kitchen and living areas to create the bright, airy spaces modern Woodstock families love. Perfect for spring's light-filled aesthetic.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Quartz Countertops:</strong>
                    <span className="text-gray-600"> Durable, low-maintenance, and stunning. White and light-gray quartz countertops are dominating Cherokee County kitchens in 2026.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Shaker-Style Cabinetry:</strong>
                    <span className="text-gray-600"> Classic, versatile, and perennially popular. Two-tone cabinets — white uppers and navy or forest green lowers — are a top trend this spring.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Kitchen Islands:</strong>
                    <span className="text-gray-600"> Extra prep space, casual seating, and a natural gathering point. Woodstock homeowners are adding or expanding islands in nearly every kitchen remodel.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-slate-900">Statement Lighting:</strong>
                    <span className="text-gray-600"> Pendant lights over islands, under-cabinet LEDs, and recessed lighting create layers of illumination that transform kitchen ambiance.</span>
                  </div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Kitchen Remodeling Woodstock GA: What to Expect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A complete <strong>kitchen renovation Woodstock GA</strong> typically includes:
              </p>

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
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Cosmetic Update</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$15,000 - $30,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">2-3 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Mid-Range Remodel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$30,000 - $60,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">4-6 weeks</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Full Renovation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$60,000 - $100,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">6-10 weeks</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Luxury Kitchen</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$100,000+</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">10-14 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Book Your Spring Slot Now — They Fill Fast</h3>
                <p className="text-gray-600 mb-4">
                  Spring is the busiest season for <strong>kitchen remodeling Woodstock GA</strong>. The best contractors book up fast. Contact Phoenix Construction today to secure your spring project window and receive a free, no-obligation estimate.
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
                Why Phoenix Construction for Your Spring Kitchen Remodel
              </h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Local Cherokee County expertise</strong> — we know Woodstock homes inside and out.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>20+ years of kitchen remodeling experience</strong> across Metro Atlanta.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Turnkey project management</strong> — design, permits, construction, and cleanup.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Transparent pricing</strong> with no surprises or hidden fees.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Licensed, bonded, and insured</strong> for your complete peace of mind.</span>
                </li>
              </ul>

              <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <ChefHat className="text-amber-400 mr-3" size={24} />
                  Woodstock Kitchen Remodeling Neighborhoods
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Tate Landing', 'Bradshaw Farm', 'Towne Lake', 'The Arbors', 'Eagle Watch', 'Woodstock Downtown', 'River Park', 'Wyngate', 'Woodmont'].map((area) => (
                    <div key={area} className="flex items-center text-gray-300">
                      <MapPin className="text-amber-400 mr-2 flex-shrink-0" size={14} />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Shield className="text-red-600 mr-3" size={24} />
                  The Phoenix Construction Promise
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Free in-home consultation and detailed estimate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">On-time project completion guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Workmanship warranty on all kitchen remodeling projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Daily cleanup — your home stays livable throughout the project</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">Start Your Spring Kitchen Remodel</h3>
                  <p className="text-gray-300 text-sm mb-4">Spring slots are filling fast. Call today to lock in your project dates!</p>
                  <a
                    href="tel:6784634893"
                    className="flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-all w-full"
                  >
                    <Phone size={20} className="mr-2" />
                    (678) 463-4893
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Get a Free Spring Estimate</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent" />
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent">
                      <option value="kitchen">Full Kitchen Remodel</option>
                      <option value="kitchen-cabinets">Cabinet Replacement</option>
                      <option value="kitchen-countertops">Countertops & Backsplash</option>
                      <option value="kitchen-layout">Layout Redesign</option>
                    </select>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your spring kitchen project..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70">
                      {isSubmitting ? <><Loader2 size={20} className="animate-spin mr-2" />Sending...</> : <><Send size={20} className="mr-2" />Get Free Estimate</>}
                    </button>
                  </form>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mt-6">
                  <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                    <Sun className="text-amber-500 mr-2" size={18} />
                    Spring Remodeling Tips
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Book early — spring fills up fast</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Order materials in advance to avoid delays</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Plan a temporary kitchen setup</li>
                    <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={14} />Budget 10-15% contingency</li>
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
