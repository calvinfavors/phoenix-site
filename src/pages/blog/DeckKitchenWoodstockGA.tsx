import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Calendar, ArrowLeft, Phone, CheckCircle, Loader2, Send,
  ChevronDown, ChevronUp, DollarSign, Clock, Hammer,
  Shield, Lightbulb, TrendingUp, Home, Users, Wrench,
} from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const stats = [
  { value: '82.9%', label: 'ROI on wood deck addition — Remodeling Magazine Cost vs. Value 2025 Atlanta region' },
  { value: '96.1%', label: 'ROI on minor kitchen remodel — highest renovation category in Atlanta 2025' },
  { value: '$0.96', label: 'Returned per $1 spent on kitchen refresh in Cherokee County (NKBA 2025)' },
  { value: '18 days', label: 'Fewer days on market for homes with updated kitchens vs. outdated (Cherokee County MLS)' },
];

const faqs = [
  {
    question: 'How much does a deck cost in Woodstock GA in 2026?',
    answer: `Deck costs in Woodstock GA vary based on material, size, and complexity. Here's a realistic breakdown from our Cherokee County projects:\n\n**Pressure-treated wood deck (most common):**\n- 200–300 sq ft: $12,000–$18,000\n- 400–600 sq ft: $19,000–$28,000\n- 600–800 sq ft with stairs and railing: $26,000–$38,000\n\n**Composite decking (Trex, TimberTech, Azek):**\n- 200–300 sq ft: $18,000–$26,000\n- 400–600 sq ft: $26,000–$40,000\n- 600–800 sq ft with stairs and railing: $38,000–$55,000\n\n**Cedar or hardwood deck:**\n- 200–300 sq ft: $16,000–$24,000\n- Add 20–30% for Ipe or exotic hardwoods\n\n**Factors that significantly move the price:**\n- **Height above grade:** Ground-level decks are simplest and least expensive. Elevated decks on sloped Cherokee County lots require longer posts, more complex framing, and more substantial footings — adding $3,000–$12,000.\n- **Stairs:** Every stair run adds $1,500–$3,500 depending on length and material.\n- **Railing material:** Aluminum balusters ($35–$55/linear ft) vs. cable railing ($75–$130/linear ft) vs. glass panels ($150–$250/linear ft).\n- **Built-in features:** Pergola, built-in bench seating, outdoor kitchen rough-in — each adds $2,000–$15,000.\n\n**The ROI case:** The 2025 Remodeling Magazine Cost vs. Value Report shows wood deck additions returning 82.9% at resale in Atlanta. But the lifestyle ROI is the number Woodstock homeowners care about most — a well-designed deck is used 3–4x more than the interior square footage that costs 4x more per sq ft to add.`,
    icon: <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What is the best decking material for Woodstock GA homes?',
    answer: `Georgia's climate — high humidity, heavy rainfall, 200+ UV-intense sun days, and occasional extreme cold — makes material selection more consequential than in milder climates. Here's the honest comparison:\n\n**Pressure-treated pine (PT):**\n- Lowest upfront cost\n- Requires annual or biennial sealing/staining to prevent gray weathering, cracking, and cupping in Cherokee County's moisture\n- Lifespan: 15–25 years with consistent maintenance\n- Common failure mode in Georgia: surface checking and gray weathering within 2–3 years without maintenance\n\n**Composite (Trex, TimberTech Azek, Deckorators):**\n- 25–50% higher upfront cost than PT\n- No staining, sealing, or annual maintenance required\n- Mold/mildew-resistant face — critical in Georgia's high-humidity environment\n- Capped composite (PVC-capped boards) significantly outperforms uncapped in Georgia sun\n- Lifespan: 25–30 years with minimal maintenance\n- Most popular material on our recent Woodstock projects\n\n**Cedar:**\n- Natural rot resistance without PT chemical treatment\n- Requires staining every 2–3 years\n- Better dimensional stability than PT in humidity extremes\n- Lifespan: 20–35 years with maintenance\n\n**Ipe and hardwoods:**\n- Extreme density and natural rot resistance — no treatment needed\n- Beautiful grain, upscale appearance\n- More expensive and harder to source\n- Cannot be easily replaced if sections are damaged\n- Lifespan: 40–70 years\n\n**Our recommendation for most Woodstock homeowners:** Capped composite decking (Trex Transcend, Azek Vintage, or TimberTech Legacy) delivers the best lifetime value in Cherokee County's climate. The maintenance elimination alone — roughly $400–$800/year in stain and labor — pays back the material premium within 8–12 years.`,
    icon: <Home className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What permits are required for a deck in Woodstock GA, and what happens without one?',
    answer: `Cherokee County requires a building permit for virtually all deck construction and significant structural repairs. This is non-negotiable for good legal and financial reasons.\n\n**When a permit is required in Woodstock:**\n- Any new deck construction\n- Any deck expansion that changes the footprint or height\n- Replacing the structural framing or ledger board\n- Adding or significantly modifying stairs\n- Installing an attached pergola or shade structure\n\n**The permit process for Cherokee County decks:**\n- Submit permit application with site plan, deck plans (footings, framing, size, height), and material specifications\n- Cherokee County typically reviews residential deck permits in 7–14 business days\n- Three inspections are typically required: footing/post, framing, and final\n\n**What happens without a permit:**\n\n**Safety liability:** Unpermitted deck framing may not meet the 40 PSF live load requirement for Georgia residential decks. A deck failure at a gathering can result in serious injury — and if unpermitted work was involved, homeowner's insurance may have reduced or no coverage.\n\n**At resale:** Buyers' home inspectors are trained to identify decks without corresponding permits. In Cherokee County, a deck without a permit is a negotiating target — buyers routinely ask for $5,000–$15,000 in concessions or demand legalization.\n\n**Insurance:** Carriers can deny or reduce property damage claims for structures built without permits.\n\nPhoenix Construction handles every aspect of the Cherokee County permit process — application, plan submission, inspection scheduling, and final certificate.`,
    icon: <Shield className="text-slate-700 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How do I know if my existing deck needs repair or full replacement in Woodstock GA?',
    answer: `Deck failures are one of the most preventable home emergencies — and one of the most dangerous when they happen. Here's how to assess your existing deck objectively:\n\n**Signs repair is sufficient:**\n- Isolated boards that are cracked, split, or showing significant weathering\n- Railing sections that are loose but whose posts are structurally sound\n- Surface staining or mildew that hasn't penetrated the wood\n- Deck is under 10 years old with intact ledger board and post connections\n\n**Signs full replacement is needed:**\n- Ledger board (the board connecting the deck to your house) shows rot, damage, or improper flashing — this is the most common cause of catastrophic deck failure\n- Posts show rot at the base, especially where they enter concrete footings\n- Beam or joist rot — probe with a screwdriver; wood that punctures easily is compromised\n- Deck is 15+ years old and built with late-1980s or 1990s hardware (older galvanized hardware corrodes significantly faster than modern stainless or hot-dipped)\n- Multiple boards require replacement (more than 30% of surface)\n- Deck was never permitted and has unknown framing specifications\n\n**The ledger board warning:** Cherokee County home inspectors flag ledger connections as the primary structural concern on older decks. An improperly flashed ledger allows water intrusion into the house framing — causing rot that extends far beyond the deck itself. If your deck is attached to the house and 12+ years old, the ledger connection should be inspected by a licensed contractor.\n\n**Repair vs. replacement economics:** A repair that costs $2,000–$5,000 on a deck that needs replacement within 3 years typically costs more in total than replacing now. Phoenix Construction provides honest structural assessments with no pressure to upsell.`,
    icon: <Wrench className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a deck installation or deck repair take in Woodstock GA?',
    answer: `Timeline for deck projects in Cherokee County depends on size, complexity, and material choices. Here's what to expect:\n\n**Permit phase:**\n- Cherokee County residential deck permit: 7–14 business days for standard projects\n- Projects in HOA communities may require separate HOA approval (additional 2–4 weeks)\n\n**Footing phase:**\n- Footing excavation and concrete pour: 1–2 days\n- Concrete cure time before framing: 3–7 days (varies by mix and temperature)\n\n**Framing:**\n- Standard 300–400 sq ft deck: 2–3 days\n- Complex elevated or multi-level deck: 4–6 days\n\n**Decking installation:**\n- Standard composite or PT boards: 2–3 days for average deck\n- Hidden fastener systems (Trex, TimberTech): add 1 day\n\n**Stairs, railing, trim:**\n- 2–4 days depending on complexity and railing material\n\n**Inspections:**\n- Footing inspection: Schedule 2–3 days after pour\n- Framing inspection: Schedule before decking begins\n- Final inspection: 3–5 days\n\n**Total project timeline:**\n- Standard deck (permit to final): 3–5 weeks\n- Complex elevated or multi-level deck: 6–9 weeks\n- Deck repair (no permit required for minor repairs): 1–5 days\n\n**Materials impact on timeline:** Composite decking is typically in stock. Specialty railings (cable, glass), custom pergola materials, or specific exotic hardwoods may add 2–4 weeks for procurement. Phoenix Construction pre-orders all long-lead materials before scheduling starts.`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How much does a kitchen remodel cost in Woodstock GA in 2026?',
    answer: `Kitchen remodeling is the highest-ROI home improvement category in Cherokee County — and also the most variable in cost. Here's a realistic framework for Woodstock homeowners:\n\n**Cosmetic kitchen refresh (highest ROI, lowest cost):**\n- Cabinet painting/refinishing + new hardware: $3,500–$7,000\n- New countertops (quartz or granite) with existing cabinet footprint: $4,500–$9,000\n- New backsplash + paint + fixtures: $2,500–$5,000\n- All three combined: $8,000–$18,000\n\n**Mid-range kitchen remodel (new cabinets, no layout change):**\n- Semi-custom cabinets (KraftMaid, Wellborn, Waypoint) + quartz counters + tile backsplash + new appliances: $35,000–$60,000 for a standard Woodstock home\n- Add undermount sink, new faucet, under-cabinet lighting: $38,000–$65,000\n\n**Full kitchen remodel (layout change, high-end finishes):**\n- Custom cabinets + quartz or stone counters + professional appliances + layout modification: $65,000–$110,000\n- Structural changes (removing a wall, island addition): add $8,000–$20,000\n\n**Luxury kitchen transformation:**\n- Full custom cabinetry, high-end appliances (Wolf, Sub-Zero), stone counters, custom tile, structural changes: $110,000–$175,000+\n\n**2026 Cherokee County specific pricing pressure:** Cabinet lead times have stabilized at 6–10 weeks for semi-custom, 10–16 weeks for custom. Quartz countertop pricing has moderated slightly after 2022–2023 highs. Labor costs remain elevated — Woodstock is a competitive market for skilled finish trades.`,
    icon: <DollarSign className="text-green-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What kitchen remodeling projects deliver the highest ROI in Woodstock GA?',
    answer: `This is the question every Woodstock homeowner asks before spending money on a kitchen — and the data from the 2025 Remodeling Magazine Cost vs. Value Report is clear:\n\n**#1 — Minor kitchen remodel: 96.1% ROI (Atlanta region)**\nThe highest-returning kitchen investment is not a gut remodel. It's a targeted refresh: new cabinet doors or paint, updated hardware, new countertops, improved lighting, and modern fixtures — keeping the existing cabinet boxes and layout. For $12,000–$22,000, you can transform a dated kitchen and recover nearly all of it at resale.\n\n**#2 — Major mid-range kitchen remodel: 81.6% ROI**\nNew semi-custom cabinets, quartz countertops, tile backsplash, stainless appliances. This is the full kitchen remodel without structural changes and without ultra-premium finishes. Returns 81.6 cents per dollar at resale.\n\n**#3 — Major upscale kitchen remodel: 53.5% ROI**\nCustom cabinets, premium appliances, luxury materials. Lower ROI on paper — but for a forever home, the daily quality of life value makes the math different. You're buying years of enjoyment, not just resale value.\n\n**What actually matters to Cherokee County buyers:**\nFrom Cherokee County MLS data: homes with updated kitchens spend 18 fewer days on market and receive offers 3.1% closer to asking price than comparable homes with dated kitchens. In a $550,000 home, that's $17,050 more at closing — on top of the direct value add.\n\n**The strategic framework:** If you're selling within 3 years, target the minor remodel with max cosmetic impact. If you're staying 5+ years, a full mid-range remodel pays both in daily enjoyment and eventual resale.`,
    icon: <TrendingUp className="text-emerald-600 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'How long does a kitchen remodel take in Woodstock GA?',
    answer: `Kitchen remodeling timeline is consistently the biggest source of homeowner frustration — because most contractors underestimate to win the bid. Here are honest timelines from our Cherokee County kitchen projects:\n\n**Cosmetic refresh (cabinet painting, countertops, backsplash):**\n- 2–4 weeks (no permit required for in-kind updates)\n\n**Mid-range remodel, no layout change:**\n- Permit phase: 7–14 days (electrical and plumbing work require permits)\n- Cabinet demolition and rough-in work: 1 week\n- Cabinet installation: 4–6 days (semi-custom)\n- Countertop template and fabrication: 7–10 days after cabinets are set\n- Backsplash, plumbing, electrical finishes: 1 week\n- Appliances, trim, punch list: 3–5 days\n- **Total realistic timeline: 7–11 weeks**\n\n**Full remodel with layout change:**\n- Add 2–3 weeks for structural work and extended rough-in phase\n- **Total realistic timeline: 10–16 weeks**\n\n**The lead-time reality:** Custom cabinets take 10–16 weeks to arrive after ordering. This is the most common cause of kitchen remodel delays. Phoenix Construction orders cabinets at contract signing — before demo begins — to compress the overall timeline.\n\n**Living without a kitchen:** Most Woodstock homeowners set up a temporary kitchen in the garage or dining room. We schedule demo and rough-in work as efficiently as possible to minimize the time you're without functional cooking facilities. A realistic expectation: 4–6 weeks without a kitchen for a full remodel.`,
    icon: <Clock className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What kitchen remodeling trends are popular in Woodstock GA homes right now?',
    answer: `Based on our completed kitchen projects across Cherokee County in 2025–2026 and current design data from the NKBA annual survey:\n\n**Cabinet trends dominating Woodstock kitchens:**\n- White and warm white remain the #1 cabinet color (42% of our projects)\n- Two-tone kitchens (white or cream uppers, contrasting color or wood lower cabinets): 28% of projects\n- Flat-panel and shaker are the dominant door styles — traditional raised panel is declining\n- Open shelving replacing upper cabinets in one section: popular but we consistently advise clients to limit this to 20–30% of upper storage\n\n**Countertop trends:**\n- Quartz (engineered stone) remains dominant at ~65% of projects — easy maintenance, consistent pattern\n- Quartzite (natural stone) is growing — similar look to marble with better durability in Georgia's climate\n- Butcher block accents on islands are trending back\n- Leathered or honed finishes over polished on dark granites\n\n**Functional upgrades with high demand:**\n- Under-cabinet LED lighting (almost universal now)\n- Deep single-bowl or workstation sinks\n- Drawer-style dishwasher panels (hidden appliances)\n- Built-in coffee station or appliance garage\n- Walk-in or butler's pantry addition (highest-demand upgrade on larger Cherokee County homes)\n\n**Appliance trends:**\n- 36" professional-style ranges (Cafe, Thor, Bertazzoni) are the most requested upgrade in mid-range kitchens\n- Column refrigerators replacing French door models in high-end kitchens\n- Microwave drawers replacing over-range microwaves`,
    icon: <Lightbulb className="text-amber-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'Can I combine a deck build and kitchen remodel with the same contractor in Woodstock GA?',
    answer: `Yes — and there are meaningful advantages to using a single general contractor for both projects simultaneously or sequentially.\n\n**Advantages of combining projects with one GC:**\n\n**Single mobilization:** Contractors incur setup and demobilization costs on every project. Combining a deck and kitchen remodel reduces these costs — and the savings should be passed through to you in a combined bid.\n\n**Trade sequencing efficiency:** Your GC can coordinate the electrician to run circuits for both the kitchen and outdoor deck lighting in a single trade visit, rather than scheduling two separate electrical mobilizations. Same applies to plumbing if you're adding an outdoor kitchen.\n\n**Single permit relationship:** One permit application, one set of inspections, one point of contact with the county.\n\n**Consistent quality oversight:** One project manager holds standards across both scopes. No finger-pointing between different contractors about who caused damage to each other's work.\n\n**Negotiating leverage:** On a combined $80,000–$130,000 project, you have significantly more leverage to negotiate favorable terms, warranty length, and scheduling priority than on two separate $40,000–$65,000 projects.\n\n**How to structure it:** We typically recommend completing the kitchen remodel first (indoor mess, temporary kitchen setup), then transitioning to the deck (outdoor work, less disruption to daily life). For clients doing both simultaneously, we use sequencing that keeps one area functional while the other is in demo phase.\n\nPhoenix Construction regularly manages combined kitchen + deck projects across Woodstock and Cherokee County. Request a combined estimate for both scopes when you contact us.`,
    icon: <Users className="text-blue-500 flex-shrink-0 mt-1" size={22} />,
  },
  {
    question: 'What are the most common kitchen remodeling mistakes Woodstock GA homeowners make?',
    answer: `After completing hundreds of kitchen remodels in Cherokee County, these are the mistakes we see most frequently — and most expensively:\n\n**Mistake #1: Ordering custom cabinets before finalizing the design**\nCustom cabinets are non-returnable. A design change after cabinets are ordered means a $15,000–$30,000 mistake. Finalize every detail — door style, finish, hardware, interior organization — before placing any cabinet order.\n\n**Mistake #2: Not accounting for the space above cabinets**\nIn Cherokee County homes with 9' or 10' ceilings, the space between the top of upper cabinets and the ceiling is a design decision — open (dust collector) or cabinets to ceiling (premium look, requires crown molding). Not deciding this upfront leads to last-minute, expensive changes.\n\n**Mistake #3: Underestimating lighting**\nMost Woodstock homes built before 2010 have severely inadequate kitchen lighting — one central fixture doing the work of eight. Recessed lighting, under-cabinet LED strips, and pendant lighting over an island dramatically change the feel of the space. Lighting is one of the highest-return investments in any kitchen remodel.\n\n**Mistake #4: Choosing countertops before seeing them in the space**\nQuartz and stone slabs vary lot-to-lot. Always visit the slab yard and stand your chosen slab upright under natural light before committing. A photo online and a sample tile are not adequate for a $6,000–$15,000 countertop purchase.\n\n**Mistake #5: Skipping the permit to save time**\nKitchen remodels involving new electrical circuits, plumbing modifications, or structural work require permits. Skipping them creates all the problems outlined elsewhere in this guide — insurance risk, resale complications, and no legal recourse if the work fails.\n\n**Mistake #6: Hiring on price alone**\nThe lowest kitchen remodel bid in Cherokee County consistently represents the highest total project cost. Material substitutions, change orders, and rework all accelerate after a too-low bid is signed.`,
    icon: <Hammer className="text-red-500 flex-shrink-0 mt-1" size={22} />,
  },
];

export default function DeckKitchenWoodstockGA() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'deck-installation',
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
      source: 'blog_deck_kitchen_woodstock_ga',
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
              <span className="text-sm font-semibold text-emerald-400 bg-emerald-900/30 px-3 py-1 rounded-full">
                Deck Builders & Kitchen Remodeling Woodstock GA
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar size={14} className="mr-1" />
                April 28, 2026
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Deck Builders & Kitchen Remodeling Woodstock GA: The Complete FAQ on Costs, Materials, Permits & ROI for Cherokee County Homeowners
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Real cost data, material comparisons, permit requirements, and ROI breakdowns for <strong className="text-white">deck installation</strong>, <strong className="text-white">deck repair</strong>, and <strong className="text-white">kitchen remodeling</strong> in Woodstock GA and Cherokee County — from actual 2025–2026 projects.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <img
                src="/phoecon4.jpeg"
                alt="Deck builders Woodstock GA - kitchen remodeling and deck installation Cherokee County"
                className="w-full rounded-2xl mb-8 shadow-lg object-cover"
                style={{ maxHeight: '420px' }}
              />

              {/* Stats bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {stats.map((s) => (
                  <div key={s.value} className="bg-slate-900 text-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{s.value}</div>
                    <div className="text-xs text-gray-400 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-slate-50 border border-emerald-200 rounded-2xl p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Decks and kitchens are consistently the two highest-demand improvement projects in the Woodstock market</strong> — and together they represent the greatest opportunity for both lifestyle improvement and resale value gain. This FAQ covers everything Cherokee County homeowners need to know before starting either project in 2026, backed by real local data.
                </p>
              </div>

              {/* Section dividers */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Deck Installation & Repair</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* FAQ Accordion - Deck section */}
              <div className="space-y-3 mb-10">
                {faqs.slice(0, 5).map((faq, index) => (
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

              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Kitchen Remodeling Woodstock GA</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* FAQ Accordion - Kitchen section */}
              <div className="space-y-3 mb-10">
                {faqs.slice(5).map((faq, index) => {
                  const actualIndex = index + 5;
                  return (
                    <div key={actualIndex} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <button
                        onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
                        className="w-full flex items-start justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors gap-3"
                      >
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          {faq.icon}
                          <span className="font-semibold text-slate-900 text-base leading-snug">{faq.question}</span>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          {openIndex === actualIndex
                            ? <ChevronUp className="text-red-600" size={20} />
                            : <ChevronDown className="text-gray-400" size={20} />}
                        </div>
                      </button>
                      {openIndex === actualIndex && (
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
                  );
                })}
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 text-white">
                <h2 className="text-2xl font-bold mb-3">Build Your Deck or Remodel Your Kitchen in Woodstock GA</h2>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Phoenix Construction builds decks and remodels kitchens across Woodstock and Cherokee County. Licensed, insured, fully permitted — with fixed-price contracts and one contact for the entire project.
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
                <h2 className="text-xl font-bold text-slate-900 mb-2">Serving Woodstock and Cherokee County</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Woodstock', 'Canton', 'Holly Springs', 'Marietta', 'Kennesaw', 'Alpharetta', 'Roswell', 'Acworth', 'Ball Ground'].map((area) => (
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
                  <h3 className="text-xl font-bold mb-2">Free Deck & Kitchen Estimate</h3>
                  <p className="text-gray-300 text-sm mb-4">Woodstock's licensed deck builders and kitchen remodelers. Fixed-price quotes, no surprises.</p>
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
                      <option value="deck-installation">New Deck Installation</option>
                      <option value="deck-repair">Deck Repair / Replacement</option>
                      <option value="kitchen-remodel">Kitchen Remodeling</option>
                      <option value="deck-kitchen">Deck + Kitchen Combo</option>
                      <option value="outdoor-kitchen">Outdoor Kitchen / Bar</option>
                      <option value="pergola">Pergola / Shade Structure</option>
                    </select>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your project..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none text-sm" />
                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all flex items-center justify-center disabled:opacity-70">
                      {isSubmitting ? <><Loader2 size={20} className="animate-spin mr-2" />Sending...</> : <><Send size={20} className="mr-2" />Get Free Estimate</>}
                    </button>
                  </form>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-900 mb-3 text-sm">Phoenix Construction — Woodstock GA</h4>
                  <ul className="space-y-2">
                    {['Georgia Licensed General Contractor', 'All Permits Pulled & Managed', 'Fixed-Price Contracts', 'Composite & Wood Deck Specialists', 'Custom Kitchen Remodels', 'Manufacturer Certified Materials'].map((item) => (
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
