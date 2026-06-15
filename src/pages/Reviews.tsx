import { useState } from 'react';
import { Star, Quote, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const reviews = [
  {
    author: 'Brittany Ellis',
    date: 'June 2026',
    dateISO: '2026-06-12',
    rating: 5,
    body: 'Mitch did an excellent job tearing out my old brick water damaged fireplace and installing a new tile alcove, tile entryway floor and freestanding stove. We are so thrilled with how it turned out. On top of the attention to detail and solid work, he\'s an all around good person. I\'m so glad we chose him for the work.',
    services: ['Tile Work', 'Home Renovations', 'Flooring', 'Demolition'],
    serviceType: 'Tile Work & Home Renovation',
    filterTag: 'Renovations',
    highlight: 'Fireplace tearout, tile alcove & entryway floor',
  },
  {
    author: 'Marc Mazur',
    date: 'June 2026',
    dateISO: '2026-06-10',
    rating: 5,
    body: 'Reasonable price. Exterior structural repairs completed professionally.',
    services: ['Exterior Structural Repairs'],
    serviceType: 'Exterior Structural Repairs',
    filterTag: 'Renovations',
    highlight: 'Exterior structural repairs',
  },
  {
    author: 'Rachel Brown',
    date: 'May 2026',
    dateISO: '2026-05-18',
    rating: 5,
    body: 'Mitch and his crew did a fantastic job on installing new hardwoods and refinishing and restaining our existing hardwoods. He is very dependable, helpful through the process and trustworthy. He is very skilled in many different home needs and helped us with some shower repairs and drywall repairs. Great guy all around! We are grateful to find him as a general contractor for our home we recently purchased for a majority of our future projects.',
    services: ['Flooring', 'Hardwood Installation', 'Shower Repair', 'Drywall Repair'],
    serviceType: 'Flooring & Home Renovations',
    filterTag: 'Flooring',
    highlight: 'New hardwood installation & refinishing',
  },
  {
    author: 'Audrie Gregory',
    date: 'March 2026',
    dateISO: '2026-03-20',
    rating: 5,
    body: 'We recently worked with Phoenix Construction on our basement and screened porch, and the experience was outstanding from start to finish. Communication was consistent and clear throughout the entire project. Mitch and his crew showed up exactly when he said he would, which is rare and greatly appreciated. Most importantly, the quality of the work speaks for itself — everything was completed with precision and attention to detail. If you\'re looking for a contractor who is reliable, professional, and delivers high-quality results, I would strongly recommend Mitch and his team.',
    services: ['Basement Finishing', 'Screened Porch'],
    serviceType: 'Basement Finishing & Screened Porch',
    filterTag: 'Basement',
    highlight: 'Basement & screened porch — precision and attention to detail',
  },
  {
    author: 'Nathan Williams',
    date: 'March 2026',
    dateISO: '2026-03-08',
    rating: 5,
    body: 'We went with Phoenix Construction after meeting with a few different contractors. Mitch was amazing to work with on our kitchen remodel. He was most helpful and patient as we built out (and added to) the scope of the project, what our options were, and what to expect during the project. He stands by his team\'s work, and even followed up with us a couple times after completion to see how everything was. We highly recommend Phoenix Construction. Thanks, Mitch!',
    services: ['Kitchen Remodeling'],
    serviceType: 'Kitchen Remodeling',
    filterTag: 'Kitchen',
    highlight: 'Kitchen remodel — patient, thorough, followed up after completion',
  },
  {
    author: 'Edward Molinary',
    date: 'February 2026',
    dateISO: '2026-02-25',
    rating: 5,
    body: 'Phoenix Construction and Mitch are incredible to work with! They made our vision come to life, and helped us finish our basement of over 2000 sq ft! We found Mitch to be honest and hardworking. We would recommend him to anyone!',
    services: ['Basement Finishing'],
    serviceType: 'Basement Finishing',
    filterTag: 'Basement',
    highlight: '2,000+ sq ft basement finish',
  },
  {
    author: 'Jason Janney',
    date: 'February 2026',
    dateISO: '2026-02-08',
    rating: 5,
    body: 'Great job on my house build Mitch. I appreciate all the attention to detail!',
    services: ['Custom Home Construction'],
    serviceType: 'Custom Home Construction',
    filterTag: 'New Construction',
    highlight: 'Full custom home build',
  },
  {
    author: 'Geoff Spillias',
    date: 'September 2024',
    dateISO: '2024-09-23',
    rating: 5,
    body: 'Working with Mitch was a great experience! Great communicator, patient and a pleasure to work with.',
    services: ['Home Remodeling'],
    serviceType: 'Home Remodeling',
    filterTag: 'Renovations',
    highlight: 'Great communication throughout',
  },
  {
    author: 'Mac Whatley',
    date: 'August 2024',
    dateISO: '2024-08-07',
    rating: 5,
    body: 'Mitch and his Phoenix Construction Company did a fantastic job on the remodel of the basement in our townhouse. In this day and age, when it is hard to find a contractor you can trust, we found Mitch to be completely trustworthy and easy to work with. The quality of the work was flawless and the job was completed on time and within the amount quoted. I highly recommend Mitch and his Phoenix Construction Company.',
    services: ['Basement Remodeling'],
    serviceType: 'Basement Remodeling',
    filterTag: 'Basement',
    highlight: 'Basement remodel — on time, within budget, flawless quality',
  },
  {
    author: 'Doug Duke',
    date: 'July 2024',
    dateISO: '2024-07-12',
    rating: 5,
    body: 'Mitch at Phoenix Construction did an excellent job with our basement finish! His long time experience with home construction projects was evident from the start. His ideas and advice helped in planning and scheduling of trades and inspections. His estimates for each phase were accurate and reasonable. I would highly recommend Phoenix Construction for home improvement projects.',
    services: ['Basement Finishing'],
    serviceType: 'Basement Finishing',
    filterTag: 'Basement',
    highlight: 'Basement finish — accurate estimates, expert scheduling',
  },
  {
    author: 'Carolyn Russell',
    date: 'July 2024',
    dateISO: '2024-07-11',
    rating: 5,
    body: 'We hired Phoenix Construction for a huge basement overhaul. This was a lifetime dream basement for my husband that included a sports memorabilia room, a custom built Irish bar, an exquisite wine room and so much more. Mitch and his team were incredible and the attention to detail was like no other. If you want your job done to perfection, this is the team. Also, Mitch has great vision for your dream and helps make your dream better.',
    services: ['Basement Finishing', 'Custom Millwork', 'Custom Bar'],
    serviceType: 'Luxury Basement Finishing',
    filterTag: 'Basement',
    highlight: 'Custom Irish bar, wine room & sports memorabilia room',
  },
  {
    author: 'David Ryan',
    date: 'July 2024',
    dateISO: '2024-07-11',
    rating: 5,
    body: 'Great work done keeping customer needs in mind! They show up when they say they will and the final product is top quality. I had two old bathrooms remodeled. They were taken down to the studs and floor joists due to rot issues that were hidden. Very happy with the final results. They keep you in the loop when unexpected items pop up. I would hire them again for any projects I have.',
    services: ['Bathroom Remodeling'],
    serviceType: 'Bathroom Remodeling',
    filterTag: 'Bathroom',
    highlight: 'Two full bathroom gut renovations',
  },
];

const filterTags = ['All', 'Kitchen', 'Bathroom', 'Basement', 'Flooring', 'New Construction', 'Renovations'];

const serviceLinks: Record<string, string> = {
  Kitchen: '/kitchen-remodeling-in-woodstock-ga',
  Bathroom: '/bathroom-remodeling-in-woodstock-ga',
  Basement: '/basement-remodeling-in-woodstock-ga',
  'New Construction': '/home-construction-in-woodstock-ga',
};

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All' ? reviews : reviews.filter((r) => r.filterTag === activeFilter);

  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Phoenix Construction Reviews | 5-Star Contractor Woodstock GA | Verified Google Reviews"
        description="Read verified 5-star Google reviews for Phoenix Construction, Woodstock GA's top-rated remodeling contractor. Kitchen remodels, bathroom renovations, basement finishing, custom homes — real results from real Metro Atlanta homeowners."
        canonical="/reviews"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Reviews', url: '/reviews' }]}
        reviewSchema={{
          reviews: reviews.map((r) => ({
            author: r.author,
            datePublished: r.dateISO,
            reviewBody: r.body,
            ratingValue: r.rating,
            serviceType: r.serviceType,
          })),
          aggregateRating: { ratingValue: 5.0, reviewCount: reviews.length },
        }}
      />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={36} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              5-Star Reviews — Phoenix Construction Woodstock GA
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Verified Google reviews from Metro Atlanta homeowners. Kitchen remodels, bathroom renovations, basement finishing, custom home construction, and more.
            </p>
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white font-semibold">
              <Star size={20} className="fill-yellow-400 text-yellow-400 mr-2" />
              5.0 average · {reviews.length} Google reviews
            </div>
          </div>
        </div>
      </div>

      {/* Aggregate stats bar */}
      <div className="bg-red-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '5.0', label: 'Average Google Rating' },
              { value: `${reviews.length}`, label: 'Verified Reviews' },
              { value: '20+', label: 'Years in Business' },
              { value: '100%', label: '5-Star Reviews' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-red-100 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  activeFilter === tag
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tag}
                {tag !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({reviews.filter((r) => r.filterTag === tag).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Reviews grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {filtered.map((review) => (
              <div
                key={review.author}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{review.author}</p>
                    <p className="text-gray-400 text-sm">{review.date} · Google Review</p>
                  </div>
                  <Quote size={28} className="text-red-100 flex-shrink-0" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed flex-grow mb-5 italic">
                  "{review.body}"
                </p>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Services</p>
                  <div className="flex flex-wrap gap-2">
                    {review.services.map((svc) => (
                      <span
                        key={svc}
                        className="bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full border border-red-100"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service links section */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
              See the Services Our Clients Rave About
            </h2>
            <p className="text-gray-500 text-center mb-8 text-sm">
              Every review above is from a real Metro Atlanta homeowner — click to learn more about each service.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(serviceLinks).map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-red-300 hover:shadow-sm transition-all group"
                >
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-red-600 transition-colors">
                    {label} Remodeling
                  </span>
                  <ArrowRight size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-white text-center">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our 5-Star Client List?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Phoenix Construction brings the same attention to detail and honest communication to every project — from kitchen remodels in Marietta to basement finishes in Woodstock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6784634893"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone size={20} className="mr-2" />
                Call (678) 463-4893
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
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
