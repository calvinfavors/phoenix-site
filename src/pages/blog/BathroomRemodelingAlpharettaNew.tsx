import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Shield, Bath, Hammer, MapPin, Star, Sparkles, Award } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BathroomRemodelingAlpharettaNew() {
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
      source: 'blog_bathroom_remodel_alpharetta',
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
                March 24, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bathroom Remodel Alpharetta GA: Luxury Renovations for North Fulton Homes
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9353.WEBP"
                alt="Bathroom remodel Alpharetta GA - luxury master bath"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Searching for <strong>bathroom remodel Alpharetta GA</strong> services that match the caliber of your North Fulton home? Alpharetta homeowners expect excellence, and Phoenix Construction delivers. Our <strong>bathroom remodel Alpharetta GA</strong> projects feature the premium materials, expert craftsmanship, and attention to detail that discerning homeowners demand.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Award className="text-amber-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Alpharetta's Premium Bathroom Specialists</h3>
                    <p className="text-gray-600">We understand that Alpharetta homes represent significant investments. Your <strong>bathroom remodel Alpharetta GA</strong> project deserves contractors who appreciate the difference between builder-grade and luxury finishes - and know how to deliver the latter flawlessly.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Luxury Bathroom Features for Alpharetta Homes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our <strong>bathroom remodel Alpharetta GA</strong> projects often incorporate these premium features:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="text-amber-500" size={24} />
                    <h3 className="font-bold text-slate-900">Natural Stone</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Marble, quartzite, and natural stone surfaces that elevate your bathroom to spa-like luxury.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Bath className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Freestanding Tubs</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Statement soaking tubs from premium brands that become the centerpiece of your master bath.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="text-amber-500" size={24} />
                    <h3 className="font-bold text-slate-900">Smart Technology</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Digital shower controls, heated mirrors, and smart toilets that Alpharetta tech professionals appreciate.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-green-600" size={24} />
                    <h3 className="font-bold text-slate-900">Designer Fixtures</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Kohler, Brizo, and other premium brands in brushed gold, polished nickel, and other luxe finishes.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Alpharetta Homeowners Choose Phoenix
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For your <strong>bathroom remodel Alpharetta GA</strong> project, we deliver:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Premium Material Access:</strong> Relationships with high-end suppliers for materials that match Alpharetta's finest homes.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Expert Tile Installers:</strong> Intricate patterns, book-matched marble, and flawless grout lines.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Detailed Project Management:</strong> Clear communication and respect for your schedule.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Design Assistance:</strong> Help selecting finishes that complement your home's style.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Clean, Professional Crews:</strong> Teams that respect your home throughout the project.</span>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Ready for Your Alpharetta Bathroom Remodel?</h3>
                <p className="text-gray-600 mb-4">
                  Phoenix Construction delivers the quality that Alpharetta homeowners expect. Contact us today for a free <strong>bathroom remodel Alpharetta GA</strong> consultation!
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
                Popular Alpharetta Bathroom Styles
              </h2>
              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Modern Spa Retreat</h3>
                  <p className="text-gray-600 text-sm mb-3">Clean lines, floating vanities, curbless showers, and natural materials create serene escapes for busy Alpharetta professionals.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Linear Drains</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Rain Showers</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Heated Floors</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Transitional Elegance</h3>
                  <p className="text-gray-600 text-sm mb-3">The perfect blend of traditional and contemporary that works in Alpharetta's diverse architectural styles.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Shaker Vanities</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Marble Accents</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Brushed Gold</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Timeless Traditional</h3>
                  <p className="text-gray-600 text-sm mb-3">Classic design with ornate details, rich wood tones, and polished finishes for Alpharetta's traditional estates.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Furniture Vanities</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Crown Molding</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Polished Chrome</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Bathroom Remodel Alpharetta GA Investment
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Project Level</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Powder Room Upgrade</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$8,000 - $18,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Guest Bath Remodel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$20,000 - $40,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Master Bath Renovation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$40,000 - $75,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Luxury Master Suite</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$75,000 - $150,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Alpharetta Communities We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {['Windward', 'Thornberry', 'Country Club of the South', 'St Ives', 'Polo Fields', 'Seven Oaks', 'Preston Reserve', 'The Manor', 'Crooked Creek'].map((area) => (
                  <div key={area} className="flex items-center text-gray-600">
                    <MapPin className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Hammer className="text-red-600 mr-3" size={24} />
                  The Phoenix Commitment to Alpharetta
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">20+ years serving North Fulton's finest homes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Licensed, bonded, and fully insured</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">References from Alpharetta homeowners available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Comprehensive warranty on all workmanship</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Alpharetta Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready for bathroom remodel Alpharetta GA? Call us today!
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
                        <option value="master-bath">Luxury Master Bath</option>
                        <option value="guest-bath">Guest Bath</option>
                        <option value="powder-room">Powder Room</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your Alpharetta bathroom project..."
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
