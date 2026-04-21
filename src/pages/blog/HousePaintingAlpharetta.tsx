import { CheckCircle, Phone, Home, Paintbrush, Sparkles, Clock } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'exterior-painting', label: 'Exterior House Painting' },
  { value: 'interior-painting', label: 'Interior Painting' },
  { value: 'trim-painting', label: 'Trim & Detail Work' },
  { value: 'color-consultation', label: 'Color Consultation' },
  { value: 'other', label: 'Other Services' },
];

export default function HousePaintingAlpharetta() {
  return (
    <BlogTemplate
      title="House Painting Alpharetta & Milton GA: Premium Exterior Painting for North Fulton Homes"
      category="House Painting"
      date="March 22, 2026"
      heroImage="/phoenix6.jpeg"
      heroImageAlt="Beautiful house painting project in Alpharetta GA"
      source="blog_painting_alpharetta"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        North Fulton County homes deserve nothing less than exceptional craftsmanship. <strong>House painting Alpharetta GA</strong> and <strong>exterior painting Milton GA</strong> projects require contractors who understand the high standards of these prestigious communities. With summer approaching, now is the perfect time to refresh your home's exterior and enhance its stunning curb appeal.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why North Fulton Homeowners Choose Professional Exterior Painting
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        The beautiful homes of Alpharetta and Milton represent significant investments. Professional <strong>house painting Alpharetta GA</strong> services protect that investment while enhancing your property's beauty:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Luxury Aesthetics</h3>
          </div>
          <p className="text-gray-600 text-sm">Premium paint finishes and expert color selection complement your home's architectural details and landscaping.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Property Value</h3>
          </div>
          <p className="text-gray-600 text-sm">In North Fulton's competitive real estate market, fresh exterior paint can add thousands to your home's value.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Long-Lasting Results</h3>
          </div>
          <p className="text-gray-600 text-sm">Professional preparation and premium paints mean your home looks beautiful for 10-15 years between paintings.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Paintbrush className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">HOA Compliance</h3>
          </div>
          <p className="text-gray-600 text-sm">We help navigate HOA color requirements and ensure your new palette meets community guidelines.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Exterior Painting Services for Milton's Estate Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Milton's sprawling properties and custom-built homes require specialized <strong>exterior painting Milton GA</strong> expertise. Our team handles:
      </p>

      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Multi-Story Homes:</strong> Safe, efficient painting of tall facades using professional equipment and techniques.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Brick & Masonry:</strong> Specialized coatings for painted brick, stucco, and stone accents.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Wood Siding:</strong> Proper prep and premium paints protect cedar, hardiplank, and composite materials.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Trim & Details:</strong> Meticulous attention to shutters, columns, brackets, and architectural trim.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Front Doors:</strong> Show-stopping entrance refinishing that makes a lasting first impression.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Elevate Your Home's Exterior?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction specializes in <strong>house painting Alpharetta GA</strong> and <strong>exterior painting Milton GA</strong> for discerning homeowners. Experience the difference professional craftsmanship makes.
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
        Color Selection for Alpharetta's Diverse Architecture
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        From Windward's stately homes to Avalon's modern residences, we help you choose colors that complement your home's style:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Traditional Georgian & Colonial</h3>
          <p className="text-gray-600 text-sm">Classic whites, creams, and soft grays with contrasting shutters honor architectural heritage while looking fresh and updated.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">European Inspired</h3>
          <p className="text-gray-600 text-sm">Warm Mediterranean tones, soft terracottas, and elegant neutrals enhance Tuscan and French Country designs.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Contemporary & Transitional</h3>
          <p className="text-gray-600 text-sm">Sophisticated grays, warm whites, and bold accent colors create striking modern curb appeal.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving Alpharetta, Milton, and North Fulton County
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Phoenix Construction proudly provides premium painting services throughout North Fulton:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Alpharetta', 'Milton', 'Johns Creek', 'Roswell', 'Windward', 'Avalon', 'Crabapple', 'Birmingham'].map((city) => (
          <div key={city} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{city}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">The Phoenix Construction Difference</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Experienced with high-end North Fulton properties</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Complimentary color consultation services</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Premium Sherwin-Williams and Benjamin Moore products</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Respectful of your property and landscaping</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
