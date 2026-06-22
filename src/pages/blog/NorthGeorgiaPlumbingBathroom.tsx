import { CheckCircle, Phone, Star, ArrowRight, AlertTriangle, Wrench, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'bathroom-remodel', label: 'Full Bathroom Remodel' },
  { value: 'plumbing-update', label: 'Plumbing Update & Pipe Replacement' },
  { value: 'walk-in-shower', label: 'Shower & Tub Conversion' },
  { value: 'kitchen-remodel', label: 'Kitchen Remodeling' },
  { value: 'other', label: 'Other Services' },
];

export default function NorthGeorgiaPlumbingBathroom() {
  return (
    <BlogTemplate
      title="North Georgia Plumbing & Bathroom Remodeling: What Cherokee County Homeowners Must Know Before Renovating"
      description="Planning a bathroom remodel in Cherokee County or Metro Atlanta? This guide covers the North Georgia plumbing issues most likely to affect your project — polybutylene pipes, galvanized lines, well water hardness, permit requirements, and why your remodel contractor and plumber must work together."
      category="Bathroom Remodeling"
      categoryColor="red"
      date="June 22, 2026"
      heroImage="/gallery/phoenix-bathroom-2.jpg"
      heroImageAlt="North Georgia plumbing and bathroom remodeling guide for Cherokee County homeowners"
      source="blog_north_georgia_plumbing_bathroom_2026"
      canonical="/blog/north-georgia-plumbing-bathroom-remodeling-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'Do I need a plumber for a bathroom remodel in Cherokee County GA?',
          answer: 'Yes. Any bathroom remodel in Cherokee County that involves moving, replacing, or adding plumbing fixtures requires a licensed plumber and a plumbing permit through Cherokee County Development Services. This includes changing a tub to a walk-in shower, moving a vanity, or replacing supply and drain lines. Your general contractor should coordinate the plumber — Phoenix Construction works with licensed plumbers throughout Cherokee County. Call (678) 463-4893.',
        },
        {
          question: 'What plumbing permit do I need for a bathroom remodel in Woodstock GA?',
          answer: 'Bathroom remodels in Woodstock GA (and throughout Cherokee County) that involve any plumbing work require a plumbing permit from Cherokee County Development Services. Your licensed general contractor or licensed plumber pulls the permit. Work is inspected by a county inspector before walls are closed in. Phoenix Construction handles all permit coordination as part of every remodel project.',
        },
        {
          question: 'Does North Georgia have hard water that affects bathroom plumbing?',
          answer: 'Yes. Cherokee County and surrounding North Georgia counties draw water from surface water sources (the Etowah River, Lake Allatoona) as well as wells. The water in this region has moderate hardness (60–120 mg/L) that causes mineral scale buildup on fixtures, shower heads, and inside supply lines over time. During a bathroom remodel, this is a good time to install a whole-house softener or an under-sink filter if scale has been a problem.',
        },
        {
          question: 'What is polybutylene pipe and why is it a problem in Cherokee County homes?',
          answer: 'Polybutylene (PB) pipe is gray plastic plumbing used in homes built roughly 1978–1995. It was extremely common in Cherokee County subdivisions built during that era. PB pipe degrades when in contact with chlorinated municipal water and fails from the inside out, often with no external warning until a fitting suddenly fails and causes flooding. If your home was built in this window, have it inspected — many homeowners discover PB during a bathroom remodel when walls are opened.',
        },
        {
          question: 'Can a bathroom remodel fix low water pressure in North Georgia homes?',
          answer: 'It depends on the cause. If low pressure is due to corroded galvanized supply lines (common in pre-1970 homes), replacing those lines during the remodel will restore full pressure. If the cause is a whole-house pressure issue (PRV, main line, or municipal supply), that requires a separate plumber assessment. Phoenix Construction identifies the root cause as part of our pre-project consultation.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Bathroom remodeling in Cherokee County and Metro Atlanta North Georgia is not the same as remodeling in newer Sun Belt subdivisions built after 2000. The region's housing stock includes homes from the 1960s through the 1990s — each decade with its own set of plumbing materials, building codes, and failure modes. Understanding what you're working with before demo begins is what separates a smooth bathroom renovation from one full of expensive surprises. This guide covers everything North Georgia homeowners need to know about <strong>plumbing in the context of a bathroom remodel</strong>.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The Plumbing Materials Timeline for Cherokee County Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The year your home was built is the single most predictive factor for what plumbing materials are inside the walls. Here's what to expect by era:
      </p>
      <div className="space-y-4 mb-8">
        {[
          {
            era: 'Built before 1970',
            pipe: 'Galvanized steel supply lines, cast iron drain lines',
            risk: 'High',
            notes: 'Galvanized corrodes from the inside, reducing flow and eventually causing pinhole leaks. Cast iron is durable but may be cracked or have failed oakum joints in the drain lines. Replacement recommended during any major remodel.',
            color: 'red',
          },
          {
            era: 'Built 1970–1978',
            pipe: 'Copper supply lines (typically), cast iron or ABS drain lines',
            risk: 'Low–Medium',
            notes: 'Copper from this era is generally still serviceable but may show signs of pinhole corrosion, especially in homes with aggressive (low pH) water. ABS plastic drains are durable. Inspect copper for green corrosion staining.',
            color: 'yellow',
          },
          {
            era: 'Built 1978–1995',
            pipe: 'Polybutylene (PB) supply lines — gray plastic',
            risk: 'High',
            notes: 'This is the highest-risk era for Cherokee County homes. PB pipe was used extensively in North Georgia subdivisions during the 1980s building boom. It degrades from chlorine in municipal water and fails suddenly. Look for gray plastic pipe under sinks and at the water heater.',
            color: 'red',
          },
          {
            era: 'Built 1995–2004',
            pipe: 'CPVC or copper supply lines, PVC drain lines',
            risk: 'Low',
            notes: 'CPVC is generally reliable but becomes brittle with age and can crack from physical impact during remodel demo. Inspect CPVC for yellowing or brittleness before deciding whether to replace. PVC drains are durable.',
            color: 'green',
          },
          {
            era: 'Built 2004–present',
            pipe: 'PEX supply lines (typically), PVC drain lines',
            risk: 'Very Low',
            notes: 'PEX is flexible, freeze-resistant, and has an excellent track record. These homes typically have no supply line issues. Drain lines are standard PVC.',
            color: 'green',
          },
        ].map((row) => (
          <div key={row.era} className="border border-gray-200 rounded-xl p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <span className="font-bold text-slate-900">{row.era}</span>
                <span className="text-gray-500 text-sm ml-3">{row.pipe}</span>
              </div>
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                row.color === 'red' ? 'bg-red-100 text-red-700' :
                row.color === 'yellow' ? 'bg-yellow-50 text-yellow-700' :
                'bg-green-50 text-green-700'
              }`}>Risk: {row.risk}</span>
            </div>
            <p className="text-gray-600 text-sm">{row.notes}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Polybutylene in Cherokee County: What You Need to Know
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Polybutylene pipe deserves its own section because it is so prevalent in Cherokee County's housing stock. The county experienced a major residential building boom throughout the 1980s — Woodstock, Canton, Holly Springs, and Ball Ground all grew rapidly during this period. Virtually all of that construction used polybutylene pipe.
      </p>
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
        <div className="flex gap-3 items-start">
          <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-red-800 mb-2">How to identify polybutylene pipe</h4>
            <ul className="space-y-1 text-sm text-gray-700">
              <li><strong>Color:</strong> Medium or dark gray (occasionally white or black)</li>
              <li><strong>Texture:</strong> Slightly flexible, not rigid like copper or CPVC</li>
              <li><strong>Locations to check:</strong> Under bathroom and kitchen sinks, at the water heater connections, at the main water shutoff, in the crawlspace or basement</li>
              <li><strong>Fittings:</strong> Plastic or aluminum crimp fittings — the fittings fail most often</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        A bathroom remodel in a 1980s–early 1990s Cherokee County home almost always exposes polybutylene supply lines in the wall. This is the moment to replace them — not later. While the walls are open and labor is already mobilized, the incremental cost to swap PB for PEX is a fraction of what emergency pipe failure remediation costs.
      </p>
      <div className="bg-slate-50 rounded-xl p-5 mb-8">
        <div className="flex justify-between text-sm font-semibold text-slate-700 mb-3">
          <span>Approach</span>
          <span>Estimated Cost (Cherokee County)</span>
        </div>
        {[
          { item: 'Replace PB in bathroom during scheduled remodel (walls already open)', cost: '$800–$2,500' },
          { item: 'Replace PB as standalone project (walls must be opened and repaired)', cost: '$3,500–$8,000' },
          { item: 'Emergency remediation after PB failure (water damage + plumbing)', cost: '$8,000–$35,000+' },
        ].map((row) => (
          <div key={row.item} className="flex justify-between items-start gap-4 border-b border-gray-200 py-2 text-sm">
            <span className="text-gray-700">{row.item}</span>
            <span className="font-bold text-slate-800 whitespace-nowrap">{row.cost}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        North Georgia Water Quality and Your Bathroom
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Cherokee County's water supply comes primarily from the Etowah River (via the Canton Water Treatment Plant and Holly Springs Water Reclamation Facility) and from Lake Allatoona. Water quality in this region is generally good, but has two characteristics that directly affect bathroom plumbing and fixtures:
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Wrench size={16} className="text-amber-500" />
            Mineral Hardness (Scale Buildup)
          </h4>
          <p className="text-gray-600 text-sm mb-3">Cherokee County water has moderate hardness (roughly 60–120 mg/L as CaCO₃). Over time this deposits as white scale on shower heads, faucet aerators, and inside hot water lines and water heaters. Symptoms: reduced shower head pressure, white crust on fixtures, reduced water heater efficiency.</p>
          <p className="text-gray-600 text-sm"><strong>During your remodel:</strong> Consider a water softener or scale-inhibiting filter. New fixtures will stay cleaner longer. Replace the water heater if it's approaching end of life.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Shield size={16} className="text-blue-500" />
            Chlorination and Pipe Degradation
          </h4>
          <p className="text-gray-600 text-sm mb-3">Cherokee County water is chlorinated as standard water treatment. While safe to drink, chlorine is the primary agent that degrades polybutylene pipe over time. It also accelerates corrosion in older galvanized pipe. Homes on private well water (common in rural Cherokee County) may face different issues: iron bacteria, sulfur odor, or acidic pH that attacks copper.</p>
          <p className="text-gray-600 text-sm"><strong>During your remodel:</strong> If on well water, a water quality test is worth doing — results inform pipe material selection for any new lines.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Permits for Bathroom Remodeling in Cherokee County
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Any bathroom remodel involving plumbing work in Cherokee County requires a permit — and a licensed plumber to pull it. Here's what the process looks like:
      </p>
      <div className="space-y-3 mb-8">
        {[
          {
            step: '1',
            title: 'General contractor or licensed plumber applies for permits',
            body: 'Cherokee County Development Services (at the Cherokee County Campus in Canton) issues building and plumbing permits. Your contractor handles this as part of the project scope. Permit fees vary by project value.',
          },
          {
            step: '2',
            title: 'Rough-in inspection before walls close',
            body: 'After plumbing rough-in work is complete (new supply and drain lines run, before cement board and tile), a county inspector visits to approve the work. Walls cannot be closed until the rough-in inspection passes.',
          },
          {
            step: '3',
            title: 'Final inspection after completion',
            body: 'A final inspection approves the completed bathroom — fixtures installed, everything operational. Phoenix Construction coordinates all inspections and is present for each one.',
          },
        ].map((item) => (
          <div key={item.step} className="flex gap-4 border border-gray-200 rounded-xl p-5">
            <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">{item.step}</div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-gray-700"><strong>Warning:</strong> Unpermitted bathroom plumbing work is a problem at resale — it must be disclosed, and buyers' home inspectors and lenders often flag it. It also voids homeowner's insurance coverage for related water damage claims. Always permit plumbing work.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What to Ask Your Bathroom Remodeling Contractor About Plumbing
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          'Do you coordinate with a licensed plumber, or do you subcontract that separately? (You want one point of contact)',
          'Will you inspect the existing supply lines and drain lines before giving a final quote?',
          'How do you handle unexpected issues — like discovering polybutylene or galvanized pipe — mid-project?',
          'Do you pull all required permits, or does the homeowner need to do that?',
          'Will the plumber be present for rough-in inspection, or will you handle that?',
          'What plumbing materials do you use for new lines? (PEX is the current standard)',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Planning a Bathroom Remodel in Cherokee County?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction manages full bathroom renovations throughout Woodstock, Canton, Holly Springs, and Metro Atlanta — including all permit coordination and licensed plumbing work. Call for a free in-home estimate.
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
        <p className="text-gray-600 italic mb-3">"Mitch was amazing to work with on our kitchen remodel. He was most helpful and patient as we built out the scope of the project, what our options were, and what to expect during the project. He stands by his team's work."</p>
        <p className="text-gray-500 text-sm">— Nathan Williams, Google Review · March 2026</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Bathroom Remodeling Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Old Bathroom Warning Signs', href: '/blog/old-bathroom-dangers-woodstock-ga' },
          { label: 'Bathroom Renovation Cost Woodstock GA', href: '/blog/bathroom-renovation-cost-woodstock-ga' },
          { label: 'Walk-In Shower vs. Tub Conversion', href: '/blog/walk-in-shower-vs-tub-conversion-woodstock-ga' },
          { label: 'Bathroom Remodeling Cherokee County', href: '/blog/bathroom-remodeling-cherokee-county' },
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
