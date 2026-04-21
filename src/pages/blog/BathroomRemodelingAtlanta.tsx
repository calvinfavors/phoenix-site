import { CheckCircle, Phone, Home, Sparkles, Shield, Award } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'bathroom-remodel', label: 'Bathroom Remodeling' },
  { value: 'master-bath', label: 'Master Bath Renovation' },
  { value: 'condo-bath', label: 'Condo Bathroom Update' },
  { value: 'historic-bath', label: 'Historic Home Bathroom' },
  { value: 'other', label: 'Other Services' },
];

export default function BathroomRemodelingAtlanta() {
  return (
    <BlogTemplate
      title="Bathroom Remodeling Atlanta GA: Expert Renovations for Every Neighborhood"
      category="Bathroom Remodeling"
      date="March 23, 2026"
      heroImage="/IMG_9318.JPG"
      heroImageAlt="Bathroom remodel in Atlanta GA"
      source="blog_bathroom_atlanta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        From Buckhead to Brookhaven, Virginia-Highland to West Midtown, Atlanta's diverse neighborhoods each have unique character. When it comes to <strong>bathroom remodeling Atlanta GA</strong>, homeowners need a contractor who understands this variety. Phoenix Construction delivers <strong>bathroom renovation Atlanta</strong> projects tailored to your home's style, whether you live in a historic bungalow or a modern high-rise.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Atlanta Homeowners Invest in Bathroom Remodeling
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        In Atlanta's competitive real estate market, <strong>bathroom remodeling Atlanta GA</strong> offers exceptional value:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Urban Retreat</h3>
          </div>
          <p className="text-gray-600 text-sm">Create a spa-like sanctuary that provides escape from Atlanta's busy pace right in your own home.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Market Value</h3>
          </div>
          <p className="text-gray-600 text-sm">Updated bathrooms help Atlanta homes sell faster and for premium prices in any neighborhood.</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Award className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Quality Living</h3>
          </div>
          <p className="text-gray-600 text-sm">Modern fixtures, better layouts, and improved function make daily routines more enjoyable.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Historic Charm</h3>
          </div>
          <p className="text-gray-600 text-sm">Thoughtful renovations preserve Atlanta's historic character while adding modern convenience.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Bathroom Styles for Atlanta's Diverse Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        When planning your <strong>bathroom renovation Atlanta</strong> project, the style should complement your home:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Historic Bungalow Update</h3>
          <p className="text-gray-600 text-sm">Honor original architectural details with subway tile, pedestal or console sinks, vintage-inspired fixtures, and period-appropriate colors while adding modern plumbing and function.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Modern Condo Style</h3>
          <p className="text-gray-600 text-sm">Maximize smaller spaces with floating vanities, frameless glass, large-format tiles, and wall-mounted fixtures that create an open, airy feel in Atlanta's urban condos.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Suburban Luxury</h3>
          <p className="text-gray-600 text-sm">Spa-inspired master baths with freestanding tubs, oversized showers, dual vanities, and premium finishes bring resort-quality amenities to Buckhead and North Atlanta homes.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Transitional Elegance</h3>
          <p className="text-gray-600 text-sm">The perfect blend of traditional and contemporary works in any Atlanta neighborhood. Clean lines with warm finishes, shaker cabinetry, and timeless tile choices.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Essential Bathroom Features
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Walk-in showers:</strong> Curbless or low-threshold entries with frameless glass enclosures.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Quality vanities:</strong> Custom or semi-custom cabinetry with soft-close features.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Designer tile:</strong> Porcelain, ceramic, or natural stone in statement patterns.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Modern fixtures:</strong> Water-efficient faucets and showerheads in coordinated finishes.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Proper lighting:</strong> Layered lighting with vanity sconces and ambient fixtures.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Transform Your Atlanta Bathroom</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction specializes in <strong>bathroom remodeling Atlanta GA</strong> homes deserve. From historic preservation to modern updates, we deliver quality results throughout the metro area. Call today for your free consultation!
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
        Bathroom Project Types
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Master Suite Renovation</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Dual vanity with ample counter</li>
            <li>- Large walk-in shower</li>
            <li>- Freestanding soaking tub</li>
            <li>- Private water closet</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Hall Bath Update</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Space-efficient design</li>
            <li>- Tub/shower combination</li>
            <li>- Single vanity with storage</li>
            <li>- Durable, easy-clean finishes</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Condo Bathroom</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Space maximization</li>
            <li>- Floating vanities</li>
            <li>- Glass shower enclosures</li>
            <li>- Modern fixtures</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-900 mb-2">Historic Home Bath</h4>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>- Period-appropriate details</li>
            <li>- Modern plumbing updates</li>
            <li>- Character preservation</li>
            <li>- Improved functionality</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving All Atlanta Neighborhoods
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Buckhead', 'Midtown', 'Virginia-Highland', 'Brookhaven', 'Sandy Springs', 'Dunwoody', 'Decatur', 'East Atlanta'].map((city) => (
          <div key={city} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{city}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Why Phoenix Construction?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Experience with Atlanta's diverse architectural styles</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Licensed, insured, and highly rated</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Transparent pricing and clear communication</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Quality craftsmanship backed by warranty</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
