import { CheckCircle, Phone, Star, ArrowRight, Lightbulb, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodel' },
  { value: 'kitchen-lighting', label: 'Kitchen Lighting Upgrade' },
  { value: 'cabinet-install', label: 'Cabinet & Countertop Upgrade' },
  { value: 'kitchen-bathroom', label: 'Kitchen + Bathroom Remodel' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenLightingDesign() {
  return (
    <BlogTemplate
      title="Kitchen Lighting Design Guide for Woodstock GA Homeowners: Layers, Types, and What to Do in 2026"
      description="Poor kitchen lighting is the most common design mistake in Cherokee County homes. This complete guide explains the three-layer lighting approach, where recessed lights actually go, how to size pendant lights over an island, under-cabinet lighting options, and what a full kitchen lighting upgrade costs in Woodstock GA."
      category="Kitchen Remodeling"
      categoryColor="red"
      date="July 9, 2026"
      heroImage="/IMG_9353.WEBP"
      heroImageAlt="Kitchen lighting design Woodstock GA Cherokee County recessed pendants under-cabinet 2026"
      source="blog_kitchen_lighting_design_2026"
      canonical="/blog/kitchen-lighting-design-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'How much does kitchen lighting cost in Woodstock GA?',
          answer: 'A full kitchen lighting upgrade in Woodstock GA — recessed lights, pendant lights over the island, and under-cabinet lighting — typically costs $2,500–$7,500 for a licensed electrician plus fixtures, depending on the number of fixtures, fixture quality, and whether the ceiling needs to be opened for new rough-in. Upgrading an existing kitchen\'s lighting (replacing old can lights with new recessed trims and adding pendants) runs $1,800–$4,000. A full lighting design as part of a kitchen remodel (all new rough-in, dimmers, under-cabinet LEDs) runs $3,500–$8,000. Call Phoenix Construction at (678) 463-4893.',
        },
        {
          question: 'How many recessed lights do I need in my kitchen?',
          answer: 'As a starting rule, place recessed lights on a 4-foot grid across the kitchen ceiling, with lights at least 2 feet from the wall. A 12×12 kitchen typically needs 6–9 recessed lights (3 rows of 2–3). But grid placement is only correct for ambient light — task lighting over counters requires lights positioned directly over the work surface, 18"–24" from the wall (so light falls onto the counter, not behind you). The best kitchen lighting plans layer a grid of ambients with targeted task lights at each counter run, not just a uniform grid.',
        },
        {
          question: 'What size pendant lights should I use over a kitchen island?',
          answer: 'For island pendant sizing: the pendant diameter should be roughly 1/3 of the island width for a single large pendant, or 1/5–1/6 of the island width per pendant for a row of 3. For a 6-foot island, use three 12"–14" diameter pendants spaced 24" apart and 24"–30" above the countertop surface. Pendant bottoms should sit 30"–36" above the countertop (lower for ambiance, higher for clearance when standing). Match pendant style to cabinet hardware finish for a cohesive look.',
        },
        {
          question: 'What is the best under-cabinet lighting for a kitchen?',
          answer: 'LED tape/strip lighting is the most popular under-cabinet lighting choice for Cherokee County kitchen remodels in 2026. It\'s thin, runs continuously across the full width of each cabinet run, produces excellent task lighting, and consumes very little electricity. LED puck lights are easier to install but create circles of light with dark gaps between fixtures — not as good for serious task lighting. For new kitchen remodels, specify plug-in LED strips with a low-voltage driver tucked inside a cabinet; for retrofits, plug-in LED strips that plug into an outlet inside the upper cabinet are a clean solution without opening walls.',
        },
        {
          question: 'Should kitchen lights be on dimmer switches?',
          answer: 'Yes, every kitchen circuit that controls ambient or accent lighting should be on a dimmer. Recessed lights and pendant lights on dimmer switches transform a kitchen from a single-mode space to a room that can shift from bright task lighting while cooking to warm ambient lighting during dinner. Under-cabinet lighting should also be on a dimmer or at minimum a separate switch from the ceiling lights. Make sure fixtures are rated as dimmable (not all LEDs are — verify before purchasing).',
        },
        {
          question: 'What color temperature is best for kitchen lighting?',
          answer: '2700K–3000K ("warm white") is the most flattering color temperature for kitchen lighting and the most popular choice in residential kitchen remodels. It reads as warm and natural, makes food look appealing, and is consistent with living and dining spaces. 3500K–4000K ("neutral white") is used in some modern kitchens for a crisper, brighter task environment and works well in all-white kitchens or high-contrast designs. Avoid 5000K+ (daylight) in residential kitchens — it reads as harsh and clinical.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Lighting is the most frequently overlooked element in kitchen design — and the most regretted after the fact. Cherokee County homeowners invest $30,000–$80,000 in a kitchen remodel, then plan the lighting as a last-minute line item. The result is one of the most common complaints we hear from homeowners about completed kitchens: beautiful cabinets and countertops that look dim, shadows on the counters where people actually work, and no way to set a mood for anything other than "bright and utilitarian." <strong>Good kitchen lighting costs $3,000–$8,000 of a remodel budget and determines how the other $50,000 looks every single day.</strong>
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3 items-start">
          <Lightbulb className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-sm text-gray-700"><strong>The most common kitchen lighting mistake in Cherokee County homes:</strong> A single ceiling fixture or a uniform grid of recessed lights with no dimmers, no under-cabinet lights, and no pendants. This creates flat, shadowless ambient light that makes the kitchen functional but not beautiful. Task lighting on the counters (where you actually cook) is absent. Pendants over the island — the room's focal point — are missing. None of this requires expensive fixtures; it requires layering.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The Three-Layer Lighting System
      </h2>
      <p className="text-gray-600 leading-relaxed mb-5">
        Every well-designed kitchen uses three distinct layers of light. Each does a different job. None of the three can fully substitute for the others.
      </p>

      <div className="space-y-5 mb-10">
        {[
          {
            layer: 'Layer 1: Ambient (General) Lighting',
            icon: '○',
            desc: 'Fills the room with overall illumination. Allows basic navigation and activity throughout the kitchen. This is what most people think of when they think "kitchen lighting" — the general brightness of the room.',
            sources: ['Recessed (can) lights on a ceiling grid', 'Central ceiling fixture or flush mount', 'Cove lighting (indirect, bounces off ceiling)'],
            mistake: 'Relying ONLY on ambient lighting — produces flat, shadow-heavy light that makes task work difficult and the kitchen look institutional.',
            tip: 'Recessed lights on a dimmer switch give you full ambient control — bright for cooking, low for dining ambiance.',
          },
          {
            layer: 'Layer 2: Task Lighting',
            icon: '▬',
            desc: 'Directed light exactly where work happens — countertops, the stovetop, the sink, and the island surface. Task lighting eliminates the shadows cast by your own body when working under ambient-only lighting.',
            sources: ['Under-cabinet LED strip or tape lighting', 'Range hood with integrated lights (over stovetop)', 'Pendant lights directly over the island countertop', 'Recessed lights placed directly above counter runs (not on center grid)'],
            mistake: 'Under-cabinet lights wired in the same circuit as overhead lights — they should be separate switches or dimmers so task lighting can be on without the full ambient array.',
            tip: 'Position under-cabinet lights toward the front of the cabinet (not the back) so light falls on the front 2/3 of the counter, where most work happens.',
          },
          {
            layer: 'Layer 3: Accent and Decorative Lighting',
            icon: '✦',
            desc: 'Creates visual interest, highlights architectural features, and sets the room\'s character. Accent lighting is what makes a kitchen feel designed rather than just functional.',
            sources: ['Pendant lights (statement fixtures over island or peninsula)', 'Cabinet interior lighting (glass-front cabinets lit from within)', 'Under-island LED accent strips', 'Toe-kick LED lighting (subtle ground-level light)', 'Above-cabinet lighting (washes the ceiling with uplight)'],
            mistake: 'Treating pendant selection as purely decorative — pendants must also provide functional task light over the island. A beautiful pendant that casts no useful light onto the countertop fails at its primary job.',
            tip: 'Cabinet interior lights on a separate switch — they can be left on as ambient accent lighting when the kitchen isn\'t in use, creating warmth visible from adjacent rooms.',
          },
        ].map((layer) => (
          <div key={layer.layer} className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-slate-800 text-white px-5 py-4">
              <h3 className="font-bold text-white text-lg">{layer.layer}</h3>
            </div>
            <div className="p-5">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{layer.desc}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">Light sources</h4>
                  <ul className="space-y-1">
                    {layer.sources.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle size={10} className="text-green-500 flex-shrink-0 mt-0.5" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-xs text-red-700"><span className="font-bold">Common mistake: </span>{layer.mistake}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-green-700"><span className="font-bold">Pro tip: </span>{layer.tip}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Recessed Lighting: Placement That Actually Works
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Recessed lights are the backbone of kitchen ambient lighting, but their placement is frequently misunderstood. A uniform grid looks clean on a plan but often fails in execution. Here's the placement logic that produces functional results:
      </p>
      <div className="space-y-3 mb-8">
        {[
          { rule: 'Grid spacing: 4 feet apart', detail: 'Place recessed lights on a 4-foot grid across the ceiling for consistent ambient illumination. In a 10×12 kitchen, this means a 3×3 array (9 lights) or a 2×3 array (6 lights) depending on starting position.' },
          { rule: 'Wall clearance: 2 feet minimum', detail: 'The first row of lights should be at least 2 feet from the wall — farther from the wall than most people intuitively place them. Lights too close to the wall cast light straight down the wall face rather than onto the room.' },
          { rule: 'Over counters: 18"–24" from the wall', detail: 'For counter task lighting via recessed lights (when under-cabinet lights are not used), position a light 18"–24" from the back wall, directly above the counter run. This puts light on the counter surface rather than behind the person standing there.' },
          { rule: 'Over the sink: directly above', detail: 'A dedicated recessed light directly above the sink — on a separate switch — is a practical addition. The sink is a primary task area and standard grid lighting rarely falls directly above it.' },
          { rule: 'Fixture size: 4" in modern kitchens', detail: '4-inch recessed fixtures (vs. the older 6-inch standard) produce a cleaner, more refined ceiling appearance and are now the standard in new kitchen construction and quality remodels in Cherokee County.' },
          { rule: 'All on dimmers', detail: 'Every recessed circuit should be on a dimmer. The ability to shift from 100% brightness for cooking to 20% for dinner ambiance is one of the most transformative kitchen features — and costs only the price of dimmer switches ($20–$60 each).' },
        ].map((item) => (
          <div key={item.rule} className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0">
            <div className="bg-red-600 text-white rounded-full w-2 h-2 flex-shrink-0 mt-2" />
            <div>
              <span className="font-semibold text-slate-800 text-sm">{item.rule}: </span>
              <span className="text-gray-600 text-sm">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Pendant Lights Over the Island: Sizing and Spacing
      </h2>
      <div className="bg-slate-50 rounded-xl p-5 mb-5">
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {[
            { label: 'Number of pendants', value: '3 for a 5\'–7\' island', detail: '2 pendants over 4\' islands, 3 over 5\'–8\', 4 over 9\'+ islands. Odd numbers read better visually.' },
            { label: 'Pendant spacing (center to center)', value: '24"–30" apart', detail: 'Evenly distribute across the island length, centered left-to-right.' },
            { label: 'Pendant bottom height', value: '30"–36" above counter', detail: 'Lower for intimate, ambient-focused light. Higher for more clearance when standing.' },
            { label: 'Single pendant sizing', value: 'Max 1/3 island width', detail: 'A single pendant over an island needs to be proportionally generous — a 6\' island can support a 20"–24" pendant.' },
            { label: 'Row of pendant sizing', value: '1/5 to 1/6 of island width each', detail: 'Three 12"–14" pendants over a 6\' island feel right. Three 20" pendants over 6\' is visually overwhelming.' },
            { label: 'Finish coordination', value: 'Match cabinet hardware', detail: 'Brushed gold pendants with gold cabinet pulls, matte black pendants with black hardware. Mixing metals is okay but requires intention.' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex justify-between items-start gap-2 mb-1">
                <span className="font-semibold text-slate-700 text-xs">{item.label}</span>
                <span className="font-bold text-slate-900 text-xs text-right">{item.value}</span>
              </div>
              <p className="text-xs text-gray-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Under-Cabinet Lighting: The Most Impactful Upgrade Per Dollar
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Under-cabinet lighting is arguably the highest-ROI kitchen lighting upgrade. It directly illuminates the countertop where food is prepared, eliminates the shadow caused by upper cabinets blocking overhead light, and makes the kitchen look finished and intentional. In a kitchen remodel, the cost is modest — in a finished kitchen, it requires either opening a cabinet for wiring or using a plug-in solution.
      </p>
      <div className="space-y-3 mb-8">
        {[
          {
            type: 'Hardwired LED Strip (best option in a remodel)',
            cost: '$800–$1,800 installed',
            pros: 'Cleanest appearance — no visible wires, no plugs. Driver (transformer) hidden inside upper cabinet. Full-length continuous light across every cabinet run.',
            cons: 'Requires electrical rough-in — ideally installed during a remodel when walls are open.',
          },
          {
            type: 'Plug-In LED Strip (best retrofit option)',
            cost: '$200–$600 DIY / $400–$900 installed',
            pros: 'No wall opening required. High-quality plug-in LED strips with in-cabinet outlet are nearly as clean as hardwired. Quick to install.',
            cons: 'Requires an outlet inside an upper cabinet. Visible power cord inside cabinet (though concealed from outside).',
          },
          {
            type: 'LED Puck Lights',
            cost: '$150–$500 installed',
            pros: 'Extremely easy to install. Can be battery-powered or plug-in with no wiring.',
            cons: 'Creates circles of bright light with dark gaps between fixtures. Not recommended for a finished kitchen — more appropriate for pantries or utility spaces.',
          },
        ].map((item) => (
          <div key={item.type} className="border border-gray-200 rounded-xl p-4">
            <div className="flex flex-wrap justify-between items-center gap-1 mb-2">
              <h4 className="font-bold text-slate-800 text-sm">{item.type}</h4>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{item.cost}</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-2 text-xs">
              <div><span className="font-medium text-green-700">Pros: </span><span className="text-gray-600">{item.pros}</span></div>
              <div><span className="font-medium text-red-600">Cons: </span><span className="text-gray-600">{item.cons}</span></div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Color Temperature: Getting the Warmth Right
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Color Temp</th>
              <th className="text-left px-4 py-3">Appearance</th>
              <th className="text-left px-4 py-3">Best Use</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Verdict</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['2700K', 'Warm white (incandescent-like)', 'Traditional, warm kitchens; transitional style', 'Great for cozy character; can feel slightly yellow in all-white kitchens'],
              ['3000K', 'Warm white, slightly crisper', 'Most kitchen remodels — universal choice', 'Best all-around. Warm, flattering, food looks good, pairs with all cabinet colors'],
              ['3500K', 'Neutral white', 'Modern/transitional kitchens, high-contrast designs', 'Cleaner feel, slightly clinical — works well in stark white kitchens'],
              ['4000K', 'Cool neutral white', 'Commercial-inspired, ultra-modern kitchens', 'Bright and precise; most homeowners find it too cold for residential use'],
              ['5000K+', 'Daylight / cool blue-white', 'Workshops, garages — NOT kitchens', 'Avoid in residential kitchens — harsh and unflattering'],
            ].map(([temp, appearance, use, verdict], i) => (
              <tr key={temp} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 font-bold text-slate-700">{temp}</td>
                <td className="px-4 py-2 text-gray-600">{appearance}</td>
                <td className="px-4 py-2 text-gray-600">{use}</td>
                <td className="px-4 py-2 text-gray-500 text-xs">{verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Full Kitchen Lighting Cost Summary (Woodstock GA, 2026)
      </h2>
      <div className="space-y-2 mb-8">
        {[
          ['Recessed lights (8–12 fixtures, 4" LED, with dimmer switches)', '$1,200–$2,800'],
          ['Pendant lights (3 over island, mid-range fixtures)', '$600–$2,500'],
          ['Under-cabinet hardwired LED strips (full kitchen)', '$800–$1,800'],
          ['Range hood (with integrated LED task lighting)', '$600–$3,500'],
          ['Cabinet interior lighting (glass-front accent)', '$400–$900'],
          ['Under-island LED accent strip', '$300–$700'],
          ['Full lighting package (new remodel, all of the above)', '$3,500–$9,000'],
          ['Lighting upgrade only (existing kitchen, no walls opened)', '$1,800–$4,500'],
        ].map(([item, cost]) => (
          <div key={item} className="flex justify-between items-center border-b border-gray-100 py-2 text-sm">
            <span className="text-gray-700">{item}</span>
            <span className="font-semibold text-slate-700 ml-4 whitespace-nowrap">{cost}</span>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Kitchen Lighting Design Included in Every Phoenix Construction Remodel</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction plans kitchen lighting as an integral part of every remodel — not a last-minute add-on. We serve Woodstock, Canton, Holly Springs, and all of Metro Atlanta North Georgia.
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
        <p className="text-gray-600 italic mb-3">"From the design stage through finishing touches, Phoenix Construction helped us think through every detail. The result exceeded our expectations."</p>
        <p className="text-gray-500 text-sm">— Phoenix Construction Client, Google Review</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Kitchen Guides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Kitchen Island Design & Build Guide', href: '/blog/kitchen-island-design-build-woodstock-ga' },
          { label: 'Open Concept Kitchen Remodel Woodstock GA', href: '/blog/open-concept-kitchen-remodel-woodstock-ga' },
          { label: 'Kitchen Remodel ROI Woodstock GA', href: '/blog/kitchen-remodel-roi-woodstock-ga' },
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
