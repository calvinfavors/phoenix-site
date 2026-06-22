import { AlertTriangle, CheckCircle, Phone, Star, ArrowRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'bathroom-remodel', label: 'Full Bathroom Remodel' },
  { value: 'plumbing-inspection', label: 'Plumbing Inspection & Update' },
  { value: 'walk-in-shower', label: 'Walk-In Shower Installation' },
  { value: 'tile-work', label: 'Tile & Waterproofing' },
  { value: 'other', label: 'Other Services' },
];

export default function OldBathroomDangers() {
  return (
    <BlogTemplate
      title="Old Bathroom Warning Signs: Hidden Dangers in Cherokee County & Metro Atlanta Homes Built Before 2000"
      description="If your bathroom was built or last remodeled before 2000, it may be hiding serious problems — failing plumbing, water damage behind walls, mold, electrical hazards, and more. Phoenix Construction explains what to look for and when to act."
      category="Bathroom Remodeling"
      categoryColor="red"
      date="June 22, 2026"
      heroImage="/gallery/phoenix-bathroom.jpg"
      heroImageAlt="Old bathroom warning signs and dangers - Woodstock GA bathroom remodeling contractor"
      source="blog_old_bathroom_dangers_2026"
      canonical="/blog/old-bathroom-dangers-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'How do I know if my bathroom has water damage behind the walls?',
          answer: 'Common signs include soft or spongy tile that flexes when pressed, grout lines that crack repeatedly after being repaired, a persistent musty smell even after cleaning, visible staining or discoloration on adjoining walls or ceilings, and peeling paint or wallpaper near the shower or tub. A bathroom remodeling contractor can probe the walls during a consultation. Call Phoenix Construction at (678) 463-4893 for a free assessment.',
        },
        {
          question: 'What is polybutylene pipe and is it in my home?',
          answer: 'Polybutylene (PB) pipe is a gray plastic plumbing material used in homes built roughly between 1978 and 1995. It was widely used in Georgia subdivisions during that era. PB pipe is prone to sudden failure — it can crack from the inside out with no visible warning, causing major water damage. If your home was built between 1978–1995 and has gray plastic pipes, have them inspected. Many Cherokee County homeowners discovered this issue during bathroom remodels.',
        },
        {
          question: 'Do old bathrooms have mold?',
          answer: 'Many pre-2000 bathrooms have mold behind the tile — especially in shower surrounds, around the tub, and under the floor. Old bathrooms used materials like drywall or green board behind tile rather than cement board or waterproof membranes. These materials absorb moisture over time, creating ideal mold conditions that are invisible until tile is removed. This is one of the most common discoveries during a full bathroom gut renovation.',
        },
        {
          question: 'Is my old bathroom electrical safe?',
          answer: 'Bathrooms built before the mid-1980s may lack GFCI (ground-fault circuit interrupter) protection on outlets, which is required by modern code and is a serious shock hazard near water. Older bathrooms may also have insufficient circuits, aluminum wiring (common in 1960s–1970s construction), or outdated fixture wiring. Any bathroom remodel in Cherokee County will require a licensed electrician to bring the space to current code.',
        },
        {
          question: 'When should I remodel an old bathroom vs. just repair it?',
          answer: 'If your bathroom has one isolated issue (a leaking faucet, a loose tile), repair is fine. But if you\'re seeing multiple warning signs — failing grout, soft tile, recurring mold, outdated fixtures, poor ventilation, or suspected water damage — a full remodel is typically more cost-effective. Repeated repairs on a failing bathroom often cost more over 5 years than a single proper renovation that addresses root causes.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        A bathroom that looks dated is one thing. A bathroom that's actively causing structural damage, growing hidden mold, or harboring a plumbing failure waiting to happen is another. <strong>Most Cherokee County and Metro Atlanta homes built before 2000 have at least one serious hidden issue in their bathrooms</strong> — and many homeowners don't discover it until a renovation begins. This guide explains what to look for, why these issues develop, and when it's time to stop patching and start renovating.
      </p>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-slate-900 mb-2">Why Pre-2000 Bathrooms Are Different</h3>
            <p className="text-gray-600 text-sm">Building codes for bathroom waterproofing, ventilation, and electrical safety changed significantly in the late 1990s and early 2000s. Homes built before those code changes used materials and methods that were standard at the time but are now known to fail — often silently, behind finished walls, for years before becoming visible.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        1. Water Damage Behind Tile: The Silent Destroyer
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        This is the most common hidden danger in older bathrooms — and the most expensive to ignore. Pre-2000 bathroom construction typically used <strong>regular drywall or "green board"</strong> (moisture-resistant but not waterproof drywall) as the substrate behind shower and tub tile. Over time, grout cracks and water migrates through the tile into the substrate. Green board absorbs water, softens, and eventually disintegrates. By the time it's discovered, the framing behind it is often rotted too.
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
        <h4 className="font-bold text-slate-800 mb-3">Warning signs of water damage behind tile:</h4>
        <ul className="space-y-2">
          {[
            'Tile that flexes or feels soft when you press on it — the substrate has failed',
            'Grout cracks repeatedly within months of being reapplied',
            'A musty or earthy smell in the bathroom that doesn\'t go away with cleaning',
            'Discoloration or staining on the wall or ceiling of an adjoining room',
            'Peeling paint or wallboard bubbling near the shower or tub',
            'Caulk at the base of the shower that fails repeatedly',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <AlertTriangle size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 leading-relaxed mb-8">
        Modern bathroom remodeling uses <strong>cement board or Schluter Kerdi waterproof membrane systems</strong> as the tile substrate — materials that don't absorb water and don't support mold growth. When Phoenix Construction guts an old bathroom, we always remove all substrate back to the studs and inspect the framing before any new material goes in.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        2. Mold: What's Behind Your Shower Walls
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Mold behind bathroom tile is extraordinarily common in older homes — but because it's hidden, many homeowners live with it for years without knowing. Once green board or drywall becomes wet, it provides both the moisture and organic material mold needs to grow. Standard surface mold cleaners don't reach behind tile.
      </p>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <AlertTriangle size={16} className="text-red-500" />
            Signs mold may be present
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              'Persistent musty smell that returns after cleaning',
              'Discoloration at grout lines that isn\'t surface mold',
              'Family members experiencing unexplained respiratory symptoms',
              'Visible mold at the base of the wall near the floor',
              'Black staining at caulk lines that returns immediately after removal',
            ].map((i) => <li key={i} className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span>{i}</li>)}
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <Shield size={16} className="text-green-500" />
            How modern remodels prevent it
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              'Cement board substrate (won\'t absorb water or feed mold)',
              'Waterproof membrane at shower pan and walls',
              'Properly sloped shower floor for complete drainage',
              'EXHAUST FAN — code-required, adequately sized for the space',
              'Sealed grout with penetrating sealer after installation',
            ].map((i) => <li key={i} className="flex items-start gap-2"><span className="text-green-500 mt-1">•</span>{i}</li>)}
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        3. Failing Plumbing: Galvanized Steel and Polybutylene Pipe
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Two plumbing materials common in older North Georgia homes are known to fail — and bathroom remodels are often when homeowners discover them:
      </p>
      <div className="space-y-4 mb-8">
        <div className="border-l-4 border-red-500 pl-5 py-2">
          <h4 className="font-bold text-slate-800 mb-2">Galvanized Steel Pipe (homes built before ~1970)</h4>
          <p className="text-gray-600 text-sm">Galvanized pipe was the standard water supply material before copper. It corrodes from the inside out — the pipe walls build up rust and mineral scale that progressively reduces water flow and eventually causes pinhole leaks. By the time a bathroom remodel exposes it, galvanized supply lines in older homes often have dangerously restricted flow or are actively corroding. Replacement with copper or PEX is the right call during any remodel.</p>
        </div>
        <div className="border-l-4 border-orange-500 pl-5 py-2">
          <h4 className="font-bold text-slate-800 mb-2">Polybutylene (PB) Pipe (homes built ~1978–1995)</h4>
          <p className="text-gray-600 text-sm">Polybutylene was widely used in Cherokee County subdivisions built during the building boom of the 1980s and early 1990s. It reacts with oxidants in municipal water (chlorine) and degrades from the inside, becoming brittle and prone to sudden catastrophic failure. PB pipe fittings fail most often. Many homeowners only discover they have PB pipe when a bathroom remodel exposes it. If your home was built between 1978–1995, look for gray plastic pipe — it's polybutylene.</p>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
        <p className="text-sm text-gray-700"><strong>The remodel opportunity:</strong> A bathroom gut renovation exposes all supply and drain lines in the space. This is the lowest-cost opportunity to replace failing plumbing — while walls are already open and labor is already on site. Replacing pipes <em>during</em> a remodel adds relatively little cost compared to doing it as a standalone project.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        4. Electrical Hazards: Missing GFCI and Outdated Wiring
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        GFCI (ground-fault circuit interrupter) outlets — the ones with the TEST/RESET buttons — became required in bathrooms by the NEC (National Electrical Code) in 1975, but enforcement and compliance varied widely for years after. Many older Metro Atlanta homes still have standard outlets in bathrooms, which is a serious shock hazard near water sources.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          'GFCI protection is required within 6 feet of any water source — including sinks, tubs, and showers',
          'Homes built in the 1960s–70s may have aluminum wiring, which requires specific outlets and can be a fire hazard if modified improperly',
          'Old bathroom lighting fixtures may use wiring rated for lower temperatures than modern LED bulbs produce',
          'Exhaust fans in many pre-2000 bathrooms are either absent or too small for the space (inadequate CFM rating) — this is both a code and a mold-risk issue',
          'Any bathroom remodel in Cherokee County will require permits and electrical inspection — a licensed electrician must sign off on GFCI compliance',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <Zap className="text-yellow-500 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        5. Inadequate Ventilation: The Root Cause of Most Bathroom Mold
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The single most common root cause of recurring bathroom mold and moisture damage in older homes is inadequate ventilation. Many pre-2000 bathrooms have either no exhaust fan, an undersized one (50 CFM for a room that needs 110 CFM), or a fan vented into the attic instead of outside — which simply moves moisture from the bathroom into the attic, where it causes rot and mold in the structural framing.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
        <h4 className="font-bold text-slate-800 mb-2">Proper exhaust fan sizing for Cherokee County bathrooms:</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between border-b border-blue-100 pb-1"><span>Up to 50 sq ft</span><span className="font-semibold">50 CFM minimum</span></div>
          <div className="flex justify-between border-b border-blue-100 pb-1"><span>50–100 sq ft (typical 5x8–8x10)</span><span className="font-semibold">1 CFM per sq ft</span></div>
          <div className="flex justify-between border-b border-blue-100 pb-1"><span>100+ sq ft (master bath)</span><span className="font-semibold">1.5+ CFM per sq ft</span></div>
          <div className="flex justify-between pt-1 text-blue-800"><span>Separate toilet compartment</span><span className="font-semibold">Add 50 CFM</span></div>
        </div>
        <p className="text-xs text-gray-500 mt-3">Fan must be vented directly outside — not into attic or crawlspace.</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        6. Lead Paint: A Consideration for Pre-1978 Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Lead-based paint was banned for residential use in 1978. Any Cherokee County or Metro Atlanta home built before 1978 may have lead paint in the bathroom — including under layers of subsequent paint. This matters for bathroom remodeling because demo work can disturb lead paint and create dust. Federal law (EPA RRP Rule) requires lead-safe work practices for any renovation in pre-1978 homes. Phoenix Construction is RRP-certified and follows proper containment and disposal protocols.
      </p>

      <div className="bg-gray-50 rounded-2xl p-6 mb-8">
        <h3 className="font-bold text-slate-900 mb-4">Quick Self-Assessment: Does Your Bathroom Need More Than a Refresh?</h3>
        <div className="space-y-3">
          {[
            { warning: 'Tile that flexes or sounds hollow in large areas', severity: 'Act now' },
            { warning: 'Grout or caulk that cracks repeatedly within months', severity: 'Act now' },
            { warning: 'Musty smell that returns after cleaning', severity: 'Inspect soon' },
            { warning: 'Gray plastic pipes (polybutylene) visible under sink', severity: 'Inspect soon' },
            { warning: 'Standard (non-GFCI) outlets near the sink or shower', severity: 'Code violation' },
            { warning: 'No exhaust fan, or fan vents into attic', severity: 'Fix now' },
            { warning: 'Water stains on adjoining walls or ceiling below', severity: 'Act now' },
            { warning: 'Home built before 1978', severity: 'Lead assessment' },
          ].map((row) => (
            <div key={row.warning} className="flex justify-between items-center border-b border-gray-200 pb-2 text-sm">
              <span className="text-gray-700">{row.warning}</span>
              <span className={`font-semibold px-2 py-0.5 rounded text-xs ${
                row.severity === 'Act now' ? 'bg-red-100 text-red-700' :
                row.severity === 'Code violation' ? 'bg-orange-100 text-orange-700' :
                row.severity === 'Fix now' ? 'bg-orange-100 text-orange-700' :
                'bg-yellow-50 text-yellow-700'
              }`}>{row.severity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Concerned About Your Bathroom?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction offers free in-home consultations throughout Cherokee County and Metro Atlanta. We'll assess what's actually happening behind your walls — before you spend another dollar on patches.
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
        <p className="text-gray-600 italic mb-3">"I had two old bathrooms remodeled — taken down to the studs and floor joists due to rot issues that were hidden. Very happy with the final results. They keep you in the loop when unexpected items pop up."</p>
        <p className="text-gray-500 text-sm">— David Ryan, Google Review · July 2024</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Explore Our Bathroom Remodeling Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Bathroom Remodeling Woodstock GA', href: '/bathroom-remodeling-in-woodstock-ga' },
          { label: 'Bathroom Remodeling Marietta GA', href: '/bathroom-remodeling-marietta-ga' },
          { label: 'Bathroom Remodeling Roswell GA', href: '/bathroom-remodeling-roswell-ga' },
          { label: 'Bathroom Remodeling Canton GA', href: '/blog/bathroom-remodeling-canton-ga' },
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
