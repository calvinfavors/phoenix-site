import { CheckCircle, Phone, Home, Award, Sparkles, TrendingUp } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodel', label: 'Kitchen Remodeling' },
  { value: 'luxury-kitchen', label: 'Luxury Kitchen Design' },
  { value: 'cabinet-install', label: 'Custom Cabinetry' },
  { value: 'countertops', label: 'Premium Countertops' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenRemodelingSandySprings() {
  return (
    <BlogTemplate
      title="Kitchen Remodeling Sandy Springs GA: Premium Renovations for Discerning Homeowners"
      category="Kitchen Remodeling"
      date="March 26, 2026"
      heroImage="/IMG_9317.JPG"
      heroImageAlt="Luxury kitchen remodel in Sandy Springs GA"
      source="blog_kitchen_sandy_springs"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Sandy Springs homeowners appreciate the finer things in life, and that extends to their kitchens. When it comes to <strong>kitchen remodeling Sandy Springs GA</strong>, quality and attention to detail matter. Phoenix Construction delivers <strong>kitchen renovation Sandy Springs</strong> projects that match the caliber of this prestigious community, creating culinary spaces that are both beautiful and highly functional.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Why Sandy Springs Homeowners Invest in Kitchen Remodeling
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        In Sandy Springs' competitive real estate market, <strong>kitchen remodeling Sandy Springs GA</strong> offers exceptional returns:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Award className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Premium Appeal</h3>
          </div>
          <p className="text-gray-600 text-sm">High-end kitchens are expected in Sandy Springs homes, where buyers demand top-tier finishes.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Sparkles className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Daily Luxury</h3>
          </div>
          <p className="text-gray-600 text-sm">Create a chef-worthy kitchen that makes cooking and entertaining a pleasure every day.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Strong ROI</h3>
          </div>
          <p className="text-gray-600 text-sm">Kitchen renovations consistently deliver the best return on investment in Sandy Springs.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Modern Living</h3>
          </div>
          <p className="text-gray-600 text-sm">Update layouts for open-concept living that works for today's lifestyle.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Luxury Kitchen Features for Sandy Springs Homes
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        When planning your <strong>kitchen renovation Sandy Springs</strong> project, these premium features define luxury:
      </p>

      <div className="space-y-4 mb-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Custom Cabinetry</h3>
          <p className="text-gray-600 text-sm">Furniture-quality cabinets with soft-close drawers, pull-out organizers, and premium finishes. Custom designs maximize every inch of space.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Premium Surfaces</h3>
          <p className="text-gray-600 text-sm">Natural quartzite, marble, or high-end quartz countertops paired with statement backsplashes in natural stone or artisan tile.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Professional Appliances</h3>
          <p className="text-gray-600 text-sm">Sub-Zero, Wolf, Thermador, and other premium brands deliver professional performance and lasting quality.</p>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Designer Details</h3>
          <p className="text-gray-600 text-sm">Pot fillers, integrated espresso stations, wine storage, and butler's pantries add sophisticated functionality.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Kitchen Design Must-Haves
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Oversized islands:</strong> 10+ foot islands with prep sinks, seating, and storage become the kitchen's centerpiece.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Walk-in pantries:</strong> Chef's pantries with custom organization systems keep everything accessible.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Layered lighting:</strong> Recessed, pendant, and under-cabinet lighting with smart controls.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Quality hardware:</strong> Premium pulls and knobs in brass, nickel, or matte black finishes.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Hardwood flooring:</strong> Wide-plank hardwoods or premium tile that extends through living areas.</span>
        </li>
      </ul>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Create Your Dream Kitchen</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction understands the expectations of Sandy Springs homeowners. Our <strong>kitchen remodeling Sandy Springs GA</strong> projects deliver exceptional quality, from design through completion. Call today to discuss your vision!
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
        Serving Sandy Springs and North Atlanta
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Sandy Springs', 'Dunwoody', 'Brookhaven', 'Buckhead', 'Roswell', 'Alpharetta', 'Johns Creek', 'Chamblee'].map((city) => (
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
            <span className="text-gray-600">Experience with Sandy Springs luxury homes</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Access to premium materials and appliances</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Expert craftsmanship and attention to detail</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Clear communication throughout the project</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
