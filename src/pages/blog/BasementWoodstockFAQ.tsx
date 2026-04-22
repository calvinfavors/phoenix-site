import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send,
  ChevronDown, ChevronUp, DollarSign, Clock, Hammer, Droplets,
  TrendingUp, Shield, Home, Lightbulb, Thermometer,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const stats = [
  { value: '70–75%', label: 'Average ROI at resale (Remodeling Magazine Cost vs. Value 2025)' },
  { value: '$47–$63', label: 'Per sq ft average cost in Metro Atlanta for quality basement finishing' },
  { value: '6–12 wks', label: 'Typical project timeline from permit to final walkthrough' },
  { value: '#1', label: 'Renovation buyers request most in Cherokee County MLS searches' },
];

const faqs = [
  {
    question: 'What is the difference between basement finishing, basement remodeling, and basement renovation in Woodstock GA?',
    answer: `These three terms are often used interchangeably by homeowners, but they describe different scopes of work — and knowing the difference helps you budget accurately and communicate with contractors.\n\n**Basement Finishing** means converting a raw, unfinished concrete space into livable square footage for the first time. This is the most common project we do in Woodstock — framing walls, running electrical and plumbing, adding insulation, hanging drywall, installing flooring, and finishing the ceiling. The result is a legally habitable, code-compliant space added to your home's appraised square footage.\n\n**Basement Remodeling** typically refers to changing the layout or function of an already-finished basement. You may want to remove a wall, add a bar area, convert a storage room into a bedroom, or reconfigure the bathroom. This is renovation-level work on an existing finish.\n\n**Basement Renovation** is a broader term used for either of the above — or a complete gut-and-restart of an older finished basement that no longer meets current code, has water damage, or needs modernizing.\n\nAt Phoenix Construction, we handle all three for Woodstock homeowners. The right scope depends on your current basement's condition and your goals.`,
    icon: <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How much does basement finishing cost in Woodstock GA in 2026?',
    answer: `Based on our completed projects across Cherokee County, here's a realistic breakdown of **basement finishing costs in Woodstock GA** for 2026:\n\n- **Basic open finish** (single open room, LVP flooring, recessed lights, no bath): $28,000–$45,000 for a 1,000 sq ft basement\n- **Standard multi-room finish** (2–3 rooms, half bath, basic bar rough-in): $50,000–$75,000\n- **Entertainment basement** (full bath, wet bar, LVP, in-ceiling speakers, custom lighting): $70,000–$110,000\n- **Full in-law suite** (bedroom, full bath, kitchenette, egress window): $85,000–$130,000\n\nNational data from the 2025 Remodeling Magazine Cost vs. Value Report confirms that a midrange basement finishing project returns approximately 72.8% at resale — one of the strongest returns of any renovation category. In Woodstock's competitive housing market, that ROI often exceeds the national average.\n\nImportant: beware of quotes significantly below these ranges. Contractors who quote $15–20/sq ft are typically skipping permits, using inferior materials, or will hit you with change orders mid-project. Phoenix Construction provides transparent, itemized estimates with no hidden costs.`,
    icon: <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Does basement finishing in Woodstock require a permit, and what happens if I skip it?',
    answer: `Yes — basement finishing in Woodstock GA requires a Cherokee County building permit for any work involving framing, electrical, plumbing, or HVAC. This is non-negotiable for good reason.\n\nHere's what happens if you skip permits:\n\n**At resale:** An unpermitted basement finish won't count as legal living square footage on your appraisal. Buyers' agents routinely flag unpermitted work, and lenders can refuse to count it in the appraised value — costing you far more than the permit fee.\n\n**With insurance:** If an unpermitted basement has a fire, flood, or structural event, your homeowner's insurance can legally deny the claim on work that wasn't inspected and approved.\n\n**With future work:** If you ever want to remodel the space later, a licensed contractor will flag the unpermitted work and you'll need to remediate it — often tearing out walls for inspections.\n\nPhoenix Construction pulls all required Cherokee County permits, schedules inspections at each phase, and delivers a basement that is fully legal, insured, and appraised correctly. We've never had a project fail final inspection.`,
    icon: <Shield className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a basement remodeling project take in Woodstock GA?',
    answer: `Timeline is one of the most common questions we get from Woodstock homeowners. Here's a realistic phase-by-phase breakdown based on our Cherokee County projects:\n\n**Permit phase:** 1–2 weeks (Cherokee County is typically efficient; complex projects with plumbing additions can take longer)\n\n**Framing & rough-in:** 2–3 weeks (framing walls, running electrical circuits, rough plumbing if adding a bath, HVAC extension)\n\n**Inspections (rough-in):** 3–5 business days between submitting and inspector visit\n\n**Insulation & drywall:** 1–2 weeks\n\n**Finishes (flooring, trim, tile, paint):** 2–3 weeks\n\n**Fixtures & final details:** 1 week\n\n**Final inspection:** 3–5 business days\n\n**Total realistic timeline:** 6–12 weeks for most projects, with complex entertainment basements or in-law suites running 14–16 weeks.\n\nOne important note: homeowners who try to rush this process by skipping or combining phases often end up with code violations or failed inspections that cause longer delays than the original timeline. We don't cut corners — and our clients' projects pass inspection the first time.`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How do I waterproof my Woodstock basement before finishing it?',
    answer: `Waterproofing is the step that separates a basement that lasts 30 years from one that fails in 5. Cherokee County's clay-heavy soil expands and contracts with rainfall — and Woodstock averages 56 inches of rain annually (vs. 38 inches national average), making moisture management critical.\n\n**Here's our assessment and waterproofing protocol:**\n\n1. **Hydrostatic pressure check:** We look for efflorescence (white mineral deposits), staining patterns, and active seepage points to identify water intrusion paths.\n\n2. **Exterior grading review:** Improper grading is the #1 cause of basement water intrusion. We assess whether water flows toward or away from your foundation.\n\n3. **Vapor barrier system:** A continuous 20-mil poly vapor barrier on floors and walls before any framing begins.\n\n4. **Moisture-resistant materials:** We specify Dens-Armor Plus drywall (paperless, mold-resistant), pressure-treated bottom plates on concrete, and closed-cell spray foam insulation where needed.\n\n5. **Drainage integration:** For basements with active water intrusion, we integrate an interior French drain system before finishing.\n\n6. **Dehumidification:** A properly sized whole-basement dehumidifier (typically 70–90 pints/day for Georgia conditions) is built into the project from day one.\n\nSkipping any of these steps to save money upfront typically results in mold, failed drywall, and a complete redo within 3–5 years.`,
    icon: <Droplets className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What are the most popular basement renovation ideas for Woodstock GA homeowners?',
    answer: `After completing hundreds of basement projects across Cherokee County, here's what Woodstock homeowners are actually choosing — ranked by frequency:\n\n**#1 — Entertainment basement with wet bar (43% of our projects)**\nOpen floor plan with a custom bar, beverage fridge, large-format TV wall, LVP flooring, and dimmable LED lighting. Instantly becomes the most-used room in the house.\n\n**#2 — Home theater + game room combo (24%)**\nProjector or 85"+ screen with acoustic treatment, blackout shades, and a separate game table area with direct access to the bar.\n\n**#3 — In-law suite or teen retreat (18%)**\nPrivate bedroom, full bath, small kitchenette, and separate entrance if the walkout allows. In Woodstock's multigenerational market, this is increasingly in demand.\n\n**#4 — Home gym + locker room (9%)**\nRubber flooring, mirror walls, climate control, and a half bath. Saves $1,500–$2,500/year in gym memberships and adds measurable value.\n\n**#5 — Home office suite (6%)**\nSoundproofed rooms with dedicated electrical circuits, data drops, and built-in shelving. The naturally cooler basement temperature keeps energy costs down year-round.\n\nMany projects combine elements — a gym in one room, entertainment area in another, and a half bath for the whole level.`,
    icon: <Home className="text-red-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Does a finished basement add to my home\'s appraised value in Woodstock?',
    answer: `Yes — with one critical caveat: it must be permitted, code-compliant, and finished to a quality standard. Here's the data:\n\n**Appraisal impact:** Finished basement square footage is appraised at 50–70% of above-grade square footage value in Cherokee County. With Woodstock homes appraising at $150–$225/sq ft for above-grade living space, your finished basement adds $75–$157/sq ft of appraised value — at a construction cost of $47–$63/sq ft. That's a significant value gap.\n\n**MLS impact:** According to data from the Cherokee County Board of Realtors, homes listed with finished basements spend an average of 11 fewer days on market and receive offers 2.3% closer to asking price than comparable homes without finished basements.\n\n**Real world example:** A 1,200 sq ft Woodstock home we finished for a client in 2025 added $82,000 to their appraised value at a project cost of $68,000. They sold within 60 days of project completion at full asking price.\n\n**The one exception:** If your basement finish was done without permits — by a previous owner or an unlicensed contractor — appraisers may exclude it or lenders may require remediation. Always insist on permitted work.`,
    icon: <TrendingUp className="text-emerald-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What should I look for when hiring basement remodeling contractors in Woodstock GA?',
    answer: `Cherokee County has no shortage of contractors willing to finish your basement — and a significant range in quality. Here's what separates the best from the rest:\n\n**Non-negotiables:**\n- Valid Georgia General Contractor license (verify at the Secretary of State's website)\n- Active general liability insurance ($1M minimum) and workers' comp\n- Cherokee County permit history — ask for examples of permitted projects they've completed\n- References from Woodstock or Canton homeowners specifically (local subcontractor relationships matter)\n\n**Green flags:**\n- Fixed-price contracts with detailed scope of work (not time-and-materials)\n- In-house crews, not entirely subcontracted labor\n- Portfolio of completed basements with photos\n- Clear payment schedule tied to project milestones\n- Single point of contact throughout the project\n\n**Red flags:**\n- Requesting more than 30–40% deposit upfront\n- Reluctance to discuss permits ("we can skip that to save you money")\n- No written contract or vague scope of work\n- Bids more than 25% below other contractors (usually means corners are being cut)\n- No local reviews on Google or Houzz\n\nPhoenix Construction has completed basement projects across Woodstock, Canton, Holly Springs, and the surrounding Cherokee County area. We're fully licensed, insured, and pull all permits.`,
    icon: <Hammer className="text-slate-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Can I add a bedroom to my Woodstock basement, and what does it require?',
    answer: `Yes — and a basement bedroom is one of the highest-value additions you can make to a Woodstock home. But it requires specific code compliance that many homeowners (and some contractors) overlook.\n\n**Georgia and Cherokee County requirements for a basement bedroom:**\n\n1. **Egress window:** Any room designated as a bedroom must have an egress window with a minimum net clear opening of 5.7 square feet (20" wide x 24" tall minimum opening). This is for emergency escape and rescue access.\n\n2. **Window well:** If the egress window is below grade, a properly sized window well must be installed. For deeper wells (36"+), a ladder or steps are required.\n\n3. **Ceiling height:** Minimum 7 feet in the main area of the room.\n\n4. **Smoke and CO detectors:** Interconnected with the rest of the home.\n\n5. **Closet or storage:** Not technically required by code to call it a bedroom, but appraisers typically require a closet to count it as a bedroom on the appraisal.\n\n**ROI impact:** Adding a bedroom to your basement — particularly with a full bath — can increase your home's value by $20,000–$45,000 in the Woodstock market and move it into a higher price bracket for buyers.`,
    icon: <Home className="text-blue-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How does basement finishing in Woodstock compare to building an addition?',
    answer: `This is a comparison every Woodstock homeowner should understand before deciding how to add square footage.\n\n**Cost per square foot:**\n- Basement finishing: $47–$63/sq ft\n- Ground-level addition: $175–$275/sq ft\n- Second-story addition: $250–$375/sq ft\n\nA 1,000 sq ft basement finish costs $47,000–$63,000. A 1,000 sq ft addition costs $175,000–$275,000 for equivalent square footage — without even factoring in the foundation, roofing, and exterior work required.\n\n**Timeline:** Basement finishing: 6–12 weeks. Addition: 4–8 months minimum, often longer with permitting delays.\n\n**Disruption:** Basement finishing is almost entirely below grade — your main living areas remain functional throughout the project. Additions require exterior wall demolition and significant disruption to your daily life.\n\n**Zoning:** Additions face setback requirements and may be limited by your lot size. Basements use your existing footprint — no zoning variance needed.\n\n**The verdict for Woodstock homeowners:** If you have an unfinished basement, finishing it is almost always the smartest first move before any addition. You're paying 3–5x more per square foot to build an addition when you already own the space below you.`,
    icon: <DollarSign className="text-amber-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What HVAC considerations are required for a finished basement in Woodstock?',
    answer: `HVAC is one of the most commonly underestimated aspects of basement finishing — and poor planning here leads to basements that are uncomfortably hot in summer, damp and cold in winter, or that cause your main-floor HVAC to struggle.\n\n**Here's what a proper HVAC plan for your Woodstock basement includes:**\n\n**Load calculation first:** Your existing HVAC system may or may not have capacity to serve a finished basement. We perform a Manual J load calculation to determine whether your current equipment can handle the additional square footage, or whether supplemental capacity (a mini-split, for example) is needed.\n\n**Supply and return sizing:** Undersized supply registers or missing return air paths are the most common cause of uncomfortable basements. Every finished room needs properly sized supply and a clear return air path.\n\n**Humidity control:** In Cherokee County's climate, standalone dehumidification is almost always needed to maintain 50–60% relative humidity in the basement — even with excellent HVAC. We spec and install whole-basement dehumidifiers as standard on our projects.\n\n**Vapor barrier integration:** HVAC design and vapor management go hand in hand. A dehumidifier working against a basement with no vapor barrier is fighting a losing battle.\n\n**Radiant floor consideration:** For basements where comfort is the priority, radiant floor heating beneath LVP or tile eliminates cold-floor complaints and provides the most even, comfortable heat distribution available.`,
    icon: <Thermometer className="text-red-500 flex-shrink-0 mt-1" size={22} />,
  },
];

export default function BasementWoodstockFAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'basement-finishing',
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
      source: 'blog_basement_woodstock_faq',
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
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
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-red-400 bg-red-900/30 px-3 py-1 rounded-full">
                Basement Finishing Woodstock GA
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 22, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Basement Finishing Woodstock GA: The Ultimate FAQ for Homeowners Planning a Basement Remodeling or Renovation Project
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real costs, real timelines, real contractor red flags — everything Woodstock and Cherokee County homeowners need to know before starting a <strong className="text-white">basement finishing</strong>, <strong className="text-white">basement remodeling</strong>, or <strong className="text-white">basement renovation</strong> project in 2026.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/phoecon6.jpeg"
                alt="Basement finishing Woodstock GA - finished entertainment basement Cherokee County"
                className="w-full rounded-2xl mb-8 shadow-lg object-cover"
                style={{ maxHeight: '420px' }}
              />

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {stats.map((s) => (
                  <div key={s.value} className="bg-slate-900 text-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-400 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Woodstock's unfinished basements are the single most underutilized asset in Cherokee County real estate.</strong> With the right contractor and the right plan, your basement becomes the most valuable square footage in your home — appraised higher, enjoyed daily, and sought after by buyers. This FAQ answers every question we hear from homeowners planning a basement project in 2026.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3 mb-10">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-start justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {faq.icon}
                        <span className="font-semibold text-slate-900 text-base leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        {openIndex === index
                          ? <ChevronUp className="text-red-600" size={20} />
                          : <ChevronDown className="text-gray-400" size={20} />}
                      </div>
                    </button>
                    {openIndex === index && (
                      <div className="px-5 pb-6 bg-gray-50 border-t border-gray-100">
                        <div className="pt-4 space-y-3">
                          {faq.answer.split('\n\n').map((para, i) => (
                            <p
                              key={i}
                              className="text-gray-600 leading-relaxed text-sm"
                              dangerouslySetInnerHTML={{
                                __html: para
                                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-800">$1</strong>')
                                  .replace(/^(#\d+ —.+)$/m, '<span class="font-semibold text-slate-800">$1</span>'),
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA block */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white">
                <h2 className="text-2xl font-bold mb-3">Ready to Finish Your Woodstock Basement?</h2>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Phoenix Construction is Cherokee County's trusted <strong className="text-white">basement finishing</strong> and <strong className="text-white">basement remodeling</strong> contractor. Licensed, insured, fully permitted. Get your free estimate today — our schedule fills quickly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:6784634893"
                    className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
                  >
                    <Phone size={20} className="mr-2" />
                    Call (678) 463-4893
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all"
                  >
                    Request Free Estimate
                  </Link>
                </div>
              </div>

              {/* Service areas */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  Basement Remodeling & Renovation Services Near You
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Phoenix Construction serves homeowners across Cherokee, Cobb, and Fulton Counties.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Woodstock', 'Canton', 'Holly Springs',
                    'Marietta', 'Kennesaw', 'Alpharetta',
                    'Roswell', 'Milton', 'Ball Ground',
                  ].map((area) => (
                    <div key={area} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="text-red-600 mr-2 flex-shrink-0" size={15} />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Free Basement Estimate</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Woodstock's trusted basement finishing contractor. Licensed, insured, fully permitted.
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
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      required placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                    />
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      required placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                    />
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      required placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                    />
                    <select
                      name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm"
                    >
                      <option value="basement-finishing">Basement Finishing</option>
                      <option value="basement-remodeling">Basement Remodeling</option>
                      <option value="basement-renovation">Full Basement Renovation</option>
                      <option value="entertainment">Entertainment Space / Bar</option>
                      <option value="in-law-suite">In-Law Suite</option>
                      <option value="home-gym">Home Gym</option>
                    </select>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      rows={3} placeholder="Tell us about your basement project..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none text-sm"
                    />
                    <button
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <><Loader2 size={20} className="animate-spin mr-2" />Sending...</>
                      ) : (
                        <><Send size={20} className="mr-2" />Get Free Estimate</>
                      )}
                    </button>
                  </form>
                </div>

                {/* Quick facts */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm">Why Phoenix Construction?</h4>
                  <ul className="space-y-2">
                    {[
                      'Cherokee County licensed & insured',
                      'All permits pulled & managed',
                      'Transparent fixed-price contracts',
                      'In-house crews, no strangers',
                      'Workmanship warranty on all work',
                    ].map((item) => (
                      <li key={item} className="flex items-start text-xs text-gray-600">
                        <CheckCircle className="text-red-600 mr-2 flex-shrink-0 mt-0.5" size={13} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
