import { CheckCircle, Phone, Home, Users, Award, Shield } from 'lucide-react';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'kitchen-remodel', label: 'Kitchen Remodeling' },
  { value: 'bathroom-remodel', label: 'Bathroom Remodeling' },
  { value: 'full-renovation', label: 'Full Home Renovation' },
  { value: 'custom-build', label: 'Custom Construction' },
  { value: 'other', label: 'Other Services' },
];

export default function KitchenBathroomContractorNorthGeorgia() {
  return (
    <BlogTemplate
      title="Kitchen and Bathroom Contractor North Georgia: How to Choose the Right Partner"
      category="Contractor Guide"
      date="March 28, 2026"
      heroImage="/IMG_9316.JPG"
      heroImageAlt="Kitchen and bathroom contractor in North Georgia"
      source="blog_contractor_north_ga"
      serviceOptions={serviceOptions}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        Finding the right <strong>kitchen and bathroom contractor North Georgia</strong> homeowners can trust is the most important decision you'll make for your renovation project. From Cherokee County to North Fulton, Cobb to Forsyth, the right <strong>remodeling contractor North Georgia</strong> makes the difference between a dream renovation and a nightmare experience. This guide helps you find and hire the best contractor for your project.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What to Look for in a Remodeling Contractor
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        When searching for a <strong>kitchen and bathroom contractor North Georgia</strong>, these qualities separate the best from the rest:
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Award className="text-amber-600" size={24} />
            <h3 className="font-bold text-slate-900">Proper Licensing</h3>
          </div>
          <p className="text-gray-600 text-sm">Verify Georgia contractor licensing and confirm it's current. Licensed contractors have met state requirements for competency.</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-blue-600" size={24} />
            <h3 className="font-bold text-slate-900">Full Insurance</h3>
          </div>
          <p className="text-gray-600 text-sm">Require proof of liability insurance and workers' compensation. This protects you from liability during construction.</p>
        </div>
        <div className="bg-green-50 border border-green-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-green-600" size={24} />
            <h3 className="font-bold text-slate-900">Solid References</h3>
          </div>
          <p className="text-gray-600 text-sm">Ask for recent project references and actually call them. Visit completed projects if possible to see quality firsthand.</p>
        </div>
        <div className="bg-red-50 border border-red-200 p-5 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <Home className="text-red-600" size={24} />
            <h3 className="font-bold text-slate-900">Local Presence</h3>
          </div>
          <p className="text-gray-600 text-sm">Local contractors have community ties, understand local codes, and will be there for warranty service.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Questions to Ask Every Contractor
      </h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>How long have you been in business?</strong> Experience matters for complex renovations.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Do you have a physical address?</strong> Established contractors have real offices.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>Who will be on-site daily?</strong> Know who's supervising your project.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>What's your communication process?</strong> Regular updates prevent surprises.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>How do you handle changes?</strong> Change orders should be documented in writing.</span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
          <span className="text-gray-600"><strong>What warranty do you offer?</strong> Quality contractors stand behind their work.</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Red Flags to Watch For
      </h2>
      <div className="space-y-4 mb-6">
        <div className="border border-red-200 bg-red-50 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Demanding Large Deposits</h3>
          <p className="text-gray-600 text-sm">Reputable contractors typically request 10-30% down, not 50% or more. Avoid contractors who want payment in full upfront.</p>
        </div>
        <div className="border border-red-200 bg-red-50 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">No Written Contract</h3>
          <p className="text-gray-600 text-sm">Every detail should be in writing: scope, materials, timeline, payment schedule, and warranty. Verbal agreements leave you unprotected.</p>
        </div>
        <div className="border border-red-200 bg-red-50 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Pressure Tactics</h3>
          <p className="text-gray-600 text-sm">Quality contractors don't pressure you into quick decisions. "Today only" pricing is a warning sign.</p>
        </div>
        <div className="border border-red-200 bg-red-50 rounded-xl p-5">
          <h3 className="font-bold text-slate-900 mb-2">Cash-Only Operations</h3>
          <p className="text-gray-600 text-sm">Legitimate businesses accept checks and cards. Cash-only may indicate unlicensed or uninsured operations.</p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Work with Phoenix Construction</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction is the <strong>kitchen and bathroom contractor North Georgia</strong> homeowners trust. Licensed, insured, and committed to quality, we've helped hundreds of families transform their homes. Call today for your free consultation!
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
        The Right Process for Success
      </h2>
      <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
        <li><strong>Get Multiple Estimates:</strong> Compare at least 3 contractors for major projects.</li>
        <li><strong>Verify Everything:</strong> Check licenses, insurance, and references independently.</li>
        <li><strong>Compare Apples to Apples:</strong> Ensure estimates cover the same scope and materials.</li>
        <li><strong>Read Contracts Carefully:</strong> Understand every term before signing.</li>
        <li><strong>Document Everything:</strong> Keep copies of all communications and agreements.</li>
        <li><strong>Inspect Work Regularly:</strong> Stay involved throughout the project.</li>
      </ol>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Serving All of North Georgia
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {['Cherokee County', 'Cobb County', 'Fulton County', 'Forsyth County', 'Gwinnett County', 'Bartow County', 'Paulding County', 'Douglas County'].map((county) => (
          <div key={county} className="flex items-center text-gray-600">
            <Home className="text-red-600 mr-2 flex-shrink-0" size={16} />
            <span>{county}</span>
          </div>
        ))}
      </div>

      <div className="bg-slate-100 rounded-2xl p-6 my-8">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Why Phoenix Construction?</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Fully licensed and insured Georgia contractor</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Hundreds of successful kitchen and bathroom projects</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Transparent pricing with detailed written estimates</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-600">Strong warranty on all workmanship</span>
          </li>
        </ul>
      </div>
    </BlogTemplate>
  );
}
