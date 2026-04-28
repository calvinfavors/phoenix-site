import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send,
  ChevronDown, ChevronUp, DollarSign, Clock, Hammer,
  Shield, Home, Lightbulb, FileText, AlertTriangle, Award,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const stats = [
  { value: '34%', label: 'Of home improvement projects in GA involve unlicensed contractors — GHBA 2025' },
  { value: '$8,200', label: 'Average financial loss per homeowner from bad contractor hires in Metro Atlanta' },
  { value: '6–8 wks', label: 'Faster project completion when using a licensed GC vs. self-coordinating trades' },
  { value: '#1', label: 'Reason remodels go over budget: no single accountable general contractor' },
];

const faqs = [
  {
    question: 'What exactly does a general contractor do, and why do I need one in Woodstock GA?',
    answer: `A general contractor (GC) is the single entity legally responsible for delivering a construction or remodeling project from start to finish. In Woodstock and Cherokee County, here's exactly what a licensed GC manages on your behalf:\n\n**Permit acquisition and compliance.** A licensed GC applies for all required Cherokee County building permits, coordinates required inspections at each construction phase, and ensures the final project receives its certificate of occupancy. Without this, your renovation may be legally unpermitted — a significant liability at resale.\n\n**Trade coordination.** Your GC hires, schedules, and manages every subcontractor — framers, electricians, plumbers, HVAC technicians, tile setters, painters. You don't manage five different schedules and five different personalities. Your GC does.\n\n**Material procurement.** A GC leverages trade accounts and contractor pricing on cabinets, tile, lumber, fixtures, and appliances — savings often exceeding 15–25% of retail pricing that offset the GC's margin entirely.\n\n**Quality control.** Your GC inspects each phase of work before the next trade enters the project. Bad framing caught before drywall saves weeks and thousands. Bad tile caught before grout saves a $6,000 tear-out.\n\n**Liability management.** A licensed, insured GC carries general liability coverage that protects your home and your assets. If a subcontractor causes damage or a worker is injured on your property, the GC's coverage — not your homeowner's insurance — responds first.\n\n**The bottom line:** Managing your own trades is a second job. Most Woodstock homeowners who try it report that their "savings" evaporate in scheduling gaps, rework, and the hours they spend managing tradespeople instead of doing their actual jobs.`,
    icon: <Home className="text-red-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How do I verify a general contractor\'s license in Woodstock GA?',
    answer: `This is the single most important check you can do before signing any contract in Georgia — and it takes less than five minutes.\n\n**Georgia requires a state-issued license for any contractor working on projects valued at $2,500 or more.** There is no exception for "small jobs."\n\n**How to verify:**\n1. Go to sos.ga.gov (Georgia Secretary of State website)\n2. Navigate to Verify a License > Contractors\n3. Search by company name, individual name, or license number\n4. A valid license will show an active status, issue date, and expiration\n\n**What you're looking for:**\n- **Residential-Basic:** Allows work on single-family and duplex homes\n- **Residential:** Broader residential scope\n- **General Contractor (Commercial/Residential):** Full scope license — the most comprehensive\n\n**Also check:**\n- **Cherokee County business license:** Confirms the contractor is registered to operate in your county\n- **Better Business Bureau (bbb.org):** Check for unresolved complaints\n- **Georgia Secretary of State:** Confirm the business entity is active (not dissolved or revoked)\n\n**Red flag:** Any contractor who tells you they "don't need" a license for your project type — or who deflects when you ask for their license number — should be disqualified immediately. Phoenix Construction's license number is available on request and verifiable at sos.ga.gov.`,
    icon: <Shield className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What projects in Woodstock GA require a general contractor vs. a specialty contractor?',
    answer: `The right contractor type depends on the scope of work. Here's the practical guide for Cherokee County homeowners:\n\n**Always use a licensed General Contractor:**\n- Any project touching multiple trades (plumbing + electrical + structural in the same project)\n- Additions, basement finishing, or whole-room gut-and-remodels\n- New construction or major structural work\n- Projects requiring a building permit where framing, mechanical, and electrical are involved\n- Projects over $50,000 where liability and coordination risk is significant\n\n**Specialty contractor appropriate (single-trade work):**\n- HVAC-only service or replacement\n- Plumbing-only repair or fixture swap\n- Electrical panel upgrade or simple circuit addition\n- Roofing replacement (though a GC often manages this within a larger scope)\n\n**Why this matters legally:** Georgia law requires that any contractor supervising a project involving multiple trades be licensed as a general contractor. A plumber cannot legally "manage" the electrical work. If you hire a plumber to "run the whole job," you may have no legal recourse when the unlicensed work causes problems.\n\n**The coordination argument is financial too:** When you hire trades directly, you pay retail rates. When a GC hires the same trades, they receive contractor pricing. On a $75,000 remodel, this difference often closes the gap between the GC's fee and going direct — while the GC adds management value you can't replicate.`,
    icon: <FileText className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How much does a general contractor charge in Woodstock GA?',
    answer: `General contractor pricing in the Cherokee County market is structured two ways, and knowing the difference helps you evaluate bids accurately.\n\n**Fixed-price (lump sum) contract:** The GC prices everything — labor, materials, subcontractors, and their management fee — into a single project price. This is the most common structure for defined residential projects and the safest for homeowners. You know your cost before work begins.\n\n**Cost-plus contract:** The homeowner pays actual costs (labor + materials) plus a GC management fee of 15–25% of total project cost. Used when scope is hard to define upfront (complex renovations, insurance work).\n\n**What's included in a GC's margin (typically 15–25%):**\n- Project management and supervision\n- Permit fees and inspection coordination\n- Insurance and overhead\n- Warranty on completed work\n- Profit\n\n**Cherokee County project pricing benchmarks (2026):**\n- Bathroom remodel: $18,000–$55,000 (GC-managed)\n- Kitchen remodel: $35,000–$95,000 (GC-managed)\n- Basement finishing: $50,000–$120,000 (GC-managed)\n- Deck installation: $18,000–$45,000 (GC-managed)\n- Room addition: $90,000–$200,000+ (GC-managed)\n\n**One critical note:** A GC's overhead is not just profit padding. Licensed GCs carry liability insurance, workers' compensation, and bond coverage. If you hire "cheap" labor without these protections, you become the responsible party for any injury or damage on your property.`,
    icon: <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What questions should I ask a contractor in Woodstock before hiring them?',
    answer: `The difference between a great contractor experience and a nightmare often comes down to the questions you ask before signing. Here's the list we recommend to every Cherokee County homeowner:\n\n**Legal and credential questions:**\n1. "Can I have your Georgia Contractor License number?" (then verify at sos.ga.gov)\n2. "Who is your general liability insurance carrier, and can you provide a certificate naming me as additional insured?"\n3. "Do you carry workers' compensation insurance for your crew and subs?"\n\n**Project-specific questions:**\n4. "Will you pull the permits, or will I need to?"\n5. "Who specifically will be on-site every day — your own employees or subcontractors? Who supervises them?"\n6. "What is your change order process? How are cost overruns handled?"\n7. "What does your payment schedule look like, and what milestones trigger each payment?"\n\n**References and track record:**\n8. "Can you give me three references from Woodstock or Cherokee County homeowners with projects similar to mine in the last 12 months?"\n9. "Have you had any disputes, liens, or legal actions filed against you in Georgia in the last 5 years?"\n10. "What warranty do you provide on completed work?"\n\n**A contractor who gets defensive, evasive, or impatient with these questions is telling you everything you need to know.** Legitimate contractors answer these questions daily — they expect them and respect the homeowner who asks them.`,
    icon: <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What does a general contractor contract in Woodstock GA need to include?',
    answer: `A verbal agreement is worth nothing when a project goes sideways. In Cherokee County, your GC contract should include every element below — and if any are missing, do not sign until they're added.\n\n**Required contract elements:**\n\n**1. Detailed scope of work.** Not "kitchen remodel" — room dimensions, specific materials (brand, model, color where applicable), what is included and explicitly what is excluded. Vague scope is how GCs add change orders.\n\n**2. Materials specifications.** Cabinet line and door style. Tile manufacturer and SKU. Countertop material, edge profile, and thickness. Appliance models. Fixture brands. If it's going in your home, it should be named in the contract.\n\n**3. Project schedule.** Start date, projected end date, key milestones. Not legally binding to the day, but establishes expectations and signals whether the contractor has planned your project.\n\n**4. Payment schedule.** Tied to project milestones — not calendar dates. Standard structure: 30–40% at contract signing, 20–30% at rough-in complete, 20% at drywall complete, balance at substantial completion.\n\n**5. Change order process.** All scope changes must be in writing, signed by both parties, with cost and schedule impact documented before work proceeds.\n\n**6. Lien waiver provisions.** Contractor agrees to provide lien waivers from all subcontractors and suppliers before final payment. This protects you from subcontractor liens on your property.\n\n**7. Warranty terms.** Minimum 1 year on workmanship; manufacturer warranties on materials.\n\n**8. Dispute resolution.** How disagreements are handled — mediation, arbitration, or litigation.`,
    icon: <FileText className="text-slate-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a typical general contractor project take in Woodstock GA?',
    answer: `Timeline depends entirely on scope, but here are honest estimates from our Cherokee County project history — not the optimistic timelines you'll hear from contractors trying to win the bid.\n\n**Permit phase (Cherokee County):**\n- Standard residential remodel: 7–14 business days\n- Complex structural or new addition: 3–5 weeks\n- New custom home: 4–8 weeks\n\n**Typical project timelines (permit-to-final-inspection):**\n- Bathroom remodel (gut): 4–7 weeks\n- Kitchen remodel (full): 8–12 weeks\n- Basement finishing: 8–14 weeks\n- Deck addition: 2–4 weeks\n- Whole-home remodel: 4–8 months\n- Custom home construction: 8–14 months\n\n**The factors that actually extend timelines:**\n1. **Special-order materials.** Custom cabinets: 6–10 week lead time. Some tile and stone: 4–8 weeks. We pre-order long-lead items before demo begins.\n2. **Discovery work.** Opening walls in Cherokee County homes built before 2000 routinely reveals galvanized plumbing, aluminum wiring, or undersized electrical panels — all code-required updates.\n3. **Change orders.** Every scope change mid-project creates a ripple effect on scheduling, material ordering, and trade sequencing.\n4. **Inspection scheduling.** Cherokee County inspections must be scheduled in advance. A project that's not ready at inspection time loses its slot and waits again.\n\nPhoenix Construction provides a project schedule at contract signing. Weekly updates go to every client every Friday.`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What are the most common red flags when hiring contractors in Woodstock GA?',
    answer: `After working in the Cherokee County market for years, we've seen the patterns that consistently lead to homeowner losses. Memorize these:\n\n**Financial red flags:**\n- Requesting more than 40% deposit before work begins (legitimate contractors have supplier credit)\n- Cash-only payment requirements\n- No written contract or contract with vague scope\n- Significantly lower bid than competitors (typically means missing scope, inferior materials, or incoming change orders)\n- No mention of permits ("I know people, we can skip that")\n\n**Credential red flags:**\n- Unable or unwilling to provide a Georgia Contractor License number\n- No certificate of insurance when requested\n- No workers' compensation documentation\n- No local references — only reviews on their own website\n- Recently formed LLC with no track record in Cherokee County\n\n**Project management red flags:**\n- No project schedule provided with the contract\n- No single point of contact for the project\n- Subcontractors show up you've never met who weren't mentioned\n- Long gaps between phases with no communication\n- Pushback when you ask to see permit documents\n\n**The pattern behind contractor fraud in Georgia:** The Georgia Secretary of State receives thousands of contractor complaints annually. The majority involve contractors who collected large deposits and either disappeared or delivered incomplete work. The protection: never pay more than 30% upfront, verify the license, and insist on a milestone-based payment schedule.`,
    icon: <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Why hire Phoenix Construction as your general contractor in Woodstock GA?',
    answer: `We're going to answer this directly — because "experienced, professional, high quality" is what every contractor says. Here's what actually differentiates us:\n\n**We're a Cherokee County contractor, not a Metro Atlanta contractor working in Cherokee County.** Our supplier relationships, subcontractor network, and permit relationships are specifically built for Woodstock, Canton, Holly Springs, and the surrounding area. We don't parachute in from Buckhead.\n\n**Fixed-price contracts with genuine transparency.** Our estimates are itemized — you see exactly what you're paying for each element. When we give you a number, we stand behind it. Our change order rate (scope changes the client didn't initiate) is less than 4% of contract value.\n\n**In-house supervision on every project.** A Phoenix Construction project manager is on your site every working day. We don't give your project to a subcontractor and hope for the best.\n\n**Full permit and inspection management.** We pull every permit, schedule every inspection, and resolve every punch list item before we consider a project closed.\n\n**Workmanship warranty.** We warranty our work for a full year post-completion. If something fails due to our workmanship, we fix it.\n\n**Verifiable local references.** We can provide references from Woodstock, Canton, Marietta, Alpharetta, and Kennesaw homeowners with comparable projects. Not testimonials on our website — actual homeowners you can call.\n\nPhoenix Construction is fully licensed, insured, and has operated in the Cherokee County market for years.`,
    icon: <Award className="text-red-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Do I need a permit for my project, and what happens if my Woodstock contractor skips it?',
    answer: `Yes — almost every meaningful home improvement project in Woodstock GA requires a Cherokee County building permit. And the consequences of skipping one are severe, lasting, and entirely the homeowner's problem — not the contractor's.\n\n**Projects that require Cherokee County permits:**\n- Any new structural work (framing, additions, room conversions)\n- Electrical work beyond simple fixture replacements\n- Plumbing modifications or additions\n- HVAC installation or significant modification\n- Basement finishing\n- Deck additions or significant structural deck repairs\n- Fence installations over a certain height\n- Detached structures (garages, shops, ADUs)\n\n**What happens when you skip permits:**\n\n**At resale:** Your home's appraiser will compare your listed square footage or room count against the permit record. Unpermitted work is not counted as legal living space, cannot be claimed as a bedroom, and may need to be disclosed as a defect. Buyers can — and do — demand remediation or price reductions.\n\n**With insurance:** Homeowner's insurance carriers in Georgia can legally deny claims involving unpermitted work. If an unpermitted electrical addition causes a fire, your claim may be denied or reduced.\n\n**With the county:** Cherokee County can issue a stop-work order, require demolition of unpermitted work, and fine the property owner (not just the contractor).\n\n**The contractor who says "we don't need a permit for that" is wrong, lying, or both.** Phoenix Construction pulls every permit — always.`,
    icon: <Hammer className="text-slate-600 flex-shrink-0 mt-1" size={22} />,
  },
];

export default function GeneralContractorWoodstock() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'general-contracting',
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
      source: 'blog_general_contractor_woodstock',
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
              <span className="text-sm font-semibold text-red-400 bg-red-900/30 px-3 py-1 rounded-full">
                General Contractor Woodstock GA
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 28, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              General Contractor Woodstock GA: The Complete FAQ for Cherokee County Homeowners Hiring a Contractor in 2026
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              License verification, contract requirements, red flags, pricing benchmarks, and everything Woodstock homeowners need to know before hiring a <strong className="text-white">general contractor</strong> or <strong className="text-white">construction company</strong> in Cherokee County.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/phoecon1.jpeg"
                alt="General contractor Woodstock GA - licensed construction company Cherokee County"
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
                  <strong>Hiring the right general contractor in Woodstock GA is the most consequential decision you'll make on any home improvement project.</strong> A licensed, accountable GC protects your investment, keeps your project legal, and delivers results that add real value to your home. This FAQ covers every question Cherokee County homeowners ask — with real data, real numbers, and no fluff.
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
                <h2 className="text-2xl font-bold mb-3">Hire a Licensed General Contractor in Woodstock GA</h2>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Phoenix Construction is Cherokee County's fully licensed, insured, and permitted <strong className="text-white">general contractor</strong>. Kitchen remodels, bathroom renovations, basement finishing, new construction — one contractor, one contract, one warranty.
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
                <h2 className="text-xl font-bold text-slate-900 mb-2">Service Areas — Cherokee, Cobb & Fulton Counties</h2>
                <p className="text-gray-500 text-sm mb-4">Licensed general contractor serving Woodstock and the surrounding Metro Atlanta area.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Woodstock', 'Canton', 'Holly Springs', 'Marietta', 'Kennesaw', 'Alpharetta', 'Roswell', 'Milton', 'Smyrna'].map((area) => (
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
                  <h3 className="text-xl font-bold mb-2">Free Project Estimate</h3>
                  <p className="text-gray-300 text-sm mb-4">Woodstock's licensed general contractor. Every project permitted, every client protected.</p>
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
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm" />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm" />
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm" />
                    <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-sm">
                      <option value="general-contracting">General Contracting</option>
                      <option value="kitchen-remodel">Kitchen Remodeling</option>
                      <option value="bathroom-remodel">Bathroom Remodeling</option>
                      <option value="basement-finishing">Basement Finishing</option>
                      <option value="addition">Home Addition</option>
                      <option value="new-construction">New Home Construction</option>
                    </select>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Describe your project..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none text-sm" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70">
                      {isSubmitting ? <><Loader2 size={20} className="animate-spin mr-2" />Sending...</> : <><Send size={20} className="mr-2" />Get Free Estimate</>}
                    </button>
                  </form>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm">Phoenix Construction Credentials</h4>
                  <ul className="space-y-2">
                    {['Georgia Licensed General Contractor', 'Cherokee County Permitted', '$2M General Liability Coverage', 'Workers Comp on All Crews', 'Fixed-Price Contracts', '1-Year Workmanship Warranty'].map((item) => (
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
