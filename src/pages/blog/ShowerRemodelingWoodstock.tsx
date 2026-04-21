import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Droplets, Shield, Clock, Home, ArrowRight, Hammer, Sparkles } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function ShowerRemodelingWoodstock() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'shower-remodel',
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
      source: 'blog_shower_remodel_woodstock',
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
                Shower Remodeling
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 29, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Shower Remodel Woodstock GA & Tub to Shower Conversion: Transform Your Bathroom
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/phoecon3.jpeg"
                alt="Shower remodel Woodstock GA - modern walk-in shower"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Looking for a <strong>shower remodel Woodstock GA</strong> that transforms your daily routine? Or considering a <strong>tub to shower conversion Woodstock GA</strong> to create more functional space? Phoenix Construction specializes in both, delivering beautiful, modern showers that Woodstock homeowners love.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Droplets className="text-blue-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Why Homeowners Choose Shower Remodels</h3>
                    <p className="text-gray-600">Over 60% of homeowners prefer showers over tubs for daily use. A <strong>tub to shower conversion Woodstock GA</strong> project can increase your bathroom's functionality and appeal while often adding value to your home.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Shower Remodel Woodstock GA: Our Specialties
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our <strong>shower remodel Woodstock GA</strong> services include a wide range of options to fit your style, space, and budget:
              </p>

              <div className="grid gap-4 my-8">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">1</span>
                    Walk-In Showers
                  </h3>
                  <p className="text-gray-600 text-sm ml-11">Curbless or low-threshold designs for easy entry. Perfect for aging-in-place planning or modern aesthetics.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">2</span>
                    Frameless Glass Enclosures
                  </h3>
                  <p className="text-gray-600 text-sm ml-11">Sleek, modern frameless or semi-frameless glass doors that make bathrooms feel larger and brighter.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">3</span>
                    Custom Tile Showers
                  </h3>
                  <p className="text-gray-600 text-sm ml-11">Floor-to-ceiling tile with decorative accents, niches, and benches for a truly custom look.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center mr-3 text-sm font-bold">4</span>
                    Multi-Head Shower Systems
                  </h3>
                  <p className="text-gray-600 text-sm ml-11">Rain heads, body sprays, and handheld combinations for the ultimate shower experience.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Tub to Shower Conversion Woodstock GA: Is It Right for You?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A <strong>tub to shower conversion Woodstock GA</strong> project might be perfect if:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">You rarely use your bathtub and prefer showers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">You want easier accessibility without a high step-over</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Your bathroom feels cramped with a tub taking up space</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">You're planning to age in place and want a safer bathing option</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">You have at least one other bathtub in your home for resale value</span>
                </li>
              </ul>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-8">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                  <Shield className="text-amber-600 mr-2" size={20} />
                  Important Consideration
                </h3>
                <p className="text-gray-600 text-sm">
                  If your home only has one bathroom, consider keeping at least one tub for families with young children and resale appeal. Our team can help you evaluate the best approach for your <strong>tub to shower conversion Woodstock GA</strong> project.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                What's Included in Our Shower Remodel Process
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every <strong>shower remodel Woodstock GA</strong> project includes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Demolition & Prep</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Careful removal of existing fixtures</li>
                    <li>- Subfloor inspection and repair</li>
                    <li>- Plumbing rough-in adjustments</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Waterproofing</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Membrane system installation</li>
                    <li>- Proper slope for drainage</li>
                    <li>- Curb or curbless construction</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Tile & Finishes</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Expert tile installation</li>
                    <li>- Built-in niches and benches</li>
                    <li>- Quality grout and sealant</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-bold text-slate-900 mb-2">Fixtures & Glass</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Premium showerheads and valves</li>
                    <li>- Glass door installation</li>
                    <li>- Final trim and accessories</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready for Your Shower Remodel?</h3>
                <p className="text-gray-600 mb-4">
                  Whether you need a <strong>shower remodel Woodstock GA</strong> update or a complete <strong>tub to shower conversion Woodstock GA</strong>, Phoenix Construction delivers stunning results. Contact us today for your free consultation!
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
                Shower Remodel Woodstock GA Timeline & Costs
              </h2>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <Clock className="text-red-600 mb-3" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">Typical Timeline</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Basic Shower Remodel:</strong> 5-7 days</li>
                    <li><strong>Tub to Shower Conversion:</strong> 7-10 days</li>
                    <li><strong>Custom Walk-In Shower:</strong> 10-14 days</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <Sparkles className="text-red-600 mb-3" size={28} />
                  <h3 className="font-bold text-slate-900 mb-2">Investment Range</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li><strong>Shower Update:</strong> $5,000-$12,000</li>
                    <li><strong>Tub to Shower:</strong> $8,000-$18,000</li>
                    <li><strong>Custom Walk-In:</strong> $15,000-$30,000</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular Shower Upgrade Features
              </h2>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                {[
                  'Rain Showerhead',
                  'Body Spray Jets',
                  'Built-In Bench',
                  'Recessed Niches',
                  'Linear Drain',
                  'Heated Tile Floor',
                  'Steam Shower',
                  'Handheld Sprayer',
                  'LED Lighting',
                ].map((feature) => (
                  <div key={feature} className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    <ArrowRight className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Hammer className="text-red-600 mr-3" size={24} />
                  Why Phoenix Construction for Your Shower Remodel
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Expert waterproofing to prevent leaks and mold</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Skilled tile installers for flawless finishes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Licensed plumbers for proper valve and drain work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Clear communication throughout your project</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Shower Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Planning a shower remodel Woodstock GA or tub to shower conversion? Call us today!
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
                        <option value="shower-remodel">Shower Remodel</option>
                        <option value="tub-conversion">Tub to Shower Conversion</option>
                        <option value="walk-in-shower">Walk-In Shower</option>
                        <option value="glass-enclosure">Glass Enclosure</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your shower project..."
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
