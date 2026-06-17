import { CheckCircle, Phone, Star, ArrowRight, Bath } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlogTemplate from '../../components/BlogTemplate';

const serviceOptions = [
  { value: 'walk-in-shower', label: 'Walk-In Shower Installation' },
  { value: 'tub-to-shower', label: 'Tub-to-Shower Conversion' },
  { value: 'bathroom-remodel', label: 'Full Bathroom Remodel' },
  { value: 'master-bath', label: 'Master Bath Renovation' },
  { value: 'other', label: 'Other Services' },
];

export default function WalkInShowerVsTub() {
  return (
    <BlogTemplate
      title="Walk-In Shower vs. Tub-to-Shower Conversion: Which Is Right for Your Woodstock GA Home?"
      description="Should you keep your bathtub or convert to a walk-in shower? This guide covers cost, resale value, aging-in-place considerations, and what Woodstock GA homeowners are actually choosing in 2026. Free estimates from Phoenix Construction."
      category="Bathroom Remodeling"
      categoryColor="red"
      date="June 17, 2026"
      heroImage="/IMG_9352.WEBP"
      heroImageAlt="Walk-in shower vs tub conversion - bathroom remodeling Woodstock GA"
      source="blog_walk_in_shower_vs_tub_2026"
      canonical="/blog/walk-in-shower-vs-tub-conversion-woodstock-ga"
      serviceOptions={serviceOptions}
      faqSchema={[
        {
          question: 'Should I convert my tub to a walk-in shower in my Woodstock GA home?',
          answer: 'It depends on your situation. If you have at least one bathtub remaining in the home, converting a secondary bathroom tub to a walk-in shower is a great move — especially in master bathrooms. If this would be your home\'s only bathtub, keep at least one for resale value. Phoenix Construction can help you evaluate your specific layout. Call (678) 463-4893.',
        },
        {
          question: 'How much does a tub-to-shower conversion cost in Woodstock GA?',
          answer: 'A tub-to-shower conversion in Woodstock GA typically costs $3,500–$8,000 for a basic conversion with a prefab shower unit. A fully custom tiled walk-in shower conversion runs $8,000–$18,000. A luxury frameless glass spa shower in a master bath can reach $20,000–$35,000+ depending on size, tile, and fixture selections.',
        },
        {
          question: 'Does removing a bathtub hurt home resale value in Georgia?',
          answer: 'Removing the only bathtub in a home can reduce its marketability to buyers with young children. However, if you retain at least one tub (typically in a hall bath), converting the master bath to a walk-in shower is widely accepted and often preferred by today\'s buyers. In the $400k+ Metro Atlanta market, walk-in showers are a positive selling point.',
        },
        {
          question: 'What is the most popular walk-in shower tile in 2026?',
          answer: 'Large-format porcelain tile (24"x48" or 24"x24") in a neutral tone (white, warm gray, greige) continues to dominate 2026 bathroom remodel projects. Niche accents in zellige, handmade tile, or fluted stone add character. Hexagon floor tile for shower pans is trending in Metro Atlanta bathrooms this year.',
        },
        {
          question: 'How long does a shower remodel take in Woodstock GA?',
          answer: 'A tub-to-shower conversion takes 7–14 days for a basic swap or 2–4 weeks for a full custom tile shower. A master bath renovation including a new walk-in shower runs 6–10 weeks total. Lead times for custom glass enclosures can add 2–3 weeks.',
        },
      ]}
    >
      <p className="text-xl text-gray-600 leading-relaxed mb-6">
        One of the most common questions Phoenix Construction gets from <strong>bathroom remodeling Woodstock GA</strong> homeowners is: <em>should I keep the bathtub, or convert to a walk-in shower?</em> It's a genuinely important decision that affects your daily comfort, your guests' experience, and eventually your home's resale value. This guide gives you the real answer — not a vague "it depends" — with specific guidance for Cherokee County and Metro Atlanta homes.
      </p>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        The Short Answer: Keep One Tub, Upgrade the Rest
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        For most Woodstock, Marietta, and Cherokee County homeowners, the best strategy is simple: maintain at least one bathtub somewhere in the home (typically a hall bathroom), and convert the master bath tub to a beautiful walk-in shower. This gives you the best of both worlds — resale protection and the master bath upgrade you actually want.
      </p>
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
        <h3 className="font-bold text-slate-900 mb-3">Phoenix Construction's Rule of Thumb for Cherokee County Homes</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" /> <span><strong>2+ bathroom home:</strong> Safe to convert master bath tub to walk-in shower. Keep tub in hall bath.</span></li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" /> <span><strong>1.5 bathroom home:</strong> Convert only if the half-bath can be expanded to include a tub — or if you plan to stay 10+ years.</span></li>
          <li className="flex items-start gap-2"><CheckCircle size={16} className="text-red-600 mt-0.5 flex-shrink-0" /> <span><strong>1 bathroom home:</strong> Keep the tub. A freestanding soaking tub + walk-in shower in a single bath is the premium solution.</span></li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Walk-In Shower vs. Bathtub: The Honest Comparison
      </h2>

      <div className="space-y-4 mb-8">
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <h3 className="font-bold text-slate-900">Walk-In Shower — Pros</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-2">
              {[
                'Far easier daily use — no stepping over tub wall, safer for all ages',
                'Easier to clean — no tub surround grout to scrub, no caulk lines to maintain',
                'Better aesthetic — a frameless glass walk-in shower is the centerpiece of a beautiful master bath',
                'Accessible for aging-in-place — curb-free (zero-entry) showers can accommodate grab bars and future mobility aids',
                'Large format tile in shower feels luxurious and timeless',
                'Modern buyers strongly prefer walk-in showers in master baths',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <h3 className="font-bold text-slate-900">Walk-In Shower — Cons</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-2">
              {[
                'Not ideal for soaking or relaxing (different experience than a deep soaking tub)',
                'Can reduce resale pool if it\'s the home\'s only bath',
                'Frameless glass requires regular squeegee maintenance to avoid water spots',
                'Higher upfront cost than simply regrouting an existing tub surround',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Star size={16} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <h3 className="font-bold text-slate-900">Bathtub — When It Makes Sense</h3>
          </div>
          <div className="p-5">
            <ul className="space-y-2">
              {[
                'Families with young children (bath time is different from shower time)',
                'If you genuinely use the tub regularly and value soaking',
                'In a primary bathroom where a freestanding soaking tub + separate walk-in shower is achievable',
                'As the only tub in the home for resale protection',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Bath size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        What Does a Tub-to-Shower Conversion Cost in Woodstock GA?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Cost varies dramatically based on the scope. Here's a realistic breakdown for Cherokee County homeowners in 2026:
      </p>
      <div className="space-y-3 mb-8">
        {[
          {
            tier: 'Basic Conversion',
            range: '$3,500–$7,000',
            desc: 'Remove tub, install prefab acrylic shower unit, update plumbing trim. Functional and clean, not custom. Good for guest baths or investment properties.',
          },
          {
            tier: 'Standard Tiled Shower',
            range: '$8,000–$14,000',
            desc: 'Custom tiled shower pan and walls, new fixtures, semi-frameless glass door. Most popular scope for hall and secondary bathrooms. Looks significantly better than prefab.',
          },
          {
            tier: 'Luxury Walk-In Shower (no curb)',
            range: '$14,000–$22,000',
            desc: 'Zero-entry curb-free design, large-format tile, frameless glass panels, rainfall head + body sprays, built-in bench and niche. The right choice for master bath renovations.',
          },
          {
            tier: 'Master Bath Spa Shower',
            range: '$20,000–$35,000+',
            desc: 'Full master bath renovation including the walk-in shower as the centerpiece. Freestanding tub option, dual vanity, heated floors, premium finishes throughout. Milton, Roswell, Alpharetta market standard.',
          },
        ].map((row) => (
          <div key={row.tier} className="border border-gray-200 rounded-xl p-5">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
              <h4 className="font-bold text-slate-800">{row.tier}</h4>
              <span className="bg-red-50 text-red-700 font-bold text-sm px-3 py-1 rounded-full">{row.range}</span>
            </div>
            <p className="text-gray-600 text-sm">{row.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Walk-In Shower Design Choices That Matter
      </h2>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[
          {
            title: 'Curb vs. Curbless (Zero-Entry)',
            body: 'Curbless showers look better and are safer for all ages. They cost slightly more to waterproof and tile properly but are worth it for any shower you plan to use long-term.',
          },
          {
            title: 'Frameless vs. Semi-Frameless Glass',
            body: 'Frameless (no metal frame around the glass panels) looks dramatically better and is the standard in mid-to-high-end bathrooms. Semi-frameless is a good compromise at a lower price point.',
          },
          {
            title: 'Tile Selection',
            body: 'Large-format porcelain (24"x48") minimizes grout lines and looks contemporary. Marble and natural stone add luxury but require sealing. Subway tile is classic but shows grout discoloration over time.',
          },
          {
            title: 'Shower Niche',
            body: 'A built-in niche for shampoo and soap is almost always worth the extra cost ($200–$600). Much better than a hanging caddy. Tile it in a contrasting material for a design accent.',
          },
          {
            title: 'Rainfall Showerhead',
            body: 'Ceiling-mounted rainfall heads require a dedicated water line rough-in. Plan for it before tiling begins — adding it later is significantly more expensive.',
          },
          {
            title: 'Bench or Seat',
            body: 'A built-in tiled bench adds $400–$1,200 and is genuinely useful for shaving, bathing children visiting, and aging-in-place planning. More practical than a fold-down seat.',
          },
        ].map((item) => (
          <div key={item.title} className="border border-gray-100 bg-gray-50 rounded-xl p-5">
            <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Convert Your Tub to a Walk-In Shower?</h3>
        <p className="text-gray-600 mb-4">
          Phoenix Construction handles full tub-to-shower conversions and complete bathroom renovations throughout Woodstock, Marietta, Roswell, and Metro Atlanta. Call today for a free in-home estimate.
        </p>
        <a
          href="tel:6784634893"
          className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
        >
          <Phone size={20} className="mr-2" />
          Call (678) 463-4893
        </a>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Aging-in-Place: Why Walk-In Showers Are the Smart Long-Term Choice
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Many Cherokee County homeowners who plan to stay in their homes for 10+ years are building accessibility into their bathroom renovation now — before it becomes a necessity. A zero-entry walk-in shower with blocking in the walls for future grab bars is a smart investment that costs almost nothing extra during a renovation but would cost significantly more to retrofit later.
      </p>
      <ul className="space-y-3 mb-8">
        {[
          'Curbless/zero-entry design eliminates trip hazard completely',
          'Blocking for grab bars ($200–$400 during renovation vs. $1,500+ retrofit)',
          'Hand-held showerhead on a slide bar (useful now, essential later)',
          'Wider shower entry — 36" minimum, 42" ideal for future mobility aid clearance',
          'Comfort-height toilet during the same renovation',
        ].map((item) => (
          <li key={item} className="flex items-start">
            <CheckCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={18} />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>

      <div className="bg-slate-100 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Star className="fill-yellow-400 text-yellow-400" size={20} />
          <span className="font-bold text-slate-900">From a Real Client</span>
        </div>
        <p className="text-gray-600 italic mb-3">"Great work done keeping customer needs in mind! They show up when they say they will and the final product is top quality. I had two old bathrooms remodeled. They were taken down to the studs and floor joists due to rot issues that were hidden. Very happy with the final results."</p>
        <p className="text-gray-500 text-sm">— David Ryan, Google Review · July 2024</p>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
        Explore Our Bathroom Remodeling Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          { label: 'Bathroom Remodeling Woodstock GA', href: '/bathroom-remodeling-in-woodstock-ga' },
          { label: 'Bathroom Remodeling Marietta GA', href: '/bathroom-remodeling-marietta-ga' },
          { label: 'Bathroom Remodeling Roswell GA', href: '/bathroom-remodeling-roswell-ga' },
          { label: 'Bathroom Remodeling Milton GA', href: '/bathroom-remodeling-milton-ga' },
        ].map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3 hover:border-red-300 hover:shadow-sm transition-all group"
          >
            <span className="text-gray-700 text-sm font-medium group-hover:text-red-600">{link.label}</span>
            <ArrowRight size={16} className="text-red-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </BlogTemplate>
  );
}
