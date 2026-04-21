import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Hammer, Shield, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function DeckRepairWoodstock() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'deck',
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
      source: 'blog_deck_repair',
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
                Outdoor Living
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                March 1, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Deck Repair Woodstock GA | Woodstock Deck Builders &amp; Deck Installation by Your Local General Contractor
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9347.JPG"
                alt="Beautiful deck installation in Woodstock GA"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Are you searching for <strong>deck repair Woodstock GA</strong> services or expert <strong>Woodstock deck builders</strong> for a brand new outdoor living space? Phoenix Construction is Cherokee County's trusted <strong>general contractor Woodstock GA</strong> for all deck projects — from deck board replacement and railing repair to complete custom deck construction. As part of our comprehensive <strong>home remodeling Woodstock GA</strong> services, we build decks that Woodstock homeowners love for decades.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Signs Your Deck Needs Repair or Replacement
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Before calling <strong>Woodstock deck builders</strong>, it's important to assess your current deck's condition. Here are the warning signs that indicate it's time for professional intervention:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Soft or spongy boards:</strong> This indicates rot and structural weakness that requires immediate attention.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Loose railings:</strong> A safety hazard that often signals deeper structural issues.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Visible cracks and splits:</strong> Small cracks can become tripping hazards and allow moisture penetration.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Fading and discoloration:</strong> While cosmetic, this often indicates UV damage and weathering.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Rusted hardware:</strong> Corroded screws and fasteners compromise the entire structure.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Professional Deck Builders in Woodstock GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While some homeowners attempt DIY deck repairs, working with experienced <strong>deck builders Woodstock GA</strong> offers significant advantages. Professional contractors understand local building codes, have relationships with quality material suppliers, and bring years of experience to every project.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Hammer className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Expert Craftsmanship</h3>
                  <p className="text-gray-600 text-sm">Quality work that lasts for decades</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Shield className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Code Compliant</h3>
                  <p className="text-gray-600 text-sm">Built to Cherokee County standards</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <Clock className="text-red-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-slate-900 mb-2">Timely Completion</h3>
                  <p className="text-gray-600 text-sm">Projects finished on schedule</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Popular Deck Materials for Georgia's Climate
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When consulting with <strong>Woodstock deck builders</strong> about your project, you'll want to consider materials that can withstand Georgia's hot summers and occasional harsh winters:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Pressure-Treated Pine:</strong> Affordable and durable, the most popular choice for <strong>decks Woodstock GA</strong> homeowners install.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Composite Decking:</strong> Low maintenance and resistant to rot, insects, and fading.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Cedar and Redwood:</strong> Natural beauty with built-in resistance to decay.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Tropical Hardwoods:</strong> Premium option offering exceptional durability and aesthetics.</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                The Deck Building Process
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you work with Phoenix Construction, one of the trusted <strong>deck builders Woodstock GA</strong> residents rely on, here's what to expect:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
                <li><strong>Initial Consultation:</strong> We assess your space, discuss your vision, and provide recommendations.</li>
                <li><strong>Design & Planning:</strong> Custom designs that complement your home's architecture.</li>
                <li><strong>Permitting:</strong> We handle all Cherokee County building permits.</li>
                <li><strong>Construction:</strong> Expert installation with quality materials.</li>
                <li><strong>Final Inspection:</strong> Ensuring everything meets code and your expectations.</li>
              </ol>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready for Your New Deck?</h3>
                <p className="text-gray-600 mb-4">
                  Whether you need <strong>deck repair Woodstock GA</strong> or a complete new installation, Phoenix Construction is ready to help transform your outdoor space.
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
                Cost Factors for Deck Projects
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The cost of your deck project will depend on several factors that <strong>Woodstock deck builders</strong> consider during the estimate:
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>- Size and complexity of the design</li>
                <li>- Choice of decking materials</li>
                <li>- Height and terrain challenges</li>
                <li>- Additional features (built-in seating, pergolas, lighting)</li>
                <li>- Current condition (for repairs vs. new construction)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Phoenix Construction, we provide detailed, transparent estimates so you know exactly what to expect. Unlike some contractors, we don't surprise you with hidden fees or unexpected costs.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Serving Woodstock and Beyond
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                While we're proud to be among the top <strong>deck builders Woodstock GA</strong> has to offer, we serve homeowners throughout Cherokee County and the greater Atlanta area. Whether you're in Canton, Kennesaw, Marietta, or Roswell, we're here to bring your outdoor living dreams to life.
              </p>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Get Your Free Quote</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready to upgrade your outdoor space? Call us today!
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
                        <option value="deck">Deck Installation & Repair</option>
                        <option value="home">Custom Home Construction</option>
                        <option value="kitchen">Kitchen Remodeling</option>
                        <option value="bathroom">Bathroom Remodeling</option>
                        <option value="basement">Basement Remodeling</option>
                        <option value="roofing">Roofing Services</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your deck project..."
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
