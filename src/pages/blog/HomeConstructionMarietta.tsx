import { CheckCircle, Phone, Home, Building, TreePine, TrendingUp } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'custom-home', label: 'Custom Home Construction' },
  { value: 'home-addition', label: 'Home Addition' },
  { value: 'major-renovation', label: 'Major Renovation' },
  { value: 'teardown-rebuild', label: 'Teardown & Rebuild' },
  { value: 'other', label: 'Other Services' },
];

export default function HomeConstructionMarietta() {
  return (
    <BlogTemplate
      title="Home Construction Marietta & Cobb County: Custom Builders for Every Neighborhood"
      category="Home Construction"
      date="March 24, 2026"
      heroImage="/IMG_9355.JPG"
      heroImageAlt="Custom home construction in Marietta Georgia"
      source="blog_construction_marietta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Cobb County continues to be one of Metro Atlanta's most dynamic housing markets. Whether you're seeking <strong>home construction Marietta GA</strong> services or exploring <strong>custom home builders Cobb County</strong> options, the region offers diverse opportunities from historic East Cobb to the thriving communities of Smyrna and Kennesaw.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Cobb County's Diverse Construction Opportunities
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Unlike many suburban counties, Cobb offers everything from teardown-rebuild projects in established neighborhoods to new construction on available lots. <strong>Home builders Marietta GA</strong> must understand the unique character of each area - from the traditional homes near Marietta Square to the contemporary designs in West Cobb's newer developments.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Building className="text-emerald-600" size={24} />
            <h3 className="font-bold text-slate-900">East Cobb</h3>
          </div>
          <p className="text-gray-600 text-sm">Established neighborhoods with teardown-rebuild opportunities, top schools, and mature landscaping.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">West Cobb</h3>
          </div>
          <p className="text-gray-600 text-sm">Growing area with new developments, larger lots, and more affordable land for custom builds.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Historic Marietta</h3>
          </div>
          <p className="text-gray-600 text-sm">Character-rich area near the Square with infill opportunities and renovation projects.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TreePine className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Kennesaw & Acworth</h3>
          </div>
          <p className="text-gray-600 text-sm">Family-friendly communities with new construction opportunities and excellent amenities.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Types of Construction Projects in Marietta
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>Construction companies Marietta GA</strong> handle a variety of project types to meet the diverse needs of Cobb County homeowners:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Custom Home Builds:</strong> Ground-up construction on your lot with fully customized floor plans and finishes.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Teardown & Rebuild:</strong> Replace an outdated home in a desirable location with a modern custom home.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Major Additions:</strong> Expand your existing home with seamless additions that match your home's architecture.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Whole-House Renovations:</strong> Transform an older home while preserving its character and location benefits.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Build Your Dream Home in Cobb County</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction brings years of experience to <strong>home construction Marietta GA</strong> and throughout Cobb County. Let's discuss your project today.
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
        Understanding Cobb County Building Requirements
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Experienced <strong>custom home builders Cobb County</strong> understand the local permitting process, zoning regulations, and HOA requirements that vary by neighborhood. Key considerations include:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Zoning & Setbacks</h3>
          <p className="text-gray-600 text-sm">Each Cobb County zone has specific requirements for building placement, height, and lot coverage.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">HOA Architectural Review</h3>
          <p className="text-gray-600 text-sm">Many neighborhoods require design approval before construction can begin.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Environmental Considerations</h3>
          <p className="text-gray-600 text-sm">Stream buffers, tree ordinances, and stormwater management requirements affect site planning.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Historic District Guidelines</h3>
          <p className="text-gray-600 text-sm">Properties near Marietta Square may have additional design requirements to preserve neighborhood character.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Popular Neighborhoods for New Construction
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>New home builders Marietta GA</strong> are active in these sought-after communities:
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {['East Cobb', 'West Cobb', 'Kennesaw', 'Acworth', 'Smyrna', 'Mableton', 'Powder Springs', 'Marietta', 'Vinings'].map((area) => (
          <div key={area} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{area}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">The Phoenix Construction Advantage</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Expertise with Cobb County permitting and inspection processes</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Experience navigating HOA architectural review committees</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Quality construction that meets or exceeds building codes</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Transparent communication throughout your project</span>
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Start Your Cobb County Construction Project
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Whether you're building new in West Cobb, renovating in East Cobb, or considering a teardown project near Marietta Square, Phoenix Construction delivers the quality craftsmanship Cobb County homeowners deserve. Contact us today for a free consultation on your <strong>home construction Marietta GA</strong> project.
      </p>
    </BlogTemplate>
  );
}
