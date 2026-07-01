import { CheckCircle, Phone, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'countertop', label: 'Countertop Installation' },
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodel' },
  { value: 'cabinet-install', label: 'Cabinet & Countertop Upgrade' },
  { value: 'bathroom-remodel', label: 'Bathroom Remodeling' },
  { value: 'other', label: 'Other Services' },
];

export default function CountertopEdgeProfiles() {
  return (
    <BlogTemplate
      title="Countertop Edge Profiles Explained: Which Works Best for Woodstock GA Kitchens in 2026"
      description="Choosing a countertop edge profile is one of the last — and most overlooked — decisions in a kitchen remodel. This guide explains every major edge profile for quartz, granite, and marble countertops, with honest advice on which work best for Cherokee County and Metro Atlanta kitchens."
      category="Kitchen Remodeling"
      categoryColor="red"
      date="July 1, 2026"
      heroImage="/PhoenixLogo1.jpg"
      heroImageAlt="Countertop edge profiles explained Woodstock GA kitchen remodel Cherokee County"
      source="blog_countertop_edge_profiles_2026"
      canonical="/blog/countertop-edge-profiles-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'What is the most popular countertop edge profile in 2026?',
          answer: 'The eased edge (slightly softened 90-degree edge) and its close sibling the beveled edge remain the most popular choices for kitchen countertops in 2026, particularly for quartz countertops in the mid-to-upper-end renovation market. They are clean, contemporary, and work with every cabinet style from traditional to ultra-modern. The waterfall edge continues to gain popularity on kitchen islands. For bathroom vanities, the soft-pencil and eased edges are standard.',
        },
        {
          question: 'How much does a countertop edge profile upgrade cost in Woodstock GA?',
          answer: 'Standard edge profiles (eased, beveled, straight) are included in base countertop pricing from most Cherokee County and Metro Atlanta fabricators. Upgraded profiles (ogee, double ogee, dupont, chiseled) typically add $10–$25 per linear foot to the fabrication cost. A waterfall edge on a kitchen island (which requires mitering stone to wrap the sides) adds $500–$2,000+ depending on material and island size. Call Phoenix Construction at (678) 463-4893 to discuss countertop options for your project.',
        },
        {
          question: 'Which countertop edge profile is easiest to clean?',
          answer: 'The eased, beveled, and flat-polished edges are the easiest to clean because they have no crevices or curves where food debris accumulates. Ogee and dupont profiles have concave curves that require more attention. For kitchens with heavy cooking use, simpler profiles are a practical advantage. Waterfall edges that meet the floor need attention at the floor seam.',
        },
        {
          question: 'Does the edge profile change the price of the countertop?',
          answer: 'Yes, more complex profiles add to fabrication cost. Standard profiles (eased, beveled, straight) are included in base pricing. Decorative profiles (ogee, dupont, chiseled, rope) add $8–$20 per linear foot. Waterfall edges add $400–$2,000+ for the miter work and extra stone required. The total upcharge for a full kitchen is modest for most standard profiles — $150–$450 over base. The material and thickness have far more impact on total price than edge profile.',
        },
        {
          question: 'What edge profile works best with white quartz countertops?',
          answer: 'White quartz countertops look best with clean, modern edge profiles. The eased edge is the most popular choice — it\'s contemporary without being severe. A flat-mitered (straight) edge works beautifully on very modern kitchens. The waterfall edge on an island with white quartz is a high-end look that\'s extremely popular in Cherokee County kitchen remodels. Avoid ornate ogee or dupont profiles with white quartz — the clash of contemporary material and traditional edge feels inconsistent.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        You've spent weeks choosing your countertop material, color, and thickness. Then your fabricator asks: "What edge profile do you want?" Most homeowners go blank. Edge profiles are a design detail that gets almost no attention until the last moment — but they're permanently visible every time you're in your kitchen. The wrong edge for your cabinet style or kitchen aesthetic creates a subtle but persistent visual mismatch. This guide explains every major edge profile for quartz, granite, and marble, with honest recommendations for what works in Cherokee County and Metro Atlanta kitchens in 2026.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-700"><strong>How fabricators quote edges:</strong> Edge profiles are quoted per linear foot of exposed edge. Most countertops have two types of exposed edges — the front (long edge facing you) and the short returns at the ends. Corners and inside curves are priced per corner. Some fabricators include a "standard" edge in base pricing and charge extra for premium profiles; others quote per-profile pricing from the start. Confirm with your fabricator which profiles are included.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-6">
        Edge Profile Reference Guide
      </h2>

      <div className="space-y-5 mb-10">
        {[
          {
            name: 'Eased Edge',
            also: 'Also called: slightly eased, softened, or micro-bevel',
            upcharge: 'Included in base price',
            rating: 'Most popular — recommended for most kitchens',
            ratingColor: 'bg-green-100 text-green-700',
            desc: 'The eased edge starts as a full 90-degree right angle and has the top corner lightly sanded or polished to remove the sharpness — typically 1/16" to 1/8" radius. From a few feet away it looks like a clean square edge. Up close it\'s softer and safer. This is the default edge for most modern quartz countertops and is the single most popular choice in Metro Atlanta kitchens because it works with every style.',
            bestWith: 'White quartz, modern kitchens, transitional, Shaker cabinets. Universal compatibility.',
            cleanability: 'Excellent — no crevices.',
          },
          {
            name: 'Beveled Edge',
            also: 'Also called: 1/4" bevel, 45° bevel',
            upcharge: 'Usually included or +$3–$6/lf',
            rating: 'Contemporary — very popular in Metro Atlanta',
            ratingColor: 'bg-green-100 text-green-700',
            desc: 'A beveled edge cuts the top corner at 45 degrees, creating a small angled flat facet (typically 1/4"–1/2" wide). It\'s more visually distinct than an eased edge but just as clean and contemporary. The bevel catches light and adds definition to the countertop profile. Works particularly well on thicker countertops (3cm+) where the angled facet has more surface area.',
            bestWith: 'Quartz, granite. Modern and transitional kitchens. Particularly effective on islands.',
            cleanability: 'Excellent.',
          },
          {
            name: 'Straight / Flat Polished',
            also: 'Also called: square edge, mitered edge',
            upcharge: 'Usually included',
            rating: 'Modern, minimal — popular on ultra-contemporary kitchens',
            ratingColor: 'bg-blue-100 text-blue-700',
            desc: 'A true 90-degree square edge with no softening. Sharp, architectural, and completely clean. Most popular on very modern European-style kitchens with flat-front cabinetry. Not recommended for households with young children (the corner is genuinely sharp). Also called a mitered edge when used on thick-profile countertops (1.5" or 2" stacked).',
            bestWith: 'Ultra-modern, flat-front European cabinetry, waterfall islands.',
            cleanability: 'Excellent, but the sharp corner accumulates chips over time on harder stones.',
          },
          {
            name: 'Waterfall Edge',
            also: 'Also called: waterfall island, waterfall return',
            upcharge: '$500–$2,000+ per waterfall return',
            rating: 'High-end statement — growing rapidly in Cherokee County',
            ratingColor: 'bg-purple-100 text-purple-700',
            desc: 'Not technically an edge profile but a design treatment where the countertop material continues vertically down the side of an island or cabinet, meeting the floor. The material is mitered at 45 degrees at the top corner to create a seamless continuous surface. Requires extra stone (for the vertical panel) and skilled miter work. Extremely popular on kitchen islands with quartz countertops in the $400K+ Cherokee County home market.',
            bestWith: 'Kitchen islands. White or bold-vein quartz. Modern kitchens. Bold design statements.',
            cleanability: 'Very good — the seamless surface wipes clean, though the floor seam needs attention.',
          },
          {
            name: 'Half Bullnose',
            also: 'Also called: half round, eased bullnose',
            upcharge: '+$4–$10/lf',
            rating: 'Transitional — traditional meets modern',
            ratingColor: 'bg-amber-100 text-amber-700',
            desc: 'The top edge is rounded into a half-circle profile. Classic, soft, and safe — no sharp corners. The half bullnose was extremely popular through the 2000s and 2010s in standard granite countertops and is still widely used. It reads as slightly more traditional than an eased edge. If your cabinets have any traditional or classic detailing, the half bullnose is a safe choice that won\'t look dated.',
            bestWith: 'Traditional, transitional, and classic kitchen styles. Granite.',
            cleanability: 'Good — the curve is easy to wipe.',
          },
          {
            name: 'Full Bullnose',
            also: 'Also called: full round',
            upcharge: '+$6–$14/lf',
            rating: 'Classic — best for traditional styles',
            ratingColor: 'bg-amber-100 text-amber-700',
            desc: 'Both the top and bottom corners are rounded, creating a fully rounded edge profile. Looks substantial and traditional. Not as common as it was in the 1990s–2000s but still appropriate for high-traditional kitchen styles. Note: the underside rounding means less visible thickness to the countertop.',
            bestWith: 'Traditional cabinetry, country-style kitchens.',
            cleanability: 'Good.',
          },
          {
            name: 'Ogee Edge',
            also: 'Also called: classical ogee, full ogee',
            upcharge: '+$10–$22/lf',
            rating: 'Ornate — traditional and formal kitchens only',
            ratingColor: 'bg-red-100 text-red-700',
            desc: 'The ogee is an S-curve profile — the edge curves outward (convex) then inward (concave) creating a flowing, ornamental profile. It\'s associated with formal, traditional, and luxury kitchen design from the 1990s and 2000s. Less common now in new installations. If your kitchen has raised-panel cabinetry, furniture-style details, and a formal aesthetic, an ogee can be appropriate. Mismatched with modern or Shaker cabinet styles.',
            bestWith: 'Traditional raised-panel cabinetry. Formal kitchens.',
            cleanability: 'Moderate — the concave curve traps debris.',
          },
          {
            name: 'Dupont / DuPont Edge',
            also: 'Also called: step edge',
            upcharge: '+$8–$18/lf',
            rating: 'Traditional-transitional, less common today',
            ratingColor: 'bg-amber-100 text-amber-700',
            desc: 'The Dupont edge has a flat top, then a 90-degree step down creating a reveal, then a rounded bottom. It\'s a traditional profile that reads as more formal than an eased edge but less ornate than an ogee. Popular in the 2000s; less prevalent in current installations but still appropriate for the right kitchen.',
            bestWith: 'Traditional and transitional kitchens.',
            cleanability: 'Moderate — the step catches debris.',
          },
          {
            name: 'Chiseled / Leathered Edge',
            also: 'Also called: natural edge, raw edge',
            upcharge: '+$12–$30/lf (highly variable)',
            rating: 'Specialty — dramatic, very specific aesthetic',
            ratingColor: 'bg-red-100 text-red-700',
            desc: 'A chiseled edge is mechanically or hand-chipped along the stone face to create an irregular, natural-looking rough profile. Primarily used on granite and natural stone — does not work on quartz. The leathered finish (applied to the top surface, not just edge) involves texturing the stone surface with a leather or brushing tool. Dramatic and unique — very specific to rustic, farmhouse, or stone-focused kitchen aesthetics. High fabrication cost and variable availability.',
            bestWith: 'Rustic, farmhouse, and stone-heavy kitchen designs.',
            cleanability: 'Challenging — the irregular surface traps debris.',
          },
        ].map((edge) => (
          <div key={edge.name} className="border border-gray-200 rounded-xl p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <div>
                <h3 className="font-bold text-slate-900">{edge.name}</h3>
                <p className="text-gray-400 text-xs">{edge.also}</p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2 py-1 rounded">{edge.upcharge}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded ${edge.ratingColor}`}>{edge.rating}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">{edge.desc}</p>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-gray-50 rounded px-3 py-2">
                <span className="font-semibold text-slate-700">Best with: </span>
                <span className="text-gray-600">{edge.bestWith}</span>
              </div>
              <div className="bg-gray-50 rounded px-3 py-2">
                <span className="font-semibold text-slate-700">Cleanability: </span>
                <span className="text-gray-600">{edge.cleanability}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Quick Matching Guide: Edge by Cabinet Style
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Cabinet Style</th>
              <th className="text-left px-4 py-3">Top Pick</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Also Works</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Shaker (most popular in Cherokee County)', 'Eased edge', 'Beveled, half bullnose'],
              ['Flat-front / modern European', 'Straight / mitered', 'Eased, waterfall island'],
              ['Raised panel (traditional)', 'Half bullnose, full bullnose', 'Ogee, Dupont'],
              ['Beadboard / farmhouse', 'Half bullnose', 'Eased, chiseled'],
              ['Mixed traditional-modern', 'Beveled or eased', 'Half bullnose'],
            ].map(([style, top, also], i) => (
              <tr key={style} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 font-medium text-slate-800">{style}</td>
                <td className="px-4 py-2 text-gray-600">{top}</td>
                <td className="px-4 py-2 text-gray-500">{also}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Planning a Countertop or Kitchen Remodel?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction installs quartz, granite, marble, and natural stone countertops throughout Woodstock, Canton, and Metro Atlanta. We'll help you navigate material, thickness, finish, and edge selection to get exactly the result you're after.
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
        <p className="text-gray-600 italic mb-3">"From the design stage through finishing touches, Phoenix Construction helped us think through every detail — including material and profile choices we hadn't considered. The result exceeded our expectations."</p>
        <p className="text-gray-500 text-sm">— Phoenix Construction Client, Google Review</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Kitchen & Countertop Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Quartz vs. Granite vs. Marble Countertops', href: '/blog/quartz-vs-granite-vs-marble-countertops-woodstock-ga' },
          { label: 'Kitchen Remodel Cost Guide 2026', href: '/blog/kitchen-remodel-cost-woodstock-ga-2026' },
          { label: 'Kitchen Remodel ROI Woodstock GA', href: '/blog/kitchen-remodel-roi-woodstock-ga' },
          { label: 'Cabinet Refacing vs. Replacement', href: '/blog/kitchen-cabinet-refacing-vs-replacement-woodstock-ga' },
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
