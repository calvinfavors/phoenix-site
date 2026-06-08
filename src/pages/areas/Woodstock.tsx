import { MapPin, Phone, Home, CheckCircle, ChefHat, Bath, Hammer, Shield, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function Woodstock() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="General Contractor Woodstock GA | Kitchen, Bathroom & Home Remodeling | Phoenix Construction"
        description="Phoenix Construction is Woodstock GA's top-rated general contractor. Expert kitchen remodeling, bathroom renovations, basement finishing, custom home building & more in Cherokee County. Free estimates — call (678) 463-4893."
        canonical="/woodstock"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Woodstock', url: '/woodstock' }]}
        localBusiness={{ cityName: 'Woodstock', citySlug: 'woodstock', services: ['Kitchen Remodeling', 'Bathroom Remodeling', 'Basement Finishing', 'Custom Home Construction', 'Roofing', 'Deck Installation'], latitude: 34.1015, longitude: -84.5194 }}
      />
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin size={56} className="text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              General Contractor Woodstock GA | Home Remodeling, Kitchen, Bathroom & Basement
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Phoenix Construction — Woodstock's most trusted general contractor for home remodeling, basement finishing, kitchen remodeling, bathroom renovations, home building, roofing, and deck repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6784634893" className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all">
                <Phone size={20} className="mr-2" />
                Call (678) 463-4893
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          <div className="prose max-w-none mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Woodstock GA's Premier General Contractor & Home Remodeling Company
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Looking for a reliable <strong>general contractor in Woodstock GA</strong>? Phoenix Construction has served Cherokee County homeowners for 20+ years, delivering expert <strong>home remodeling Woodstock GA</strong> services across every trade. Whether you need <strong>kitchen remodeling Woodstock GA</strong>, <strong>basement finishing Woodstock GA</strong>, <strong>bathroom remodeling Woodstock GA</strong>, <strong>roof replacement Woodstock GA</strong>, or <strong>deck repair Woodstock GA</strong> — we do it all with precision and pride.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As one of the top <strong>home builders in Woodstock GA</strong> and a full-service <strong>construction company</strong>, we handle projects of every size — from a single bathroom remodel to complete custom home construction. Our team understands the Woodstock market, local building codes, and what Cherokee County homeowners expect: quality craftsmanship, transparent pricing, and projects completed on time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Link to="/blog/basement-finishing-woodstock-ga" className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-200">
              <Home className="text-red-600 mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Basement Finishing Woodstock GA</h3>
              <p className="text-gray-600 text-sm mb-3">Transform your unfinished basement into premium living space. Expert <strong>basement remodel contractors Woodstock GA</strong> — entertainment rooms, in-law suites, home theaters, and more.</p>
              <span className="text-red-600 text-sm font-semibold flex items-center">Learn More <ArrowRight size={14} className="ml-1" /></span>
            </Link>

            <Link to="/blog/kitchen-bathroom-remodeling-woodstock-ga" className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-200">
              <ChefHat className="text-red-600 mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Kitchen Remodeling Woodstock GA</h3>
              <p className="text-gray-600 text-sm mb-3">Full kitchen renovations in Woodstock GA. New cabinets, countertops, islands, and open-concept layouts designed for how Cherokee County families live.</p>
              <span className="text-red-600 text-sm font-semibold flex items-center">Learn More <ArrowRight size={14} className="ml-1" /></span>
            </Link>

            <Link to="/blog/bathroom-remodeling-woodstock-ga" className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-200">
              <Bath className="text-red-600 mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Bathroom Remodeling Woodstock GA</h3>
              <p className="text-gray-600 text-sm mb-3">Expert <strong>bathroom renovation Woodstock GA</strong> services. Master bath luxury upgrades, walk-in showers, double vanities, and complete <strong>bathroom remodel contractors Woodstock GA</strong>.</p>
              <span className="text-red-600 text-sm font-semibold flex items-center">Learn More <ArrowRight size={14} className="ml-1" /></span>
            </Link>

            <Link to="/blog/home-builder-woodstock-ga" className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-200">
              <Star className="text-red-600 mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Home Builders in Woodstock GA</h3>
              <p className="text-gray-600 text-sm mb-3">Custom <strong>Woodstock builders</strong> specializing in new home construction throughout Cherokee County. Build your dream home with Metro Atlanta's most trusted home builder.</p>
              <span className="text-red-600 text-sm font-semibold flex items-center">Learn More <ArrowRight size={14} className="ml-1" /></span>
            </Link>

            <Link to="/blog/roof-replacement-woodstock-ga" className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-200">
              <Shield className="text-red-600 mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Roof Replacement Woodstock GA</h3>
              <p className="text-gray-600 text-sm mb-3">Professional <strong>roofing Woodstock GA</strong> services. Complete roof replacements, repairs, storm damage restoration, and GAF-certified installations by licensed Woodstock roofers.</p>
              <span className="text-red-600 text-sm font-semibold flex items-center">Learn More <ArrowRight size={14} className="ml-1" /></span>
            </Link>

            <Link to="/blog/deck-repair-woodstock-ga" className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:border-red-200">
              <Hammer className="text-red-600 mb-3 group-hover:scale-110 transition-transform" size={36} />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Deck Repair & Deck Builders Woodstock GA</h3>
              <p className="text-gray-600 text-sm mb-3">Trusted <strong>Woodstock deck builders</strong> for new deck construction, deck repair, composite decking, and custom outdoor living spaces in Cherokee County.</p>
              <span className="text-red-600 text-sm font-semibold flex items-center">Learn More <ArrowRight size={14} className="ml-1" /></span>
            </Link>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              All Home Remodeling Services — Woodstock GA & Cherokee County
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Basement Finishing Woodstock GA', desc: 'Unfinished basement to finished living space' },
                { label: 'Basement Remodeling Woodstock GA', desc: 'Full basement renovations & reconfigurations' },
                { label: 'Basement Renovation Woodstock GA', desc: 'Update & modernize existing finished basements' },
                { label: 'Bathroom Remodeling Woodstock GA', desc: 'Master bath, guest bath & powder room renovations' },
                { label: 'Bathroom Renovation Woodstock GA', desc: 'Full bathroom redesigns & fixture upgrades' },
                { label: 'Bathroom Renovations Woodstock', desc: 'From cosmetic updates to complete gut-and-rebuilds' },
                { label: 'Kitchen Remodeling Woodstock GA', desc: 'Cabinets, countertops, islands & open layouts' },
                { label: 'Home Remodeling Woodstock GA', desc: 'Whole-home renovations & room additions' },
                { label: 'Home Builders in Woodstock GA', desc: 'Custom new home construction in Cherokee County' },
                { label: 'Roof Replacement Woodstock GA', desc: 'Asphalt, metal & premium roofing systems' },
                { label: 'Roofing Woodstock GA', desc: 'Roof repairs, inspections & full replacements' },
                { label: 'Deck Repair Woodstock GA', desc: 'Deck restoration, board replacement & railing repair' },
                { label: 'Woodstock Deck Builders', desc: 'Custom deck construction & outdoor living spaces' },
                { label: 'General Contractor Woodstock GA', desc: 'Full-service construction & project management' },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start">
                  <CheckCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <span className="font-semibold text-slate-900 text-sm">{label}</span>
                    <p className="text-gray-500 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Woodstock Homeowners Choose Phoenix Construction</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} /><span>Based in Woodstock — your neighbors, not a franchise</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} /><span>20+ years serving Cherokee County homeowners</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} /><span>Licensed, bonded & fully insured in Georgia</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} /><span>Expert knowledge of local building codes & permits</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} /><span>Free, transparent estimates — no surprises</span></li>
                <li className="flex items-start"><CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} /><span>Workmanship warranty on every project</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Also Serving Near Woodstock</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><strong>New Construction Kennesaw GA</strong> — custom home builds</li>
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><strong>Construction Company Marietta GA</strong> — remodeling & new builds</li>
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><strong>New Home Builders Smyrna GA</strong> — custom construction</li>
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><strong>Bathroom Remodeling Canton GA</strong> — full bath renovations</li>
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><strong>Basement Remodeling Roswell GA</strong> — finishing & remodels</li>
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><strong>Bathroom Remodel Alpharetta GA</strong> — luxury bath renovations</li>
                <li className="flex items-center"><MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} /><span>Acworth, Milton, Holly Springs & all of North Georgia</span></li>
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Featured Project: Woodstock Kitchen & Bathroom Remodel</h3>
            <p className="text-gray-600 mb-6">
              See why Phoenix Construction is the top-rated <strong>general contractor Woodstock GA</strong> homeowners call first. Our completed projects across Woodstock, Canton, Marietta, and North Georgia showcase the quality craftsmanship we bring to every kitchen remodel, bathroom renovation, and basement finishing project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img src="/PhoenixLogo1.jpg" alt="Kitchen remodeling Woodstock GA - white cabinetry" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img src="/PhoenixLogo2.jpg" alt="Bathroom renovation Woodstock GA - modern design" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img src="/PhoenixLogo3.jpg" alt="Basement finishing Woodstock GA - entertainment space" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                <img src="/PhoenixLogo4.jpg" alt="Home remodeling Woodstock GA - completed renovation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Woodstock Neighborhoods We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              {['Downtown Woodstock', 'Towne Lake', 'Eagle Watch', 'Harmony on the Lakes', 'Dupree Farms', 'Mill Creek', 'Olde Rope Mill', 'Bridgemill', 'Wyngate', 'Woodmont', 'Tate Landing', 'Bradshaw Farm', 'River Park', 'The Arbors', 'All Woodstock GA areas'].map((n) => (
                <div key={n} className="flex items-center text-sm">
                  <MapPin className="text-red-500 mr-2 flex-shrink-0" size={14} />
                  {n}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Woodstock GA Remodel?
            </h2>
            <p className="text-gray-300 mb-2">General contractor, home builder, bathroom remodel, kitchen renovation, basement finishing, roofing & decks.</p>
            <p className="text-lg text-gray-200 mb-8">
              Call Phoenix Construction today for a free, no-obligation consultation and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:6784634893" className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
                <Phone size={20} className="mr-2" />
                Call (678) 463-4893
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
