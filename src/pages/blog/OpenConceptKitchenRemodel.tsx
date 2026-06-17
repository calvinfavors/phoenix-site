import { CheckCircle, Phone, Layers, ArrowRight, Star, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'open-concept', label: 'Open-Concept Kitchen Remodel' },
  { value: 'wall-removal', label: 'Load-Bearing Wall Removal' },
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodeling' },
  { value: 'kitchen-island', label: 'Kitchen Island Design' },
  { value: 'other', label: 'Other Services' },
];

export default function OpenConceptKitchenRemodel() {
  return (
    <BlogTemplate
      title="Open-Concept Kitchen Remodel Woodstock GA: Remove Walls, Expand Your Space & Transform Your Home"
      description="Planning an open-concept kitchen remodel in Woodstock, Marietta, or Metro Atlanta? Learn what's involved in removing walls, what it costs, how to handle load-bearing walls, and what the finished result looks like. Free estimates from Phoenix Construction."
      category="Kitchen Remodeling"
      categoryColor="amber"
      date="June 17, 2026"
      heroImage="/IMG_9320.JPG"
      heroImageAlt="Open-concept kitchen remodel in Woodstock GA - wall removal and renovation"
      source="blog_open_concept_kitchen_2026"
      canonical="/blog/open-concept-kitchen-remodel-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'How much does an open-concept kitchen remodel cost in Woodstock GA?',
          answer: 'An open-concept kitchen remodel in Woodstock GA typically costs $35,000–$85,000 for a mid-range project. The range depends on whether the wall is load-bearing ($5,000–$15,000 additional for structural work), the size of the kitchen remodel, and your material selections. Contact Phoenix Construction at (678) 463-4893 for a free estimate.',
        },
        {
          question: 'How do I know if my kitchen wall is load-bearing?',
          answer: 'Load-bearing walls typically run perpendicular to the floor joists and often sit directly above the foundation or a beam in the floor below. The only definitive way to know is to have a licensed contractor or structural engineer inspect the wall — which Phoenix Construction does as part of every open-concept consultation.',
        },
        {
          question: 'Do I need a permit to remove a wall in Cherokee County GA?',
          answer: 'Yes. Any structural work including load-bearing wall removal in Cherokee County requires a building permit. Phoenix Construction handles the full permit application, structural engineering (when required), inspections, and final sign-off.',
        },
        {
          question: 'How long does an open-concept kitchen remodel take?',
          answer: 'A full open-concept kitchen remodel including wall removal typically takes 10–16 weeks from permit approval through final walkthrough. Wall removal and structural work adds 2–4 weeks versus a standard kitchen remodel that keeps the existing footprint.',
        },
        {
          question: 'Can I add a kitchen island after opening up my kitchen?',
          answer: 'Yes — opening up the kitchen almost always creates the space for an island that wasn\'t possible before. Islands add $3,000–$10,000 to the total project cost depending on size, seating, storage, and whether you\'re adding plumbing or electrical to the island.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        The most transformative <strong>kitchen remodel in Woodstock GA</strong> — and the one that homeowners ask about most — is opening up the kitchen to the living or dining room. Removing a wall between your kitchen and adjacent space can make a 1,400-square-foot home feel dramatically larger, improve entertaining flow, and create the connected living space that today's buyers expect. Here's everything you need to know before starting.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Open-Concept Kitchen Remodels Are So Popular in Metro Atlanta
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Most Cherokee County, Cobb County, and North Fulton homes built before 2005 have a closed or semi-closed kitchen layout — the kitchen is separated from the living area by a full or partial wall. This made sense for a different era of cooking and entertaining. Today's families want to cook and be part of the activity in the rest of the house.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { title: 'Dramatically more natural light', body: 'Removing walls allows light from living room windows to reach the kitchen and vice versa — transforming dark kitchens without adding a single window.' },
          { title: 'Better entertaining flow', body: 'Guests can interact with the cook. Families can supervise kids doing homework while preparing dinner. The kitchen becomes the true center of the home.' },
          { title: 'Visual square footage gain', body: 'Removing a single wall between kitchen and living room makes both spaces feel 30–50% larger without building an addition.' },
          { title: 'Real estate value', body: 'Open-concept layouts are the #1 feature buyers request in the $350k–$700k Metro Atlanta price range. Homes with closed kitchens sit longer on the market.' },
        ].map((item) => (
          <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The First Question: Is the Wall Load-Bearing?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is the most important question in any open-concept kitchen project — and the most misunderstood. A <strong>non-load-bearing wall</strong> can be removed relatively simply (demo, patch, refinish). A <strong>load-bearing wall</strong> carries the weight of the structure above it and must be replaced with a properly engineered header beam supported by new columns or posts.
      </p>
      <div className="space-y-4 mb-8">
        {[
          {
            icon: <CheckCircle className="text-green-600" size={20} />,
            title: 'Non-load-bearing wall removal',
            body: 'Demo takes 1–2 days. Patching, flooring transition, and finishing adds 3–5 days. Total structural cost: $1,500–$4,000. No engineer required.',
          },
          {
            icon: <AlertTriangle className="text-orange-500" size={20} />,
            title: 'Load-bearing wall removal',
            body: 'Requires temporary support walls during construction, a structural engineer\'s beam design, a new LVL or steel beam, new posts/columns, and permit inspections. Adds $5,000–$15,000 to the project and 2–4 weeks. Worth every dollar.',
          },
        ].map((item) => (
          <div key={item.title} className="flex gap-4 border border-gray-200 rounded-xl p-5">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div>
              <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        Never let a contractor tell you a wall is non-load-bearing without verifying it. The consequences of improperly removing a load-bearing wall range from ceiling sag to structural collapse. Phoenix Construction inspects every wall before providing a proposal and coordinates structural engineering as needed.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What's Involved in a Full Open-Concept Kitchen Remodel
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Most homeowners don't stop at just removing the wall — they use the project as a trigger to do the full kitchen renovation they've been putting off. Here's a typical scope for an open-concept kitchen remodel in a Cherokee County or Cobb County home:
      </p>
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
          {[
            'Demo existing wall (with structural assessment)',
            'Install LVL beam if load-bearing',
            'Extend flooring across the new open space',
            'Relocate electrical (outlets, switches, lighting)',
            'Add recessed lighting in formerly walled area',
            'New semi-custom or custom cabinets',
            'Quartz or stone countertops',
            'Kitchen island with seating',
            'Backsplash tile',
            'New appliance package',
            'Sink and faucet',
            'Paint throughout both spaces',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <Layers className="text-amber-500 flex-shrink-0 mt-1" size={16} />
              <span className="text-gray-700 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Open-Concept Kitchen Remodel Cost Breakdown
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          { item: 'Wall removal (non-load-bearing)', low: '$1,500', high: '$4,000' },
          { item: 'Load-bearing wall + beam install', low: '$5,000', high: '$15,000' },
          { item: 'Flooring extension & match', low: '$2,000', high: '$6,000' },
          { item: 'Electrical relocation', low: '$1,500', high: '$4,000' },
          { item: 'Semi-custom cabinets', low: '$8,000', high: '$20,000' },
          { item: 'Quartz countertops + island', low: '$5,000', high: '$12,000' },
          { item: 'Appliance package', low: '$4,000', high: '$14,000' },
          { item: 'Backsplash, fixtures, lighting', low: '$2,500', high: '$7,000' },
        ].map((row) => (
          <div key={row.item} className="flex justify-between items-center border-b border-gray-100 py-2">
            <span className="text-gray-700 text-sm">{row.item}</span>
            <span className="text-amber-600 font-semibold text-sm">{row.low}–{row.high}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-sm mb-8">
        Total project range: <strong className="text-slate-800">$35,000–$85,000</strong> for a typical mid-range open-concept kitchen remodel in Metro Atlanta. High-end projects with custom cabinets, premium stone, and luxury appliances: <strong className="text-slate-800">$90,000–$150,000+</strong>.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Open Up Your Kitchen?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction handles the full scope — structural assessment, permits, wall removal, complete kitchen remodel — with one team and one point of contact. Call for a free in-home consultation.
        </p>
        <a
          href="tel:6784634893"
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
        >
          <Phone size={20} className="mr-2" />
          Call (678) 463-4893
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Designing the Kitchen Island
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Opening up the kitchen almost always creates room for an island — and the island becomes the star of the new space. Here's what to consider:
      </p>
      <ul className="space-y-3 mb-8">
        {[
          'Minimum 42" clearance on all walkable sides of the island (48" preferred)',
          'Waterfall countertop edges: adds $800–$2,500, dramatic visual impact',
          'Seating on one side: 15" overhang minimum per seat, 24" per seat for comfort',
          'Plumbing to island: adds $1,500–$4,000 but makes food prep far more practical',
          'Outlets in island (required by code): plan for 2–4 outlets per side with USB integration',
          'Storage below: deep drawers beat cabinets for pull-out kitchen items',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle className="text-amber-500 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-slate-100 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Star className="fill-yellow-400 text-yellow-400" size={20} />
          <span className="font-bold text-slate-900">What Our Clients Say</span>
        </div>
        <p className="text-gray-600 italic mb-3">"We went with Phoenix Construction after meeting with a few different contractors. Mitch was amazing to work with on our kitchen remodel. He was most helpful and patient as we built out the scope of the project, what our options were, and what to expect during the project."</p>
        <p className="text-gray-500 text-sm">— Nathan Williams, Google Review · March 2026</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Explore Our Kitchen Remodeling Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Kitchen Remodeling Woodstock GA', href: '/kitchen-remodeling-in-woodstock-ga' },
          { label: 'Kitchen Remodeling Marietta GA', href: '/kitchen-remodeling-marietta-ga' },
          { label: 'Kitchen Remodeling Roswell GA', href: '/kitchen-remodeling-roswell-ga' },
          { label: 'Kitchen Remodeling Milton GA', href: '/kitchen-remodeling-milton-ga' },
        ].map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-amber-300 hover:shadow-sm transition-all group"
          >
            <span className="text-gray-700 text-sm font-medium group-hover:text-amber-700">{link.label}</span>
            <ArrowRight size={16} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </BlogTemplate>
  );
}
