import { CheckCircle, Phone, Home, ChefHat, Lightbulb, DollarSign } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodel', label: 'Kitchen Remodeling' },
  { value: 'custom-cabinets', label: 'Custom Cabinets' },
  { value: 'countertops', label: 'Countertop Installation' },
  { value: 'kitchen-design', label: 'Kitchen Design' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenRemodelingMarietta() {
  return (
    <BlogTemplate
      title="Kitchen Remodeling Marietta GA: Transform the Heart of Your Home"
      category="Kitchen Remodeling"
      date="March 19, 2026"
      heroImage="/IMG_9317.JPG"
      heroImageAlt="Beautiful kitchen remodel in Marietta GA"
      source="blog_kitchen_marietta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Marietta's historic charm and vibrant neighborhoods make it one of Cobb County's most sought-after communities. If you're considering <strong>kitchen remodeling Marietta GA</strong>, you're investing in one of the most impactful home improvements available. From the Marietta Square area to East Cobb's established neighborhoods, Phoenix Construction delivers <strong>kitchen renovation Marietta</strong> projects that blend functionality, beauty, and lasting value.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Marietta Homeowners Choose Kitchen Remodeling
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The kitchen is where Marietta families gather for holiday meals, weeknight dinners, and everything in between. Here's why <strong>kitchen remodeling Marietta GA</strong> projects are so popular:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <ChefHat className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Cooking Joy</h3>
          </div>
          <p className="text-gray-600 text-sm">A well-designed kitchen makes meal preparation easier, faster, and more enjoyable for the whole family.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Energy Savings</h3>
          </div>
          <p className="text-gray-600 text-sm">Modern appliances, LED lighting, and better ventilation reduce energy costs while being environmentally friendly.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Home Value</h3>
          </div>
          <p className="text-gray-600 text-sm">Kitchen renovations consistently rank among the best ROI home improvements in Marietta's real estate market.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Modern Living</h3>
          </div>
          <p className="text-gray-600 text-sm">Update closed-off layouts to open concepts that work for today's lifestyle and entertaining needs.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Popular Kitchen Designs in Marietta
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Marietta's diverse architecture inspires various <strong>kitchen renovation Marietta</strong> styles:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Classic Southern</h3>
          <p className="text-gray-600 text-sm">White or cream cabinetry, granite or marble countertops, apron-front sinks, and traditional hardware honor Marietta's historic roots while providing modern functionality.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Transitional Elegance</h3>
          <p className="text-gray-600 text-sm">Shaker-style cabinets in soft grays or navy, quartz countertops, and mixed metals create sophisticated spaces that bridge traditional and contemporary.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Modern Craftsman</h3>
          <p className="text-gray-600 text-sm">Natural wood tones, stone countertops, open shelving, and industrial-inspired lighting appeal to Marietta's newer construction and updated craftsman homes.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Kitchen Remodel Must-Haves
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Oversized island:</strong> 8-10 foot islands provide prep space, seating, and storage in one functional piece.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Walk-in pantry:</strong> Dedicated storage keeps your kitchen organized and counters clutter-free.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Quality appliances:</strong> Invest in reliable brands that make cooking easier and last for years.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Layered lighting:</strong> Combine recessed, pendant, and under-cabinet lights for function and ambiance.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Durable flooring:</strong> Luxury vinyl, hardwood, or tile that withstands heavy kitchen traffic.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Create Your Dream Marietta Kitchen</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction has been helping Marietta families create beautiful, functional kitchens for years. Whether you're updating a historic home or renovating a newer property, our <strong>kitchen remodeling Marietta GA</strong> expertise delivers exceptional results. Call now for your free consultation!
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
        The Kitchen Remodeling Process
      </h2>
      <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
        <li><strong>Design Consultation:</strong> We discuss your vision, lifestyle needs, and budget.</li>
        <li><strong>Kitchen Planning:</strong> Our team creates layouts that maximize space and efficiency.</li>
        <li><strong>Material Selection:</strong> Choose cabinets, countertops, flooring, and fixtures.</li>
        <li><strong>Detailed Estimate:</strong> Receive a comprehensive proposal with no hidden costs.</li>
        <li><strong>Construction:</strong> Our skilled team brings your vision to life with quality craftsmanship.</li>
        <li><strong>Final Walkthrough:</strong> We review every detail before handing over your new kitchen.</li>
      </ol>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving Marietta and East Cobb
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Marietta', 'East Cobb', 'West Cobb', 'Kennesaw', 'Smyrna', 'Roswell', 'Sandy Springs', 'Vinings'].map((city) => (
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
            <span className="text-gray-600">Deep experience with Marietta homes and architecture</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">In-house design expertise for your vision</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Quality materials and skilled craftsmanship</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Clear communication from start to finish</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
