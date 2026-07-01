import { CheckCircle, Phone, Star, ArrowRight, Home, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'master-bath-addition', label: 'Master Bathroom Addition' },
  { value: 'bathroom-remodel', label: 'Full Bathroom Remodel' },
  { value: 'home-addition', label: 'Home Addition' },
  { value: 'kitchen-bathroom', label: 'Kitchen + Bathroom Remodel' },
  { value: 'other', label: 'Other Services' },
];

export default function MasterBathroomAddition() {
  return (
    <BlogTemplate
      title="Master Bathroom Addition in Cherokee County GA: What It Costs and What's Involved in 2026"
      description="Thousands of Cherokee County and Woodstock GA homes built in the 1980s and 1990s lack a proper master bathroom. This guide covers the real cost of adding a master bath in 2026, what the process involves, and what to expect from permits, construction, and impact on home value."
      category="Bathroom Remodeling"
      categoryColor="red"
      date="July 1, 2026"
      heroImage="/gallery/phoenix-bathroom-2.jpg"
      heroImageAlt="Master bathroom addition Cherokee County Woodstock GA cost and process 2026"
      source="blog_master_bathroom_addition_2026"
      canonical="/blog/master-bathroom-addition-cherokee-county-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'How much does it cost to add a master bathroom in Cherokee County GA?',
          answer: 'Adding a master bathroom in Cherokee County GA typically costs $35,000–$85,000 for a conversion within existing square footage (converting a closet, bedroom, or unused space into a bathroom) and $75,000–$150,000+ for a true addition that adds square footage to the home. The wide range depends on the size of the bathroom, finish level, and how much framing and structural work is involved. Phoenix Construction provides free in-home consultations — call (678) 463-4893.',
        },
        {
          question: 'Can I convert a closet or bedroom into a master bathroom in Woodstock GA?',
          answer: 'Yes, and this is one of the most common master bathroom addition projects in Cherokee County\'s 1980s–1990s housing stock. Many homes from this era have a large master bedroom with an attached or adjacent closet that can be converted, or a small fourth bedroom adjacent to the master that can be repurposed. Converting within existing square footage avoids the cost of a full addition — framing, plumbing rough-in, and finish work typically cost $35,000–$65,000 for a well-appointed master bath. A permit from Cherokee County Development Services is required.',
        },
        {
          question: 'Does adding a master bathroom increase home value in Cherokee County?',
          answer: 'Yes, significantly. Cherokee County homes priced $400,000–$700,000 with no dedicated master bathroom — or with only a 3/4 bath attached to the master — are penalized in buyer perception and comparable valuations. Adding a proper master bath (5-piece or 4-piece with a walk-in shower) typically adds $40,000–$80,000 in market value while costing $45,000–$85,000 to build — a 70–95% cost recovery ratio. In competitive price ranges, a missing master bath actively hurts days on market.',
        },
        {
          question: 'What permits are required to add a master bathroom in Cherokee County GA?',
          answer: 'A master bathroom addition or conversion in Cherokee County requires a building permit from Cherokee County Development Services. If the project involves adding square footage to the home, a full addition permit (including structural review) is required. For conversions within existing space, a standard renovation permit covering plumbing, electrical, and building work is needed. All plumbing must be inspected at rough-in before walls close. Your general contractor coordinates all permit applications. Phoenix Construction handles all permitting as part of every project.',
        },
        {
          question: 'How long does a master bathroom addition take in Cherokee County?',
          answer: 'A master bathroom conversion within existing square footage typically takes 12–18 weeks from contract to completion: 6–10 weeks of pre-construction (design, permits, material procurement) and 5–8 weeks of active construction. A full addition with new square footage takes 16–24 weeks total, including foundation work, framing, roofing tie-in, and finish work. Active construction on a conversion takes 4–6 weeks once work begins.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Cherokee County's 1980s and 1990s housing stock has a well-known limitation: many homes of that era were built with a master bedroom and either no private bathroom, or only a small 3/4 bath shared with another bedroom. As the county's home values have climbed — median sale prices now regularly exceed $450,000 in Woodstock and Holly Springs — the absence of a proper master bathroom has become a real liability in both livability and resale. <strong>Adding a master bathroom is one of the highest-ROI projects available to these homeowners</strong>, and it's a project Phoenix Construction has extensive experience completing throughout Cherokee County.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3 items-start">
          <Home className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <h4 className="font-bold text-slate-800 mb-1 text-sm">The two paths to a master bathroom addition</h4>
            <p className="text-sm text-gray-600"><strong>Path 1 — Convert existing space:</strong> Use a large closet, an adjacent bedroom, or unused attic space to create a new bathroom within the home's existing footprint. Lower cost, shorter timeline, no exterior work. This is possible in most 1980s–1990s Cherokee County homes that have some adjacent space to work with.<br /><br /><strong>Path 2 — True addition:</strong> Add square footage by building out from the home's exterior. Foundation, framing, roofing tie-in, and siding required. Higher cost and longer timeline, but possible when no interior space exists to convert, and produces a larger, more functional bathroom.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Cost Breakdown: Master Bathroom Addition in Cherokee County 2026
      </h2>
      <div className="space-y-4 mb-8">
        {[
          {
            path: 'Conversion Within Existing Footprint',
            range: '$35,000–$65,000',
            details: [
              { item: 'Design, permits, and project management', cost: '$3,000–$6,000' },
              { item: 'Framing modifications (closet wall removal or expansion, door relocation)', cost: '$2,500–$8,000' },
              { item: 'Plumbing rough-in (new supply and drain lines run to new location)', cost: '$4,000–$9,000' },
              { item: 'Electrical (new circuits, GFCI, exhaust fan, lighting)', cost: '$2,500–$5,000' },
              { item: 'Tile shower with frameless glass', cost: '$7,000–$14,000' },
              { item: 'Vanity, countertop, fixtures, toilet', cost: '$4,000–$9,000' },
              { item: 'Tile flooring throughout', cost: '$2,500–$5,000' },
              { item: 'Drywall, paint, trim', cost: '$2,500–$5,000' },
              { item: 'Walk-in closet rebuild (if original closet converted)', cost: '$4,000–$10,000' },
            ],
            note: 'Most common scope in Cherokee County 1980s–1990s homes. Typically produces a 70–90 sq ft master bathroom.',
          },
          {
            path: 'True Addition (New Square Footage)',
            range: '$80,000–$150,000+',
            details: [
              { item: 'Foundation (crawlspace or slab extension)', cost: '$8,000–$18,000' },
              { item: 'Framing, roofing tie-in, exterior sheathing', cost: '$18,000–$35,000' },
              { item: 'Exterior siding, windows, flashing', cost: '$6,000–$12,000' },
              { item: 'HVAC extension (ductwork to new space)', cost: '$3,000–$8,000' },
              { item: 'All interior work (same as conversion, above)', cost: '$35,000–$60,000' },
            ],
            note: 'Required when no adjacent space exists to convert. Adds 80–150+ sq ft to the home.',
          },
        ].map((path) => (
          <div key={path.path} className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-800 text-white px-5 py-4 flex flex-wrap justify-between items-center gap-2">
              <h3 className="font-bold text-white">{path.path}</h3>
              <span className="text-lg font-bold text-red-300">{path.range}</span>
            </div>
            <div className="p-5">
              <div className="space-y-1 mb-3">
                {path.details.map((d) => (
                  <div key={d.item} className="flex justify-between text-sm border-b border-gray-100 py-1">
                    <span className="text-gray-700">{d.item}</span>
                    <span className="font-medium text-slate-700 whitespace-nowrap ml-4">{d.cost}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 italic bg-gray-50 rounded px-3 py-2">{path.note}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Design Decisions for a Master Bathroom Addition
      </h2>
      <div className="space-y-3 mb-8">
        {[
          {
            title: 'Shower vs. Tub vs. Both',
            body: 'For most Cherokee County buyers and homeowners, a large walk-in shower is the priority — a generously sized, well-designed shower (36"×60" minimum; 48"×72" preferred) reads as more luxurious than a tub. A soaking tub adds $3,000–$8,000 to project cost. If you\'re designing for resale, a large shower plus a freestanding soaking tub is the aspirational standard in the $500K+ Cherokee County market. If square footage is constrained, prioritize the shower.',
          },
          {
            title: 'Single vs. Double Vanity',
            body: 'A double vanity (two sinks, typically 60"–72" wide) is the standard expectation in a master bathroom at the $450K+ price point in Cherokee County. It adds $2,000–$5,000 over a single vanity but is consistently valued by buyers and residents alike. If the bathroom is under 60 sq ft, a single vanity may be the only practical option.',
          },
          {
            title: 'Toilet Compartment',
            body: 'A private toilet compartment (a separate enclosed space within the bathroom for the toilet) adds privacy and is considered a premium feature. It requires 3–4 extra sq ft minimum and a partial-height or full wall with door. Adds $2,000–$5,000 to project cost. Not essential but consistently appreciated in higher-end master bath designs.',
          },
          {
            title: 'Walk-In Closet Coordination',
            body: 'The master bathroom addition is the ideal time to also address the walk-in closet — whether rebuilding a converted closet or redesigning an existing one. Custom closet systems add $3,000–$12,000. A well-organized walk-in paired with a new master bath is the complete primary suite renovation that Cherokee County buyers are looking for.',
          },
        ].map((item) => (
          <div key={item.title} className="border border-gray-200 rounded-xl p-5">
            <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The Permit and Construction Process in Cherokee County
      </h2>
      <div className="space-y-3 mb-8">
        {[
          { n: '1', title: 'Pre-Design Assessment', body: 'Phoenix Construction visits your home to assess available space, plumbing proximity, structural conditions, and the most viable path for your addition. This informs the design and budget before any commitment.' },
          { n: '2', title: 'Design and Permit Drawings', body: 'We produce permit drawings showing the new bathroom layout, plumbing, electrical, and any structural changes. Conversion projects require building and plumbing/electrical permits from Cherokee County Development Services.' },
          { n: '3', title: 'Permit Approval', body: 'Cherokee County reviews and issues permits. Standard renovation permits take 5–15 business days. Addition permits involving structural work may require engineering review and take 3–5 weeks.' },
          { n: '4', title: 'Demo and Rough-In', body: 'Existing walls opened or new framing erected. Plumbing drain and supply lines routed to new location — this is the most complex phase, especially for conversions where new lines must travel from existing stacks. Electrical rough-in. Rough-in inspections required before walls close.' },
          { n: '5', title: 'Finish Construction', body: 'Waterproof membrane, cement board substrate, tile, glass enclosure, vanity, fixtures, toilet, lighting. Typically 3–4 weeks for a well-organized crew.' },
          { n: '6', title: 'Final Inspections and Walkthrough', body: 'Building, plumbing, and electrical final inspections. Certificate of occupancy if applicable. Final walkthrough with homeowner and punch list.' },
        ].map((step) => (
          <div key={step.n} className="flex gap-4 border border-gray-200 rounded-xl p-5">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">{step.n}</div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3 items-start">
          <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
          <p className="text-sm text-gray-700"><strong>The biggest variable in a master bathroom addition:</strong> Plumbing routing. Getting drain lines (especially the toilet drain — a 4" pipe that requires 1/4" fall per foot toward the main stack) to the right location at the right slope is the single greatest constraint on bathroom placement within an existing home. An experienced contractor assesses this before design is finalized. Phoenix Construction evaluates all plumbing routing options during the initial assessment.</p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Free In-Home Assessment for Your Master Bathroom Addition</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction has completed master bathroom additions throughout Cherokee County, Woodstock, Canton, and Metro Atlanta. We'll assess your space, discuss options, and give you a realistic scope and budget.
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
        <p className="text-gray-600 italic mb-3">"We hired Phoenix Construction for a huge basement overhaul. Mitch and his team were incredible and the attention to detail was like no other. If you want your job done to perfection, this is the team."</p>
        <p className="text-gray-500 text-sm">— Carolyn Russell, Google Review · July 2024</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Bathroom Remodeling Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Custom Tile Shower vs. Prefab Surround', href: '/blog/tile-shower-vs-prefab-surround-woodstock-ga' },
          { label: 'ADA Accessible Bathroom Remodeling', href: '/blog/ada-accessible-bathroom-remodeling-woodstock-ga' },
          { label: 'Bathroom Renovation Cost Woodstock GA', href: '/blog/bathroom-renovation-cost-woodstock-ga' },
          { label: 'North Georgia Plumbing & Bathroom Guide', href: '/blog/north-georgia-plumbing-bathroom-remodeling-woodstock-ga' },
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
