import { CheckCircle, Phone, Star, ArrowRight, AlertTriangle, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodeling' },
  { value: 'cabinet-replacement', label: 'Cabinet Replacement' },
  { value: 'cabinet-refacing', label: 'Cabinet Refacing' },
  { value: 'countertops', label: 'Countertops & Islands' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenCabinetRefacingVsReplacement() {
  return (
    <BlogTemplate
      title="Kitchen Cabinet Refacing vs. Replacement in Woodstock GA: Which Is Right for Your Kitchen?"
      description="Should you reface or replace your kitchen cabinets in 2026? This guide from Phoenix Construction covers real costs, when each option makes sense, what refacing can and can't fix, and how to decide for your Woodstock GA or Metro Atlanta home."
      category="Kitchen Remodeling"
      categoryColor="amber"
      date="June 17, 2026"
      heroImage="/IMG_9319.JPG"
      heroImageAlt="Kitchen cabinet refacing vs replacement - Woodstock GA contractor guide 2026"
      source="blog_cabinet_refacing_vs_replacement_2026"
      canonical="/blog/kitchen-cabinet-refacing-vs-replacement-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'Is it cheaper to reface or replace kitchen cabinets in Woodstock GA?',
          answer: 'Cabinet refacing typically costs $4,000–$10,000 for an average kitchen, while full cabinet replacement runs $12,000–$35,000 for semi-custom cabinets. Refacing is cheaper upfront, but only makes sense if your cabinet boxes are structurally sound, the layout works, and you\'re satisfied with the existing footprint. Call Phoenix Construction at (678) 463-4893 for a free in-home assessment.',
        },
        {
          question: 'What is kitchen cabinet refacing?',
          answer: 'Cabinet refacing replaces all visible surfaces — doors, drawer fronts, and the veneer on cabinet boxes — while keeping the existing cabinet boxes in place. The result looks like new cabinets at roughly 40–60% of the cost of full replacement.',
        },
        {
          question: 'When should I replace rather than reface my kitchen cabinets?',
          answer: 'Replace cabinets when: the boxes have water damage or structural rot, you want to change the layout, you need more or different storage configurations, you\'re doing a full gut renovation anyway, or the existing boxes are particle board with delaminating veneer.',
        },
        {
          question: 'How long does cabinet refacing take vs. replacement in Cherokee County?',
          answer: 'Cabinet refacing takes 3–7 days. Cabinet replacement as part of a full kitchen remodel typically takes 6–12 weeks due to cabinet fabrication lead times (4–8 weeks for semi-custom), demo, installation, and countertop fabrication.',
        },
        {
          question: 'Can you reface cabinets and add new countertops at the same time?',
          answer: 'Yes — and this is the most popular mid-range kitchen update. Refacing cabinets + new quartz countertops + new hardware + new backsplash tile can transform a kitchen for $12,000–$22,000, which is significantly less than a full remodel.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        When it comes to kitchen cabinets, homeowners have three options: <strong>reface</strong> the existing cabinets, <strong>replace</strong> them entirely, or do a full <strong>gut renovation</strong> that changes the layout too. Choosing the wrong path costs thousands of dollars and years of regret. This guide from Phoenix Construction gives you the honest breakdown — based on what we actually see in Cherokee County and Metro Atlanta kitchens — so you can make the right call.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <DollarSign className="text-amber-600 flex-shrink-0 mt-1" size={26} />
          <div>
            <h3 className="font-bold text-slate-900 mb-2">2026 Cost Comparison — Metro Atlanta</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold text-slate-800">Refacing</div>
                <div className="text-amber-700 font-bold text-lg">$4k–$10k</div>
                <div className="text-gray-500 text-xs">Doors, fronts, veneer</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">Replace (semi-custom)</div>
                <div className="text-amber-700 font-bold text-lg">$12k–$28k</div>
                <div className="text-gray-500 text-xs">Full new cabinet boxes</div>
              </div>
              <div>
                <div className="font-semibold text-slate-800">Replace (custom)</div>
                <div className="text-amber-700 font-bold text-lg">$22k–$55k+</div>
                <div className="text-gray-500 text-xs">Built to specification</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What Is Cabinet Refacing?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Cabinet refacing replaces every visible part of your cabinets — the door panels, drawer fronts, hinges, and a veneer or laminate skin applied to the cabinet boxes — while leaving the existing cabinet structure in place. From across the kitchen, the result looks identical to new cabinets.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        Refacing works especially well when your cabinet boxes are made of solid plywood (not particle board), the layout is exactly what you want, and you're primarily unhappy with the door style or finish color.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Choose Refacing When…
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          'Your cabinet boxes are structurally sound (plywood construction, no rot, no water damage)',
          'You\'re happy with the existing layout — same number of cabinets, same positions',
          'You want to update the look without a full remodel (door style change, new finish, new hardware)',
          'You\'re doing a cosmetic kitchen refresh alongside new countertops and backsplash',
          'Budget is the primary constraint and you have 2–5 more years in the home before selling',
          'The existing storage works — you just need it to look better',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Choose Replacement When…
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          'Cabinet boxes have water damage, swelling, delamination, or mold — refacing over damage is a waste of money',
          'You want to change the layout (add an island, move the pantry, open up a corner)',
          'Existing cabinets are particle board — veneering over particle board has a short lifespan',
          'You need more or different storage (pull-out shelves, deep drawers, taller upper cabinets)',
          'You\'re doing a full gut renovation anyway — replacement is the right scope',
          'You plan to stay 10+ years and want the best long-term result',
          'The existing cabinet proportions are wrong for the space (too short, too shallow)',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3 items-start">
          <AlertTriangle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
          <div>
            <h4 className="font-bold text-slate-800 mb-1">The Most Common Mistake We See</h4>
            <p className="text-gray-600 text-sm">Homeowners choose refacing to save money, not realizing their cabinet boxes have water damage from a slow leak under the sink or at the dishwasher. The veneer hides the problem for 2–3 years, then starts peeling. A proper pre-refacing inspection is essential. Phoenix Construction assesses your boxes before any recommendation.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The Best Mid-Range Compromise: Reface + Countertops + Backsplash
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        For homeowners with solid cabinet boxes who want a significant visual upgrade without a full remodel, the most cost-effective kitchen refresh in Metro Atlanta is:
      </p>
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <div className="space-y-3">
          {[
            { item: 'Cabinet refacing (new doors, drawer fronts, veneer, hardware)', cost: '$5,000–$9,000' },
            { item: 'Quartz countertops (demolish old, fabricate + install new)', cost: '$3,500–$7,500' },
            { item: 'Backsplash tile (demo, new tile, grout)', cost: '$1,200–$3,000' },
            { item: 'New sink + faucet', cost: '$500–$1,500' },
            { item: 'Under-cabinet lighting', cost: '$400–$1,200' },
          ].map((row) => (
            <div key={row.item} className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-700 text-sm">{row.item}</span>
              <span className="font-semibold text-amber-600 text-sm">{row.cost}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-1">
            <span className="font-bold text-slate-800">Total Project Range</span>
            <span className="font-bold text-slate-800 text-lg">$11,000–$22,000</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mb-8">
        This scope transforms the look of the entire kitchen for roughly 35–55% of the cost of a full cabinet replacement remodel. It's the right call for homeowners selling in 2–5 years or those who love their layout but hate how the kitchen looks.
      </p>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Not Sure Which Is Right for You?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction offers free in-home consultations where we assess your cabinet boxes, discuss your goals, and give you a written recommendation — not a sales pitch. Call or fill out the form to schedule.
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
        Cabinet Door Styles: What's Trending in 2026
      </h2>
      <div className="space-y-4 mb-8">
        {[
          {
            style: 'Shaker (5-piece)',
            desc: 'Still the most popular style in Metro Atlanta. Clean lines, works with both traditional and contemporary kitchens. Available in painted and stained finishes.',
            trend: 'Timeless',
          },
          {
            style: 'Flat-front (slab)',
            desc: 'Minimalist, contemporary look. Very popular in newer Woodstock and Milton construction. Best paired with quartz countertops and integrated hardware.',
            trend: 'Growing',
          },
          {
            style: 'Beaded inset',
            desc: 'Premium look with a recessed panel inside a face frame. More expensive but creates a furniture-quality appearance. Common in higher-end East Cobb and Roswell renovations.',
            trend: 'Premium segment',
          },
          {
            style: 'Painted vs. stained',
            desc: 'White and off-white painted cabinets dominated the 2015–2022 cycle. In 2026, warmer tones — greige, sage green, navy — are trending for lower cabinets paired with natural wood uppers.',
            trend: 'Shifting warmer',
          },
        ].map((item) => (
          <div key={item.style} className="border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-800">{item.style}</h4>
              <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-100">{item.trend}</span>
            </div>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Star className="fill-yellow-400 text-yellow-400" size={20} />
          <span className="font-bold text-slate-900">From a Real Client</span>
        </div>
        <p className="text-gray-600 italic mb-3">"Mitch was amazing to work with on our kitchen remodel. He was most helpful and patient as we built out the scope of the project, what our options were, and what to expect during the project. He stands by his team's work."</p>
        <p className="text-gray-500 text-sm">— Nathan Williams, Google Review · March 2026</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Related Kitchen Remodeling Services
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
