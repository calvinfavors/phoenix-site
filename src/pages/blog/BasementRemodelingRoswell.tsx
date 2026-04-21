import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Shield, Tv, Wine, Gamepad2, Hammer, MapPin, Users, DollarSign } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BasementRemodelingRoswell() {
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
      source: 'blog_basement_remodeling_roswell',
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
                March 25, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Basement Remodeling Roswell GA: Expert Basement Renovation &amp; Basement Finishing Near Woodstock GA
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9316.JPG"
                alt="Basement remodeling Roswell GA - custom bar area"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Looking for <strong>basement remodeling Roswell GA</strong> services? Roswell homeowners know that an unfinished basement represents untapped potential — often 1,000+ square feet of prime real estate sitting unused. Phoenix Construction, the trusted <strong>general contractor Woodstock GA</strong> and North Fulton specialist, delivers expert <strong>basement remodeling Roswell GA</strong> projects that transform these spaces into beautiful, functional living areas. From <strong>basement finishing</strong> and <strong>basement renovation</strong> to complete <strong>home remodeling</strong>, we serve Roswell, Woodstock, and all of Metro Atlanta.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Maximize Your Roswell Home's Value</h3>
                    <p className="text-gray-600">In Roswell's competitive real estate market, a finished basement can add $50,000-$150,000 to your home's value. <strong>Basement remodeling Roswell GA</strong> projects offer one of the highest ROIs of any home improvement - often 70-85% return on investment.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular Basement Ideas for Roswell Homes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Roswell homeowners are creating incredible spaces with <strong>basement remodeling Roswell GA</strong> projects:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Tv className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Home Theater</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Roswell families love dedicated theater rooms with tiered seating, 4K projection, and Dolby Atmos sound systems.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Wine className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Wine Cellar & Bar</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Climate-controlled wine storage with custom wet bars for entertaining in North Fulton style.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Gamepad2 className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Game Room</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Pool tables, arcade games, poker rooms, and golf simulators for family fun and entertaining.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Guest Suite</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Complete living quarters for visiting family, au pairs, or rental income potential.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Phoenix for Basement Remodeling Roswell GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For your <strong>basement remodeling Roswell GA</strong> project, Phoenix Construction offers:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>North Fulton Expertise:</strong> We understand Roswell's unique homes, from historic downtown properties to newer Northwood and Mountain Park estates.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Quality That Matches Your Home:</strong> Premium finishes and attention to detail that Roswell homeowners expect.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Complete Project Management:</strong> From design through completion, we handle every detail.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Fulton County Permits:</strong> We navigate all permitting requirements for a hassle-free experience.</span>
                </li>
              </ul>

              <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4">Our Roswell Basement Finishing Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold">Design Consultation</h4>
                      <p className="text-gray-400 text-sm">We visit your Roswell home to assess the space and discuss your vision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold">Custom Design</h4>
                      <p className="text-gray-400 text-sm">Our team creates a layout optimized for your lifestyle and budget</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold">Expert Construction</h4>
                      <p className="text-gray-400 text-sm">Our skilled craftsmen bring your basement remodeling Roswell GA project to life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold">Final Walkthrough</h4>
                      <p className="text-gray-400 text-sm">We ensure every detail exceeds your expectations before project completion</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Roswell Basement Quote</h3>
                <p className="text-gray-600 mb-4">
                  Ready to unlock your basement's potential? Contact Phoenix Construction for a free <strong>basement remodeling Roswell GA</strong> consultation and estimate!
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
                Basement Remodeling Roswell GA Investment Guide
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Project Scope</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Basic Recreation Room</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$40,000 - $60,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Multi-Room with Bathroom</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$60,000 - $90,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Entertainment Level (Bar, Theater)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$90,000 - $140,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Full In-Law Suite</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$120,000 - $180,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Roswell Neighborhoods We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {['Historic Roswell', 'Northwood', 'Mountain Park', 'Horseshoe Bend', 'Martins Landing', 'Willow Springs', 'Tuxedo Park', 'Roswell Village', 'Cameron Court'].map((area) => (
                  <div key={area} className="flex items-center text-gray-600">
                    <MapPin className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Hammer className="text-red-600 mr-3" size={24} />
                  The Phoenix Construction Guarantee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">20+ years of basement finishing experience</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Licensed, bonded, and fully insured</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Comprehensive workmanship warranty</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Transparent pricing with no surprise costs</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Roswell Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready for basement remodeling Roswell GA? Call us today!
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
                        <option value="theater">Home Theater</option>
                        <option value="bar">Bar & Entertainment</option>
                        <option value="in-law-suite">In-Law Suite</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your Roswell basement project..."
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
