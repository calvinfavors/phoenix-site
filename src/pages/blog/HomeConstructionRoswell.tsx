import { CheckCircle, Phone, Home, MapPin, Trees, History } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'custom-home', label: 'Custom Home Construction' },
  { value: 'teardown-rebuild', label: 'Teardown & Rebuild' },
  { value: 'home-addition', label: 'Home Addition' },
  { value: 'major-renovation', label: 'Major Renovation' },
  { value: 'other', label: 'Other Services' },
];

export default function HomeConstructionRoswell() {
  return (
    <BlogTemplate
      title="Home Construction Roswell & Sandy Springs: Custom Builders for Atlanta's Established Communities"
      category="Home Construction"
      date="March 22, 2026"
      heroImage="/IMG_8987.jpg"
      heroImageAlt="Custom home construction in Roswell Georgia"
      source="blog_construction_roswell"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Roswell and Sandy Springs offer a unique blend of established neighborhoods, historic character, and proximity to Atlanta. <strong>Home construction Roswell GA</strong> and <strong>custom home builders Sandy Springs</strong> face the rewarding challenge of creating new homes that complement these mature communities while meeting modern lifestyle demands.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Build in Roswell & Sandy Springs?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        These cities offer location advantages that newer suburbs simply can't match. With mature tree canopies, established infrastructure, and easy access to Atlanta's major employment centers, <strong>new home builders Roswell GA</strong> help homeowners enjoy the best of both worlds.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Trees className="text-emerald-600" size={24} />
            <h3 className="font-bold text-slate-900">Mature Landscaping</h3>
          </div>
          <p className="text-gray-600 text-sm">Established trees and landscaping provide privacy and beauty that takes decades to develop in new communities.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Prime Location</h3>
          </div>
          <p className="text-gray-600 text-sm">Easy access to GA-400, I-285, and major employers in Buckhead, Midtown, and Perimeter.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <History className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Historic Character</h3>
          </div>
          <p className="text-gray-600 text-sm">Roswell's historic district and Canton Street offer charming shopping and dining within minutes.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Strong Home Values</h3>
          </div>
          <p className="text-gray-600 text-sm">Established neighborhoods maintain property values and offer excellent resale potential.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Teardown & Rebuild Opportunities
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Many homeowners working with <strong>home construction Sandy Springs GA</strong> companies are replacing older homes with modern custom builds. This approach offers several advantages:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Keep Your Location:</strong> Stay in the neighborhood you love while getting the home you need.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Maximize Your Lot:</strong> Older homes often don't utilize the full buildable area available.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Modern Efficiency:</strong> New construction offers superior energy efficiency and lower maintenance.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Custom Design:</strong> Build exactly what you want rather than compromising with renovations.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Warranty Protection:</strong> New construction comes with builder and manufacturer warranties.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Build Your Perfect Home</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction specializes in <strong>home construction Roswell GA</strong> and Sandy Springs projects. From teardowns to additions, we deliver quality craftsmanship.
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
        Popular Roswell & Sandy Springs Neighborhoods
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        <strong>Custom home builders Roswell GA</strong> are active in these desirable areas:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Historic Roswell</h3>
          <p className="text-gray-600 text-sm">Near Canton Street with walkable shops, restaurants, and community events. Infill opportunities with character.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Riverside & Chattahoochee</h3>
          <p className="text-gray-600 text-sm">Waterfront properties along the Chattahoochee River with access to trails and natural beauty.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">North Springs</h3>
          <p className="text-gray-600 text-sm">Sandy Springs neighborhoods north of I-285 with larger lots and established trees.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Sandy Springs City Center</h3>
          <p className="text-gray-600 text-sm">Near the new City Springs development with urban amenities and walkable streets.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Understanding Local Building Requirements
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Both Roswell and Sandy Springs have specific requirements that experienced <strong>new home builders Sandy Springs GA</strong> navigate daily:
      </p>

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {[
          'Tree preservation ordinances',
          'Stream buffer requirements',
          'Stormwater management',
          'HOA architectural review',
          'Historic district guidelines',
          'Setback and height limits',
          'Impervious surface limits',
          'Driveway regulations',
        ].map((requirement) => (
          <div key={requirement} className="flex items-center text-gray-600">
            <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
            <span>{requirement}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Our Service Area</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Roswell', 'Sandy Springs', 'Dunwoody', 'Johns Creek', 'Alpharetta', 'Milton', 'Brookhaven', 'Buckhead'].map((city) => (
            <div key={city} className="flex items-center text-gray-600">
              <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
              <span>{city}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Start Your Construction Project Today
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Whether you're planning a teardown project, building on a vacant lot, or adding to your existing home, Phoenix Construction delivers the expertise that <strong>home construction Roswell GA</strong> and Sandy Springs homeowners deserve. Contact us today for a free consultation and let's discuss bringing your vision to life.
      </p>
    </BlogTemplate>
  );
}
