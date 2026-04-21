import { CheckCircle, Phone, Home, Building, Compass, Users } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'custom-home', label: 'Custom Home Construction' },
  { value: 'home-addition', label: 'Home Addition' },
  { value: 'major-renovation', label: 'Major Renovation' },
  { value: 'commercial', label: 'Commercial Construction' },
  { value: 'other', label: 'Other Services' },
];

export default function HomeConstructionMetroAtlanta() {
  return (
    <BlogTemplate
      title="Home Construction Metro Atlanta: Your Complete Guide to Building a Custom Home in 2026"
      category="Home Construction"
      date="March 21, 2026"
      heroImage="/IMG_9347.JPG"
      heroImageAlt="Home construction across Metro Atlanta Georgia"
      source="blog_construction_metro_atlanta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Building a custom home in <strong>Metro Atlanta</strong> is an exciting journey that requires the right builder, proper planning, and understanding of the local market. Whether you're exploring <strong>home construction Atlanta GA</strong> options or searching for <strong>custom home builders near me</strong>, this guide covers everything you need to know about building your dream home in Georgia's capital region.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Understanding the Metro Atlanta Housing Market
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The Atlanta metropolitan area spans 29 counties and offers incredibly diverse building opportunities. From urban infill in the city to sprawling estate lots in the northern suburbs, <strong>new home construction Metro Atlanta</strong> serves every lifestyle and budget.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Building className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">North Metro</h3>
          </div>
          <p className="text-gray-600 text-sm">Cherokee, Forsyth, North Fulton - Growing suburbs with excellent schools and larger lots.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="text-emerald-600" size={24} />
            <h3 className="font-bold text-slate-900">Northwest Metro</h3>
          </div>
          <p className="text-gray-600 text-sm">Cobb, Paulding, Bartow - Established communities with diverse price points and amenities.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">East Metro</h3>
          </div>
          <p className="text-gray-600 text-sm">Gwinnett, DeKalb - Diverse communities, international culture, and strong school systems.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">South Metro</h3>
          </div>
          <p className="text-gray-600 text-sm">Coweta, Fayette, Henry - Affordable land, growing infrastructure, and family communities.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        How to Choose the Right Builder
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Selecting from <strong>home builders Metro Atlanta</strong> requires careful evaluation. Here's what to look for:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Local Experience:</strong> Choose a builder familiar with your specific county's codes and permitting.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Portfolio Quality:</strong> Review completed projects similar in scope and style to your vision.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>References:</strong> Speak with recent clients about their building experience.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Communication:</strong> Evaluate responsiveness and clarity during the consultation process.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Transparency:</strong> Look for detailed contracts with clear pricing and change order policies.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Licensing & Insurance:</strong> Verify proper Georgia contractor licensing and adequate insurance coverage.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Build in Metro Atlanta?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction serves homeowners throughout the Metro Atlanta region with quality <strong>home construction Atlanta GA</strong> services. Schedule your free consultation today.
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
        The Custom Home Building Process
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Understanding the construction timeline helps set realistic expectations for your <strong>new home construction Metro Atlanta</strong> project:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Phase 1: Pre-Construction (4-8 weeks)</h3>
          <p className="text-gray-600 text-sm">Design finalization, permitting, site surveys, and material selections before breaking ground.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Phase 2: Foundation & Framing (6-10 weeks)</h3>
          <p className="text-gray-600 text-sm">Site preparation, foundation work, framing, and roofing - your home takes shape.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Phase 3: Mechanicals (4-6 weeks)</h3>
          <p className="text-gray-600 text-sm">Electrical, plumbing, and HVAC rough-in followed by insulation and inspections.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Phase 4: Finishes (8-12 weeks)</h3>
          <p className="text-gray-600 text-sm">Drywall, trim, cabinets, flooring, fixtures, and all interior finishes.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Phase 5: Completion (2-4 weeks)</h3>
          <p className="text-gray-600 text-sm">Final inspections, punch list, landscaping, and preparation for move-in.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Cost Factors for Atlanta Custom Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>Custom home builders near me</strong> pricing varies based on several key factors:
      </p>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {[
          'Land and site preparation costs',
          'Home size and complexity',
          'Foundation type required',
          'Quality of materials selected',
          'Custom features and upgrades',
          'Energy efficiency standards',
          'Outdoor living spaces',
          'Landscaping and hardscaping',
        ].map((factor) => (
          <div key={factor} className="flex items-center text-gray-600">
            <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
            <span>{factor}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Our Metro Atlanta Service Areas
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Phoenix Construction provides <strong>home builders Metro Atlanta</strong> services throughout the region:
      </p>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Woodstock', 'Marietta', 'Kennesaw', 'Alpharetta', 'Roswell', 'Milton', 'Smyrna', 'Sandy Springs', 'Atlanta', 'Canton', 'Acworth', 'Johns Creek', 'Duluth', 'Newnan', 'Peachtree City', 'Cumming'].map((city) => (
            <div key={city} className="flex items-center text-gray-600">
              <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
              <span>{city}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold mb-4">Why Metro Atlanta Homeowners Trust Phoenix Construction</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
            <span>Years of experience building custom homes across multiple counties</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
            <span>Deep understanding of local building codes and requirements</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
            <span>Quality craftsmanship with attention to every detail</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
            <span>Transparent pricing and clear communication throughout</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Start Your Custom Home Journey
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Building a custom home is one of the most rewarding investments you can make. With the right builder, proper planning, and clear communication, your dream home can become reality. Contact Phoenix Construction today for a free consultation on your <strong>home construction Atlanta GA</strong> project. We're ready to turn your vision into the home you've always wanted.
      </p>
    </BlogTemplate>
  );
}
