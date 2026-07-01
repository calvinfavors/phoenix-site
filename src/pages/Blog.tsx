import { Calendar, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const blogPosts = [
  // Batch 4 — July 1, 2026
  {
    slug: 'kitchen-remodel-timeline-woodstock-ga',
    title: 'How Long Does a Kitchen Remodel Take? A Week-by-Week Timeline for Woodstock GA Homeowners',
    excerpt: 'Most full kitchen remodels in Cherokee County take 10–16 weeks from first consultation to final walkthrough. This week-by-week breakdown covers every phase — design, permits, cabinet lead times, demo, countertop fabrication, and finish work — and what causes delays.',
    date: 'July 1, 2026',
    image: '/IMG_9350.WEBP',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'kitchen-remodel-roi-woodstock-ga',
    title: 'Kitchen Remodel ROI in Woodstock GA: What Actually Adds Value vs. What Doesn\'t in 2026',
    excerpt: 'Minor kitchen updates return 80–95% of cost; major luxury remodels return 55–70%. This guide covers what Cherokee County buyers actually value, which upgrades drive the most appeal, and how to calibrate your investment based on your timeline.',
    date: 'July 1, 2026',
    image: '/PhoenixLogo3.jpg',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'countertop-edge-profiles-woodstock-ga',
    title: 'Countertop Edge Profiles Explained: Which Works Best for Woodstock GA Kitchens in 2026',
    excerpt: 'Eased, beveled, ogee, waterfall, bullnose, chiseled — every countertop edge profile explained with honest recommendations for Cherokee County and Metro Atlanta kitchens. Includes a cabinet-style matching guide and cost upcharge data.',
    date: 'July 1, 2026',
    image: '/PhoenixLogo1.jpg',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'master-bathroom-addition-cherokee-county-ga',
    title: 'Master Bathroom Addition in Cherokee County GA: What It Costs and What\'s Involved in 2026',
    excerpt: 'Thousands of Cherokee County homes built in the 1980s–90s lack a proper master bath. This guide covers the two paths to adding a master bathroom (conversion vs. true addition), real 2026 cost breakdowns, permit requirements, and ROI in the local market.',
    date: 'July 1, 2026',
    image: '/gallery/phoenix-bathroom-2.jpg',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'tile-shower-vs-prefab-surround-woodstock-ga',
    title: 'Custom Tile Shower vs. Prefab Surround: Why Woodstock GA Contractors Recommend Custom Tile',
    excerpt: 'The upfront cost difference between a custom tile shower and a prefab acrylic surround is $3,500–$9,500. This guide explains why experienced Cherokee County contractors consistently recommend tile — and the installation details that determine whether a tile shower lasts 10 years or 30+.',
    date: 'July 1, 2026',
    image: '/gallery/phoenix-bathroom.jpg',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'ada-accessible-bathroom-remodeling-woodstock-ga',
    title: 'ADA-Accessible Bathroom Remodeling in Woodstock GA: Aging-in-Place Upgrades That Actually Work',
    excerpt: 'Curbless showers, grab bars installed in blocking (not drywall), comfort-height toilets, wider doorways, non-slip flooring — everything Cherokee County homeowners need to know about designing a bathroom that works safely for the long term.',
    date: 'July 1, 2026',
    image: '/phoecon1.jpeg',
    category: 'Bathroom Remodeling',
  },
  // Batch 3 — June 22, 2026
  {
    slug: 'old-bathroom-dangers-woodstock-ga',
    title: 'Old Bathroom Warning Signs: Hidden Dangers in Cherokee County & Metro Atlanta Homes Built Before 2000',
    excerpt: 'Water damage behind tile, polybutylene pipe, hidden mold, missing GFCI outlets, inadequate ventilation — if your bathroom was last renovated before 2000, it may be hiding serious problems. A guide to what to look for and when to act.',
    date: 'June 22, 2026',
    image: '/gallery/phoenix-bathroom.jpg',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'north-georgia-plumbing-bathroom-remodeling-woodstock-ga',
    title: 'North Georgia Plumbing & Bathroom Remodeling: What Cherokee County Homeowners Must Know Before Renovating',
    excerpt: 'Polybutylene pipes, galvanized lines, Cherokee County permit requirements, water hardness, and why the plumbing era of your home matters — everything North Georgia homeowners need to know before a bathroom remodel.',
    date: 'June 22, 2026',
    image: '/gallery/phoenix-bathroom-2.jpg',
    category: 'Bathroom Remodeling',
  },
  // Batch 2 — June 17, 2026
  {
    slug: 'kitchen-cabinet-refacing-vs-replacement-woodstock-ga',
    title: 'Kitchen Cabinet Refacing vs. Replacement in Woodstock GA: Which Is Right for Your Kitchen?',
    excerpt: 'Should you reface or replace your kitchen cabinets? This guide covers real 2026 costs, when each option makes sense, what refacing can and can\'t fix, and the popular reface + countertop combo that transforms kitchens for $11k–$22k.',
    date: 'June 17, 2026',
    image: '/IMG_9319.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'small-bathroom-remodel-ideas-woodstock-ga',
    title: 'Small Bathroom Remodel Ideas for Woodstock GA & Metro Atlanta Homes: Make a Small Space Feel Bigger',
    excerpt: 'Practical remodel ideas for 5x8 and 6x8 bathrooms in Cherokee County. Large-format tile strategy, layout changes that actually work, floating vanity selection, and lighting upgrades that transform small bathrooms.',
    date: 'June 17, 2026',
    image: '/IMG_9353.WEBP',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'quartz-vs-granite-vs-marble-countertops-woodstock-ga',
    title: 'Quartz vs. Granite vs. Marble Countertops for Metro Atlanta Kitchens: A Contractor\'s Honest Comparison',
    excerpt: 'Which countertop material is right for your Woodstock GA or Metro Atlanta kitchen? Real cost data, durability, maintenance, and resale value compared — from a contractor who installs all three.',
    date: 'June 17, 2026',
    image: '/phoecon3.jpeg',
    category: 'Kitchen Remodeling',
  },
  // Batch 1 — June 17, 2026
  {
    slug: 'kitchen-remodel-cost-woodstock-ga-2026',
    title: 'Kitchen Remodel Cost Guide 2026: Woodstock, Marietta & Metro Atlanta Pricing Breakdown',
    excerpt: 'How much does a kitchen remodel cost in Metro Atlanta in 2026? Real pricing data — $10k–$25k for a minor refresh, $30k–$65k for a full remodel, $70k–$150k+ for a gut renovation — based on actual Cherokee County projects.',
    date: 'June 17, 2026',
    image: '/phoecon4.jpeg',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'open-concept-kitchen-remodel-woodstock-ga',
    title: 'Open-Concept Kitchen Remodel Woodstock GA: Remove Walls, Expand Your Space & Transform Your Home',
    excerpt: 'Planning an open-concept kitchen remodel? Learn what\'s involved in removing walls, how to handle load-bearing walls, what it really costs, and what the finished result looks like in Cherokee County homes.',
    date: 'June 17, 2026',
    image: '/IMG_9320.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'walk-in-shower-vs-tub-conversion-woodstock-ga',
    title: 'Walk-In Shower vs. Tub-to-Shower Conversion: Which Is Right for Your Woodstock GA Home?',
    excerpt: 'Should you keep your bathtub or convert to a walk-in shower? Real cost data, resale value guidance, aging-in-place considerations, and what Metro Atlanta homeowners are actually choosing in 2026.',
    date: 'June 17, 2026',
    image: '/IMG_9352.WEBP',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'home-remodeling-bathroom-remodel-builders-woodstock-ga',
    title: 'Bathroom Remodel, Home Remodeling & Builders in Woodstock GA: The Complete FAQ for Cherokee County Homeowners',
    excerpt: 'ROI data, permit requirements, real contractor red flags, and everything Cherokee County homeowners need before starting a bathroom remodel, home remodeling project, or hiring builders in Woodstock GA in 2026.',
    date: 'April 22, 2026',
    image: '/IMG_9321.JPG',
    category: 'Home Remodeling Woodstock',
  },
  {
    slug: 'basement-finishing-remodeling-woodstock-ga-faq',
    title: 'Basement Finishing Woodstock GA: The Ultimate FAQ for Homeowners Planning a Basement Remodeling or Renovation Project',
    excerpt: 'Real costs, real timelines, real contractor red flags — everything Woodstock and Cherokee County homeowners need to know before starting a basement finishing, remodeling, or renovation project in 2026.',
    date: 'April 22, 2026',
    image: '/phoecon6.jpeg',
    category: 'Basement Finishing Woodstock',
  },
  {
    slug: 'science-of-summer-parties-finished-basement',
    title: 'The Science Behind Summer Parties and Why a Finished Basement Changes Everything',
    excerpt: 'Environmental psychology, acoustics research, and behavioral science all point to the same conclusion: a finished basement is the foundation of a genuinely great summer gathering. We break down the science.',
    date: 'April 14, 2026',
    image: '/PhoenixPool1.jpeg',
    category: 'Summer Entertaining',
  },
  {
    slug: 'summer-basement-faq',
    title: 'Summer Basement FAQ: Everything Metro Atlanta Homeowners Ask Before Starting a Basement Finishing Project',
    excerpt: 'Humidity, heat, permits, costs, timelines — we answer the 10 most common questions from Cherokee County and Cobb County homeowners before they start their summer basement finishing project.',
    date: 'April 14, 2026',
    image: '/phoecon6.jpeg',
    category: 'Summer Basements',
  },
  {
    slug: 'spring-kitchen-remodeling-woodstock-ga',
    title: 'Spring Kitchen Remodeling in Woodstock GA: Why Now Is the Best Time to Renovate',
    excerpt: 'Spring is the perfect season for kitchen remodeling in Woodstock GA. Longer days, better ventilation, and summer hosting readiness make spring the smartest time to start your kitchen renovation.',
    date: 'April 9, 2026',
    image: '/phoecon4.jpeg',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'spring-kitchen-remodeling-marietta-ga',
    title: 'Spring Kitchen Remodeling Marietta GA: Why Cobb County Homeowners Are Renovating Now',
    excerpt: 'Discover why spring is the ideal time for kitchen remodeling in Marietta GA. From real estate value to summer hosting, Cobb County homeowners are investing in kitchen renovations this season.',
    date: 'April 9, 2026',
    image: '/IMG_9320.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'spring-kitchen-remodeling-alpharetta-ga',
    title: 'Spring Kitchen Remodeling Alpharetta GA: Luxury Kitchen Renovations for North Fulton Homes',
    excerpt: 'Alpharetta homeowners are choosing spring for luxury kitchen remodeling. From chef-grade appliances to waterfall islands, discover why now is the time to elevate your North Fulton kitchen.',
    date: 'April 9, 2026',
    image: '/IMG_9322.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'basement-remodeling-marietta-ga',
    title: 'Basement Remodeling Marietta GA: Transform Your Cobb County Home',
    excerpt: 'Expert basement remodeling Marietta GA services. From basement finishing to finished basement contractors near Marietta, create your dream entertainment space.',
    date: 'March 31, 2026',
    image: '/IMG_9319.JPG',
    category: 'Basement Remodeling',
  },
  {
    slug: 'basement-remodeling-alpharetta-ga',
    title: 'Basement Remodeling Alpharetta GA: Luxury Finished Basements for North Fulton Homes',
    excerpt: 'Premium basement remodeling Alpharetta GA services. Luxury basement finishing, home theaters, wine cellars & more for discerning North Fulton homeowners.',
    date: 'March 30, 2026',
    image: '/IMG_9321.JPG',
    category: 'Basement Remodeling',
  },
  {
    slug: 'shower-remodel-woodstock-ga',
    title: 'Shower Remodel Woodstock GA & Tub to Shower Conversion: Transform Your Bathroom',
    excerpt: 'Expert shower remodeling in Woodstock GA. Custom walk-in showers, tub-to-shower conversions, frameless glass, and luxury tile work by Phoenix Construction.',
    date: 'March 28, 2026',
    image: '/IMG_9352.WEBP',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'master-bath-remodeling-metro-atlanta',
    title: 'Master Bath Remodeling Metro Atlanta: Create Your Ultimate Retreat',
    excerpt: 'Transform your master bath into a spa-like retreat. Walk-in showers, soaking tubs, dual vanities, and luxury finishes throughout Woodstock, Marietta, Roswell, and Metro Atlanta.',
    date: 'March 27, 2026',
    image: '/IMG_9318.JPG',
    category: 'Master Bath',
  },
  {
    slug: 'bathroom-remodeling-marietta-ga',
    title: 'Bathroom Remodeling Marietta GA: Transform Your Cobb County Bathroom',
    excerpt: 'Expert bathroom remodeling in Marietta GA. Custom tile showers, vanity upgrades, full gut renovations — serving East Cobb, West Cobb, and all of Cobb County.',
    date: 'March 26, 2026',
    image: '/IMG_9317.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'whole-home-renovation-woodstock-ga',
    title: 'Whole-Home Renovation Woodstock GA: Full-Scale Home Remodeling in Cherokee County',
    excerpt: 'Planning a whole-home renovation in Woodstock GA? Phoenix Construction manages complete home remodels from kitchen and bathrooms to basements, additions, and exterior work.',
    date: 'March 25, 2026',
    image: '/phoecon1.jpeg',
    category: 'Home Renovation',
  },
  {
    slug: 'bathroom-renovation-cost-woodstock-ga',
    title: 'Bathroom Renovation Cost Woodstock GA: What Does a Bathroom Remodel Really Cost in 2026?',
    excerpt: 'Real 2026 bathroom renovation costs in Woodstock GA. From cosmetic updates ($3k–$7k) to full gut renovations ($15k–$35k+), get accurate pricing before calling a contractor.',
    date: 'March 24, 2026',
    image: '/IMG_9351.WEBP',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'home-construction-metro-atlanta',
    title: 'Home Construction Metro Atlanta: Custom Home Builders for Greater Atlanta',
    excerpt: 'Phoenix Construction builds custom homes throughout Metro Atlanta. Cherokee County, Cobb County, North Fulton — new home construction with attention to detail from foundation to finish.',
    date: 'March 20, 2026',
    image: '/phoenix6.jpeg',
    category: 'Home Construction',
  },
  {
    slug: 'kitchen-remodeling-sandy-springs',
    title: 'Kitchen Remodeling Sandy Springs GA: Luxury Kitchen Renovations for North Fulton Homeowners',
    excerpt: 'Premium kitchen remodeling in Sandy Springs GA. Custom cabinets, luxury countertops, and high-end finishes for discerning Sandy Springs and North Fulton homeowners.',
    date: 'March 15, 2026',
    image: '/phoecon4.jpeg',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'bathroom-remodeling-woodstock-ga',
    title: 'Bathroom Remodeling Woodstock GA: Complete Guide to Renovation Costs, Styles & Contractors',
    excerpt: 'Everything Woodstock GA homeowners need to know about bathroom remodeling. Real costs, design ideas, contractor selection guide, and before/after inspiration from Phoenix Construction.',
    date: 'March 10, 2026',
    image: '/IMG_9316.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'basement-remodeling-woodstock-ga',
    title: 'Basement Remodeling Woodstock GA: From Unfinished to Incredible',
    excerpt: 'Transform your unfinished basement into living space. Home theaters, bars, gyms, in-law suites — Phoenix Construction finishes basements throughout Woodstock and Cherokee County.',
    date: 'March 5, 2026',
    image: '/phoecon6.jpeg',
    category: 'Basement Remodeling',
  },
];

const categoryColors: Record<string, string> = {
  'Kitchen Remodeling': 'bg-amber-100 text-amber-700',
  'Bathroom Remodeling': 'bg-blue-100 text-blue-700',
  'Basement Remodeling': 'bg-slate-100 text-slate-700',
  'Basement Finishing Woodstock': 'bg-slate-100 text-slate-700',
  'Home Construction': 'bg-green-100 text-green-700',
  'Home Remodeling Woodstock': 'bg-red-100 text-red-700',
  'Master Bath': 'bg-purple-100 text-purple-700',
  'Summer Entertaining': 'bg-orange-100 text-orange-700',
  'Summer Basements': 'bg-orange-100 text-orange-700',
  'Home Renovation': 'bg-red-100 text-red-700',
};

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Phoenix Construction Blog | Kitchen & Bathroom Remodeling Guides, Cost Data & Tips | Woodstock GA"
        description="Expert remodeling guides, cost breakdowns, and project tips from Phoenix Construction — Woodstock GA's top-rated general contractor. Kitchen remodels, bathroom renovations, basement finishing & more across Cherokee County and Metro Atlanta."
        canonical="/blog"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]}
      />

      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Remodeling Guides & Resources
            </h1>
            <p className="text-gray-300 text-lg">
              Cost breakdowns, design ideas, and expert advice for Cherokee County and Metro Atlanta homeowners planning kitchen, bathroom, and basement renovations.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={12} className="mr-1" />
                  {post.date}
                </div>
                <h2 className="font-bold text-slate-900 text-lg leading-tight mb-3 group-hover:text-red-600 transition-colors flex-grow">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-red-600 font-semibold text-sm mt-auto">
                  Read More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-white text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8">
            Call Phoenix Construction for a free estimate on your kitchen remodel, bathroom renovation, or basement finishing project in Cherokee County or Metro Atlanta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6784634893"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all"
            >
              <Phone size={20} className="mr-2" />
              Call (678) 463-4893
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
