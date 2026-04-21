import { CheckCircle, Phone, Home, Paintbrush, Sun, Droplets } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'exterior-painting', label: 'Exterior House Painting' },
  { value: 'interior-painting', label: 'Interior Painting' },
  { value: 'cabinet-painting', label: 'Cabinet Painting' },
  { value: 'pressure-washing', label: 'Pressure Washing' },
  { value: 'other', label: 'Other Services' },
];

export default function HousePaintingMarietta() {
  return (
    <BlogTemplate
      title="Exterior House Painting Marietta GA: Refresh Your Cobb County Home Before Summer"
      category="House Painting"
      date="March 23, 2026"
      heroImage="/phoenix4.jpeg"
      heroImageAlt="Professional exterior house painting in Marietta GA"
      source="blog_painting_marietta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        From the historic homes near Marietta Square to the elegant estates in East Cobb, <strong>exterior house painting Marietta GA</strong> is one of the most impactful improvements you can make to your property. As temperatures warm and summer approaches, now is the perfect time to schedule your <strong>house painting Cobb County</strong> project with a professional contractor who understands local homes and climate conditions.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The Importance of Exterior Paint for Marietta Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Your home's exterior paint does more than just look good - it's your first line of defense against Georgia's challenging weather. Here's why <strong>exterior house painting Marietta GA</strong> should be on every homeowner's maintenance list:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Sun className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">UV Protection</h3>
          </div>
          <p className="text-gray-600 text-sm">Quality exterior paint shields your siding from Georgia's intense summer sun, preventing premature aging and material degradation.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Droplets className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Moisture Barrier</h3>
          </div>
          <p className="text-gray-600 text-sm">Properly applied paint prevents water infiltration that can lead to mold, mildew, and costly structural damage.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Increased Value</h3>
          </div>
          <p className="text-gray-600 text-sm">Fresh exterior paint delivers one of the highest ROIs of any home improvement, often returning 100%+ at resale.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Paintbrush className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Curb Appeal</h3>
          </div>
          <p className="text-gray-600 text-sm">Nothing transforms a home's appearance faster than a fresh coat of paint in modern, appealing colors.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Popular Exterior Color Trends in Cobb County
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        When planning your <strong>house painting Cobb County</strong> project, consider these popular color palettes that complement Marietta's diverse architectural styles:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Classic Southern Elegance</h3>
          <p className="text-gray-600 text-sm">Warm whites, soft creams, and pale grays with black or navy shutters create timeless curb appeal perfect for traditional homes near the Square.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Modern Farmhouse</h3>
          <p className="text-gray-600 text-sm">Bright white siding with charcoal or black trim brings contemporary farmhouse style to newer East Cobb developments.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Earthy Neutrals</h3>
          <p className="text-gray-600 text-sm">Warm greiges, soft taupes, and nature-inspired tones blend beautifully with Marietta's lush, tree-lined neighborhoods.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Bold Statements</h3>
          <p className="text-gray-600 text-sm">Deep blues, rich greens, and dramatic charcoals make a confident statement while remaining neighborhood-appropriate.</p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Get Your Free Painting Estimate Today</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction delivers expert <strong>exterior house painting Marietta GA</strong> homeowners rely on. From color selection to final inspection, we ensure a flawless finish that protects and beautifies your home.
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
        What to Expect from Professional Exterior Painting
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Professional Assessment:</strong> We evaluate your home's condition and provide honest recommendations.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Comprehensive Prep:</strong> Pressure washing, scraping, sanding, caulking, and priming for lasting results.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Quality Materials:</strong> Premium paints rated for Georgia's climate ensure durability and color retention.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Expert Application:</strong> Skilled painters deliver smooth, even coverage on every surface.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Complete Cleanup:</strong> We leave your property spotless and looking stunning.</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving Marietta and All of Cobb County
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Phoenix Construction proudly provides <strong>house painting Cobb County</strong> services throughout the area:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Marietta', 'East Cobb', 'West Cobb', 'Kennesaw', 'Smyrna', 'Vinings', 'Powder Springs', 'Austell'].map((city) => (
          <div key={city} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{city}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Phoenix Construction: Your Marietta Painting Experts</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Decades of experience painting Cobb County homes</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Fully licensed, bonded, and insured</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Workmanship warranty on every project</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Transparent pricing with no surprise fees</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
