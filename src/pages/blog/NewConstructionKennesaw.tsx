import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Hammer, Shield, MapPin, Users, TrendingUp } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function NewConstructionKennesaw() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'new-construction',
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
      source: 'blog_new_construction_kennesaw',
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
                New Construction
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 12, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              New Construction Kennesaw GA &amp; New Home Builders in Smyrna GA | Construction Company Marietta GA
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9319.JPG"
                alt="New construction home in Kennesaw GA"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                The Metro Atlanta area continues to be one of the hottest real estate markets in the Southeast. If you're considering <strong>new construction Kennesaw GA</strong>, searching for <strong>new home builders in Smyrna GA</strong>, or looking for a premier <strong>construction company Marietta GA</strong> homeowners trust — Phoenix Construction is your answer. We are Cobb County and Cherokee County's full-service <strong>general contractor Woodstock GA</strong> and surrounding area specialists, delivering custom <strong>new construction homes in Kennesaw GA</strong> and <strong>home remodeling Woodstock GA</strong> services for every budget.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Build New in Kennesaw and Smyrna?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Both Kennesaw and Smyrna offer unique advantages for homebuyers seeking <strong>new construction Kennesaw GA</strong> or <strong>new home builders in Smyrna GA</strong>. These communities combine suburban charm with urban accessibility, making them ideal for families, professionals, and retirees alike.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-red-600" size={28} />
                    <h3 className="font-bold text-slate-900 text-lg">Kennesaw Highlights</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Award-winning Cobb County schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Close proximity to Kennesaw State University</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Historic downtown with local shops and restaurants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Easy access to I-75 and I-575</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Kennesaw Mountain National Battlefield Park</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="text-red-600" size={28} />
                    <h3 className="font-bold text-slate-900 text-lg">Smyrna Highlights</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Vibrant Smyrna Market Village</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Minutes from SunTrust Park (Truist Park)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Excellent walkability and community events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Quick commute to downtown Atlanta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <span>Silver Comet Trail access for outdoor enthusiasts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Benefits of New Construction vs. Existing Homes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When exploring <strong>new construction homes in Kennesaw GA</strong> or working with <strong>new home builders in Smyrna GA</strong>, you'll discover significant advantages over purchasing an existing property:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm">
                  <Home className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Custom Design</h3>
                  <p className="text-gray-600 text-sm">Choose your floor plan, finishes, and upgrades to match your lifestyle</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm">
                  <TrendingUp className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Energy Efficiency</h3>
                  <p className="text-gray-600 text-sm">Modern insulation, windows, and HVAC systems lower utility bills</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl text-center shadow-sm">
                  <Shield className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Warranty Protection</h3>
                  <p className="text-gray-600 text-sm">Builder warranties cover structural and mechanical components</p>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>No renovation surprises:</strong> Everything is new and built to current codes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Modern technology:</strong> Smart home features, USB outlets, and networking pre-wired.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Better layouts:</strong> Open floor plans designed for how families live today.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Lower maintenance:</strong> New systems mean years before major repairs are needed.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                What to Look for in New Home Builders
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're pursuing <strong>new construction Kennesaw GA</strong> or seeking <strong>new home builders in Smyrna GA</strong>, choosing the right builder is the most critical decision you'll make. Here's what sets quality builders apart:
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Users className="text-red-600 mr-3" size={24} />
                  Qualities of a Trusted Builder
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Licensed and insured in Georgia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Strong local reputation and references</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Transparent pricing and contracts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Clear communication throughout the build</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Quality subcontractors and materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Portfolio of completed homes to tour</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">Comprehensive warranty program</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-600">BBB accreditation and positive reviews</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Custom Home Building Process
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Building <strong>new construction homes in Kennesaw GA</strong> or with <strong>new home builders in Smyrna GA</strong> follows a systematic process. Here's what to expect with Phoenix Construction:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
                <li><strong>Initial Consultation:</strong> We discuss your vision, budget, and timeline to ensure alignment.</li>
                <li><strong>Lot Selection:</strong> If you don't have land, we help identify the perfect building site.</li>
                <li><strong>Design Phase:</strong> Work with our team to customize floor plans and select materials.</li>
                <li><strong>Permitting:</strong> We handle all Cobb County building permits and approvals.</li>
                <li><strong>Site Preparation:</strong> Clearing, grading, and foundation work begins.</li>
                <li><strong>Framing:</strong> Watch your home take shape as the structure rises.</li>
                <li><strong>Mechanicals:</strong> Plumbing, electrical, and HVAC systems are installed.</li>
                <li><strong>Interior Finishes:</strong> Drywall, flooring, cabinets, and fixtures go in.</li>
                <li><strong>Final Inspections:</strong> County inspections ensure code compliance.</li>
                <li><strong>Walkthrough & Closing:</strong> We tour your completed home before handing over the keys.</li>
              </ol>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Build Your Dream Home?</h3>
                <p className="text-gray-600 mb-4">
                  Whether you're interested in <strong>new construction Kennesaw GA</strong> or seeking <strong>new home builders in Smyrna GA</strong>, Phoenix Construction is ready to bring your vision to life. Contact us today for a free consultation.
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
                Cost Considerations for New Construction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understanding the investment involved in <strong>new construction homes in Kennesaw GA</strong> helps you plan effectively. Costs vary based on several factors:
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>- Lot size, location, and site conditions</li>
                <li>- Square footage and number of stories</li>
                <li>- Foundation type (slab, crawl space, basement)</li>
                <li>- Exterior materials (brick, stone, siding combinations)</li>
                <li>- Interior finish levels and custom features</li>
                <li>- Garage size and outdoor living spaces</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Phoenix Construction provides detailed, itemized estimates so you understand exactly where your investment goes. We work with you to balance your wish list with your budget, identifying where to splurge and where to save.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular New Home Features in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Today's homebuyers working with <strong>new home builders in Smyrna GA</strong> and seeking <strong>new construction Kennesaw GA</strong> are requesting these trending features:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Kitchen & Living</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Large kitchen islands (8-10 feet)</li>
                    <li>- Walk-in pantries with organization systems</li>
                    <li>- Open concept living/dining areas</li>
                    <li>- Quartz and granite countertops</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Master Suite</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Spa-like bathrooms with freestanding tubs</li>
                    <li>- Walk-in closets with custom built-ins</li>
                    <li>- Private water closets</li>
                    <li>- Dual vanities with ample storage</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Technology</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Smart thermostats and lighting</li>
                    <li>- Pre-wired for home automation</li>
                    <li>- USB outlets throughout</li>
                    <li>- Electric vehicle charging prep</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-xl p-4">
                  <h4 className="font-bold text-slate-900 mb-2">Outdoor Living</h4>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>- Covered patios and screened porches</li>
                    <li>- Outdoor kitchens</li>
                    <li>- Low-maintenance landscaping</li>
                    <li>- Privacy fencing</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving Kennesaw, Smyrna, and Beyond
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we specialize in <strong>new construction Kennesaw GA</strong> and serve as trusted <strong>new home builders in Smyrna GA</strong>, Phoenix Construction builds custom homes throughout Metro Atlanta:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['Kennesaw', 'Smyrna', 'Marietta', 'Woodstock', 'Acworth', 'Vinings', 'Mableton', 'Austell'].map((city) => (
                  <div key={city} className="flex items-center text-gray-600">
                    <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Hammer className="text-red-600 mr-3" size={24} />
                  Why Choose Phoenix Construction?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Local builder with deep roots in the community</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Personalized attention - not a production builder</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Quality craftsmanship with attention to detail</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Transparent pricing and regular progress updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Comprehensive warranty and responsive service after closing</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Build Your Dream Home</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready to start your custom home journey? Call us for a free consultation!
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Start Your Project</h3>
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
                        <option value="new-construction">New Home Construction</option>
                        <option value="custom-build">Custom Build on My Lot</option>
                        <option value="lot-search">Need Help Finding a Lot</option>
                        <option value="remodel">Major Home Renovation</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your dream home..."
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
                          Get Started
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
