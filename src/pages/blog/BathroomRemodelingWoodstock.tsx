import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Sparkles, Hammer, Shield, Clock, Home, Bath, Ruler, DollarSign, Star } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BathroomRemodelingWoodstock() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'bathroom',
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
      source: 'blog_bathroom_remodeling_woodstock',
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
                Bathroom Remodeling
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 30, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bathroom Remodeling Woodstock GA: Expert Bathroom Renovation, Bathroom Remodel Contractors &amp; Bathroom Renovations Woodstock
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/phoecon1.jpeg"
                alt="Bathroom remodeling Woodstock GA - luxury shower renovation"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Are you searching for <strong>bathroom remodeling Woodstock GA</strong> services? Whether you need a complete <strong>bathroom remodel Woodstock GA</strong> transformation, a simple <strong>bathroom renovation Woodstock GA</strong> update, or you're looking for the best <strong>bathroom remodel contractors Woodstock GA</strong> has to offer, Phoenix Construction is here to bring your vision to life. We're the <strong>bathroom remodel near me Woodstock GA</strong> solution homeowners trust.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Star className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Why Woodstock Homeowners Choose Us</h3>
                    <p className="text-gray-600">With 20+ years of experience in bathroom remodeling Woodstock GA, we've transformed hundreds of bathrooms throughout Cherokee County. Our local expertise means we understand the unique needs of Woodstock homes.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Complete Bathroom Remodeling Services in Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When it comes to <strong>bathroom remodeling Woodstock GA</strong>, our comprehensive services cover every aspect of your renovation project. From initial design consultation to final walkthrough, we handle every detail with precision and care.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Bath className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Full Bathroom Remodel</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Complete transformation including layout changes, new fixtures, tile, vanities, and lighting for a total bathroom renovation Woodstock GA experience.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Master Bath Luxury</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Create your spa-like retreat with freestanding tubs, walk-in showers, heated floors, and premium finishes.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Ruler className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Guest Bath Updates</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Functional, stylish updates for guest bathrooms that impress visitors without breaking the budget.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Powder Room Refresh</h3>
                  </div>
                  <p className="text-gray-600 text-sm">High-impact updates for half baths that make a statement with bold design choices.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Local Bathroom Remodel Contractors Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When searching for <strong>bathroom remodel contractors Woodstock GA</strong> homeowners trust, choosing local makes a difference. Here's why Phoenix Construction stands out as your <strong>bathroom remodel near me Woodstock GA</strong> solution:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Local Knowledge:</strong> We understand Woodstock's housing styles, from Towne Lake communities to downtown historic homes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Quick Response:</strong> As local bathroom remodel contractors Woodstock GA, we're just minutes away for consultations and service.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Reputation Matters:</strong> We've built our business on referrals from satisfied Woodstock neighbors.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Permit Expertise:</strong> We navigate Cherokee County permitting requirements efficiently.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Established Relationships:</strong> Our partnerships with local suppliers mean better materials and pricing.</span>
                </li>
              </ul>

              <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="text-red-500 mr-3" size={24} />
                  Our Bathroom Remodeling Process
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-semibold">Free Consultation</h4>
                      <p className="text-gray-400 text-sm">We visit your home to discuss your vision and assess the space</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold">Design & Selection</h4>
                      <p className="text-gray-400 text-sm">Choose materials, fixtures, and finalize your bathroom design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold">Expert Installation</h4>
                      <p className="text-gray-400 text-sm">Our skilled craftsmen bring your bathroom remodel Woodstock GA to life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold">Final Walkthrough</h4>
                      <p className="text-gray-400 text-sm">We review every detail to ensure your complete satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular Bathroom Renovation Woodstock GA Trends
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our <strong>bathroom renovation Woodstock GA</strong> projects often incorporate these popular 2026 design trends:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-slate-900">Walk-In Showers with Linear Drains</h3>
                  <p className="text-gray-600 text-sm">Curbless entries with large-format tile create seamless, modern looks while improving accessibility.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-slate-900">Double Vanities with Storage</h3>
                  <p className="text-gray-600 text-sm">His-and-hers sinks with floating vanities and built-in organization systems.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-slate-900">Statement Tile Walls</h3>
                  <p className="text-gray-600 text-sm">Dramatic accent walls using zellige, marble, or textured tile as focal points.</p>
                </div>
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-slate-900">Warm Metal Finishes</h3>
                  <p className="text-gray-600 text-sm">Brushed gold, matte black, and champagne bronze hardware and fixtures.</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready for Your Bathroom Remodel Woodstock GA?</h3>
                <p className="text-gray-600 mb-4">
                  Stop searching for "bathroom remodel near me Woodstock GA" - you've found the right team. Phoenix Construction delivers exceptional <strong>bathroom remodeling Woodstock GA</strong> results that exceed expectations. Contact us today for your free consultation!
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
                Bathroom Remodel Woodstock GA Cost Guide
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding the investment for your <strong>bathroom remodel Woodstock GA</strong> project helps with planning:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Project Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Powder Room Update</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$5,000 - $15,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Guest Bath Remodel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$15,000 - $30,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Master Bath Renovation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$25,000 - $50,000+</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Luxury Master Suite</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$50,000 - $100,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                More Home Remodeling Services from Your General Contractor Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As your trusted <strong>general contractor Woodstock GA</strong>, Phoenix Construction offers far more than <strong>bathroom renovations Woodstock</strong>. We are Cherokee County's full-service <strong>home remodeling Woodstock GA</strong> company — from <strong>basement finishing Woodstock GA</strong> and <strong>basement remodeling Woodstock GA</strong> to <strong>kitchen remodeling Woodstock GA</strong>, <strong>roof replacement Woodstock GA</strong>, and custom <strong>Woodstock deck builders</strong>. Our <strong>Woodstock builders</strong> handle every trade under one roof.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving All of Cherokee County and Metro Atlanta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we specialize in <strong>bathroom remodeling Woodstock GA</strong>, our <strong>bathroom remodel near me Woodstock GA</strong> service area extends throughout the region:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['Woodstock', 'Canton', 'Holly Springs', 'Ball Ground', 'Towne Lake', 'Bridgemill', 'Eagle Watch', 'Hickory Flat'].map((area) => (
                  <div key={area} className="flex items-center text-gray-600">
                    <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span>{area}</span>
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
                    <span className="text-gray-600">Licensed, bonded, and insured for your protection</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Detailed written contracts with no hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Workmanship warranty on all bathroom renovation Woodstock GA projects</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Clean, respectful crews who treat your home like their own</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Bathroom Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready for your bathroom remodeling Woodstock GA project? Call us today!
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
                        <option value="bathroom">Bathroom Remodel</option>
                        <option value="master-bath">Master Bath Renovation</option>
                        <option value="guest-bath">Guest Bath Update</option>
                        <option value="shower-remodel">Shower Remodel</option>
                        <option value="tub-conversion">Tub to Shower Conversion</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your bathroom project..."
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
