import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send, Home, Shield, Bath, Hammer, MapPin, Star, Clock } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function BathroomRemodelingMariettaNew() {
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
      source: 'blog_bathroom_remodeling_marietta_new',
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
                March 31, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Bathroom Remodeling Marietta GA: Expert Bathroom Remodel Contractors Near You
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2 prose max-w-none">
              <img
                src="/IMG_9351.WEBP"
                alt="Bathroom remodeling Marietta GA - luxury master bathroom renovation"
                className="w-full rounded-2xl mb-8 shadow-lg"
              />

              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Looking for <strong>bathroom remodeling Marietta GA</strong> services? Whether you need a complete <strong>bathroom remodel Marietta GA</strong> transformation, a <strong>bathroom renovation Marietta GA</strong> update, or searching for the best <strong>bathroom remodel contractors Marietta GA</strong> has to offer, Phoenix Construction delivers exceptional results. We're the <strong>bathroom remodel near me Marietta GA</strong> solution that Cobb County homeowners trust.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 my-8">
                <div className="flex items-start gap-4">
                  <Star className="text-red-600 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Marietta's Trusted Bathroom Remodeling Experts</h3>
                    <p className="text-gray-600">From East Cobb estates to historic homes near Marietta Square, we've completed hundreds of <strong>bathroom remodeling Marietta GA</strong> projects. Our local expertise means we understand the unique character of Cobb County homes.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Complete Bathroom Remodel Marietta GA Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our comprehensive <strong>bathroom remodel Marietta GA</strong> services include:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Bath className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Master Bath Renovation</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Complete master bathroom transformations with walk-in showers, freestanding tubs, double vanities, and premium finishes.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Guest Bath Updates</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Functional, stylish updates for guest bathrooms that impress visitors without breaking the budget.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Shower Remodel</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Custom tile showers, frameless glass enclosures, and tub-to-shower conversions for modern living.</p>
                </div>
                <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Hammer className="text-red-600" size={24} />
                    <h3 className="font-bold text-slate-900">Accessibility Upgrades</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Grab bars, curbless showers, and comfort-height fixtures for aging-in-place bathroom renovation Marietta GA.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                Why Choose Local Bathroom Remodel Contractors Marietta GA
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When searching for <strong>bathroom remodel contractors Marietta GA</strong> residents trust, choosing local matters:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Cobb County Expertise:</strong> We know Marietta's diverse home styles from 1920s bungalows to modern East Cobb builds.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Quick Response:</strong> As local bathroom remodel contractors Marietta GA, we're minutes away for consultations.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Permit Knowledge:</strong> We navigate Cobb County permitting requirements efficiently.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600"><strong>Local References:</strong> Ask for references from your Marietta neighbors.</span>
                </li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Free Marietta Bathroom Quote</h3>
                <p className="text-gray-600 mb-4">
                  Stop searching for "bathroom remodel near me Marietta GA" - you've found the right team. Contact Phoenix Construction for a free <strong>bathroom remodeling Marietta GA</strong> consultation!
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
                Bathroom Renovation Marietta GA Cost Guide
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
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$5,000 - $15,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Guest Bath Remodel</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">$15,000 - $30,000</td>
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
                Marietta Neighborhoods We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {['East Cobb', 'West Cobb', 'Marietta Square', 'Whitlock', 'Powers Ferry', 'Johnson Ferry', 'Lassiter', 'Walton', 'Pope'].map((area) => (
                  <div key={area} className="flex items-center text-gray-600">
                    <MapPin className="text-red-600 mr-2 flex-shrink-0" size={16} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

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
                      <p className="text-gray-400 text-sm">We visit your Marietta home to discuss your vision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-semibold">Design & Selection</h4>
                      <p className="text-gray-400 text-sm">Choose materials and finalize your bathroom design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-semibold">Expert Installation</h4>
                      <p className="text-gray-400 text-sm">Our craftsmen bring your bathroom remodel Marietta GA to life</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-semibold">Final Walkthrough</h4>
                      <p className="text-gray-400 text-sm">We ensure your complete satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 my-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Shield className="text-red-600 mr-3" size={24} />
                  The Phoenix Construction Guarantee
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Licensed, bonded, and insured for your protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">20+ years of bathroom remodeling experience</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Workmanship warranty on all projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-600">Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Free Marietta Consultation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Ready for bathroom remodeling Marietta GA? Call us today!
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
                        placeholder="Tell us about your Marietta bathroom project..."
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
