import { CheckCircle, Phone, Home, Wrench, ClipboardList, Shield, Star, ArrowRight } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
  { value: 'bathroom-remodeling', label: 'Bathroom Remodeling' },
  { value: 'basement-finishing', label: 'Basement Finishing' },
  { value: 'home-addition', label: 'Home Addition' },
  { value: 'whole-home-renovation', label: 'Whole Home Renovation' },
  { value: 'other', label: 'Other' },
];

export default function GeneralContractorWoodstock() {
  return (
    <BlogTemplate
      title="General Contractor Woodstock GA: How to Find the Right Contractor for Your Home Project"
      category="Contractor Guide"
      date="May 25, 2026"
      heroImage="/phoecon6.jpeg"
      heroImageAlt="General contractor working on a home remodeling project in Woodstock GA"
      source="blog_general_contractor_woodstock"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Whether you're planning a kitchen remodel, finishing your basement, adding a bathroom, or tackling a full home renovation, the most important decision you'll make is choosing the right <strong>general contractor Woodstock GA</strong>. Cherokee County homeowners have no shortage of contractors to choose from — but the difference between a successful project and a nightmare one almost always comes down to who you hire.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What Does a General Contractor Actually Do?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        A <strong>general contractor Woodstock</strong> is the licensed professional responsible for planning, coordinating, and executing your construction or remodeling project from start to finish. Unlike specialty contractors who focus on a single trade, a GC manages the entire project — pulling permits, scheduling subcontractors, overseeing inspections, and maintaining your timeline and budget.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        For homeowners, hiring a licensed GC means one accountable point of contact instead of juggling plumbers, electricians, framers, and tile setters independently. A qualified <strong>contractor Woodstock GA</strong> brings:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <ClipboardList className="text-red-600" size={22} />
            <h3 className="font-bold text-slate-900">Project Management</h3>
          </div>
          <p className="text-gray-600 text-sm">Scheduling, sequencing trades, and keeping the project moving without gaps or rework — the core of what separates a professional GC from a handyman operation.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-red-600" size={22} />
            <h3 className="font-bold text-slate-900">Licensing & Insurance</h3>
          </div>
          <p className="text-gray-600 text-sm">A licensed GC carries general liability insurance and workers' compensation. If anything goes wrong on your property, you're protected — unlicensed contractors leave homeowners personally exposed.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Wrench className="text-red-600" size={22} />
            <h3 className="font-bold text-slate-900">Permit Management</h3>
          </div>
          <p className="text-gray-600 text-sm">A licensed GC pulls all required Cherokee County permits and coordinates inspections. Unpermitted work creates problems at resale and leaves homeowners liable for code violations.</p>
        </div>
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Star className="text-red-600" size={22} />
            <h3 className="font-bold text-slate-900">Subcontractor Network</h3>
          </div>
          <p className="text-gray-600 text-sm">Established GCs have vetted, trusted subcontractors they work with repeatedly — plumbers, electricians, HVAC, tile, and framing crews who show up, perform quality work, and stand behind it.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        When Do You Need a General Contractor vs. a Specialty Contractor?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Not every project requires a GC. Here's a practical breakdown for Woodstock homeowners:
      </p>

      <div className="space-y-3 mb-8">
        <div className="border border-green-200 bg-green-50 rounded-xl p-4">
          <h3 className="font-bold text-slate-900 mb-1">Use a General Contractor When:</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Multiple trades are involved (plumbing + electrical + framing)</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />The project requires permits (kitchen remodels, additions, basement finishing)</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Structural work or layout changes are involved</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />Budget exceeds $15,000</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />You want a single accountable party for the entire project</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h3 className="font-bold text-slate-900 mb-1">A Specialty Contractor May Be Sufficient For:</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />Replacing a single fixture or appliance</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />Painting (interior or exterior)</li>
            <li className="flex items-start gap-2"><CheckCircle size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />Simple flooring installation with no subfloor work</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Talk to a Licensed Woodstock Contractor Today</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction is a licensed <strong>general contractor Woodstock GA</strong> homeowners have trusted for kitchen remodels, bathroom renovations, basement finishing, additions, and whole home renovations throughout Cherokee County.
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
        How to Vet a General Contractor in Woodstock
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Cherokee County homeowners should take these steps before signing any contract with a <strong>contractor Woodstock</strong>:
      </p>

      <div className="space-y-4 mb-8">
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">1</span>
            <h3 className="font-bold text-slate-900">Verify the License</h3>
          </div>
          <p className="text-gray-600 text-sm">Georgia requires a state license for general contractors on projects over a certain threshold. Verify any contractor's license number through the Georgia Secretary of State's Contractor licensing portal before proceeding.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">2</span>
            <h3 className="font-bold text-slate-900">Request a Certificate of Insurance</h3>
          </div>
          <p className="text-gray-600 text-sm">Ask for a current COI showing general liability coverage (minimum $1M) and workers' compensation. Have your name listed as additionally insured. Don't accept verbal assurances — get the document.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">3</span>
            <h3 className="font-bold text-slate-900">Check Local References and Reviews</h3>
          </div>
          <p className="text-gray-600 text-sm">Ask for 3 references from completed projects in Cherokee County within the last 2 years. Call them. Also check Google reviews specifically — look at how the contractor responds to negative feedback, not just the rating.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">4</span>
            <h3 className="font-bold text-slate-900">Demand a Detailed Written Contract</h3>
          </div>
          <p className="text-gray-600 text-sm">A professional <strong>home remodeling Woodstock GA</strong> contract should specify scope, materials, timeline, payment schedule, change order process, and warranty terms. Vague contracts protect the contractor, not you.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-red-600 text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">5</span>
            <h3 className="font-bold text-slate-900">Never Pay More Than 10–15% Upfront</h3>
          </div>
          <p className="text-gray-600 text-sm">Reputable contractors structure payments around project milestones. A contractor demanding 30–50% before work begins is a significant red flag — especially in Woodstock's active remodeling market.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What Phoenix Construction Does for Woodstock Homeowners
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        As a licensed <strong>general contractor Woodstock GA</strong> serving Cherokee County and Metro Atlanta, Phoenix Construction handles the full range of residential construction and remodeling services:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {[
          'Kitchen Remodeling',
          'Bathroom Renovations',
          'Basement Finishing',
          'Home Additions',
          'Whole Home Renovations',
          'Custom Home Construction',
          'Deck Installation & Repair',
          'Roofing',
          'Exterior Painting',
        ].map((service) => (
          <div key={service} className="flex items-center gap-2 text-gray-600">
            <CheckCircle className="text-red-600 flex-shrink-0" size={16} />
            <span className="text-sm">{service}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Areas We Serve
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Woodstock', 'Canton', 'Holly Springs', 'Ball Ground', 'Marietta', 'Kennesaw', 'Alpharetta', 'Roswell'].map((city) => (
          <div key={city} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{city}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 my-8 text-center">
        <h3 className="text-2xl font-bold mb-3">Ready to Start Your Project?</h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Phoenix Construction is Cherokee County's trusted licensed general contractor. Call us or request a free estimate — we'll give you a straight, detailed proposal with no pressure.
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
