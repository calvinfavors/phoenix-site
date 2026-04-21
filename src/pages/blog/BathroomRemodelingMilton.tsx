import { CheckCircle, Phone, Home, Award, Sparkles, Shield } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'bathroom-remodel', label: 'Bathroom Remodeling' },
  { value: 'master-bath', label: 'Master Suite Renovation' },
  { value: 'luxury-bath', label: 'Luxury Bath Design' },
  { value: 'spa-features', label: 'Spa Features Installation' },
  { value: 'other', label: 'Other Services' },
];

export default function BathroomRemodelingMilton() {
  return (
    <BlogTemplate
      title="Bathroom Remodeling Milton GA: Luxury Renovations for Discerning Homeowners"
      category="Bathroom Remodeling"
      date="March 20, 2026"
      heroImage="/IMG_9318.JPG"
      heroImageAlt="Luxury bathroom remodel in Milton GA"
      source="blog_bathroom_milton"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Milton's upscale homes and equestrian estates demand the finest craftsmanship. When it comes to <strong>bathroom remodeling Milton GA</strong>, homeowners in this prestigious North Fulton community expect nothing less than excellence. Phoenix Construction specializes in <strong>bathroom renovation Milton</strong> projects that match the caliber of these beautiful properties, creating spa-like retreats that enhance daily life and home value.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Milton Homeowners Choose Premium Bathroom Renovations
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Milton's luxury home market demands high-quality finishes throughout. Here's why <strong>bathroom remodeling Milton GA</strong> is a smart investment:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Award className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Premium Appeal</h3>
          </div>
          <p className="text-gray-600 text-sm">Luxury bathrooms are essential in Milton's high-end homes, where buyers expect resort-quality amenities.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Personal Retreat</h3>
          </div>
          <p className="text-gray-600 text-sm">Create a private sanctuary where you can unwind from demanding schedules in complete comfort.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Quality Matters</h3>
          </div>
          <p className="text-gray-600 text-sm">Premium materials and expert installation ensure your investment lasts for decades.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Home Value</h3>
          </div>
          <p className="text-gray-600 text-sm">In Milton's competitive market, luxurious bathrooms significantly impact home valuations.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Luxury Bathroom Features for Milton Estates
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        When planning your <strong>bathroom renovation Milton</strong> project, consider these premium features:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Spa Shower Systems</h3>
          <p className="text-gray-600 text-sm">Multi-head systems with rainfall, body jets, and handheld options, all controlled by digital thermostatic valves. Steam shower capabilities transform your bathroom into a home spa.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Sculptural Soaking Tubs</h3>
          <p className="text-gray-600 text-sm">Freestanding tubs in natural stone, copper, or designer composite materials become stunning focal points. Air jet and chromotherapy options enhance relaxation.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Custom Cabinetry</h3>
          <p className="text-gray-600 text-sm">Furniture-grade vanities with soft-close drawers, built-in organizers, and premium finishes. Matching linen towers and medicine cabinets complete the look.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Designer Surfaces</h3>
          <p className="text-gray-600 text-sm">Natural marble, book-matched slabs, large-format porcelain, and handcrafted tile create sophisticated, timeless interiors worthy of Milton homes.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Premium Bathroom Amenities
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Radiant floor heating:</strong> Step onto warm tile every morning for ultimate comfort.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Towel warmers:</strong> Electric or hydronic warmers keep towels cozy and ready.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Smart mirrors:</strong> LED illumination, defogging, and integrated technology.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Bidet toilets:</strong> Japanese-style toilets with heated seats and integrated wash functions.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Custom lighting:</strong> Dimmable layers with accent lighting for ambiance.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Elevate Your Milton Home</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction understands the standards Milton homeowners expect. Our <strong>bathroom remodeling Milton GA</strong> projects deliver exceptional quality, from design through completion. Call today to discuss your vision!
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
        Serving Milton and North Fulton
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Milton', 'Alpharetta', 'Roswell', 'Johns Creek', 'Cumming', 'Duluth', 'Suwanee', 'Sandy Springs'].map((city) => (
          <div key={city} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{city}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">The Phoenix Construction Promise</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Experience with Milton's luxury home market</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Access to premium materials and fixtures</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Master craftsmen for flawless execution</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Personalized service and attention to detail</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
