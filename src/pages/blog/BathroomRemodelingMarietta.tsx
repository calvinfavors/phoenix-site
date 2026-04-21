import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Sparkles, Hammer, Shield, Clock, Home, Bath, Ruler, DollarSign } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BathroomRemodelingMarietta() {
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
      source: 'blog_bathroom_marietta',
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
                March 14, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bathroom Renovations & Remodeling in Woodstock, Marietta, and Beyond: Transform Your Space
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9318.JPG"
                alt="Beautiful bathroom remodel in Woodstock GA"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Are you dreaming of a spa-like retreat in your own home? Whether you're searching for <strong>bathroom renovations Woodstock</strong>, <strong>bathroom remodel Woodstock GA</strong> contractors, or a trusted <strong>construction company Marietta GA</strong>, you've come to the right place. A well-executed <strong>bathroom remodel Woodstock</strong> project can transform one of your most-used spaces while adding significant value to your home.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Invest in Bathroom Remodeling?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Bathroom renovations Woodstock</strong> homeowners undertake consistently rank among the best home improvement investments. According to industry data, a mid-range bathroom remodel can recoup 60-70% of its cost at resale, while a luxury renovation can return even more in the right market.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="text-green-600" size={24} />
                    <h3 className="font-bold text-slate-900">Increased Home Value</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Updated bathrooms are among the top features buyers look for, making your home more competitive on the market.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-blue-600" size={24} />
                    <h3 className="font-bold text-slate-900">Daily Enjoyment</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Start and end each day in a beautiful, functional space designed around your lifestyle and preferences.</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Bath className="text-amber-600" size={24} />
                    <h3 className="font-bold text-slate-900">Improved Functionality</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Fix layout issues, add storage, and upgrade fixtures to make your bathroom work better for your family.</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Address Hidden Issues</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Remodeling reveals and fixes water damage, mold, and outdated plumbing before they become major problems.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular Bathroom Remodeling Styles in Metro Atlanta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When working with a <strong>construction company Marietta GA</strong> homeowners recommend, or pursuing <strong>bathroom remodel Woodstock GA</strong> services, you'll find several popular design directions trending in 2026:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Modern Spa Retreat</h3>
                  <p className="text-gray-600 text-sm mb-3">Clean lines, neutral colors (warm whites, soft grays), freestanding soaking tubs, large format tiles, and frameless glass shower enclosures create a serene escape. Heated floors and towel warmers add luxury touches.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Freestanding Tub</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Walk-in Shower</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Heated Floors</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Transitional Elegance</h3>
                  <p className="text-gray-600 text-sm mb-3">Blending traditional and contemporary elements, this style features shaker-style vanities, subway tiles with decorative accents, brushed gold or matte black hardware, and marble or marble-look surfaces.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Shaker Vanity</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Subway Tile</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Mixed Metals</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Farmhouse Charm</h3>
                  <p className="text-gray-600 text-sm mb-3">Rustic yet refined, featuring shiplap accent walls, vessel sinks on reclaimed wood vanities, vintage-inspired fixtures, clawfoot tubs, and beadboard wainscoting with a fresh, bright palette.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Shiplap Walls</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Vessel Sink</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Clawfoot Tub</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Key Elements of a Successful Bathroom Remodel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're pursuing <strong>bathroom renovations Woodstock</strong> or working with a <strong>construction company Marietta GA</strong> residents trust, these elements make the difference between a good remodel and a great one:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-gray-50 p-5 rounded-xl text-center">
                  <Ruler className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Smart Layout</h3>
                  <p className="text-gray-600 text-sm">Maximize space and improve flow without necessarily expanding the footprint</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl text-center">
                  <Bath className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Quality Fixtures</h3>
                  <p className="text-gray-600 text-sm">Invest in durable faucets, toilets, and hardware that will last</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-xl text-center">
                  <Sparkles className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Proper Lighting</h3>
                  <p className="text-gray-600 text-sm">Layer ambient, task, and accent lighting for function and ambiance</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Adequate ventilation:</strong> Proper exhaust fans prevent mold and moisture damage.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Water-resistant materials:</strong> Tile, stone, and quality waterproofing protect your investment.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Ample storage:</strong> Built-in niches, medicine cabinets, and vanity drawers keep clutter at bay.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Accessibility features:</strong> Curbless showers, grab bars, and comfort-height toilets add universal appeal.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Bathroom Remodeling Process
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you choose Phoenix Construction for your <strong>bathroom remodel Woodstock GA</strong> project, here's what to expect:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
                <li><strong>Design Consultation:</strong> We discuss your vision, budget, and must-haves for the space.</li>
                <li><strong>Material Selection:</strong> Visit our showroom partners to choose tile, fixtures, vanities, and finishes.</li>
                <li><strong>Detailed Proposal:</strong> Receive a comprehensive estimate with no hidden costs.</li>
                <li><strong>Demolition:</strong> We carefully remove existing fixtures, tile, and finishes.</li>
                <li><strong>Rough-In Work:</strong> Plumbing and electrical are updated or relocated as needed.</li>
                <li><strong>Waterproofing:</strong> Shower pans, membrane systems, and proper drainage are installed.</li>
                <li><strong>Tile & Flooring:</strong> Your selected surfaces are expertly installed.</li>
                <li><strong>Vanity & Fixtures:</strong> Cabinets, countertops, and plumbing fixtures go in.</li>
                <li><strong>Final Details:</strong> Mirrors, lighting, accessories, and touch-ups complete the project.</li>
                <li><strong>Walkthrough:</strong> We review every detail together before final sign-off.</li>
              </ol>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Transform Your Bathroom?</h3>
                <p className="text-gray-600 mb-4">
                  From simple updates to complete <strong>bathroom renovations Woodstock</strong> and <strong>bathroom remodel Woodstock GA</strong> transformations, Phoenix Construction delivers exceptional results. As a trusted <strong>construction company Marietta GA</strong> homeowners recommend, we're ready to bring your vision to life.
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
                Bathroom Remodeling Cost Factors
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding what affects pricing helps you budget for your <strong>bathroom remodel Woodstock</strong> project:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Budget-Friendly Updates</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- New paint and hardware</li>
                    <li>- Faucet and fixture replacement</li>
                    <li>- Mirror and lighting updates</li>
                    <li>- Toilet replacement</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Mid-Range Remodel</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- New vanity and countertop</li>
                    <li>- Tile flooring and shower surround</li>
                    <li>- Updated plumbing fixtures</li>
                    <li>- Improved lighting plan</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Luxury Renovation</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Custom cabinetry</li>
                    <li>- Premium stone surfaces</li>
                    <li>- Freestanding tub and frameless shower</li>
                    <li>- Heated floors and towel warmers</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Layout Changes</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Moving plumbing fixtures</li>
                    <li>- Expanding the footprint</li>
                    <li>- Adding a window</li>
                    <li>- Reconfiguring the space</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Choosing the Right Construction Company
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you need <strong>bathroom renovations Woodstock</strong> or are searching for the best <strong>construction company Marietta GA</strong> offers, these tips will help you make the right choice:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Check for proper licensing and insurance in Georgia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Read online reviews and ask for references from recent projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Request detailed written estimates with material specifications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Ask about their process for handling unexpected issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Ensure clear communication channels throughout the project</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving Woodstock, Marietta, and All of Metro Atlanta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Phoenix Construction proudly provides <strong>bathroom remodel Woodstock GA</strong> services and serves as a trusted <strong>construction company Marietta GA</strong> residents rely on. Our service area includes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['Woodstock', 'Marietta', 'Kennesaw', 'Smyrna', 'Roswell', 'Alpharetta', 'Canton', 'Acworth'].map((city) => (
                  <div key={city} className="flex items-center text-gray-600">
                    <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span>{city}</span>
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
                    <span className="text-gray-600">In-house design expertise to help visualize your project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Skilled craftsmen who take pride in their work</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Clear timelines and regular progress updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Respectful of your home - we clean up daily</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Warranty-backed workmanship for your peace of mind</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Design Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready to create your dream bathroom? Call us today for a free consultation!
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
                        <option value="bathroom">Bathroom Remodeling</option>
                        <option value="master-bath">Master Bath Renovation</option>
                        <option value="guest-bath">Guest Bath Update</option>
                        <option value="powder-room">Powder Room Refresh</option>
                        <option value="other">Other Services</option>
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
