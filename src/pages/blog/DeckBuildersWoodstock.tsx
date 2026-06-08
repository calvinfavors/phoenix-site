import { CheckCircle, Phone, Home, Wrench, DollarSign, AlertTriangle, ArrowRight, TreePine } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'new-deck', label: 'New Deck Installation' },
  { value: 'deck-repair', label: 'Deck Repair' },
  { value: 'deck-replacement', label: 'Deck Replacement' },
  { value: 'deck-staining', label: 'Deck Staining & Sealing' },
  { value: 'screened-porch', label: 'Screened Porch' },
  { value: 'other', label: 'Other' },
];

export default function DeckBuildersWoodstock() {
  return (
    <BlogTemplate
      title="Deck Builders Woodstock GA: New Decks, Repairs & Outdoor Living in Cherokee County"
      category="Outdoor Living"
      date="May 25, 2026"
      heroImage="/IMG_9347.JPG"
      heroImageAlt="Custom deck installation in Woodstock GA"
      source="blog_deck_builders_woodstock"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Cherokee County's natural setting — wooded lots, rolling terrain, and Georgia's long outdoor season — makes a well-built deck one of the most used and most valued investments a Woodstock homeowner can make. Whether you're looking for <strong>deck builders Woodstock GA</strong> to construct a new outdoor living space, or need professional <strong>deck repair Woodstock GA</strong> services before summer arrives, this guide covers everything you need to make a smart decision.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        New Deck Construction in Woodstock
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        A professionally built deck transforms how your family uses your outdoor space. For homeowners in Cherokee County, <strong>decks Woodstock GA</strong> projects typically fall into a few popular configurations:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TreePine className="text-green-700" size={22} />
            <h3 className="font-bold text-slate-900">Ground-Level Deck</h3>
          </div>
          <p className="text-gray-600 text-sm">Ideal for gently sloped lots or as a patio extension off a main level door. Simpler framing, no beam and post requirements, and lower cost. Great for entertainment areas and outdoor dining.</p>
          <p className="text-sm font-semibold text-slate-700 mt-2">Typical cost: $8,000–$20,000</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TreePine className="text-green-700" size={22} />
            <h3 className="font-bold text-slate-900">Elevated / Second-Story Deck</h3>
          </div>
          <p className="text-gray-600 text-sm">Common on Cherokee County's sloped lots where the main level is 8–15+ feet above grade. Requires engineered beam and post systems, ledger attachment, and lateral bracing. Permits mandatory.</p>
          <p className="text-sm font-semibold text-slate-700 mt-2">Typical cost: $15,000–$40,000+</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TreePine className="text-green-700" size={22} />
            <h3 className="font-bold text-slate-900">Multi-Level Deck</h3>
          </div>
          <p className="text-gray-600 text-sm">Two or more connected deck levels following the grade of the lot. Maximizes usable outdoor space on challenging terrain. Popular with walkout basement homes throughout Woodstock and Canton.</p>
          <p className="text-sm font-semibold text-slate-700 mt-2">Typical cost: $20,000–$60,000+</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TreePine className="text-green-700" size={22} />
            <h3 className="font-bold text-slate-900">Screened Porch Addition</h3>
          </div>
          <p className="text-gray-600 text-sm">Screened porches extend usable outdoor living through Georgia's bug season. Can be built as a standalone structure or converted from an existing deck. Adds significant resale value in Cherokee County.</p>
          <p className="text-sm font-semibold text-slate-700 mt-2">Typical cost: $25,000–$70,000</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Deck Materials: Pressure-Treated Wood vs. Composite
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The biggest decision for any <strong>Woodstock deck builder</strong> project is material selection. Both options have their place depending on budget, maintenance tolerance, and aesthetic preference:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Pressure-Treated Wood</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Lower upfront cost ($8–$15/sqft installed)</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Traditional look that matches most Woodstock homes</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />Requires staining every 2–3 years in Georgia's climate</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />Can crack, splinter, and warp if not maintained</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Easily repaired — individual boards can be replaced</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Composite Decking (Trex, TimberTech, etc.)</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />25–30 year manufacturer warranties</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />No staining or sealing required — clean with soap and water</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Resistant to rot, insects, and Georgia's UV exposure</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />Higher upfront cost ($18–$35/sqft installed)</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Lower lifetime cost when maintenance is factored in</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Free Deck Estimate</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction builds and repairs decks throughout Cherokee County. Call us to discuss your outdoor living project — we'll assess your lot, your home's connection points, and your goals to give you a detailed, honest estimate.
        </p>
        <a
          href="tel:6784634893"
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
        >
          <Phone size={20} className="mr-2" />
          Call Now: (678) 463-4893
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Deck Repair Woodstock GA: When to Repair vs. Replace
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Georgia's climate is hard on decks — intense UV, summer humidity, and freeze-thaw cycles accelerate deterioration. Here's how to assess whether your deck needs <strong>deck repair Woodstock GA</strong> services or a full replacement:
      </p>

      <div className="space-y-4 mb-8">
        <div className="border border-green-200 bg-green-50 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Repair Is Usually Right When:</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />A few decking boards are cracked, splintered, or cupped</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Railing posts are loose but the posts themselves aren't rotted</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />The deck surface needs staining or sealing</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />The ledger board and structural framing are solid</li>
          </ul>
        </div>
        <div className="border border-red-200 bg-red-50 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Replacement Is Usually Right When:</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />Joists, beams, or posts show soft spots or visible rot</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />The ledger board (where deck meets house) is compromised</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />More than 30–40% of decking boards need replacing</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />The deck is 15–20 years old with no documented maintenance history</li>
            <li className="flex items-start gap-2"><AlertTriangle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />You're upgrading to composite and want to use the opportunity to improve the layout</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Permits for Decks in Cherokee County
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Cherokee County requires permits for new deck construction and most significant repairs. Key requirements for <strong>decks Woodstock GA</strong> projects:
      </p>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start">
          <Wrench className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Permit required for:</strong> New decks of any size, additions to existing decks, replacing the structural framing, and elevated decks over 30" above grade.</span>
        </li>
        <li className="flex items-start">
          <Wrench className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Setbacks:</strong> Decks must comply with property setbacks in Cherokee County. A licensed contractor verifies these before design begins.</span>
        </li>
        <li className="flex items-start">
          <Wrench className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Ledger attachment:</strong> The connection between deck and house is structurally critical and subject to inspection. Improperly flashed ledgers cause both structural failure and moisture damage to the home's framing.</span>
        </li>
      </ul>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Why Cherokee County Homeowners Choose Phoenix Construction</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Licensed general contractor — all permits pulled and coordinated</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Experience with Cherokee County's sloped lots and walkout basements</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Both wood and composite decking — honest recommendations based on your situation</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Full repair, replacement, and new construction — not a specialty-only shop</span>
          </li>
        </ul>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 my-8 text-center">
        <h3 className="text-2xl font-bold mb-3">Build Your Outdoor Living Space</h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Phoenix Construction serves Woodstock, Canton, Holly Springs, and all of Cherokee County for deck installation and repair. Call for a free site assessment and estimate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:6784634893"
            className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all"
          >
            <Phone size={20} className="mr-2" />
            Call (678) 463-4893
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Free Estimate
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </BlogTemplate>
  );
}
