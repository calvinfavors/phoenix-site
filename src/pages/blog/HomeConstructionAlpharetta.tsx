import { CheckCircle, Phone, Home, Star, Building2, Gem } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'luxury-custom', label: 'Luxury Custom Home' },
  { value: 'custom-home', label: 'Custom Home Construction' },
  { value: 'home-addition', label: 'Home Addition' },
  { value: 'major-renovation', label: 'Major Renovation' },
  { value: 'other', label: 'Other Services' },
];

export default function HomeConstructionAlpharetta() {
  return (
    <BlogTemplate
      title="Home Construction Alpharetta & North Fulton: Luxury Custom Builders for Prestigious Communities"
      category="Home Construction"
      date="March 23, 2026"
      heroImage="/phoenix6.jpeg"
      heroImageAlt="Luxury home construction in Alpharetta Georgia"
      source="blog_construction_alpharetta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        North Fulton County represents the pinnacle of Metro Atlanta living. <strong>Home construction Alpharetta GA</strong> and <strong>custom home builders Milton GA</strong> cater to discerning homeowners who expect exceptional quality, thoughtful design, and premium finishes. From Windward to Milton's estate properties, the region demands builders who understand luxury construction.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        North Fulton's Premium Communities
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The Alpharetta-Milton-Johns Creek corridor features some of Georgia's most prestigious addresses. <strong>New home builders Alpharetta GA</strong> work in communities where attention to detail, architectural excellence, and quality materials aren't optional - they're expected.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Gem className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Windward</h3>
          </div>
          <p className="text-gray-600 text-sm">Golf course community with custom home sites, country club amenities, and top-rated schools.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Star className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Country Club of the South</h3>
          </div>
          <p className="text-gray-600 text-sm">Guard-gated estate community with Jack Nicklaus golf course and exceptional home sites.</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-emerald-600" size={24} />
            <h3 className="font-bold text-slate-900">Milton Estates</h3>
          </div>
          <p className="text-gray-600 text-sm">Acreage properties in Milton's equestrian-friendly zones with custom home opportunities.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Avalon Area</h3>
          </div>
          <p className="text-gray-600 text-sm">Urban-style living near Avalon's shops and restaurants with custom townhome and estate options.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What Sets Luxury Home Construction Apart
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>Custom home builders North Fulton</strong> differentiate themselves through their approach to quality, design, and client service:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Architectural Excellence:</strong> Working with acclaimed architects to create homes that stand out while complementing the neighborhood.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Premium Materials:</strong> Sourcing the finest hardwoods, natural stone, custom millwork, and high-end fixtures.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Smart Home Integration:</strong> Built-in automation for lighting, climate, security, and entertainment systems.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Energy Efficiency:</strong> High-performance windows, spray foam insulation, and efficient HVAC systems.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Outdoor Living:</strong> Thoughtfully designed outdoor spaces including pools, kitchens, and entertainment areas.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Build Your North Fulton Dream Home</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction delivers the quality and attention to detail that <strong>home construction Alpharetta GA</strong> homeowners expect. Schedule your consultation today.
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
        Navigating North Fulton's Building Requirements
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Building in Alpharetta, Milton, or Johns Creek requires understanding each city's unique requirements:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Alpharetta</h3>
          <p className="text-gray-600 text-sm">Known for efficient permitting processes and clear design guidelines that maintain neighborhood character.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Milton</h3>
          <p className="text-gray-600 text-sm">Emphasis on preserving rural character with larger lot minimums and agricultural overlay zones.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Johns Creek</h3>
          <p className="text-gray-600 text-sm">Strong HOA presence with architectural review requirements in most communities.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Fulton County (Unincorporated)</h3>
          <p className="text-gray-600 text-sm">Areas between cities follow county guidelines with their own permitting process.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Popular Features in North Fulton Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>New home builders Alpharetta GA</strong> report these features are most requested by discerning homeowners:
      </p>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {[
          'Chef\'s kitchens with commercial appliances',
          'Spa-style master bathrooms',
          'Home offices and flex spaces',
          'Finished basements with bars',
          'Three-car garages minimum',
          'Covered outdoor living spaces',
          'Whole-home audio systems',
          'Security and camera systems',
          'Wine storage rooms',
          'Home gyms',
        ].map((feature) => (
          <div key={feature} className="flex items-center text-gray-600">
            <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">North Fulton Service Areas</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Alpharetta', 'Milton', 'Johns Creek', 'Roswell', 'Sandy Springs', 'Dunwoody', 'Cumming', 'Suwanee'].map((city) => (
            <div key={city} className="flex items-center text-gray-600">
              <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
              <span>{city}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Start Your Luxury Home Project
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Building a custom home in North Fulton County is a significant investment that deserves a builder who shares your commitment to excellence. Phoenix Construction brings the expertise, craftsmanship, and attention to detail that <strong>custom home builders Milton GA</strong> and Alpharetta homeowners demand. Contact us today to begin planning your dream home.
      </p>
    </BlogTemplate>
  );
}
