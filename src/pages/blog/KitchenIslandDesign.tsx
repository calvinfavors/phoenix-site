import { CheckCircle, Phone, Star, ArrowRight, AlertTriangle, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-island', label: 'Kitchen Island Build' },
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodel' },
  { value: 'cabinet-install', label: 'Cabinet & Countertop Upgrade' },
  { value: 'kitchen-bathroom', label: 'Kitchen + Bathroom Remodel' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenIslandDesign() {
  return (
    <BlogTemplate
      title="Kitchen Island Design & Build Guide for Woodstock GA Homeowners: Everything You Need to Know in 2026"
      description="Kitchen islands are the most-requested feature in Cherokee County kitchen remodels. This complete guide covers sizing rules, layout clearances, custom vs. pre-made options, plumbing and electrical considerations, countertop overhangs, and what a well-built island actually costs in Woodstock GA."
      category="Kitchen Remodeling"
      categoryColor="red"
      date="July 9, 2026"
      heroImage="/IMG_9352.WEBP"
      heroImageAlt="Kitchen island design and build Woodstock GA Cherokee County custom kitchen island 2026"
      source="blog_kitchen_island_design_2026"
      canonical="/blog/kitchen-island-design-build-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'How much does a custom kitchen island cost in Woodstock GA?',
          answer: 'A custom built-in kitchen island in Woodstock GA typically costs $3,500–$18,000+ depending on size, materials, and features. A basic wood-frame island with painted finish and quartz countertop runs $3,500–$7,000. An island with cabinetry matching the kitchen, electrical outlets, seating overhang, and premium stone countertop runs $8,000–$14,000. An island with a prep sink, dishwasher, second refrigerator drawer, and custom detail work runs $14,000–$25,000+. Call Phoenix Construction at (678) 463-4893 for a free estimate.',
        },
        {
          question: 'How much space do you need for a kitchen island in a Woodstock GA home?',
          answer: 'The minimum clearance for a kitchen island is 42 inches on all working sides (the sides adjacent to appliances, the sink, or other countertops). 48 inches is recommended for comfortable traffic flow, and 48 inches is required if two people will work in the kitchen simultaneously. The island itself should be a minimum of 2 feet deep × 4 feet long for practical work surface. Many Cherokee County kitchens built in the 1990s are too small for an island — but an open-concept remodel (removing a wall) often creates the space needed.',
        },
        {
          question: 'Should a kitchen island have a sink?',
          answer: 'An island sink is a high-value feature if: (1) the kitchen is used for serious cooking and prep work; (2) the island will seat guests who want drinks or the host wants to face the room while working; (3) your kitchen\'s existing plumbing is positioned where running drain lines to the island is practical. Island sinks add $2,500–$6,000 to project cost (plumbing rough-in, drain lines through the floor or subfloor, supply lines, sink, faucet). Not every kitchen benefits — in a smaller kitchen where the existing sink is nearby, an island sink adds complexity and cost without proportional value.',
        },
        {
          question: 'What countertop is best for a kitchen island in Cherokee County GA?',
          answer: 'Quartz is the most popular island countertop choice in Cherokee County and Metro Atlanta for 2026 — durable, non-porous, requires no sealing, and available in a wide range of colors and vein patterns. Quartzite and marble are also popular for islands as a statement material (though they require sealing and more care). Granite remains a strong value choice. For islands with a waterfall edge, quartz and quartzite produce the cleanest mitered seams. Butcher block is popular for prep-focused islands without seating.',
        },
        {
          question: 'Can you add an island to an existing kitchen without doing a full remodel?',
          answer: 'Yes, in many cases. If your kitchen already has adequate clearance (42"+ on all sides of the proposed island location), a freestanding or semi-custom island can be added with minimal disruption — no plumbing or electrical required unless you want a sink or outlets. A built-in custom island that matches your existing cabinetry requires a contractor for framing, finish carpentry, and countertop work, but doesn\'t necessarily require touching the rest of the kitchen. Phoenix Construction can assess whether your kitchen layout can accommodate an island addition.',
        },
        {
          question: 'What is the ideal height for a kitchen island counter vs. bar seating?',
          answer: 'Standard kitchen counter height is 36 inches — the same as base cabinets. Bar height (for standard bar stools) is 42 inches. Counter height seating (for counter stools) is 36 inches. For islands with a single working surface, 36 inches is standard. For islands with a raised bar section (creating a two-level island), the bar typically sits at 42 inches on the seating side while the prep surface remains at 36 inches. Two-level islands require additional framing and countertop fabrication but create a clear visual separation between work area and seating.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Ask any Cherokee County homeowner what their single most-wanted kitchen upgrade is, and the answer is almost always the same: an island. Kitchen islands have become the defining feature of functional, social kitchen design — they add prep surface, seating, storage, and a natural gathering point that transforms how a kitchen feels and functions. But building one well requires more thought than most homeowners realize. <strong>The difference between an island that works beautifully for 20 years and one that's always in the way comes down to five decisions made before construction starts.</strong> This guide covers all of them.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-700"><strong>Custom-built vs. pre-made island:</strong> This guide focuses on custom-built islands — framed and finished by a contractor to match your kitchen's cabinetry and space. Pre-made standalone islands (from IKEA, Home Depot, etc.) are faster and cheaper ($500–$2,500) but almost always look like furniture, not architecture. Custom-built islands are structurally part of the kitchen and should be considered a permanent fixture. Both approaches are legitimate — the right choice depends on your budget, kitchen size, and whether you want the island to read as designed or as added-later.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-6">
        The Five Decisions That Determine Island Success
      </h2>

      {/* Decision 1 */}
      <div className="border-l-4 border-red-600 pl-5 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3">1. Size and Clearance: The Non-Negotiable Rules</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Kitchen island sizing is governed by clearance requirements — how much space remains between the island and surrounding counters, appliances, and walls. These aren't stylistic preferences; they determine whether your kitchen functions safely or becomes a traffic bottleneck.
        </p>
        <div className="bg-slate-50 rounded-xl p-5 mb-4">
          <div className="flex gap-2 items-center mb-3">
            <Ruler size={16} className="text-slate-600" />
            <span className="font-bold text-slate-800 text-sm">Clearance Requirements</span>
          </div>
          <div className="space-y-2">
            {[
              { rule: '42" minimum clearance', desc: 'On any working side of the island (adjacent to appliances, sink, or other countertops) — minimum for one person working comfortably' },
              { rule: '48" recommended clearance', desc: 'Better standard for most households — accommodates two people passing or working simultaneously' },
              { rule: '48" required for two cooks', desc: 'National Kitchen & Bath Association standard when two people will work simultaneously' },
              { rule: '36" minimum island depth', desc: 'Minimum for useful prep surface — 24" feels like a shelf, not a work surface' },
              { rule: '48" minimum island length', desc: 'Below 4 feet, an island provides limited functional gain' },
            ].map((item) => (
              <div key={item.rule} className="flex gap-3 text-sm">
                <span className="font-bold text-slate-700 whitespace-nowrap min-w-[190px]">{item.rule}</span>
                <span className="text-gray-600">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-2 items-start">
            <AlertTriangle size={14} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700"><strong>Common mistake in Cherokee County homes:</strong> Many 1990s-era kitchens that "look big" are actually 10'×12' or 10'×14' — not large enough for a centered island with proper clearance on all four sides. The solution is often a peninsula (island attached to one wall) rather than a freestanding island, which requires clearance on only three sides. A peninsula is a better choice than a too-small island.</p>
          </div>
        </div>
      </div>

      {/* Decision 2 */}
      <div className="border-l-4 border-red-600 pl-5 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3">2. Shape: Rectangular, L-Shaped, or Curved</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most kitchen islands in Cherokee County are rectangular — and for good reason. Rectangular islands are easiest to build, most efficient in use, and work with almost every kitchen layout. But shape affects function more than most homeowners realize.
        </p>
        <div className="space-y-3">
          {[
            {
              shape: 'Rectangular (most common)',
              pros: 'Maximum usable surface, cleanest look, easiest to build, seats guests efficiently on long side',
              cons: 'None significant — this is the right choice for most kitchens',
              best: 'Almost every kitchen with adequate clearance',
            },
            {
              shape: 'L-Shaped',
              pros: 'Creates a natural corner that can enclose a seating nook; adds more linear counter footage than a rectangle of similar footprint',
              cons: 'The inside corner is awkward dead space; requires more clearance on multiple sides',
              best: 'Open-concept kitchens with adjacent dining area where the island defines separate zones',
            },
            {
              shape: 'Peninsula (one end attached)',
              pros: 'Requires clearance on only 3 sides — works in smaller kitchens; natural flow from main counter',
              cons: 'Less accessible than a freestanding island; can feel like it "blocks" part of the kitchen',
              best: 'Kitchens under 150 sq ft where a freestanding island would be too cramped',
            },
            {
              shape: 'Curved or Round',
              pros: 'Soft, design-forward aesthetic; no sharp corners (good for households with children)',
              cons: 'Expensive to build (curved cabinetry requires skilled carpentry); countertop fabrication adds cost; less efficient storage',
              best: 'Design-forward kitchens with high construction budgets; specific aesthetic goals',
            },
          ].map((item) => (
            <div key={item.shape} className="border border-gray-200 rounded-xl p-4">
              <h4 className="font-bold text-slate-800 text-sm mb-2">{item.shape}</h4>
              <div className="grid sm:grid-cols-3 gap-2 text-xs">
                <div><span className="font-semibold text-green-700">Pros: </span><span className="text-gray-600">{item.pros}</span></div>
                <div><span className="font-semibold text-red-600">Cons: </span><span className="text-gray-600">{item.cons}</span></div>
                <div><span className="font-semibold text-slate-600">Best for: </span><span className="text-gray-600">{item.best}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decision 3 */}
      <div className="border-l-4 border-red-600 pl-5 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3">3. Plumbing and Electrical: Plan Before You Frame</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          Adding plumbing or electrical to an island must be decided and planned before construction begins — not as an afterthought. Running lines through a finished kitchen floor is significantly more expensive than doing it during rough-in. These decisions are also the ones that most affect long-term function.
        </p>

        <h4 className="font-semibold text-slate-800 mb-3 text-sm">Electrical: Almost Always Worth Adding</h4>
        <div className="space-y-2 mb-5">
          {[
            { feature: 'GFCI outlets in the island face', cost: '$400–$900', rec: 'Standard — add to every island', desc: 'Required by code within 6 feet of a sink; strongly recommended on any island. Powers small appliances (mixer, blender, coffee grinder, charging), reduces counter cord clutter.' },
            { feature: 'USB/USB-C integrated outlets', cost: '$150–$400', rec: 'Good addition', desc: 'Pop-up or flush-mount outlets with USB charging built in. Increasingly standard in new kitchen builds.' },
            { feature: 'Under-island lighting (LEDs)', cost: '$300–$700', rec: 'Excellent accent feature', desc: 'LED strip lighting under the island overhang illuminates the base and creates a floating visual effect — particularly striking with a waterfall edge.' },
            { feature: 'Dedicated circuit for appliances', cost: '$400–$800', rec: 'Only if adding a dishwasher, microwave drawer, or wine fridge', desc: 'Microwave drawers and under-counter refrigerators require dedicated 20-amp circuits.' },
          ].map((item) => (
            <div key={item.feature} className="bg-gray-50 rounded-lg p-3 text-sm">
              <div className="flex flex-wrap justify-between items-center gap-1 mb-1">
                <span className="font-semibold text-slate-800">{item.feature}</span>
                <div className="flex gap-2">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{item.cost}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">{item.rec}</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-slate-800 mb-3 text-sm">Plumbing: Only When It Adds Real Function</h4>
        <div className="space-y-2">
          {[
            { feature: 'Prep sink (small bar/prep sink)', cost: '$2,000–$4,500', rec: 'Worth it for serious cooks', desc: 'A second, smaller sink in the island for prep work, rinsing produce, or entertaining. Requires drain rough-in through the subfloor and supply lines — plan during framing. Best in larger kitchens (12\'+ wide) where the main sink is across the room.' },
            { feature: 'Full undermount sink', cost: '$3,000–$6,000', rec: 'Consider if relocating primary sink to island', desc: 'Some homeowners prefer to make the island the primary sink location to face the room while washing up. This requires moving the main sink\'s drain stack — complex and expensive, but increasingly common in major kitchen remodels.' },
            { feature: 'Water line only (ice maker, filtered water)', cost: '$600–$1,200', rec: 'Good for islands with built-in refrigerators', desc: 'If you\'re adding an under-counter wine fridge or refrigerator drawer with an ice maker, a water line rough-in is required.' },
          ].map((item) => (
            <div key={item.feature} className="bg-gray-50 rounded-lg p-3 text-sm">
              <div className="flex flex-wrap justify-between items-center gap-1 mb-1">
                <span className="font-semibold text-slate-800">{item.feature}</span>
                <div className="flex gap-2">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{item.cost}</span>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{item.rec}</span>
                </div>
              </div>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decision 4 */}
      <div className="border-l-4 border-red-600 pl-5 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3">4. Countertop and Overhang: Where Design and Function Meet</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The countertop is the most visible element of any island and the one that most defines the kitchen's aesthetic. It's also where the seating overhang — critical for comfortable bar or counter-height seating — is engineered.
        </p>

        <div className="bg-slate-50 rounded-xl p-5 mb-5">
          <h4 className="font-bold text-slate-800 mb-3 text-sm">Seating Overhang Rules</h4>
          <div className="space-y-2 text-sm">
            {[
              { label: 'Minimum knee clearance', value: '15" overhang', detail: 'Absolute minimum for comfortable seating — knees fit under the counter but it\'s tight' },
              { label: 'Comfortable counter seating', value: '12"–15" overhang', detail: 'For 36" counter height with counter stools — standard in most island designs' },
              { label: 'Bar height seating', value: '12" overhang at 42"', detail: 'For raised bar section — bar stools typically have footrests so overhang can be smaller' },
              { label: 'Cantilevered overhang limit', value: '≤12" without support', detail: 'Overhangs beyond 12" require corbels, brackets, or legs for structural support (especially on heavy stone)' },
              { label: 'Stone overhang with corbels', value: 'Up to 24"', detail: 'Heavy stone supported by decorative corbels or steel brackets — provides generous knee space' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 border-b border-gray-200 py-1.5 last:border-0">
                <span className="text-gray-600 min-w-[170px]">{item.label}</span>
                <span className="font-semibold text-slate-700 min-w-[130px]">{item.value}</span>
                <span className="text-gray-500 text-xs">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <h4 className="font-semibold text-slate-800 mb-3 text-sm">Island Countertop Material Comparison</h4>
        <div className="space-y-2">
          {[
            { mat: 'Quartz', cost: '$4,500–$9,000', maintenance: 'None (non-porous)', verdict: 'Best overall choice for most islands', detail: 'Durable, non-porous, no sealing required, consistent appearance. Best choice for islands that see heavy use or have a prep sink. Waterfall edge is stunning in quartz.' },
            { mat: 'Quartzite', cost: '$6,000–$14,000', maintenance: 'Annual sealing', verdict: 'Premium look, natural stone character', detail: 'Natural stone with marble-like veining but harder and more durable than marble. Requires sealing. Growing in popularity in Cherokee County luxury remodels.' },
            { mat: 'Marble', cost: '$5,000–$15,000', maintenance: 'Sealing + careful use', verdict: 'Beautiful but high-maintenance', detail: 'Etches from acidic foods and drinks. Best for islands used primarily as serving/display surfaces rather than heavy prep work. Low-acid households can manage it well.' },
            { mat: 'Butcher Block', cost: '$1,500–$4,000', maintenance: 'Monthly oil, careful with water', verdict: 'Ideal for dedicated prep surfaces', detail: 'Warm, forgiving cutting surface. Best for islands without a sink (standing water damages wood). Pairs well as a contrasting material alongside a stone perimeter counter.' },
            { mat: 'Granite', cost: '$3,500–$8,000', maintenance: 'Periodic sealing', verdict: 'Excellent value, proven durability', detail: 'Still the most-installed stone countertop in Cherokee County. Wide range of patterns. More porous than quartz but practical with annual sealing. Excellent value at mid-budget.' },
          ].map((item) => (
            <div key={item.mat} className="border border-gray-200 rounded-xl p-4">
              <div className="flex flex-wrap justify-between items-center gap-1 mb-1">
                <h4 className="font-bold text-slate-800 text-sm">{item.mat}</h4>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{item.cost}</span>
                  <span className="text-xs bg-green-100 text-green-700 font-medium px-2 py-0.5 rounded">{item.verdict}</span>
                </div>
              </div>
              <div className="text-xs text-gray-500 mb-1"><span className="font-medium text-slate-600">Maintenance: </span>{item.maintenance}</div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decision 5 */}
      <div className="border-l-4 border-red-600 pl-5 mb-8">
        <h3 className="text-xl font-bold text-slate-900 mb-3">5. Storage Configuration: Don't Waste a Single Cabinet</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The base of the island is pure storage real estate, and most homeowners under-optimize it. The standard approach — two base cabinets with shelves facing the kitchen — leaves significant potential unused. Plan these before the island is framed:
        </p>
        <div className="space-y-2">
          {[
            { feature: 'Deep drawer stacks (instead of doors)', detail: 'Pot and pan drawers are dramatically more accessible than base cabinets with doors. Deep drawers (18"–21" deep) in the island base give easy access to every item without kneeling. This is the single most-used upgrade in island storage.' },
            { feature: 'Seating-side open shelving', detail: 'The side of the island facing the dining area can be open shelves instead of enclosed cabinets — storing cookbooks, serving bowls, wine bottles, or decorative items. Creates a restaurant-style look and keeps items accessible from both sides.' },
            { feature: 'Trash and recycling pull-out', detail: 'An island is the ideal location for a concealed pull-out trash and recycling center — centrally located, away from the sink cabinet where it usually competes with under-sink plumbing.' },
            { feature: 'Appliance garage or microwave drawer', detail: 'A microwave drawer built into the island base (under the countertop) frees up wall cabinet space and positions the microwave at a practical height. Requires a dedicated 20-amp circuit.' },
            { feature: 'Wine storage', detail: 'A built-in wine rack in the island end panel or base is a natural fit and a design feature that looks intentional rather than retrofitted.' },
          ].map((item) => (
            <div key={item.feature} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
              <CheckCircle size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800 text-sm">{item.feature}: </span>
                <span className="text-gray-600 text-sm">{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Complete Island Build Cost Breakdown (Woodstock GA, 2026)
      </h2>
      <div className="space-y-4 mb-8">
        {[
          {
            tier: 'Standard Island',
            size: 'Approx. 4\'×3\', rectangular',
            range: '$4,500–$8,000',
            color: 'border-blue-200 bg-blue-50/30',
            includes: [
              'Framed base matching existing kitchen cabinetry',
              'Painted finish (MDF or hardwood fronts)',
              'Two door bases + one drawer stack',
              'Quartz or granite countertop (no overhang seating)',
              'GFCI outlet (1 duplex)',
            ],
          },
          {
            tier: 'Mid-Range Island with Seating',
            size: 'Approx. 6\'×3.5\'',
            range: '$9,000–$14,000',
            color: 'border-amber-200 bg-amber-50/30',
            includes: [
              'Custom cabinetry matching kitchen finish',
              'Deep drawer stacks + pull-out trash',
              '12"–15" overhang for 3 counter stools',
              'Quartz countertop with eased or beveled edge',
              '2 GFCI outlets, under-island LED accent lighting',
              'Open shelving or wine rack on seating side',
            ],
          },
          {
            tier: 'Premium Island with Prep Sink',
            size: 'Approx. 8\'×4\', or larger',
            range: '$16,000–$28,000+',
            color: 'border-green-200 bg-green-50/30',
            includes: [
              'Full custom cabinetry, inset doors, soft-close hardware',
              'Prep or main sink with plumbing rough-in',
              'Waterfall edge countertop (quartz or quartzite)',
              'Pendant light rough-in (3 pendants over island)',
              'Under-counter appliance (wine fridge, microwave drawer, or dishwasher drawer)',
              'Pop-up or flush-mount outlet system',
              'Seating overhang for 4 with corbel or leg support',
            ],
          },
        ].map((tier) => (
          <div key={tier.tier} className={`border-2 rounded-2xl p-5 ${tier.color}`}>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
              <div>
                <h3 className="font-bold text-slate-900">{tier.tier}</h3>
                <p className="text-gray-500 text-xs">{tier.size}</p>
              </div>
              <span className="font-bold text-slate-700 text-lg">{tier.range}</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-1">
              {tier.includes.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={12} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Free Kitchen Island Consultation in Woodstock GA</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction designs and builds custom kitchen islands throughout Cherokee County, Woodstock, Canton, and Metro Atlanta. We'll measure your space, discuss your goals, and give you a realistic scope and budget — with no obligation.
        </p>
        <a
          href="tel:6784634893"
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
        >
          <Phone size={20} className="mr-2" />
          Call (678) 463-4893
        </a>
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Star className="fill-yellow-400 text-yellow-400" size={20} />
          <span className="font-bold text-slate-900">From a Real Client</span>
        </div>
        <p className="text-gray-600 italic mb-3">"Mitch was amazing to work with on our kitchen remodel. He was most helpful and patient as we built out the scope, what our options were, and what to expect during the project. He stands by his team's work."</p>
        <p className="text-gray-500 text-sm">— Nathan Williams, Google Review · March 2026</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Kitchen Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Kitchen Lighting Design Guide Woodstock GA', href: '/blog/kitchen-lighting-design-woodstock-ga' },
          { label: 'Open Concept Kitchen Remodel Woodstock GA', href: '/blog/open-concept-kitchen-remodel-woodstock-ga' },
          { label: 'Countertop Edge Profiles Explained', href: '/blog/countertop-edge-profiles-woodstock-ga' },
          { label: 'Kitchen Remodel Cost Guide 2026', href: '/blog/kitchen-remodel-cost-woodstock-ga-2026' },
        ].map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-red-300 hover:shadow-sm transition-all group"
          >
            <span className="text-gray-700 text-sm font-medium group-hover:text-red-600">{link.label}</span>
            <ArrowRight size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </BlogTemplate>
  );
}
