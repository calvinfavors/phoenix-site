import { CheckCircle, Phone, Home, Paintbrush, TreePine, Shield } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'exterior-painting', label: 'Exterior House Painting' },
  { value: 'interior-painting', label: 'Interior Painting' },
  { value: 'deck-staining', label: 'Deck & Fence Staining' },
  { value: 'pressure-washing', label: 'Pressure Washing' },
  { value: 'other', label: 'Other Services' },
];

export default function HousePaintingRoswell() {
  return (
    <BlogTemplate
      title="House Painting Roswell & Sandy Springs GA: Prepare Your Home for Summer"
      category="House Painting"
      date="March 21, 2026"
      heroImage="/phoenix2.jpeg"
      heroImageAlt="Professional house painting in Roswell GA"
      source="blog_painting_roswell"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        The charming homes of Roswell and Sandy Springs deserve expert care. <strong>House painting Roswell GA</strong> and <strong>exterior painting Sandy Springs</strong> projects transform your home's appearance while protecting it from Georgia\'s demanding climate. With warm weather approaching, spring is the ideal time to refresh your home's exterior before summer entertaining season begins.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Roswell Homes Benefit from Professional Exterior Painting
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Roswell's tree-lined streets and established neighborhoods feature homes ranging from historic Canton Street cottages to sprawling estates along the Chattahoochee. Each requires thoughtful <strong>house painting Roswell GA</strong> approaches:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TreePine className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Shade Challenges</h3>
          </div>
          <p className="text-gray-600 text-sm">Roswell's mature tree canopy creates shaded areas prone to mold and mildew. We use mildew-resistant paints for lasting protection.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Historic Preservation</h3>
          </div>
          <p className="text-gray-600 text-sm">We respect Roswell's architectural heritage, using appropriate colors and techniques for period homes.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Neighborhood Standards</h3>
          </div>
          <p className="text-gray-600 text-sm">From Horseshoe Bend to Martin's Landing, we help you select colors that enhance both your home and neighborhood.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Paintbrush className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Quality Materials</h3>
          </div>
          <p className="text-gray-600 text-sm">Premium exterior paints formulated for hot, humid Southern summers ensure your paint job lasts for years.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Sandy Springs Exterior Painting: Upscale Results
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Sandy Springs' sophisticated homes demand exceptional <strong>exterior painting Sandy Springs</strong> craftsmanship. Our services address the unique needs of this upscale community:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Large Custom Homes:</strong> Efficient crews handle expansive properties with consistent quality throughout.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Mixed Materials:</strong> Expert painting of stucco, brick, wood, and Hardie board combinations.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Architectural Details:</strong> Precision painting of columns, cornices, and decorative trim elements.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Deck & Fence Refinishing:</strong> Complete outdoor living space restoration including staining and sealing.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Color Expertise:</strong> Guidance on sophisticated palettes that complement your home's style.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Book Your Spring Painting Project Today</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction delivers expert <strong>house painting Roswell GA</strong> and <strong>exterior painting Sandy Springs</strong> homeowners trust. Schedule now to have your home looking its best before summer arrives.
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
        Our Exterior Painting Process
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Every Phoenix Construction painting project follows a proven process for exceptional results:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">1. Comprehensive Evaluation</h3>
          <p className="text-gray-600 text-sm">We inspect your home's exterior, identify any repairs needed, and discuss your color preferences and goals.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">2. Surface Preparation</h3>
          <p className="text-gray-600 text-sm">Power washing, scraping, sanding, caulking gaps, and priming ensure the new paint bonds properly and lasts.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">3. Protection & Masking</h3>
          <p className="text-gray-600 text-sm">We carefully protect windows, landscaping, walkways, and all areas not being painted.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">4. Expert Application</h3>
          <p className="text-gray-600 text-sm">Multiple coats of premium paint applied with professional techniques for flawless, durable coverage.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">5. Final Inspection</h3>
          <p className="text-gray-600 text-sm">We walk through with you to ensure every detail meets our high standards before cleanup.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving Roswell, Sandy Springs, and Surrounding Areas
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Phoenix Construction provides professional painting services throughout North Atlanta:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Roswell', 'Sandy Springs', 'Dunwoody', 'Brookhaven', 'Buckhead', 'Chamblee', 'Doraville', 'Peachtree Corners'].map((city) => (
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
            <span className="text-gray-600">Local experts familiar with Roswell and Sandy Springs homes</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Premium paints backed by manufacturer warranties</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Detailed, transparent estimates with no hidden costs</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Respectful crews who treat your home like their own</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
