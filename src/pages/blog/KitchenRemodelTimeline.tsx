import { Clock, CheckCircle, Phone, Star, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodel', label: 'Full Kitchen Remodel' },
  { value: 'cabinet-install', label: 'Cabinet Replacement' },
  { value: 'countertop', label: 'Countertop Installation' },
  { value: 'kitchen-bathroom', label: 'Kitchen + Bathroom Remodel' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenRemodelTimeline() {
  return (
    <BlogTemplate
      title="How Long Does a Kitchen Remodel Take? A Week-by-Week Timeline for Woodstock GA Homeowners"
      description="Wondering how long your kitchen remodel will take? This guide gives Woodstock GA and Cherokee County homeowners a realistic week-by-week timeline — from first consultation through final walkthrough — and explains what actually causes delays."
      category="Kitchen Remodeling"
      categoryColor="red"
      date="July 1, 2026"
      heroImage="/IMG_9350.WEBP"
      heroImageAlt="Kitchen remodel timeline Woodstock GA - week by week schedule Cherokee County contractor"
      source="blog_kitchen_remodel_timeline_2026"
      canonical="/blog/kitchen-remodel-timeline-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'How long does a full kitchen remodel take in Woodstock GA?',
          answer: 'A full kitchen remodel in Woodstock GA typically takes 8–14 weeks from signed contract to final walkthrough, with 4–6 weeks of active construction once work begins. The gap between signing and start is typically 6–10 weeks of pre-construction: design, permit application, and cabinet/material lead times. Smaller scope projects (cabinets + countertops only) run 3–5 weeks of active work. Call Phoenix Construction at (678) 463-4893 for a project-specific timeline.',
        },
        {
          question: 'What causes kitchen remodel delays in Cherokee County?',
          answer: 'The most common causes of kitchen remodel delays in Cherokee County are: (1) Cabinet lead times — semi-custom and custom cabinets from major manufacturers are typically 4–8 weeks from order to delivery; (2) Permit approval — Cherokee County Development Services issues building permits in 5–15 business days for standard projects; (3) Unexpected structural issues discovered during demo — outdated wiring, plumbing that must be rerouted, mold remediation; (4) Countertop template-to-fabrication lead time (usually 10–14 days for stone); (5) Appliance backorders, which can run 4–12+ weeks for specialty items.',
        },
        {
          question: 'Can I live in my house during a kitchen remodel?',
          answer: 'Yes, and most Woodstock GA homeowners do stay in their homes during a kitchen remodel. You\'ll need to set up a temporary kitchen in another room — a folding table with a microwave, coffee maker, and portable induction cooktop in the dining room or basement covers most daily needs. Demo and rough-in work produces significant dust; proper containment (plastic sheeting, negative air pressure) limits spread to the rest of the home. Most homeowners find weeks 1–2 the most disruptive; once rough-in is done and cabinets are going in, daily life normalizes.',
        },
        {
          question: 'How long does it take to get a kitchen remodel permit in Cherokee County GA?',
          answer: 'Cherokee County Development Services typically issues building permits for kitchen remodels in 5–15 business days for standard projects. Your contractor submits plans showing layout changes, any structural modifications, and all trade work. If no structural changes are involved, review is faster. Phoenix Construction handles all permit applications and coordination as part of every project.',
        },
        {
          question: 'When should I order appliances for my kitchen remodel?',
          answer: 'Order appliances as soon as you\'ve confirmed your kitchen layout — ideally at the same time or shortly after ordering cabinets. Standard in-stock appliances (refrigerators, basic ranges, dishwashers) typically have 1–3 week delivery windows. But professional ranges, specialty refrigerator configurations, and panel-ready appliances for custom cabinetry can have 6–16+ week lead times. Appliances that arrive before the kitchen is ready can usually be stored in a garage. Appliances that arrive late become the project\'s critical path.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        "How long will this take?" is the first question most Woodstock GA homeowners ask when considering a kitchen remodel — and it's the right question. Living without a functioning kitchen is disruptive, and a realistic timeline helps you plan around holidays, family events, and work schedules. The honest answer is <strong>most full kitchen remodels in Cherokee County take 10–16 weeks from first consultation to final walkthrough</strong>, with 4–6 weeks of active construction. Here's exactly what happens during each phase — and what actually causes projects to run long.
      </p>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
        <div className="flex gap-3 items-start">
          <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <p className="text-sm text-gray-700"><strong>The most important thing to understand:</strong> The majority of kitchen remodel timeline is pre-construction — design decisions, permit approvals, cabinet manufacturing, and material lead times. The "active construction" phase (workers in your kitchen every day) is actually the shortest phase. Plan your start date by working backward from when you want to be done, not forward from when you want to start.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-6">
        The Complete Kitchen Remodel Timeline
      </h2>

      <div className="space-y-4 mb-10">
        {[
          {
            phase: 'Phase 1: Consultation & Design',
            weeks: 'Weeks 1–3',
            active: false,
            color: 'border-blue-200',
            badge: 'bg-blue-100 text-blue-700',
            steps: [
              { label: 'Week 1', task: 'Initial in-home consultation — discuss scope, priorities, rough budget range. Contractor walks the kitchen, takes measurements, assesses existing conditions.' },
              { label: 'Week 2', task: 'Design development — cabinet layout options, appliance locations, countertop material selection, tile, fixture decisions. Some contractors use 3D rendering; Phoenix Construction produces layout drawings.' },
              { label: 'Week 3', task: 'Finalize scope, sign contract, pay design deposit. At this point: cabinet order is placed, specialty appliances are ordered, permit drawings are prepared.' },
            ],
            note: 'This phase can be compressed to 1–2 weeks for homeowners with clear direction, or extended if design decisions take longer.',
          },
          {
            phase: 'Phase 2: Pre-Construction (Longest Wait)',
            weeks: 'Weeks 4–10',
            active: false,
            color: 'border-amber-200',
            badge: 'bg-amber-100 text-amber-700',
            steps: [
              { label: 'Weeks 4–5', task: 'Permit application submitted to Cherokee County Development Services. Standard review takes 5–15 business days for typical kitchen remodels.' },
              { label: 'Weeks 4–10', task: 'Cabinet manufacturing lead time. Stock cabinets: 1–2 weeks. Semi-custom (most residential projects): 4–6 weeks. Full custom: 8–14 weeks. This is almost always the critical path item.' },
              { label: 'Week 5–6', task: 'Specialty appliances ordered if not done at contract signing. Standard in-stock appliances: 1–3 weeks. Professional ranges, panel-ready refrigerators: 6–16 weeks.' },
              { label: 'Week 8–10', task: 'Permit issued. Construction start date confirmed. Pre-order tile, hardware, and fixtures.' },
            ],
            note: 'Most schedule slippage happens here — either cabinets delayed by manufacturer or permit approval delayed by missing information. Experienced contractors front-load all decisions to prevent this.',
          },
          {
            phase: 'Phase 3: Demo & Rough-In',
            weeks: 'Construction Weeks 1–1.5',
            active: true,
            color: 'border-red-200',
            badge: 'bg-red-100 text-red-700',
            steps: [
              { label: 'Day 1–2', task: 'Disconnect utilities (gas if applicable, plumbing, electrical). Remove appliances, cabinets, countertops. Expose subfloor and all walls.' },
              { label: 'Day 3–4', task: 'Inspect structural conditions — subfloor, wall framing, any issues with prior plumbing or electrical. Address any unexpected conditions found during demo. (This is where cost adds can occur.)' },
              { label: 'Day 5–8', task: 'Plumbing rough-in — relocate drain lines, supply lines as required by new layout. Electrical rough-in — new circuits, updated panel capacity if needed. HVAC if any duct relocation required.' },
              { label: 'Day 9–10', task: 'Rough-in inspections (plumbing and electrical). Walls and ceiling can close only after inspections pass.' },
            ],
            note: null,
          },
          {
            phase: 'Phase 4: Close Walls & Prep',
            weeks: 'Construction Week 2',
            active: true,
            color: 'border-red-200',
            badge: 'bg-red-100 text-red-700',
            steps: [
              { label: 'Day 11–12', task: 'Drywall installation, tape, and first coat of mud. Prime and paint walls (walls must be painted before cabinets go in).' },
              { label: 'Day 13–14', task: 'Drywall finish coats, final paint. Floor prep — subfloor leveling or repair if needed. Install any floor that needs to go under cabinets.' },
            ],
            note: null,
          },
          {
            phase: 'Phase 5: Cabinet Installation',
            weeks: 'Construction Weeks 2.5–3.5',
            active: true,
            color: 'border-red-200',
            badge: 'bg-red-100 text-red-700',
            steps: [
              { label: 'Day 15–17', task: 'Upper cabinet installation — level, plumb, secured to studs with proper fastening. This is precision work; a skilled cabinet installer sets all uppers first.' },
              { label: 'Day 18–20', task: 'Base cabinet installation — level and plumb all base cabinets, scribe to walls, install cabinet hardware rails and drawers.' },
              { label: 'Day 21–22', task: 'Cabinet doors hung and adjusted. Crown molding, light rail, toe kicks, and all trim details. Final cabinet hardware (knobs/pulls) installed after countertops.' },
            ],
            note: 'Cabinet installation quality determines the entire look of the finished kitchen. Rushing this phase is where corners get cut.',
          },
          {
            phase: 'Phase 6: Countertops',
            weeks: 'Construction Week 3.5–4.5',
            active: true,
            color: 'border-red-200',
            badge: 'bg-red-100 text-red-700',
            steps: [
              { label: 'Day 23', task: 'Countertop template — fabricator comes to template from installed cabinets. Critical: cabinets must be fully installed and leveled before template can occur.' },
              { label: 'Days 24–33', task: 'Stone fabrication lead time — typically 10–14 calendar days from template to fabrication complete for quartz or granite. Marble may be longer depending on fabricator.' },
              { label: 'Day 34–35', task: 'Countertop installation. One-day process for most kitchens. Plumber returns within 24 hours to hook up sink.' },
            ],
            note: 'The template-to-install gap (10–14 days) is fixed — fabricators cannot rush stone cutting. This is the second most common schedule constraint after cabinet lead time.',
          },
          {
            phase: 'Phase 7: Finish Work',
            weeks: 'Construction Weeks 4.5–6',
            active: true,
            color: 'border-red-200',
            badge: 'bg-red-100 text-red-700',
            steps: [
              { label: 'Day 36–38', task: 'Backsplash tile installation — tile, grout, and caulk. Allow grout to cure 48–72 hours before sealing.' },
              { label: 'Day 39–41', task: 'Appliance installation — refrigerator, range, dishwasher, over-range microwave or hood. Gas appliance connections by licensed plumber.' },
              { label: 'Day 42–44', task: 'Electrical finish — outlets, switches, under-cabinet lighting, pendant lights. Plumbing finish — faucet, disposal, dishwasher supply and drain.' },
              { label: 'Day 45–47', task: 'Touch-up paint, final trim, install hardware, install cabinet doors if held off for painting. Deep clean.' },
              { label: 'Day 48–50', task: 'Final inspections (building, electrical, plumbing). Walkthrough with homeowner. Punch list completion.' },
            ],
            note: null,
          },
        ].map((phase) => (
          <div key={phase.phase} className={`border-2 rounded-2xl overflow-hidden ${phase.color}`}>
            <div className="bg-white px-5 py-4 flex flex-wrap justify-between items-center gap-2">
              <div>
                <h3 className="font-bold text-slate-900">{phase.phase}</h3>
              </div>
              <div className="flex gap-2 items-center">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${phase.badge}`}>{phase.weeks}</span>
                {phase.active && <span className="text-xs bg-slate-100 text-slate-600 font-medium px-2 py-1 rounded">Active construction</span>}
              </div>
            </div>
            <div className="bg-white/50 px-5 pb-4">
              <div className="space-y-2 mb-3">
                {phase.steps.map((s) => (
                  <div key={s.label} className="flex gap-3 text-sm">
                    <span className="font-semibold text-slate-700 whitespace-nowrap pt-0.5 min-w-[70px]">{s.label}</span>
                    <span className="text-gray-600">{s.task}</span>
                  </div>
                ))}
              </div>
              {phase.note && (
                <div className="bg-white rounded-lg px-4 py-2 text-xs text-gray-500 italic border border-gray-200">{phase.note}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Condensed Timeline Summary
      </h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg">Phase</th>
              <th className="text-left px-4 py-3">Duration</th>
              <th className="text-left px-4 py-3 rounded-tr-lg">Main Variable</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Design & Contract', '1–3 weeks', 'Homeowner decision speed'],
              ['Cabinet Lead Time', '4–10 weeks', 'Cabinet line selected (stock vs. custom)'],
              ['Permit Approval', '1–3 weeks', 'Cherokee County review queue'],
              ['Appliance Lead Time', '1–12 weeks', 'In-stock vs. specialty items'],
              ['Demo & Rough-In', '1.5–2 weeks', 'Unexpected conditions found in walls'],
              ['Cabinet Installation', '1–1.5 weeks', 'Kitchen size and complexity'],
              ['Countertop Fabrication', '1.5–2 weeks', 'Stone type and fabricator queue'],
              ['Finish Work', '1.5–2 weeks', 'Tile complexity, appliance delivery'],
              ['Inspections & Punch List', '3–7 days', 'County inspector scheduling'],
            ].map(([phase, duration, variable], i) => (
              <tr key={phase} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-2 font-medium text-slate-800">{phase}</td>
                <td className="px-4 py-2 text-gray-600">{duration}</td>
                <td className="px-4 py-2 text-gray-500">{variable}</td>
              </tr>
            ))}
            <tr className="bg-slate-100 font-bold">
              <td className="px-4 py-3 text-slate-900 rounded-bl-lg">Total Typical Range</td>
              <td className="px-4 py-3 text-slate-900">10–16 weeks</td>
              <td className="px-4 py-3 text-slate-500 rounded-br-lg">Cabinet and appliance lead times dominate</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What to Do to Keep Your Project On Schedule
      </h2>
      <ul className="space-y-3 mb-8">
        {[
          'Make all design decisions before signing a contract — cabinet style, countertop material, tile, hardware, appliances. Changes after contract signing reset lead times.',
          'Order specialty appliances early — before or at the same time as signing your contract. A 12-week range lead time is not unusual.',
          'If cabinet delivery is delayed, proactively adjust countertop template scheduling — don\'t template before cabinets are installed.',
          'Be available for questions. Contractors who can\'t reach homeowners for decisions stall. A 24-hour response window keeps things moving.',
          'Plan your temporary kitchen before demo begins. A well-stocked temporary kitchen makes the 5–6 week construction phase manageable.',
          'Don\'t change scope mid-project. Added scope (moving a wall, adding a window) requires permit amendments and resets subcontractor scheduling.',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Start Planning Your Kitchen Remodel?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction provides free in-home kitchen remodeling consultations throughout Woodstock, Canton, Holly Springs, and Metro Atlanta. We'll give you a realistic timeline based on your specific scope — before you commit.
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

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Related Kitchen Remodeling Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Kitchen Remodel Cost Guide Woodstock GA 2026', href: '/blog/kitchen-remodel-cost-woodstock-ga-2026' },
          { label: 'Kitchen Remodel ROI Woodstock GA', href: '/blog/kitchen-remodel-roi-woodstock-ga' },
          { label: 'Cabinet Refacing vs. Replacement', href: '/blog/kitchen-cabinet-refacing-vs-replacement-woodstock-ga' },
          { label: 'Open Concept Kitchen Remodel', href: '/blog/open-concept-kitchen-remodel-woodstock-ga' },
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
