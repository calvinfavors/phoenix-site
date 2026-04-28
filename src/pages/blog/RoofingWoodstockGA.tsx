import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send,
  ChevronDown, ChevronUp, DollarSign, Clock, Hammer,
  Shield, CloudRain, AlertTriangle, Lightbulb, TrendingUp, Home,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const stats = [
  { value: '56"', label: 'Annual rainfall in Cherokee County — 47% above the U.S. average, making roofing critical' },
  { value: '15–20 yrs', label: 'Average lifespan of asphalt shingles in Georgia\'s climate (shorter than national estimates)' },
  { value: '68.3%', label: 'ROI on roof replacement at resale — Remodeling Magazine 2025 Atlanta region' },
  { value: '$9,800', label: 'Average roof insurance claim in Georgia for storm damage (NAIC 2024)' },
];

const faqs = [
  {
    question: 'How much does roof replacement cost in Woodstock GA in 2026?',
    answer: `Roof replacement costs in Woodstock GA depend on four main variables: roof size (squares), pitch, material selected, and the complexity of your roof's geometry. Here's a realistic cost breakdown from our 2025–2026 Cherokee County projects:\n\n**Asphalt architectural shingles (most common):**\n- 1,500–2,000 sq ft home: $8,500–$13,000\n- 2,000–2,800 sq ft home: $12,000–$18,500\n- 2,800–4,000 sq ft home: $17,000–$27,000\n\n**Impact-resistant (Class 4) shingles:**\nAdd $1,500–$4,000 to the above ranges. Critical for Cherokee County homeowners: Class 4 shingles qualify for a 20–30% insurance discount with most Georgia carriers, often recovering the premium cost within 3–5 years.\n\n**Metal roofing (standing seam):**\n- 1,500–2,000 sq ft: $18,000–$28,000\n- 2,000–3,500 sq ft: $26,000–$45,000\nLifespan: 40–70 years vs. 15–20 years for asphalt in Georgia's climate.\n\n**Factors that add cost in Cherokee County:**\n- High-pitch or steep roofs (safety equipment, slower work): +15–25%\n- Multiple valleys, dormers, or complex geometry: +10–20%\n- Decking replacement (rotted sheathing under old shingles): $2–$4/sq ft additional\n- Second layer of old shingles requiring complete tear-off: $1,500–$3,000 additional\n\nNational data from the 2025 Remodeling Magazine Cost vs. Value Report shows roof replacement returns 68.3% at resale in Atlanta — one of the highest curb-appeal ROI projects available.`,
    icon: <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a roof last in Woodstock GA, and how do I know when I need a replacement?',
    answer: `Georgia's climate is significantly harder on roofing than national averages suggest — and most manufacturer warranties are written for less demanding climates. Here's what Woodstock homeowners need to know:\n\n**Realistic lifespans in Cherokee County's climate:**\n- 3-tab asphalt shingles: 12–17 years (many manufacturers claim 20–25)\n- Architectural (dimensional) asphalt: 15–22 years (manufacturer claims 30)\n- Impact-resistant asphalt (Class 4): 20–28 years\n- Metal (standing seam): 40–70 years\n- Tile or slate: 50+ years\n\n**Why Georgia is harder on roofs:** Cherokee County averages 56 inches of rain annually, frequent hail events, high UV radiation (200+ sunny days/year), and dramatic temperature swings that cause repeated thermal expansion and contraction. This combination accelerates granule loss, shingle cracking, and flashing failure faster than the national average.\n\n**Signs you need replacement (not just repair):**\n- Shingles are curling at the edges or cupping (moisture damage)\n- Significant granule loss visible in gutters or at downspouts\n- Bare spots or missing shingles on more than 10% of the roof\n- Daylight visible through roof boards from the attic\n- Roof deck feels soft or spongy when walking (if accessible)\n- Multiple active leaks from different locations\n- Roof is 15+ years old and has experienced multiple hail events\n\n**When repair is sufficient:**\n- Isolated damage from a single storm event on an otherwise young roof\n- Single flashing failure around a chimney or vent\n- A few missing shingles on a roof under 10 years old with intact surrounding shingles`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What is the best roofing material for homes in Woodstock GA?',
    answer: `Material selection should be driven by your climate, your home's structure, and your budget horizon — not aesthetics alone. Here's the honest comparison for Cherokee County homeowners:\n\n**Architectural asphalt shingles (best value choice)**\nThe standard for most Woodstock homes. Quality brands: GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark. Look for Class A fire rating and wind resistance of 130 mph minimum. Cost: $8,500–$18,500 installed for most homes.\n\n**Class 4 impact-resistant shingles (best ROI for Cherokee County specifically)**\nCherokee County experiences 3–5 significant hail events annually. Class 4 IR shingles (GAF Timberline ArmorShield II, Owens Corning Duration Storm) withstand 2" hailstones without cracking. Insurance discounts of 20–30% typically recover the premium within 4–6 years. Cost premium: $1,500–$4,000 over standard architectural.\n\n**Standing seam metal roofing (best lifetime value)**\nCedar shake or tile aesthetic with 40–70 year lifespan. Sheds water faster, handles high winds better (rated to 140+ mph), and nearly eliminates granule loss concerns. Higher upfront: $26,000–$45,000 for most Cherokee County homes. Dramatically lower lifetime maintenance cost.\n\n**Roofing materials to avoid in Georgia:**\n- 3-tab asphalt shingles: Inferior wind resistance, shorter lifespan, actively discouraged by most insurance carriers\n- Wood shake (untreated): Georgia's humidity creates immediate mold and rot risk unless treated\n\n**Pro tip for Cherokee County:** Contact your homeowner's insurance carrier before choosing a material. Selecting a Class 4 IR shingle often reduces your annual premium by $300–$700 — a decision that pays for itself.`,
    icon: <Home className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How does the roof insurance claim process work in Woodstock GA?',
    answer: `Georgia homeowners file more roof-related insurance claims than the national average — and the claims process can be confusing. Here's exactly how it works in Cherokee County:\n\n**Step 1: Inspect after every major storm event.**\nHail storms and severe thunderstorms are the primary claim triggers in Cherokee County. After any storm with 1"+ hail, have your roof inspected by a licensed roofing contractor. Hail damage is often not visible from the ground but shows up clearly on inspection.\n\n**Step 2: Document before anything is changed.**\nPhotograph any visible exterior damage — gutters, roof surface, window screens, HVAC fins, and downspouts. Hail damage to gutters and screens is often the easiest documented evidence for adjusters.\n\n**Step 3: File the claim promptly.**\nGeorgia insurance policies typically have claim filing windows of 1–2 years post-event, but file as soon as possible. Delayed filing allows insurers to question whether damage occurred from the claimed event.\n\n**Step 4: Request a joint inspection.**\nAsk your roofing contractor to be present during the insurance adjuster's inspection. A licensed contractor can point out damage the adjuster might miss and speak the adjuster's language. This step alone increases claim payouts significantly.\n\n**Step 5: Review the scope sheet carefully.**\nThe adjuster's scope of work determines your payout. Review it with your contractor. Commonly missed items: underlayment replacement, drip edge, ice-and-water shield, code-required upgrades.\n\n**Step 6: Supplementing the claim.**\nIf the adjuster's scope is incomplete, your contractor can submit a supplement with documentation. This is standard practice, not fraud. Phoenix Construction assists clients with documentation and supplement submissions at no additional charge.`,
    icon: <Shield className="text-slate-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What is the difference between roof repair and roof replacement in Woodstock GA?',
    answer: `This is the question where homeowners most often get misled — in both directions. Some contractors push unnecessary full replacements. Others patch a roof that genuinely needs replacement. Here's how to think about it objectively:\n\n**Repair is appropriate when:**\n- Damage is isolated to a specific area (storm damage, single flashing failure, isolated missing shingles)\n- The surrounding roof system is under 12 years old and in good condition\n- The repair area is under 25–30% of total roof surface\n- The roof deck (sheathing) is intact with no rot or moisture damage\n- A licensed inspector confirms the remaining shingles have adequate life expectancy\n\n**Replacement is appropriate when:**\n- The roof is 15+ years old, even if the damage is isolated\n- Granule loss is widespread across multiple roof sections\n- Multiple past repairs have been performed\n- Multiple leaks are present or suspected\n- The roof deck has moisture damage, rot, or soft spots\n- Your insurance adjuster agrees the event caused widespread damage\n\n**The financial reality of choosing repair when replacement is needed:**\nPatch repairs on aging roofs are short-term money sinks. The average Cherokee County homeowner who patches instead of replacing eventually pays for the patches plus a full replacement within 3–5 years. Total cost: significantly higher than replacing when the repair conversation first came up.\n\n**Cost comparison:**\n- Typical roof repair (flashing, isolated shingles): $350–$1,800\n- Full replacement (avoids ongoing repair cycle): $8,500–$27,000\n\nPhoenix Construction provides honest repair vs. replacement assessments with no pressure to upsell. We'll tell you when a repair is the right answer.`,
    icon: <Hammer className="text-slate-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How do I find a reputable roofing company in Woodstock GA?',
    answer: `Cherokee County has been flooded with out-of-area "storm chaser" roofing companies after every major weather event for years. Protecting yourself from these operations is critical.\n\n**What to verify before hiring any roofing company in Woodstock:**\n\n1. **Georgia Contractor License:** Verify at sos.ga.gov. Required for any roofing project in Georgia.\n2. **Physical local presence:** A company with a Cherokee County address and local phone number is accountable. A contractor with a 1-800 number who drove in from another state after the storm is not.\n3. **Insurance verification:** General liability ($1M minimum) and workers' comp. Get certificates naming you as additional insured.\n4. **Manufacturer certification:** GAF Master Elite, Owens Corning Preferred, or CertainTeed SELECT contractor designation means the contractor is trained and authorized to provide extended manufacturer warranties.\n5. **Local references:** Ask specifically for homeowners in Woodstock, Canton, or Holly Springs who've had work done in the last 12 months.\n\n**Storm chaser red flags:**\n- Knocking on your door immediately after a storm offering to "check your roof for free"\n- Asking you to sign an "Assignment of Benefits" form before any inspection\n- Pressure to sign a contract before your insurance adjuster has been out\n- No local address — only a PO Box or suite number\n- No verifiable Georgia contractor license\n- Significantly lower bids that don't include tear-off, permit, or code-required items\n\n**The warranty argument:** A GAF Master Elite or Owens Corning Preferred contractor can issue a manufacturer-backed system warranty (50 years on some products). An uncertified contractor cannot — leaving you with only their own workmanship warranty.`,
    icon: <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Does roof replacement require a permit in Woodstock GA?',
    answer: `Yes — and this is one of the most frequently skipped steps by roofing contractors in Cherokee County. A building permit is required for full roof replacement in Woodstock GA. Here's why it matters:\n\n**What a roofing permit covers in Cherokee County:**\n- Confirms the contractor is licensed to perform the work\n- Verifies code-required components: ice-and-water shield, drip edge, ventilation standards\n- Documents the installation for future insurance claims and resale\n- Provides a record of the work quality through inspection\n\n**What happens without a permit:**\n\nAt **insurance claim time:** If a future event damages the roof and no permit exists for the prior replacement, insurance carriers can question whether the work was done correctly or if damage predates the policy.\n\nAt **resale:** Buyers' inspectors and appraisers pull permit records. An unpermitted roof replacement raises questions about who did the work and whether it was done to code — and gives buyers negotiating leverage.\n\nWith **manufacturers:** GAF, Owens Corning, and CertainTeed system warranties can be voided by unpermitted installation.\n\n**The permit cost reality:** Cherokee County roofing permits are modest — typically $100–$350 for residential work. Any contractor who says permits are unnecessary or offers to skip them "to save you money" is protecting their convenience, not your interests.\n\nPhoenix Construction pulls every required permit and schedules the required inspections. Your completed roof is legal, documented, and protected.`,
    icon: <Shield className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What roofing ventilation standards apply to homes in Woodstock GA?',
    answer: `Roofing ventilation is one of the most misunderstood aspects of a roof replacement — and inadequate ventilation is the single leading cause of premature shingle failure in Georgia's climate.\n\n**Why ventilation is critical in Cherokee County:**\nGeorgia's combination of high summer heat (attic temperatures reaching 150–165°F without adequate ventilation) and humid winters creates a perfect environment for moisture accumulation and heat-induced shingle degradation. Without proper airflow, heat bakes shingles from below, cutting lifespan by 30–50%.\n\n**Georgia Building Code ventilation requirements:**\n- Minimum 1:150 ratio of net free ventilation area to attic floor area (can be reduced to 1:300 with specific conditions)\n- Balanced ventilation: 50% intake (at soffits) and 50% exhaust (at ridge or upper roof area)\n- Ridge vents with external baffles are the most effective exhaust solution for most Woodstock home designs\n\n**Common ventilation failures we find on Woodstock roofs:**\n- Covered or blocked soffit vents (insulation contractors are frequent offenders)\n- Too many exhaust vents without adequate intake (creates negative pressure)\n- Attic fans fighting against ridge vents (reduces their effectiveness significantly)\n- No baffles at soffit vents (insulation blocks the airflow channel)\n\n**A properly ventilated roof in Cherokee County:**\n- Reduces attic temperatures by 20–40°F in summer\n- Extends shingle life by 5–8 years\n- Reduces summer cooling costs by 7–12%\n- Prevents ice dam risk in winter\n\nEvery Phoenix Construction roof replacement includes a ventilation assessment and upgrade to current Georgia Building Code standards.`,
    icon: <CloudRain className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What is the ROI of roof replacement for Woodstock GA homeowners?',
    answer: `Roof replacement is one of the few home improvements where the financial return is almost certain — because a failed or aging roof actively reduces your home's value and makes it harder to sell.\n\n**Direct ROI at resale:**\nThe 2025 Remodeling Magazine Cost vs. Value Report (Atlanta region) shows roof replacement returning 68.3% of project cost at resale. On a $15,000 replacement, that's $10,245 directly recovered in appraised value. But the real ROI calculation is more nuanced.\n\n**The "no roof replacement" cost:**\n- A home with an aging or failed roof requires disclosure in Georgia\n- Buyers routinely request $15,000–$35,000 in concessions for roof condition\n- Some mortgage lenders (FHA, VA) will not lend on homes with roofs in poor condition\n- Insurance carriers are increasingly non-renewing policies on homes with aging roofs\n\n**The insurance premium ROI:**\nClass 4 impact-resistant shingles save Cherokee County homeowners $300–$700/year on homeowner's insurance. Over 10 years, that's $3,000–$7,000 in savings — often fully offsetting the material premium over standard architectural shingles.\n\n**The energy cost ROI:**\nA new roof with proper ventilation and reflective shingle options reduces summer cooling costs by 7–15% in Cherokee County's climate. On an average $220/month summer electric bill, that's $185–$396/year in savings.\n\n**The combined picture:**\nFor most Woodstock homeowners with a roof approaching 15 years old, proactive replacement before selling — vs. a distressed sale concession — results in a net positive of $5,000–$20,000 in final sales price.`,
    icon: <TrendingUp className="text-emerald-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a roof replacement take in Woodstock GA?',
    answer: `Most residential roof replacements in Woodstock GA are completed in one to two days for standard jobs. Here's the full timeline breakdown:\n\n**Day 1 (most homes under 2,500 sq ft):**\n- Morning: Crew arrives, sets up safety barriers and tarps to protect landscaping\n- Full tear-off of old shingles and inspection of decking\n- Replacement of any rotted or damaged decking\n- Installation of ice-and-water shield (eaves, valleys, penetrations)\n- Installation of underlayment\n- Shingle installation begins\n- Flashing installation (valleys, step flashing, chimney, vents)\n- Ridge cap installation\n- Cleanup, magnet roll for nails, final inspection\n\n**Day 2 (larger or more complex roofs):**\n- Completion of shingle installation\n- All flashing, trim, and ridge work\n- Final cleanup and haul-away\n\n**What can extend the timeline:**\n- Significant decking replacement (requires re-inspection and adjustment)\n- Rain events — we do not install in rain, and we cover exposed decking with tarps if work is interrupted\n- Complex geometry (multiple dormers, steep pitches, multiple chimneys)\n- Permit inspection scheduling\n\n**One-day expectation reality check:**\nContractors who quote "one day guaranteed" on homes over 2,500 sq ft are often planning to rush — which means inadequate nail patterns, improper flashing, or skipped ice-and-water shield. A proper installation takes the time it takes. Phoenix Construction doesn't rush quality to hit an arbitrary timeline.`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Can I do a roof replacement myself in Woodstock GA?',
    answer: `Technically, a homeowner can pull an owner-builder permit in Georgia and perform their own roofing work. Practically, this is inadvisable for almost all Woodstock homeowners for the following reasons:\n\n**Safety:** Roofing is consistently ranked among the most dangerous trades. OSHA data shows roofing has one of the highest fatality rates of any construction activity. Without proper safety equipment, harness systems, and experience, the risk of serious injury or death is real.\n\n**Manufacturer warranties:** Every major shingle manufacturer (GAF, Owens Corning, CertainTeed) requires installation by a certified contractor to issue a system warranty. DIY installation voids all manufacturer warranties.\n\n**Insurance implications:** Some Georgia insurance carriers will not cover a self-installed roof or will require a licensed contractor's inspection before issuing coverage.\n\n**Code compliance:** Georgia Building Code and Cherokee County local amendments have specific requirements for nail patterns, fastener types, flashing installation, and ventilation. Inspectors know what improper installation looks like.\n\n**Quality and longevity:** Improper nail placement is the most common cause of shingle blow-off in high-wind events. A single course of improperly nailed shingles on a steep roof can fail across the entire section in a severe thunderstorm.\n\n**The realistic economics:** When you factor in material costs (you pay retail, not contractor pricing), tool rental, safety equipment, permit fees, and your time, the savings from DIY roofing in Cherokee County are typically less than $1,500–$3,500 — for a project that carries significant risk of injury and warranty loss.`,
    icon: <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={22} />,
  },
];

export default function RoofingWoodstockGA() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'roofing',
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
      source: 'blog_roofing_woodstock_ga',
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
            <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full">
                Roofing Woodstock GA
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 28, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Roofing Woodstock GA: The Complete FAQ on Roof Replacement, Repair & Roofing Companies for Cherokee County Homeowners
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real cost data, material comparisons, insurance claim guidance, and everything Woodstock homeowners need before hiring a <strong className="text-white">roofing company</strong> or starting a <strong className="text-white">roof replacement</strong> project in Cherokee County.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/phoecon3.jpeg"
                alt="Roofing Woodstock GA - roof replacement and repair Cherokee County"
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

              <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Cherokee County receives 56 inches of rain annually — 47% above the national average.</strong> Add frequent hail events, high UV exposure, and dramatic temperature swings, and you have one of the most demanding roofing environments in the Southeast. This FAQ is built around Woodstock-specific conditions, Cherokee County permit requirements, and real cost data from 2025–2026 local projects.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3 mb-10">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-start justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors gap-3"
                    >
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        {faq.icon}
                        <span className="font-semibold text-slate-900 text-base leading-snug">{faq.question}</span>
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
                                __html: para.replace(/\*\*(.+?)\*\*/g, '<strong class="text-slate-800">$1</strong>'),
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white">
                <h2 className="text-2xl font-bold mb-3">Get a Free Roof Inspection in Woodstock GA</h2>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Phoenix Construction is a licensed roofing contractor serving Woodstock and Cherokee County. We offer free roof inspections, assist with insurance claims, and provide manufacturer-certified installations with extended warranties.
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
                    Schedule Free Inspection
                  </Link>
                </div>
              </div>

              {/* Service areas */}
              <div className="border border-gray-200 rounded-2xl p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">Roofing Services Near Woodstock GA</h2>
                <p className="text-gray-500 text-sm mb-4">Phoenix Construction serves homeowners across Cherokee and Cobb Counties.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Woodstock', 'Canton', 'Holly Springs', 'Marietta', 'Kennesaw', 'Acworth', 'Roswell', 'Milton', 'Ball Ground'].map((area) => (
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
                  <h3 className="text-xl font-bold mb-2">Free Roof Inspection</h3>
                  <p className="text-gray-300 text-sm mb-4">After any storm event. Licensed, insured roofing contractor in Woodstock GA.</p>
                  <a
                    href="tel:6784634893"
                    className="flex items-center justify-center bg-red-600 text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-all w-full"
                  >
                    <Phone size={20} className="mr-2" />
                    (678) 463-4893
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Request Your Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm" />
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm">
                      <option value="roofing">Roof Replacement</option>
                      <option value="roof-repair">Roof Repair</option>
                      <option value="roof-inspection">Storm Damage Inspection</option>
                      <option value="insurance-claim">Insurance Claim Assistance</option>
                      <option value="gutter">Gutter Replacement</option>
                    </select>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Describe your roof concern..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none text-sm" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70">
                      {isSubmitting ? <><Loader2 size={20} className="animate-spin mr-2" />Sending...</> : <><Send size={20} className="mr-2" />Get Free Quote</>}
                    </button>
                  </form>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm">Why Phoenix Construction Roofing?</h4>
                  <ul className="space-y-2">
                    {['Georgia Licensed Roofing Contractor', 'Manufacturer Certified Installer', 'Class 4 IR Shingles Available', 'Insurance Claim Assistance', 'Free Post-Storm Inspections', 'Cherokee County Permitted'].map((item) => (
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
