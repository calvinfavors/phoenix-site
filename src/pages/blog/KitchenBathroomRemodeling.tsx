import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Sparkles, TrendingUp, Home } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function KitchenBathroomRemodeling() {
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
      source: 'blog_kitchen_bathroom',
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
                Remodeling
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                February 25, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Kitchen and Bathroom Remodeling Trends in Metro Atlanta for 2026
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
                alt="Modern kitchen remodeling in Woodstock GA"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Planning a <strong>bathroom renovation Woodstock</strong> or <strong>kitchen remodeling Woodstock GA</strong> project in 2026? You're not alone. Homeowners across the metro Atlanta area are investing in their homes like never before. Whether you\'re in Woodstock, Kennesaw, Marietta, or Smyrna, understanding the latest trends can help you make informed decisions that add value and beauty to your home.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Kitchen and Bathroom Remodeling Remains the Top Investment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kitchens and bathrooms consistently deliver the best return on investment for homeowners. A well-executed <strong>bathroom remodel Woodstock</strong> project can recoup 60-70% of its cost at resale, while kitchen renovations often return even more. But beyond financial returns, these spaces significantly impact your daily quality of life.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <TrendingUp className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">High ROI</h3>
                  <p className="text-gray-600 text-sm">60-80% return on investment</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Sparkles className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Daily Impact</h3>
                  <p className="text-gray-600 text-sm">Rooms you use every day</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Home className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Home Value</h3>
                  <p className="text-gray-600 text-sm">Increases overall appeal</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Top Kitchen Remodeling Trends for 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you're considering <strong>kitchen remodeling Woodstock GA</strong> homeowners are embracing, here are the trends defining modern kitchen design:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Mixed Materials:</strong> Combining wood, stone, metal, and glass for visual interest and texture.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Smart Storage:</strong> Pull-out pantries, corner solutions, and custom drawer organizers maximize every inch.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Statement Lighting:</strong> Oversized pendants and sculptural fixtures as focal points.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Warm Neutrals:</strong> Moving away from stark white to creamy tones, greiges, and warm woods.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Integrated Appliances:</strong> Seamless panel-ready refrigerators and hidden dishwashers.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Large Format Tile:</strong> Fewer grout lines for a cleaner, more contemporary look.</span>
                </li>
              </ul>

              <div className="my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Marietta Kitchen Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Take a look at this stunning kitchen remodel we completed in Marietta, featuring custom cabinetry, granite countertops, and a beautiful center island with gas cooktop.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <img src="/7282333538409288563.jpg" alt="Marietta kitchen remodel - before" className="w-full h-48 object-cover rounded-lg" />
                  <img src="/7423111862792765421.jpg" alt="Marietta kitchen remodel - progress" className="w-full h-48 object-cover rounded-lg" />
                  <img src="/7656679026852238890.jpg" alt="Marietta kitchen remodel - after" className="w-full h-48 object-cover rounded-lg" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Bathroom Renovation Trends in Metro Atlanta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For <strong>bathroom renovations Woodstock</strong> homeowners are requesting, spa-inspired designs continue to dominate. Here's what's trending for <strong>bathroom remodel Woodstock</strong> projects:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Walk-In Showers:</strong> Curbless entries with frameless glass for an open, accessible feel.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Freestanding Tubs:</strong> Sculptural soaking tubs as bathroom centerpieces.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Floating Vanities:</strong> Wall-mounted designs that create visual space and modern appeal.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Heated Floors:</strong> Radiant heating for comfort during Georgia's cooler months.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Smart Features:</strong> Heated toilet seats, touchless faucets, and LED mirrors.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Natural Elements:</strong> Wood accents, stone surfaces, and plants for tranquility.</span>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Transform Your Kitchen or Bathroom Today</h3>
                <p className="text-gray-600 mb-4">
                  Phoenix Construction specializes in <strong>kitchen remodeling Woodstock GA</strong> and <strong>bathroom renovation Woodstock</strong> projects that exceed expectations. Call us for a free consultation!
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
                Choosing the Right Contractor in Metro Atlanta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're searching for a <strong>construction company Marietta GA</strong>, exploring options for <strong>new construction Smyrna GA</strong>, or need <strong>roof replacement Woodstock GA</strong> services alongside your remodel, finding the right contractor is essential. Here's what sets quality contractors apart:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Local Expertise:</strong> Understanding of Cherokee County and metro Atlanta building requirements.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Comprehensive Services:</strong> Ability to handle all aspects from design to final touches.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Clear Communication:</strong> Keeping you informed throughout the entire process.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Quality Materials:</strong> Relationships with top suppliers for the best products.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Phoenix Construction Approach to Remodeling
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike some contractors who focus only on one specialty, Phoenix Construction offers comprehensive remodeling services. From <strong>bathroom renovations Woodstock</strong> to complete kitchen transformations, <strong>roof replacement Woodstock GA</strong> to basement finishing, we handle every aspect of your project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our process begins with understanding your vision and lifestyle needs. We then create detailed plans, provide transparent pricing, and execute with precision. Whether you're comparing us to <strong>Cruickshank Remodeling</strong> or other local contractors, we're confident our quality and service will exceed your expectations.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving Communities Across Metro Atlanta
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                From <strong>new construction Kennesaw GA</strong> to <strong>new home builders in Smyrna GA</strong>, from <strong>new construction homes in Kennesaw GA</strong> to <strong>new construction in Smyrna GA</strong>, Phoenix Construction serves homeowners throughout the region. Our expertise extends across:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {['Woodstock', 'Kennesaw', 'Marietta', 'Smyrna', 'Canton', 'Roswell', 'Alpharetta', 'Milton'].map((city) => (
                  <div key={city} className="bg-gray-50 px-4 py-2 rounded-lg text-center text-gray-700 font-medium">
                    {city}
                  </div>
                ))}
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Get Your Free Quote</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready to transform your kitchen or bathroom? Call us today!
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
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Request a Consultation</h3>
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
                        <option value="kitchen">Kitchen Remodeling</option>
                        <option value="bathroom">Bathroom Remodeling</option>
                        <option value="home">Custom Home Construction</option>
                        <option value="basement">Basement Remodeling</option>
                        <option value="roofing">Roofing Services</option>
                        <option value="deck">Deck Installation</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your remodeling project..."
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
