import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send,
  ChevronDown, ChevronUp, DollarSign, Clock, Hammer,
  TrendingUp, Shield, Home, Lightbulb, Users, Star,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const stats = [
  { value: '86%', label: 'Of Woodstock buyers say kitchen/bath condition influenced their offer price (NAR 2025)' },
  { value: '$0.94', label: 'Returned per $1 spent on bathroom remodels in Metro Atlanta (Remodeling Magazine 2025)' },
  { value: '23 days', label: 'Average days saved on market for remodeled homes vs. unremodeled in Cherokee County' },
  { value: '#3', label: 'Woodstock ranked among fastest-growing suburbs in Georgia — driving remodel demand' },
];

const faqs = [
  {
    question: 'What does "home remodeling" cover in Woodstock GA, and where should I start?',
    answer: `**Home remodeling in Woodstock GA** is a broad term that covers everything from a single-room bathroom refresh to a whole-home transformation involving new kitchen, baths, basement, and exterior. The right starting point depends entirely on your goals.\n\n**If your goal is maximum resale value:** Kitchen and primary bathroom remodels deliver the strongest return on investment in the Cherokee County market. The 2025 Remodeling Magazine Cost vs. Value Report puts Atlanta-area mid-range bathroom remodels at 94.2% ROI and kitchen remodels at 81.6%.\n\n**If your goal is daily quality of life:** Prioritize the spaces you use most. For most Woodstock families, that's the kitchen, primary bath, and either the master closet or basement.\n\n**If your goal is to increase your home's appraised square footage:** Basement finishing is your best move — you add livable square footage at $47–$63/sq ft vs. $175–$275/sq ft for a ground-level addition.\n\n**If your goal is curb appeal for a planned sale:** Exterior painting, deck refresh, and front entry upgrades have the highest visibility-to-cost ratio.\n\nPhoenix Construction offers a free consultation where we help Woodstock homeowners map their goals to the right sequence of projects.`,
    icon: <Home className="text-red-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How much does a bathroom remodel cost in Woodstock GA in 2026?',
    answer: `Bathroom remodel costs in Woodstock GA vary significantly by scope. Here's a realistic breakdown based on our 2025–2026 Cherokee County projects:\n\n**Cosmetic refresh** (new fixtures, paint, vanity light, mirror): $3,500–$7,000\n\n**Mid-range bathroom remodel** (new vanity, toilet, tile floor, tub surround, updated fixtures): $12,000–$22,000\n\n**Full bathroom gut-and-remodel** (new layout, custom tile, frameless shower, freestanding tub, heated floor): $25,000–$45,000\n\n**Primary/master bath transformation** (expanded footprint, double vanity, walk-in shower with niche, soaking tub): $35,000–$65,000\n\nNational industry data from the NKBA (National Kitchen and Bath Association) shows that homeowners who invest in a quality bathroom remodel recoup an average of $0.94 for every $1 spent in markets like Metro Atlanta — one of the strongest returns in home improvement.\n\n**Cost factors that move the needle most in Woodstock:**\n- Tile selection (porcelain vs. natural stone adds $2,000–$8,000)\n- Moving plumbing vs. keeping it in place (adds $3,000–$7,000 if moving)\n- Frameless glass shower enclosure ($2,500–$6,000 vs. $600–$1,200 for framed)\n- Heated floor systems ($800–$2,500 depending on square footage)`,
    icon: <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What should I know about hiring builders in Woodstock GA for a remodeling project?',
    answer: `The term "builder" means different things in different contexts, and knowing the distinction matters when hiring for a remodeling project in Woodstock.\n\n**General Contractors (GCs):** The right choice for most home remodeling projects. A licensed GC manages all trades — plumbing, electrical, tile, carpentry — under a single contract. This is what Phoenix Construction does. You get one point of contact, one contract, and one warranty.\n\n**Specialty contractors:** Appropriate for single-trade work (just plumbing, just tile). Not appropriate for projects involving multiple trades, because coordinating multiple specialty contractors yourself adds significant project management burden and can create gaps in liability coverage.\n\n**Home builders:** Primarily focused on new construction. Some home builders in Woodstock GA also offer remodeling services, but remodeling and new construction are genuinely different disciplines — different trade relationships, different permit processes, different problem-solving skills.\n\n**What to verify before hiring any contractor in Woodstock:**\n1. Georgia State Contractor License — verify at sos.ga.gov\n2. Active general liability policy ($1M+ coverage minimum)\n3. Workers' compensation coverage for their crew\n4. Cherokee County references (not just general reviews)\n5. Signed, detailed scope of work before any deposit\n\nPhoenix Construction is a licensed General Contractor serving Woodstock and all of Cherokee County.`,
    icon: <Hammer className="text-slate-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a home remodeling project take in Woodstock GA?',
    answer: `Timeline expectations are one of the biggest sources of homeowner frustration in remodeling — often because contractors underestimate to win the bid. Here are honest timelines for the most common Woodstock remodeling projects:\n\n**Bathroom remodel (cosmetic/mid-range):** 2–4 weeks\n**Bathroom remodel (full gut):** 4–7 weeks\n**Kitchen remodel (cabinet refacing + counters + appliances):** 3–5 weeks\n**Kitchen remodel (full gut, new layout):** 6–10 weeks\n**Basement finishing (standard):** 8–12 weeks\n**Basement finishing (entertainment/in-law suite):** 12–16 weeks\n**Whole-home remodel (phased):** 4–8 months\n\n**What extends timelines most:**\n- Special-order materials (custom cabinets average 6–10 week lead time; some tile is 4–8 weeks)\n- Discovery work (opening walls in older homes often reveals plumbing or electrical that needs updating)\n- Permit approval timing (Cherokee County averages 7–14 days; complex projects longer)\n- Change orders (scope changes mid-project are the #1 cause of timeline overruns)\n\nPhoenix Construction provides a project schedule at contract signing and updates clients weekly. We also pre-order all long-lead materials before demo begins — cutting weeks off most projects.`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Do I need permits for a bathroom remodel or home remodeling project in Woodstock?',
    answer: `Permit requirements in Woodstock GA depend on the scope of work. Here's the breakdown:\n\n**No permit typically required:**\n- Replacing fixtures in-kind (same location, same connections)\n- Painting, flooring, millwork, cabinet hardware\n- Vanity replacement without moving plumbing\n- Tile replacement on existing substrate\n\n**Permit required:**\n- Any work that moves or adds plumbing lines\n- Any electrical work beyond simple fixture swaps\n- Structural changes (removing walls, moving doors)\n- HVAC modifications or additions\n- Egress window installations\n- Basement finishing (always — framing + mechanical)\n\n**Why it matters beyond compliance:** Unpermitted work discovered at resale is a major issue in Cherokee County's competitive market. Buyers' agents are trained to ask for permits, and home inspectors flag visible evidence of unpermitted work (new drywall, fresh tile in a "renovated" space with no permit on record). This creates negotiating leverage for buyers and can delay closings.\n\nPhoenix Construction manages the entire permit process — from application submission to scheduling inspections to obtaining the certificate of occupancy. Our clients never have to interact with the county permitting office.`,
    icon: <Shield className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What are the best ROI home remodeling projects for Woodstock GA homeowners in 2026?',
    answer: `Based on the 2025 Remodeling Magazine Cost vs. Value Report (Atlanta region) and our direct experience selling remodeled homes across Cherokee County, here are the projects with the strongest return:\n\n**Top ROI projects for Woodstock homeowners:**\n\n1. **Garage door replacement:** 193.9% ROI nationally (Atlanta tends slightly lower — ~150%). The highest ROI project for pure curb appeal impact.\n\n2. **Stone veneer entry accent:** ~152% ROI. Dramatic curb appeal upgrade at relatively low cost.\n\n3. **Minor kitchen remodel** (new doors, hardware, countertops, appliances — keeping existing layout): 96.1% ROI Atlanta.\n\n4. **Bathroom remodel (mid-range):** 94.2% ROI Atlanta.\n\n5. **Deck addition (wood):** 82.9% ROI. Woodstock's outdoor lifestyle culture makes this particularly strong locally.\n\n6. **Basement finishing:** 72.8% ROI nationally — but in Cherokee County's inventory-constrained market, homes with finished basements sell faster and closer to asking price, adding a time-value premium beyond the direct ROI figure.\n\n7. **Window replacement:** 68–72% ROI. Also reduces energy costs year-round — a selling point in Cherokee County's extreme summer heat.\n\n**The caveat:** ROI figures represent averages. In a hot Woodstock market, a beautifully remodeled kitchen can return 110%+ because it removes the most common reason buyers pass on a home — an outdated kitchen.`,
    icon: <TrendingUp className="text-emerald-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How do I know if my Woodstock home is a good candidate for a bathroom remodel vs. full replacement?',
    answer: `This is a question we evaluate on every project walkthrough. The answer depends on several factors:\n\n**Signs a cosmetic remodel is appropriate:**\n- Layout is functional and you'd keep it the same\n- Plumbing is modern (copper or PEX, not galvanized)\n- Tile substrate is solid (no soft spots or flex in the floor)\n- No active water damage, mold, or moisture issues behind walls\n- The space is an adequate size for your needs\n\n**Signs a full gut-and-remodel is warranted:**\n- Galvanized or polybutylene plumbing (common in Woodstock homes built before 1995)\n- Evidence of past leaks (staining, soft drywall, warped subfloor)\n- Layout that frustrates daily use\n- Mold behind tile or in wall cavities\n- Builder-grade finishes that have deteriorated and can't be refreshed cosmetically\n\n**The financial case for a full gut:** Doing cosmetic work on top of underlying problems is the most common mistake we see homeowners make. Painting over mold or retiling over a compromised substrate leads to a second (more expensive) project within 5 years. When structural or moisture issues exist, a full gut-and-redo is almost always more economical long-term.\n\nPhoenix Construction provides honest assessments during our free consultation — we'll tell you when a cosmetic refresh is sufficient and when a full remodel is the smarter investment.`,
    icon: <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What should I budget for a full home remodeling project in Woodstock GA?',
    answer: `Whole-home remodeling is a significant investment, and budgeting correctly from the start prevents the most painful remodeling experience: running out of money mid-project.\n\n**Rule of thumb for Cherokee County:**\n- Light cosmetic refresh (whole home): $25,000–$60,000\n- Mid-range remodel (kitchen + 2 baths + flooring): $75,000–$150,000\n- High-end renovation (full gut, custom finishes, structural changes): $150,000–$350,000+\n\n**Hidden costs that surprise homeowners:**\n1. **Discovery costs:** Opening walls in homes built before 2000 often reveals code-required electrical or plumbing updates. Budget 10–15% of project cost as a contingency.\n2. **Temporary housing:** Major whole-home remodels often require 4–10 weeks of temporary housing — $2,500–$6,000 that isn't in most budgets.\n3. **Permit fees:** Cherokee County permit fees vary by project scope — budget $800–$3,500 for most whole-home projects.\n4. **Design fees:** Professional design services cost $75–$200/hour but consistently improve material selection outcomes and prevent costly mistakes.\n\n**Financing options used by Woodstock homeowners:**\n- Home Equity Line of Credit (HELOC): Most common for projects over $50,000\n- Cash-out refinance: Favorable when rates allow\n- FHA 203(k) renovation loan: For buyers purchasing a home they plan to immediately renovate\n- Contractor financing: Phoenix Construction can connect clients with vetted lending partners`,
    icon: <DollarSign className="text-amber-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How do I find the best home remodeling contractors in Woodstock GA without getting burned?',
    answer: `Cherokee County homeowners lose millions annually to bad contractor experiences — from incomplete work to outright fraud. Here's a framework that protects you:\n\n**Step 1: Verify credentials before any conversation**\nLook up their Georgia Contractor License at sos.ga.gov (search "Contractor License"). Verify their liability insurance by asking for a certificate of insurance naming you as an additional insured. Verify workers' comp coverage.\n\n**Step 2: Get three bids — but don't hire on price**\nBids should be within 15–20% of each other for the same scope. A bid more than 25% below others is almost always an indication of cut corners, missing scope, or a contractor who will make it up in change orders.\n\n**Step 3: Review the contract before signing anything**\nA legitimate remodeling contract includes: detailed scope of work, material specifications, payment schedule tied to project milestones (not calendar dates), change order process, and project schedule.\n\n**Step 4: Check local references, not just Google reviews**\nGoogle reviews can be managed. Ask for names and numbers of homeowners in Woodstock, Canton, or the surrounding area with projects similar to yours. Call them. Ask about the end result but also about communication, cleanliness, and whether the budget held.\n\n**Step 5: Never pay more than 30–40% upfront**\nLegitimate contractors have supplier credit relationships that don't require large upfront payments. A contractor who needs 50%+ to start is likely undercapitalized.`,
    icon: <Users className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What makes Phoenix Construction the right choice for home remodeling in Woodstock GA?',
    answer: `We're going to be direct about what differentiates Phoenix Construction from other contractors in the Woodstock market — because it matters more than marketing language.\n\n**We pull every permit.** No exceptions. Every project we complete is code-compliant, inspected, and legally documented. This protects your investment, your insurance, and your ability to sell.\n\n**Fixed-price contracts.** We scope your project thoroughly upfront so we can give you a guaranteed price — not a "budget estimate" that grows with change orders. When discoveries happen (and in older homes, they do), we address them transparently within our contingency framework.\n\n**In-house crews.** We don't broker out your project to whoever's available. Our core crews know our standards and work with us project after project. You don't get strangers showing up on day one.\n\n**One contact for everything.** Your project manager is your single point of contact from design through final walkthrough. No "call accounting for billing questions" or "talk to your sales rep about the contract." One person, accountable for everything.\n\n**We work in Woodstock.** We live and work in Cherokee County. Our reputation here is our most important asset. We can't afford to disappoint a neighbor.\n\nPhoenix Construction offers free consultations for bathroom remodels, home remodeling, basement projects, and all general contracting work across Woodstock and the surrounding area.`,
    icon: <Star className="text-red-600 flex-shrink-0 mt-1" size={22} />,
  },
];

export default function HomeRemodelingWoodstockFAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'home-remodeling',
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
      source: 'blog_home_remodeling_woodstock_faq',
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
              <span className="text-sm font-semibold text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                Home Remodeling Woodstock GA
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 22, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Bathroom Remodel, Home Remodeling & Builders in Woodstock GA: The Complete FAQ for Cherokee County Homeowners
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              ROI data, permit requirements, real contractor red flags, and everything else Woodstock homeowners need before starting a <strong className="text-white">bathroom remodel</strong>, <strong className="text-white">home remodeling</strong> project, or hiring <strong className="text-white">builders in Woodstock GA</strong> in 2026.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/IMG_9321.JPG"
                alt="Home remodeling Woodstock GA - bathroom remodel and kitchen renovation Cherokee County"
                className="w-full rounded-2xl mb-8 shadow-lg object-cover"
                style={{ maxHeight: '420px' }}
              />

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {stats.map((s) => (
                  <div key={s.value} className="bg-slate-900 text-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-400 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Woodstock is one of Georgia's fastest-growing suburbs</strong> — and its homeowners are among the most active renovators in the Metro Atlanta market. Whether you're prepping for a sale, making your forever home truly yours, or adding space for a growing family, this FAQ covers every question we hear from Woodstock and Cherokee County homeowners about bathroom remodeling, home renovation, and finding trustworthy builders.
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
                                  .replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-800">$1</strong>'),
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
                <h2 className="text-2xl font-bold mb-3">Start Your Woodstock Remodeling Project</h2>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Phoenix Construction is a licensed general contractor serving Woodstock, Canton, Marietta, Alpharetta, and all of Cherokee and Cobb Counties. <strong className="text-white">Bathroom remodels, home remodeling, basement finishing</strong> — one contractor, one contract, one warranty.
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

              {/* Services quick links */}
              <div className="border border-gray-200 rounded-2xl p-6 mb-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Our Woodstock GA Remodeling Services</h2>
                <p className="text-gray-500 text-sm mb-4">All work is licensed, insured, and fully permitted in Cherokee County.</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Bathroom Remodeling',
                    'Kitchen Remodeling',
                    'Basement Finishing & Remodeling',
                    'Home Additions',
                    'Custom Home Construction',
                    'Deck Installation & Repair',
                    'Roofing Services',
                    'Exterior Painting',
                  ].map((service) => (
                    <div key={service} className="flex items-center text-gray-600 text-sm">
                      <CheckCircle className="text-red-600 mr-2 flex-shrink-0" size={15} />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Service areas */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Areas We Serve</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Woodstock', 'Canton', 'Holly Springs',
                    'Marietta', 'Kennesaw', 'Alpharetta',
                    'Roswell', 'Milton', 'Sandy Springs',
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
                  <h3 className="text-xl font-bold mb-2">Free Remodeling Estimate</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Licensed, insured builders in Woodstock GA. Bathroom, kitchen, basement, and full home remodeling.
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
                      <option value="home-remodeling">Home Remodeling</option>
                      <option value="bathroom-remodel">Bathroom Remodel</option>
                      <option value="kitchen-remodel">Kitchen Remodel</option>
                      <option value="basement-finishing">Basement Finishing</option>
                      <option value="addition">Home Addition</option>
                      <option value="new-construction">Custom Home Construction</option>
                    </select>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      rows={3} placeholder="Tell us about your project..."
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
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm">The Phoenix Construction Difference</h4>
                  <ul className="space-y-2">
                    {[
                      'Georgia licensed general contractor',
                      'All permits pulled & managed',
                      'Fixed-price contracts, no change-order surprises',
                      'In-house crews — not brokered labor',
                      'Single point of contact throughout',
                      'Workmanship warranty on all projects',
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
