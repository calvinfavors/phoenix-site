import { CheckCircle, Phone, Star, ArrowRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'countertops', label: 'Countertop Replacement' },
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodeling' },
  { value: 'kitchen-island', label: 'Kitchen Island Design' },
  { value: 'bathroom-vanity', label: 'Bathroom Vanity Top' },
  { value: 'other', label: 'Other Services' },
];

export default function QuartzVsGraniteVsMarble() {
  return (
    <BlogTemplate
      title="Quartz vs. Granite vs. Marble Countertops for Metro Atlanta Kitchens: A Contractor's Honest Comparison"
      description="Quartz, granite, or marble — which countertop material is right for your Woodstock GA or Metro Atlanta kitchen? This guide covers cost, durability, maintenance, and resale value from a contractor who installs all three. Free estimates from Phoenix Construction."
      category="Kitchen Remodeling"
      categoryColor="amber"
      date="June 17, 2026"
      heroImage="/phoecon3.jpeg"
      heroImageAlt="Quartz vs granite vs marble countertops comparison for Woodstock GA kitchens 2026"
      source="blog_quartz_granite_marble_2026"
      canonical="/blog/quartz-vs-granite-vs-marble-countertops-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'Is quartz or granite better for kitchen countertops in Georgia?',
          answer: 'For Georgia kitchens, quartz is generally the better daily-use choice: it\'s non-porous (no sealing required), highly heat and scratch resistant, consistent in color, and available in a wider range of styles including looks that mimic marble. Granite is a natural stone with more character variation and is slightly more heat resistant. Both are excellent — the right choice depends on your aesthetic preferences and maintenance tolerance.',
        },
        {
          question: 'How much do quartz countertops cost in Woodstock GA?',
          answer: 'Quartz countertops in Woodstock GA cost $65–$100 per square foot installed for mid-range slabs (MSI, Cambria, Silestone). Premium quartz (Calacatta-look, Dekton) runs $100–$150+ per sq ft installed. An average kitchen with 40 sq ft of counter space costs $2,600–$6,000 installed. Add 20–30% for an island.',
        },
        {
          question: 'How much do granite countertops cost in Woodstock GA?',
          answer: 'Granite countertops in Woodstock GA cost $55–$95 per square foot installed for standard slabs. Premium granite (exotic patterns, book-matched slabs) runs $100–$180+ per sq ft. Granite prices vary significantly by slab selection at the stone yard — color, origin, and pattern complexity all affect cost.',
        },
        {
          question: 'Is marble practical for a kitchen countertop?',
          answer: 'Marble is beautiful but high-maintenance for kitchens. It is porous, scratches relatively easily, and etches (dulls) from acidic foods like lemon juice, wine, and tomatoes. It requires sealing 2–4 times per year. Most contractors recommend marble for bathrooms, low-traffic kitchen areas (pastry stations, islands that don\'t see daily cooking), or for homeowners who love the look and accept the maintenance.',
        },
        {
          question: 'What countertop material adds the most resale value in Metro Atlanta?',
          answer: 'In the Metro Atlanta market, quartz countertops are the most broadly appealing to buyers due to their durability, low maintenance, and modern look. Granite remains popular in traditional and transitional kitchens. Either material in good condition adds significant value over laminate. Marble is valued by luxury buyers but can actually deter buyers who don\'t want the maintenance.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Choosing a countertop material is one of the most debated decisions in any kitchen remodel — and rightfully so. Countertops are the most visible work surface in your home, they affect how your kitchen feels to use every day, and they're not cheap to replace. This guide gives you the honest contractor's view on <strong>quartz vs. granite vs. marble for Metro Atlanta kitchens</strong> — what each material actually looks like to live with, what it costs in Cherokee County, and when each makes the most sense.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          { material: 'Quartz', verdict: 'Best for daily use', color: 'amber', summary: 'Engineered stone. Low maintenance, consistent, durable. The safe choice that\'s also genuinely great.' },
          { material: 'Granite', verdict: 'Best natural character', color: 'stone', summary: 'Natural stone. Every slab is unique. Requires annual sealing but extremely hard and heat-resistant.' },
          { material: 'Marble', verdict: 'Best for aesthetics', color: 'slate', summary: 'Natural stone. Timeless beauty. Requires significant maintenance. Better in bathrooms than busy kitchens.' },
        ].map((item) => (
          <div key={item.material} className="border border-gray-200 rounded-2xl p-5 text-center">
            <div className="text-2xl font-bold text-slate-900 mb-1">{item.material}</div>
            <div className="text-sm font-semibold text-amber-600 mb-3">{item.verdict}</div>
            <p className="text-gray-600 text-sm">{item.summary}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Quartz: Why It's the #1 Choice for Georgia Kitchens
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Quartz countertops (engineered stone — roughly 93% crushed quartz bound with polymer resin) have become the dominant choice for kitchen remodeling in Metro Atlanta for good reason. They deliver the look of natural stone with none of the porosity drawbacks that make natural stone high-maintenance in a busy kitchen.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h4 className="font-bold text-green-800 mb-3">Quartz Pros</h4>
          <ul className="space-y-2">
            {[
              'Non-porous — never needs sealing',
              'Highly scratch and stain resistant',
              'Consistent color/pattern throughout (no slab variability surprises)',
              'Wide style range: solid colors, concrete looks, and convincing marble patterns',
              'Easy maintenance: soap and water',
              'Widely available from local suppliers in Cherokee County',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h4 className="font-bold text-red-800 mb-3">Quartz Cons</h4>
          <ul className="space-y-2">
            {[
              'Not fully heat-proof — hot pans can damage the resin (use trivets)',
              'Engineered look — purists prefer the natural variation of granite or marble',
              'Outdoor use not recommended — UV causes discoloration',
              'Heavy — requires proper cabinet support',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <Star size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-gray-700"><strong>2026 Cost in Woodstock GA:</strong> $65–$100/sq ft installed for mid-range quartz. $100–$150+/sq ft for premium (Dekton, Calacatta-pattern, Cambria). Average 40 sq ft kitchen: <strong>$2,600–$6,000</strong>.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Granite: The Natural Stone That's Stood the Test of Time
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Granite has been the gold standard for kitchen countertops since the 1990s and remains a top choice for Metro Atlanta homeowners who want the genuine character of natural stone. No two granite slabs are identical — the variation in pattern, movement, and tone is what many homeowners specifically want.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h4 className="font-bold text-green-800 mb-3">Granite Pros</h4>
          <ul className="space-y-2">
            {[
              'Genuinely unique — no two slabs are the same',
              'Extremely hard — more scratch-resistant than most surfaces',
              'More heat-resistant than quartz (briefly setting a hot pan is less risky)',
              'Timeless appeal across traditional and contemporary kitchens',
              'Adds demonstrated resale value in the $350k–$600k Metro Atlanta price range',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h4 className="font-bold text-red-800 mb-3">Granite Cons</h4>
          <ul className="space-y-2">
            {[
              'Requires annual sealing to prevent staining',
              'Slab selection required in person — online photos don\'t capture the actual slab you get',
              'Can chip at edges if impacted',
              'Some highly porous granites stain from oil and wine even with sealing',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <Star size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-gray-700"><strong>2026 Cost in Woodstock GA:</strong> $55–$95/sq ft installed for standard granite. $100–$180+/sq ft for exotic slabs. Price varies significantly by slab — plan a visit to a stone yard. Average 40 sq ft kitchen: <strong>$2,200–$7,200</strong>.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Marble: When Beauty Matters More Than Maintenance
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Marble is the most visually stunning countertop material — the soft veining of Calacatta or Carrara marble has a timeless elegance that quartz marble-look products genuinely can't replicate. But marble demands a maintenance commitment that most busy Metro Atlanta kitchens aren't a good fit for.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h4 className="font-bold text-green-800 mb-3">Marble Pros</h4>
          <ul className="space-y-2">
            {[
              'Unmatched natural beauty — no engineered product truly replicates it',
              'Stays cool naturally (excellent for pastry and baking stations)',
              'Gains a lived-in patina over time that some homeowners love',
              'Premium material signal in luxury kitchen renovations',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h4 className="font-bold text-red-800 mb-3">Marble Cons</h4>
          <ul className="space-y-2">
            {[
              'Etches from acid (lemon juice, wine, coffee, tomatoes — everyday kitchen items)',
              'More porous than granite — requires sealing 2–4x per year',
              'Scratches more easily than quartz or granite',
              'Can deter buyers who are aware of the maintenance requirements',
              'Expensive to repair if a section is damaged',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <Star size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-gray-700"><strong>2026 Cost in Woodstock GA:</strong> $80–$150+/sq ft installed for Carrara and Calacatta marble. Premium book-matched slabs: $150–$250+/sq ft. Average 40 sq ft kitchen: <strong>$3,200–$10,000+</strong>. Best used in bathrooms or low-traffic kitchen zones.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Head-to-Head Comparison
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 text-slate-800 font-bold">Factor</th>
              <th className="text-center px-4 py-3 text-amber-600 font-bold">Quartz</th>
              <th className="text-center px-4 py-3 text-slate-600 font-bold">Granite</th>
              <th className="text-center px-4 py-3 text-gray-500 font-bold">Marble</th>
            </tr>
          </thead>
          <tbody>
            {[
              { factor: 'Daily maintenance', quartz: 'Very low', granite: 'Low (annual seal)', marble: 'High' },
              { factor: 'Scratch resistance', quartz: 'Excellent', granite: 'Excellent', marble: 'Fair' },
              { factor: 'Heat resistance', quartz: 'Good (use trivet)', granite: 'Very good', marble: 'Good' },
              { factor: 'Stain resistance', quartz: 'Excellent', granite: 'Good (sealed)', marble: 'Poor' },
              { factor: 'Etching from acid', quartz: 'None', granite: 'Minimal', marble: 'Significant' },
              { factor: 'Visual uniqueness', quartz: 'Consistent', granite: 'High', marble: 'Highest' },
              { factor: 'Resale appeal', quartz: 'Broad appeal', granite: 'Broad appeal', marble: 'Luxury buyers' },
              { factor: 'Cost (installed)', quartz: '$65–$150/sqft', granite: '$55–$180/sqft', marble: '$80–$250+/sqft' },
            ].map((row, i) => (
              <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3 font-medium text-slate-700 border-b border-gray-100">{row.factor}</td>
                <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{row.quartz}</td>
                <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{row.granite}</td>
                <td className="px-4 py-3 text-center text-gray-600 border-b border-gray-100">{row.marble}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: <Shield className="text-amber-500" size={22} />, title: 'Choose Quartz if…', body: 'You want low maintenance, consistent look, durability for daily cooking, and the broadest resale appeal.' },
          { icon: <Zap className="text-slate-500" size={22} />, title: 'Choose Granite if…', body: 'You want genuine natural stone character, unique slab selection, and a timeless look with slightly higher maintenance.' },
          { icon: <Star className="fill-gray-200 text-gray-400" size={22} />, title: 'Choose Marble if…', body: 'You love the look above all else, will commit to sealing and careful use, or it\'s for a low-traffic area or bathroom vanity.' },
        ].map((item) => (
          <div key={item.title} className="flex gap-3 border border-gray-200 rounded-xl p-5">
            <div className="flex-shrink-0 mt-1">{item.icon}</div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Free Countertop Estimate</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction installs quartz, granite, and marble countertops throughout Woodstock, Marietta, Roswell, and Metro Atlanta — as standalone projects or as part of a full kitchen remodel. Call for a free estimate.
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
        <p className="text-gray-600 italic mb-3">"Great price. Mitch did an excellent job tearing out my old brick water damaged fireplace and installing a new tile alcove, tile entryway floor and freestanding stove. We are so thrilled with how it turned out. On top of the attention to detail and solid work, he's an all around good person."</p>
        <p className="text-gray-500 text-sm">— Brittany Ellis, Google Review · June 2026</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Explore Our Kitchen Remodeling Services</h2>
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
