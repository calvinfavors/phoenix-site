import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const featured = [
  {
    author: 'Nathan Williams',
    date: 'March 2026',
    service: 'Kitchen Remodeling',
    serviceHref: '/kitchen-remodeling-in-woodstock-ga',
    body: 'Mitch was amazing to work with on our kitchen remodel. He was most helpful and patient as we built out the scope of the project. He stands by his team\'s work, and even followed up with us a couple times after completion to see how everything was. We highly recommend Phoenix Construction.',
  },
  {
    author: 'Carolyn Russell',
    date: 'July 2024',
    service: 'Luxury Basement Finishing',
    serviceHref: '/basement-remodeling-in-woodstock-ga',
    body: 'We hired Phoenix Construction for a huge basement overhaul — a custom Irish bar, an exquisite wine room, a sports memorabilia room and so much more. Mitch and his team were incredible and the attention to detail was like no other. If you want your job done to perfection, this is the team.',
  },
  {
    author: 'Audrie Gregory',
    date: 'March 2026',
    service: 'Basement & Screened Porch',
    serviceHref: '/basement-remodeling-in-woodstock-ga',
    body: 'Communication was consistent and clear throughout the entire project. Mitch and his crew showed up exactly when he said he would, which is rare and greatly appreciated. Everything was completed with precision and attention to detail. I would strongly recommend Mitch and his team.',
  },
  {
    author: 'David Ryan',
    date: 'July 2024',
    service: 'Bathroom Remodeling',
    serviceHref: '/bathroom-remodeling-in-woodstock-ga',
    body: 'They show up when they say they will and the final product is top quality. I had two old bathrooms remodeled — taken down to the studs due to hidden rot issues. Very happy with the final results. They keep you in the loop when unexpected items pop up. I would hire them again.',
  },
];

export default function HomeReviews() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white border border-yellow-200 rounded-full px-5 py-2 shadow-sm mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-semibold text-slate-700">5.0 · 12 Verified Google Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Metro Atlanta Homeowners Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real results from real clients — kitchen remodels, basement finishes, bathroom renovations, and custom homes across Woodstock, Marietta, Roswell, and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12 mb-10">
          {featured.map((review) => (
            <div
              key={review.author}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-bold text-slate-900">{review.author}</p>
                  <Link
                    to={review.serviceHref}
                    className="text-red-600 text-sm font-medium hover:text-red-700 transition-colors"
                  >
                    {review.service}
                  </Link>
                </div>
                <Quote size={24} className="text-red-100 flex-shrink-0" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-400 text-xs ml-1 self-center">{review.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed italic flex-grow">
                "{review.body}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-md"
          >
            Read All 12 Reviews
            <Star size={18} className="ml-2 fill-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}
