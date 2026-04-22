import { Calendar, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
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
    slug: 'bathroom-remodeling-marietta-ga',
    title: 'Bathroom Remodeling Marietta GA: Expert Bathroom Remodel Contractors Near You',
    excerpt: 'Complete bathroom remodeling Marietta GA services. From bathroom remodel contractors to renovation specialists, find trusted bathroom remodel near me in Cobb County.',
    date: 'March 31, 2026',
    image: '/IMG_9351.WEBP',
    category: 'Bathroom Remodeling',
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
    slug: 'bathroom-remodeling-woodstock-ga',
    title: 'Bathroom Remodeling Woodstock GA: Your Complete Guide to a Stunning Bathroom Renovation',
    excerpt: 'Complete guide to bathroom remodeling Woodstock GA services. From bathroom remodel contractors to renovation trends, discover everything you need for your bathroom project.',
    date: 'March 30, 2026',
    image: '/phoecon1.jpeg',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'shower-remodel-woodstock-ga',
    title: 'Shower Remodel Woodstock GA & Tub to Shower Conversion: Transform Your Bathroom',
    excerpt: 'Expert shower remodel Woodstock GA and tub to shower conversion services. Create a modern, functional shower space with our experienced contractors.',
    date: 'March 29, 2026',
    image: '/phoecon3.jpeg',
    category: 'Shower Remodeling',
  },
  {
    slug: 'basement-remodeling-woodstock-ga',
    title: 'Basement Remodeling Woodstock GA: Transform Your Unfinished Space into Living Area',
    excerpt: 'Expert basement remodeling Woodstock GA services. From basement finishing to complete renovation, discover how to maximize your home\'s square footage.',
    date: 'March 28, 2026',
    image: '/phoecon4.jpeg',
    category: 'Basement Remodeling',
  },
  {
    slug: 'basement-finishing-woodstock-ga',
    title: 'Basement Finishing Woodstock GA: Expert Finished Basement Contractors Near You',
    excerpt: 'Looking for basement finishing Woodstock GA or finished basement contractors near Woodstock GA? Complete guide to transforming your unfinished basement.',
    date: 'March 27, 2026',
    image: '/phoecon6.jpeg',
    category: 'Basement Finishing',
  },
  {
    slug: 'bathroom-remodeling-canton-ga',
    title: 'Bathroom Remodeling Canton GA: Expert Renovations for Cherokee County Homes',
    excerpt: 'Professional bathroom remodeling Canton GA services for Cherokee County homeowners. From master baths to guest bathrooms, quality renovations you can trust.',
    date: 'March 26, 2026',
    image: '/IMG_9352.WEBP',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'basement-remodeling-roswell-ga',
    title: 'Basement Remodeling Roswell GA: Transform Your North Fulton Home',
    excerpt: 'Expert basement remodeling Roswell GA services for North Fulton homeowners. Create entertainment spaces, home theaters, and more.',
    date: 'March 25, 2026',
    image: '/IMG_9316.JPG',
    category: 'Basement Remodeling',
  },
  {
    slug: 'bathroom-remodel-alpharetta-ga',
    title: 'Bathroom Remodel Alpharetta GA: Luxury Renovations for North Fulton Homes',
    excerpt: 'Premium bathroom remodel Alpharetta GA services for discerning homeowners. Luxury finishes, expert craftsmanship, and stunning designs.',
    date: 'March 24, 2026',
    image: '/IMG_9353.WEBP',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'home-construction-cherokee-county',
    title: 'Home Construction Cherokee County: Building Your Dream Home in Woodstock, Canton & Beyond',
    excerpt: 'Cherokee County has become one of Georgia\'s most sought-after locations for home construction. Discover why families choose this region and what to expect from custom builders.',
    date: 'March 25, 2026',
    image: '/IMG_9347.JPG',
    category: 'Home Construction',
  },
  {
    slug: 'home-construction-marietta',
    title: 'Home Construction Marietta & Cobb County: Custom Builders for Every Neighborhood',
    excerpt: 'From historic East Cobb to West Cobb\'s new developments, explore home construction options throughout Cobb County with experienced local builders.',
    date: 'March 24, 2026',
    image: '/IMG_9355.JPG',
    category: 'Home Construction',
  },
  {
    slug: 'home-construction-alpharetta',
    title: 'Home Construction Alpharetta & North Fulton: Luxury Custom Builders for Prestigious Communities',
    excerpt: 'North Fulton represents the pinnacle of Metro Atlanta living. Discover luxury custom home construction in Alpharetta, Milton, and Johns Creek.',
    date: 'March 23, 2026',
    image: '/phoenix6.jpeg',
    category: 'Home Construction',
  },
  {
    slug: 'home-construction-roswell',
    title: 'Home Construction Roswell & Sandy Springs: Custom Builders for Established Communities',
    excerpt: 'Build your dream home in Roswell or Sandy Springs. From teardown projects to new construction, experienced builders for Atlanta\'s established neighborhoods.',
    date: 'March 22, 2026',
    image: '/IMG_8987.jpg',
    category: 'Home Construction',
  },
  {
    slug: 'home-construction-metro-atlanta',
    title: 'Home Construction Metro Atlanta: Your Complete Guide to Building a Custom Home in 2026',
    excerpt: 'Everything you need to know about building a custom home in Metro Atlanta - from choosing a builder to understanding timelines and costs.',
    date: 'March 21, 2026',
    image: '/IMG_9347.JPG',
    category: 'Home Construction',
  },
  {
    slug: 'house-painting-woodstock',
    title: 'House Painting Woodstock GA: Get Your Home Summer-Ready with Professional Exterior Painting',
    excerpt: 'Spring is here, and summer is right around the corner. Schedule your house painting Woodstock GA project now for the perfect conditions and beat the summer rush.',
    date: 'March 24, 2026',
    image: '/phoenix3.jpeg',
    category: 'House Painting',
  },
  {
    slug: 'house-painting-marietta',
    title: 'Exterior House Painting Marietta GA: Refresh Your Cobb County Home Before Summer',
    excerpt: 'From historic homes near Marietta Square to East Cobb estates, professional exterior house painting Marietta GA transforms your property\'s curb appeal.',
    date: 'March 23, 2026',
    image: '/phoenix4.jpeg',
    category: 'House Painting',
  },
  {
    slug: 'house-painting-alpharetta-milton',
    title: 'House Painting Alpharetta & Milton GA: Premium Exterior Painting for North Fulton Homes',
    excerpt: 'North Fulton County homes deserve exceptional craftsmanship. House painting Alpharetta GA and exterior painting Milton GA services for prestigious communities.',
    date: 'March 22, 2026',
    image: '/phoenix6.jpeg',
    category: 'House Painting',
  },
  {
    slug: 'house-painting-roswell-sandy-springs',
    title: 'House Painting Roswell & Sandy Springs GA: Prepare Your Home for Summer',
    excerpt: 'The charming homes of Roswell and Sandy Springs deserve expert care. Professional exterior painting services that boost curb appeal and protect your investment.',
    date: 'March 21, 2026',
    image: '/phoenix2.jpeg',
    category: 'House Painting',
  },
  {
    slug: 'house-painting-metro-atlanta',
    title: 'House Painting Metro Atlanta: Why Spring is the Perfect Time for Exterior Painting',
    excerpt: 'As spring arrives in Georgia, homeowners across Metro Atlanta are scheduling exterior painting projects. Learn why spring offers optimal conditions.',
    date: 'March 20, 2026',
    image: '/phoenix5.jpeg',
    category: 'House Painting',
  },
  {
    slug: 'kitchen-bathroom-contractor-north-georgia',
    title: 'Kitchen and Bathroom Contractor North Georgia: How to Choose the Right Partner',
    excerpt: 'Finding the right kitchen and bathroom contractor North Georgia homeowners can trust is crucial. Learn what to look for in a remodeling contractor and avoid common pitfalls.',
    date: 'March 28, 2026',
    image: '/IMG_9316.JPG',
    category: 'Contractor Guide',
  },
  {
    slug: 'master-bath-remodeling-metro-atlanta',
    title: 'Master Bath Remodeling Metro Atlanta: Create Your Ultimate Retreat',
    excerpt: 'Transform your master bathroom into a spa-like sanctuary. Expert tips for master bath remodeling Metro Atlanta homeowners love.',
    date: 'March 27, 2026',
    image: '/IMG_9318.JPG',
    category: 'Master Bath',
  },
  {
    slug: 'kitchen-remodeling-sandy-springs',
    title: 'Kitchen Remodeling Sandy Springs GA: Premium Renovations for Discerning Homeowners',
    excerpt: 'Sandy Springs homeowners expect excellence. Discover luxury kitchen remodeling Sandy Springs GA services that match your home\'s caliber.',
    date: 'March 26, 2026',
    image: '/IMG_9317.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'bathroom-remodeling-cherokee-county',
    title: 'Bathroom Remodeling Cherokee County GA: Trusted Local Contractors',
    excerpt: 'Looking for bathroom remodeling Cherokee County GA services? Discover why local contractors deliver better results for your renovation.',
    date: 'March 25, 2026',
    image: '/IMG_9318.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'kitchen-bathroom-remodeling-woodstock',
    title: 'Kitchen Remodeling Woodstock GA & Bathroom Renovation: Your Complete Guide',
    excerpt: 'Planning kitchen remodeling Woodstock GA or bathroom renovation Woodstock? Your complete guide to transforming your home.',
    date: 'March 24, 2026',
    image: '/IMG_9316.JPG',
    category: 'Kitchen & Bath',
  },
  {
    slug: 'bathroom-remodeling-atlanta',
    title: 'Bathroom Remodeling Atlanta GA: Expert Renovations for Every Neighborhood',
    excerpt: 'From Buckhead to Brookhaven, bathroom remodeling Atlanta GA services tailored to your home\'s unique style and character.',
    date: 'March 23, 2026',
    image: '/IMG_9318.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'kitchen-remodeling-acworth',
    title: 'Kitchen Remodeling Acworth GA: Modern Updates for Lake Country Living',
    excerpt: 'Acworth\'s lakeside charm deserves beautiful kitchens. Expert kitchen remodeling Acworth GA services for your home.',
    date: 'March 22, 2026',
    image: '/IMG_9317.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'kitchen-bathroom-remodeling-canton',
    title: 'Kitchen and Bathroom Remodeling Canton GA: Complete Home Transformations',
    excerpt: 'Canton homeowners trust Phoenix Construction for kitchen remodeling Canton GA and bathroom remodeling Canton GA services.',
    date: 'March 21, 2026',
    image: '/IMG_9316.JPG',
    category: 'Kitchen & Bath',
  },
  {
    slug: 'bathroom-remodeling-milton',
    title: 'Bathroom Remodeling Milton GA: Luxury Renovations for Discerning Homeowners',
    excerpt: 'Milton\'s upscale homes deserve the finest bathroom remodeling Milton GA services. Create your spa-like retreat.',
    date: 'March 20, 2026',
    image: '/IMG_9318.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'kitchen-remodeling-marietta',
    title: 'Kitchen Remodeling Marietta GA: Transform the Heart of Your Home',
    excerpt: 'From the Marietta Square to East Cobb, kitchen remodeling Marietta GA services that blend functionality and beauty.',
    date: 'March 19, 2026',
    image: '/IMG_9317.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'kitchen-remodeling-roswell',
    title: 'Kitchen Remodeling in Roswell GA: Create Your Dream Culinary Space',
    excerpt: 'For North Fulton homeowners, kitchen remodeling Roswell GA projects represent one of the most impactful investments.',
    date: 'March 18, 2026',
    image: '/IMG_9317.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'bathroom-remodeling-alpharetta',
    title: 'Bathroom Remodeling Alpharetta GA: Luxury Renovations for North Fulton Homes',
    excerpt: 'Alpharetta homeowners expect excellence. Discover bathroom remodeling Alpharetta GA services that match your standards.',
    date: 'March 17, 2026',
    image: '/IMG_9318.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'kitchen-remodeling-kennesaw',
    title: 'Kitchen Remodeling Kennesaw GA: Expert Renovations for Cobb County Families',
    excerpt: 'Kennesaw families deserve beautiful kitchens. Discover kitchen remodeling Kennesaw GA services that work for your lifestyle.',
    date: 'March 16, 2026',
    image: '/IMG_9317.JPG',
    category: 'Kitchen Remodeling',
  },
  {
    slug: 'bathroom-remodeling-smyrna',
    title: 'Bathroom Remodeling Smyrna GA: Beautiful Updates for Your Home',
    excerpt: 'Smyrna\'s vibrant community deserves beautiful bathrooms. Expert bathroom remodeling Smyrna GA services you can trust.',
    date: 'March 15, 2026',
    image: '/IMG_9318.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'bathroom-renovations-woodstock-marietta',
    title: 'Bathroom Renovations & Remodeling in Woodstock, Marietta, and Beyond: Transform Your Space',
    excerpt: 'Dreaming of a spa-like retreat? Whether you need bathroom renovations Woodstock, bathroom remodel Woodstock GA contractors, or a trusted construction company Marietta GA, discover how to transform your space.',
    date: 'March 14, 2026',
    image: '/IMG_9318.JPG',
    category: 'Bathroom Remodeling',
  },
  {
    slug: 'new-construction-kennesaw-smyrna',
    title: 'New Construction Homes in Kennesaw & Smyrna: Your Complete Guide to Building in Cobb County',
    excerpt: 'Considering new construction Kennesaw GA or looking for new home builders in Smyrna GA? Explore why these Cobb County communities are perfect for building your dream home.',
    date: 'March 12, 2026',
    image: '/IMG_9319.JPG',
    category: 'New Construction',
  },
  {
    slug: 'roof-replacement-woodstock-ga',
    title: 'Roof Replacement in Woodstock GA: Everything Homeowners Need to Know',
    excerpt: 'Is your roof showing its age? Learn everything about roof replacement Woodstock GA services, from warning signs to material options and working with trusted roofing Woodstock GA contractors.',
    date: 'March 10, 2026',
    image: '/IMG_9320.JPG',
    category: 'Roofing',
  },
  {
    slug: 'choosing-the-right-home-builder-woodstock-ga',
    title: 'Choosing the Right Home Builder in Woodstock, GA: What Every Homeowner Should Know',
    excerpt: 'Looking for new home builders in Woodstock GA? Learn what to look for when selecting a construction company for your custom home or new construction project in Cherokee County.',
    date: 'March 5, 2026',
    image: '/IMG_9316.JPG',
    category: 'Home Building',
  },
  {
    slug: 'deck-repair-installation-guide-woodstock',
    title: 'The Complete Guide to Deck Repair and Installation in Woodstock, GA',
    excerpt: 'From deck repair to new deck installation, discover why Woodstock homeowners trust local deck builders for their outdoor living projects. Learn about materials, costs, and finding the right contractor.',
    date: 'March 1, 2026',
    image: '/IMG_9347.JPG',
    category: 'Outdoor Living',
  },
  {
    slug: 'kitchen-bathroom-remodeling-trends-2026',
    title: 'Kitchen and Bathroom Remodeling Trends in Metro Atlanta for 2026',
    excerpt: 'Planning a bathroom renovation or kitchen remodel in Woodstock, Marietta, or Kennesaw? Explore the latest design trends and why working with experienced local contractors matters.',
    date: 'February 25, 2026',
    image: '/IMG_9318.JPG',
    category: 'Remodeling',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert insights, tips, and guides for your home construction and remodeling projects
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-red-600 font-semibold text-sm">
                    Read More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're building a new home, remodeling your kitchen, or installing a deck, Phoenix Construction is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6784634893"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Call Now: (678) 463-4893
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
    </div>
  );
}
