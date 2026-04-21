import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, MapPin, CheckCircle, Loader2, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function HomeBuilderWoodstock() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'home',
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
      source: 'blog_home_builder',
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
                Home Building
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 5, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Home Builders in Woodstock GA | General Contractor &amp; Woodstock Builders for New Construction &amp; Home Remodeling
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
                alt="New home construction in Woodstock GA"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                If you're searching for <strong>Woodstock builders</strong>, <strong>home builders in Woodstock GA</strong>, or a trusted <strong>general contractor Woodstock GA</strong>, Phoenix Construction is the name Cherokee County homeowners rely on. Whether you need <strong>new construction Kennesaw GA</strong>, a <strong>construction company Marietta GA</strong>, <strong>new home builders in Smyrna GA</strong>, or full-service <strong>home remodeling Woodstock GA</strong> — we deliver quality craftsmanship across every trade and every community in Metro Atlanta.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Woodstock is Booming for New Home Construction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Woodstock, located in Cherokee County, has seen tremendous growth over the past decade. With its excellent schools, vibrant downtown, and proximity to Atlanta, it's no wonder that <strong>new home builders Woodstock GA</strong> are in high demand. The area offers a perfect blend of suburban comfort and urban accessibility.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're looking at <strong>new construction Kennesaw GA</strong> or exploring options in nearby Marietta and Smyrna, the north Atlanta metro area offers incredible opportunities for homeowners seeking quality construction.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                What to Look for in Builders in Woodstock
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When evaluating <strong>builders in Woodstock</strong> or any <strong>contractor Woodstock GA</strong>, consider these essential factors:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Local Experience:</strong> A construction company familiar with Cherokee County understands local building codes, soil conditions, and neighborhood requirements.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Licensing and Insurance:</strong> Always verify that your builder is properly licensed and insured in Georgia.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Portfolio of Work:</strong> Review past projects, especially custom homes and new construction in the Woodstock area.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>References:</strong> Speak with previous clients about their experience with the builder.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Communication:</strong> Your builder should be responsive and keep you informed throughout the project.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                New Construction vs. Remodeling: Which is Right for You?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While <strong>new home builders in Smyrna GA</strong> and <strong>new construction homes in Kennesaw GA</strong> offer the appeal of starting fresh, many homeowners in established neighborhoods prefer to work with a <strong>construction company Marietta GA</strong> for major renovations. Both approaches have their advantages.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Phoenix Construction, part of the <strong>Woodstock construction group</strong> of trusted local contractors, specializes in both custom home construction and comprehensive remodeling services. Unlike some builders who only focus on new builds, we understand that quality craftsmanship applies to every project, whether it's ground-up construction or transforming an existing home.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Phoenix Construction Difference
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a leading construction company serving Woodstock and Cherokee County, Phoenix Construction brings years of experience to every project. We're not just another name in the list of <strong>Woodstock builders</strong> - we're your neighbors, committed to building homes that stand the test of time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team handles everything from custom home construction to roofing, decks, and interior remodeling. Whether you're exploring <strong>construction jobs Woodstock GA</strong> has to offer or ready to break ground on your dream home, we're here to guide you through every step.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Build Your Dream Home?</h3>
                <p className="text-gray-600 mb-4">
                  Contact Phoenix Construction today for a free consultation. Our team is ready to discuss your vision and provide a detailed estimate for your project.
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
                Serving All of Cherokee County and Beyond
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we're proud to be among the top <strong>home builders in Woodstock GA</strong>, our service area extends throughout the metro Atlanta region. We serve homeowners in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {['Woodstock', 'Kennesaw', 'Marietta', 'Smyrna', 'Canton', 'Acworth', 'Roswell', 'Alpharetta', 'Milton'].map((city) => (
                  <div key={city} className="flex items-center text-gray-600">
                    <MapPin className="text-red-600 mr-2" size={16} />
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
                    Ready to start your home building project? Contact us today!
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
                        <option value="home">Custom Home Construction</option>
                        <option value="kitchen">Kitchen Remodeling</option>
                        <option value="bathroom">Bathroom Remodeling</option>
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
                        placeholder="Tell us about your project..."
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
