import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Shield, Bath, Hammer, MapPin, Star, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BathroomRemodelingCanton() {
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
      source: 'blog_bathroom_remodeling_canton',
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
                March 26, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bathroom Remodeling Canton GA: Expert Bathroom Renovation &amp; Bathroom Remodel Contractors Cherokee County
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9352.WEBP"
                alt="Bathroom remodeling Canton GA - luxury master bathroom"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Looking for <strong>bathroom remodeling Canton GA</strong> services you can trust? As Canton continues to grow with beautiful new homes and established neighborhoods, Cherokee County homeowners are investing in bathroom renovations that add value and comfort. Phoenix Construction — Cherokee County's premier <strong>general contractor Woodstock GA</strong> and Canton area specialist — brings expert <strong>bathroom remodeling Canton GA</strong> solutions to families throughout the region. Whether you need <strong>bathroom remodel contractors</strong> in Canton or a full <strong>bathroom renovation</strong> near Woodstock GA, our team delivers exceptional results.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Serving All of Canton</h3>
                    <p className="text-gray-600">From downtown Canton to Riverstone, from Great Sky to Harmony on the Lakes, we've completed <strong>bathroom remodeling Canton GA</strong> projects in every neighborhood. Our team knows Canton's homes and what renovations work best for each style.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Canton Homeowners Choose Phoenix Construction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When it comes to <strong>bathroom remodeling Canton GA</strong>, we offer distinct advantages for local homeowners:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="text-amber-500" size={24} />
                    <h3 className="font-bold text-slate-900">Local Expertise</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Based nearby in Woodstock, we understand Cherokee County homes and the specific needs of Canton residents.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Quick Response</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Just minutes from Canton, we provide fast consultations and can address any project concerns quickly.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-green-600" size={24} />
                    <h3 className="font-bold text-slate-900">Cherokee County Permits</h3>
                  </div>
                  <p className="text-gray-600 text-sm">We handle all Canton/Cherokee County permitting requirements for your bathroom remodeling project.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Hammer className="text-slate-600" size={24} />
                    <h3 className="font-bold text-slate-900">Quality Craftsmanship</h3>
                  </div>
                  <p className="text-gray-600 text-sm">20+ years of experience delivering beautiful bathroom renovations that stand the test of time.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Our Canton Bathroom Remodeling Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our comprehensive <strong>bathroom remodeling Canton GA</strong> services include:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Master Bath Renovations:</strong> Complete transformations with walk-in showers, freestanding tubs, and double vanities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Guest Bath Updates:</strong> Functional, stylish updates that impress visitors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Shower Remodels:</strong> Custom tile showers, glass enclosures, and modern fixtures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Tub to Shower Conversions:</strong> Create more functional space by removing unused tubs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Accessibility Upgrades:</strong> Grab bars, curbless showers, and comfort-height toilets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Custom Vanities:</strong> Built-in storage solutions and premium countertops</span>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Canton Bathroom Quote</h3>
                <p className="text-gray-600 mb-4">
                  Ready to transform your Canton bathroom? Phoenix Construction provides free, no-obligation estimates for all <strong>bathroom remodeling Canton GA</strong> projects. Call us today!
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
                Popular Bathroom Styles in Canton
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Canton homeowners are embracing these popular <strong>bathroom remodeling Canton GA</strong> trends:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Modern Farmhouse</h3>
                  <p className="text-gray-600 text-sm mb-3">Shiplap accents, vintage-inspired fixtures, freestanding tubs, and barn door accents that complement Canton's rural-meets-suburban aesthetic.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Shiplap Walls</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Vintage Hardware</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Warm Neutrals</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Contemporary Clean</h3>
                  <p className="text-gray-600 text-sm mb-3">Clean lines, floating vanities, frameless glass, and spa-like features for Canton's newer construction homes.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Floating Vanity</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Linear Drain</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Matte Black</span>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 mb-2">Traditional Elegance</h3>
                  <p className="text-gray-600 text-sm mb-3">Timeless design with marble or marble-look surfaces, decorative tile, and classic fixtures for enduring appeal.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Marble Surfaces</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Crown Molding</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">Polished Chrome</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Canton Bathroom Remodeling Investment Guide
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Project Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-slate-900">Investment Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Half Bath Update</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$5,000 - $12,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Hall Bath Remodel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$15,000 - $28,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Master Bath Renovation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$25,000 - $50,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Luxury Master Suite</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$50,000 - $100,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Canton Neighborhoods We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {['Downtown Canton', 'Riverstone', 'Great Sky', 'Harmony on the Lakes', 'The Village', 'Governors Preserve', 'Bluffs at Governors Towne', 'Cherokee Forest', 'Laurel Canyon'].map((area) => (
                  <div key={area} className="flex items-center text-gray-600">
                    <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Bath className="text-red-600 mr-3" size={24} />
                  Why Choose Phoenix Construction for Canton
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Serving Cherokee County for over 20 years</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Hundreds of satisfied Canton homeowners</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Licensed, bonded, and fully insured</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Workmanship warranty on all projects</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Canton Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready for bathroom remodeling Canton GA? Call us today!
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
                        <option value="master-bath">Master Bath</option>
                        <option value="guest-bath">Guest Bath</option>
                        <option value="shower-remodel">Shower Remodel</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us about your Canton bathroom project..."
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
