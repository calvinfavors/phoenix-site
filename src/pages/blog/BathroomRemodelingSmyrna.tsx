import { CheckCircle, Phone, Home, Droplets, Sparkles, Shield } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'bathroom-remodel', label: 'Bathroom Remodeling' },
  { value: 'master-bath', label: 'Master Bath Renovation' },
  { value: 'hall-bath', label: 'Hall Bath Update' },
  { value: 'tub-to-shower', label: 'Tub to Shower Conversion' },
  { value: 'other', label: 'Other Services' },
];

export default function BathroomRemodelingSmyrna() {
  return (
    <BlogTemplate
      title="Bathroom Remodeling Smyrna GA: Beautiful Updates for Your Home"
      category="Bathroom Remodeling"
      date="March 15, 2026"
      heroImage="/IMG_9318.JPG"
      heroImageAlt="Beautiful bathroom remodel in Smyrna GA"
      source="blog_bathroom_smyrna"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Smyrna has become one of Metro Atlanta's most vibrant communities, and homeowners here take pride in their properties. If you're considering <strong>bathroom remodeling Smyrna GA</strong>, you're joining countless neighbors who have discovered that a well-designed bathroom renovation transforms daily life. Phoenix Construction delivers exceptional <strong>bathroom renovation Smyrna</strong> results that add comfort, style, and value to your home.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Smyrna Homeowners Love Bathroom Remodeling
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        From charming bungalows to modern townhomes, Smyrna's diverse housing stock offers exciting <strong>bathroom remodeling Smyrna GA</strong> opportunities:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Droplets className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Spa-Like Retreats</h3>
          </div>
          <p className="text-gray-600 text-sm">Transform your bathroom into a personal sanctuary with soaking tubs, rain showers, and heated floors.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Modern Updates</h3>
          </div>
          <p className="text-gray-600 text-sm">Update dated tile, fixtures, and vanities with contemporary styles that complement your home.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Better Functionality</h3>
          </div>
          <p className="text-gray-600 text-sm">Add double vanities, more storage, and improved layouts that work for busy families.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Home Value</h3>
          </div>
          <p className="text-gray-600 text-sm">In Smyrna's competitive market, updated bathrooms help homes sell faster and for more money.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Popular Bathroom Styles in Smyrna
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        When planning your <strong>bathroom renovation Smyrna</strong> project, these styles resonate with local homeowners:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Contemporary Clean</h3>
          <p className="text-gray-600 text-sm">Floating vanities, frameless glass showers, large format tiles, and minimalist fixtures create a fresh, open feel perfect for Smyrna's newer homes and townhomes.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Classic Charm</h3>
          <p className="text-gray-600 text-sm">Subway tile, pedestal sinks or furniture-style vanities, and traditional fixtures honor Smyrna's historic character while adding modern functionality.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Transitional Blend</h3>
          <p className="text-gray-600 text-sm">The best of both worlds, combining clean lines with warm finishes, shaker-style cabinetry, and neutral palettes that stand the test of time.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Essential Bathroom Remodel Elements
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Quality tile work:</strong> Porcelain and ceramic tiles in showers, floors, and accents set the foundation for your design.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Upgraded vanity:</strong> Custom or semi-custom cabinetry with quality countertops anchors the space.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Modern fixtures:</strong> New faucets, showerheads, and hardware in coordinated finishes tie everything together.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Proper lighting:</strong> Vanity lighting, overhead fixtures, and accent lights create a well-lit, inviting space.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Good ventilation:</strong> Quality exhaust fans prevent moisture damage and mold growth.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Start Your Bathroom Transformation</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction specializes in <strong>bathroom remodeling Smyrna GA</strong> homes deserve. From powder room updates to complete master bath renovations, we deliver quality results on time and on budget. Call today for a free estimate!
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
        Bathroom Remodel Project Types
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Master Bath Renovation</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Dual vanities with ample storage</li>
            <li>- Walk-in shower with seating</li>
            <li>- Freestanding or built-in tub</li>
            <li>- Private water closet</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Hall/Guest Bath</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Space-efficient design</li>
            <li>- Tub/shower combo or walk-in</li>
            <li>- Single vanity with storage</li>
            <li>- Durable, easy-clean surfaces</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Powder Room Update</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Statement vanity or pedestal</li>
            <li>- Bold wallpaper or tile accent</li>
            <li>- Designer fixtures</li>
            <li>- Updated lighting and mirror</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Tub to Shower Conversion</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Remove unused tub</li>
            <li>- Install walk-in shower</li>
            <li>- Add grab bars for safety</li>
            <li>- Zero-threshold option</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving Smyrna and Surrounding Areas
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Smyrna', 'Vinings', 'Mableton', 'Marietta', 'Atlanta', 'Austell', 'Cumberland', 'Sandy Springs'].map((city) => (
          <div key={city} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{city}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Choose Phoenix Construction</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Licensed and insured with local expertise</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Free consultations and transparent pricing</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Quality materials and skilled tradespeople</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Clean, respectful work practices</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
