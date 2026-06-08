import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, ChevronLeft, ChevronRight, X, Shield, Star, Hammer,
  Users, CheckCircle, ArrowRight, MessageSquare, Flame,
  Home, Layers, Wrench, Droplets, Sun, Trees,
} from 'lucide-react';

// ─── Gallery data by service ───────────────────────────────────────────────
const galleryGroups = [
  {
    id: 'kitchen',
    label: 'Kitchens',
    icon: <Flame size={18} />,
    headline: 'Kitchens Built to Live In',
    description:
      'From white-shaker classics to bold two-tone statement kitchens — every cabinet, countertop, and lighting fixture chosen with intention.',
    images: [
      { src: '/PhoenixLogo1.jpg', alt: 'Custom kitchen remodel — white cabinetry with granite' },
      { src: '/PhoenixLogo2.jpg', alt: 'Modern kitchen with island and new appliances' },
      { src: '/PhoenixLogo3.jpg', alt: 'Open-layout kitchen transformation' },
      { src: '/PhoenixLogo4.jpg', alt: 'Premium kitchen finishes — Woodstock GA' },
      { src: '/IMG_9350.WEBP', alt: 'Kitchen island with pendant lighting' },
    ],
  },
  {
    id: 'bathroom',
    label: 'Bathrooms',
    icon: <Droplets size={18} />,
    headline: 'Bathrooms That Feel Like a Retreat',
    description:
      'Custom marble showers, frameless glass, heated floors, and double vanities — the details that turn a bathroom into a destination.',
    images: [
      { src: '/phoecon1.jpeg', alt: 'Custom marble shower with glass enclosure' },
      { src: '/phoecon3.jpeg', alt: 'Elegant vanity with marble countertop' },
      { src: '/IMG_9352.WEBP', alt: 'Luxury master bathroom with soaking tub' },
    ],
  },
  {
    id: 'basement',
    label: 'Basements',
    icon: <Layers size={18} />,
    headline: 'Basements That Become the Best Room in the House',
    description:
      'Custom Irish bars, wine cellars, entertainment spaces, and in-law suites. We turn concrete into square footage that people actually want to be in.',
    images: [
      { src: '/IMG_9316.JPG', alt: 'Custom Irish bar — full view' },
      { src: '/IMG_9317.JPG', alt: 'Custom bar cabinetry detail' },
      { src: '/IMG_9318.JPG', alt: 'Basement entertainment area' },
      { src: '/IMG_9319.JPG', alt: 'Custom bar — close detail' },
      { src: '/IMG_9320.JPG', alt: 'Basement lounge and seating area' },
      { src: '/IMG_9321.JPG', alt: 'Wine storage room' },
      { src: '/IMG_9322.JPG', alt: 'Wine room entrance' },
      { src: '/phoecon4.jpeg', alt: 'Finished basement living area' },
      { src: '/phoecon6.jpeg', alt: 'Basement entertainment space with wet bar' },
    ],
  },
  {
    id: 'pool',
    label: 'Pool Construction',
    icon: <Sun size={18} />,
    headline: 'Custom Pools Built from the Ground Up',
    description:
      'Inground pools, spa features, and complete backyard transformations. 20+ years of pool construction experience — steel, plumbing, and every detail in between.',
    images: [
      { src: '/PhoenixPool1.jpeg', alt: 'Custom pool excavation and steel framework' },
      { src: '/phoenixpool2.jpeg', alt: 'Pool construction with spa feature' },
      { src: '/phoenixpool3.jpeg', alt: 'Professional pool plumbing installation' },
      { src: '/phoenixpool4.jpeg', alt: 'Spa detail with steel reinforcement' },
      { src: '/1000011179.jpg', alt: 'Completed custom pool — finished water surface' },
      { src: '/1000011187.jpg', alt: 'Custom pool with spa and deck — finished project' },
    ],
  },
  {
    id: 'custom',
    label: 'Custom & Interior',
    icon: <Home size={18} />,
    headline: 'Custom Work at Every Scale',
    description:
      'Stone fireplaces, built-in shelving, dining rooms, living spaces, and new construction. The breadth of what we build is the point.',
    images: [
      { src: '/IMG_9351.WEBP', alt: 'Living room with stone fireplace and built-ins' },
      { src: '/IMG_9354.WEBP', alt: 'Elegant dining room with chandelier' },
      { src: '/IMG_9347.JPG', alt: 'Custom home construction' },
      { src: '/IMG_1359.JPG', alt: 'Custom renovation project' },
      { src: '/IMG_1361.JPG', alt: 'Interior home improvement project' },
      { src: '/IMG_1375.JPG', alt: 'Completed custom renovation' },
      { src: '/IMG_8974.jpg', alt: 'Professional construction work' },
      { src: '/IMG_8975.jpg', alt: 'Home remodeling project' },
      { src: '/IMG_8987.jpg', alt: 'Construction project progress' },
      { src: '/IMG_8988.jpg', alt: 'Building project completion' },
      { src: '/image000000.jpg', alt: 'Home construction project' },
    ],
  },
  {
    id: 'exterior',
    label: 'Exterior',
    icon: <Trees size={18} />,
    headline: 'Curb Appeal That Commands Attention',
    description:
      'Exterior renovations, professional painting, and structural work that changes how a home presents to the world.',
    images: [
      { src: '/IMG_9355.JPG', alt: 'Exterior home renovation' },
      { src: '/phoenix2.jpeg', alt: 'Exterior painting in progress' },
      { src: '/phoenix4.jpeg', alt: 'Exterior painting project' },
      { src: '/phoenix5.jpeg', alt: 'Completed exterior painting' },
      { src: '/phoenix6.jpeg', alt: 'Premium home exterior work' },
    ],
  },
];

// ─── Principles ────────────────────────────────────────────────────────────
const principles = [
  {
    icon: <Shield size={28} className="text-red-600" />,
    title: 'Licensed. Insured. Accountable.',
    body: 'Every project is permitted through Cherokee County, inspected at each phase, and backed by a full workmanship warranty. Your home is an asset — we protect it like one.',
  },
  {
    icon: <Hammer size={28} className="text-red-600" />,
    title: 'Premium Materials, No Exceptions.',
    body: 'We specify materials we\'d put in our own homes. Not the cheapest option that passes inspection — the right material for the job, installed correctly, built to outlast the mortgage.',
  },
  {
    icon: <Users size={28} className="text-red-600" />,
    title: 'In-House Crews. Not Strangers.',
    body: 'Our core crews work with us project to project. You don\'t get a different face every morning. You get people who know our standards and hold to them.',
  },
  {
    icon: <MessageSquare size={28} className="text-red-600" />,
    title: 'One Contact. Total Transparency.',
    body: 'Your project manager is your single point of contact from consultation to final walkthrough. Weekly updates. No surprises. No "call accounting for that."',
  },
  {
    icon: <Star size={28} className="text-red-600" />,
    title: 'Fixed-Price Contracts.',
    body: 'We scope your project completely before we price it. The number we give you is the number you pay. Change orders only happen when you change the scope.',
  },
  {
    icon: <Wrench size={28} className="text-red-600" />,
    title: 'Built for Cherokee County.',
    body: 'We live and work here. We understand the soil, the climate, the permit office, and the community. Our reputation in Woodstock is our most valuable asset.',
  },
];

// ─── Services overview ─────────────────────────────────────────────────────
const services = [
  { label: 'Kitchen Remodeling', href: '/kitchen-remodeling-in-woodstock-ga' },
  { label: 'Bathroom Remodeling', href: '/bathroom-remodeling-in-woodstock-ga' },
  { label: 'Basement Finishing & Remodeling', href: '/basement-remodeling-in-woodstock-ga' },
  { label: 'Custom Home Construction', href: '/home-construction-in-woodstock-ga' },
  { label: 'Roofing Services', href: '/roofing-in-woodstock-ga' },
  { label: 'Deck Installation & Repair', href: '/deck-installation-and-repair-in-woodstock-ga' },
  { label: 'Pool Construction', href: '/pool-construction-in-woodstock-ga' },
];

// ─── Mini gallery component ────────────────────────────────────────────────
function MiniGallery({ group }: { group: typeof galleryGroups[0] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % group.images.length);
  };
  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + group.images.length) % group.images.length);
  };

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });

  const previewImages = group.images.slice(0, 4);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
          {group.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900">{group.headline}</h3>
      </div>
      <p className="text-gray-500 text-sm mb-5 max-w-xl">{group.description}</p>

      {/* Scroll strip */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition -translate-x-3 hidden sm:flex"
        >
          <ChevronLeft size={18} className="text-slate-700" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scroll-smooth pb-2"
          style={{ scrollbarWidth: 'none' }}
        >
          {group.images.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className="flex-shrink-0 w-56 h-44 rounded-xl overflow-hidden cursor-pointer group relative shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs font-medium leading-tight">{img.alt}</p>
              </div>
            </div>
          ))}
          {/* View all nudge */}
          <Link
            to="/gallery"
            className="flex-shrink-0 w-44 h-44 rounded-xl overflow-hidden bg-slate-900 flex flex-col items-center justify-center gap-2 hover:bg-slate-800 transition shadow-md"
          >
            <span className="text-white font-semibold text-sm">View Full Gallery</span>
            <ArrowRight className="text-red-400" size={20} />
          </Link>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition translate-x-3 hidden sm:flex"
        >
          <ChevronRight size={18} className="text-slate-700" />
        </button>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-red-400 transition z-10">
            <X size={36} />
          </button>
          <button onClick={prev} className="absolute left-4 text-white hover:text-red-400 transition z-10 p-2">
            <ChevronLeft size={44} />
          </button>
          <button onClick={next} className="absolute right-4 text-white hover:text-red-400 transition z-10 p-2">
            <ChevronRight size={44} />
          </button>
          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={group.images[lightboxIndex].src}
              alt={group.images[lightboxIndex].alt}
              className="max-h-[82vh] max-w-[88vw] object-contain rounded-xl"
            />
            <p className="text-white text-base mt-4 text-center">{group.images[lightboxIndex].alt}</p>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
            {lightboxIndex + 1} / {group.images.length}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Counter animation hook ────────────────────────────────────────────────
function useCountUp(target: number, duration = 1400, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return val;
}

function StatCard({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const count = useCountUp(value, 1400, active);
  return (
    <div className="text-center">
      <div className="text-5xl font-black text-white mb-2">
        {count}<span className="text-red-400">{suffix}</span>
      </div>
      <div className="text-gray-400 text-sm font-medium leading-snug">{label}</div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function ThePhoenixWay() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState(galleryGroups[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const activeGroup = galleryGroups.find((g) => g.id === activeGalleryTab)!;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/IMG_9316.JPG')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-900/90" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/phoenix_construction_no_bg.png"
              alt="Phoenix Construction"
              className="h-20 md:h-28 w-auto drop-shadow-2xl"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Flame size={14} />
            Woodstock, Georgia
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
            The Phoenix
            <span className="block text-red-500">Way</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4 leading-relaxed font-light">
            We don't just build structures.
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            We build the kitchens families gather in, the basements where memories are made, the bathrooms that feel like escapes, and the homes people are proud to come back to every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="tel:6784634893"
              className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-red-500/30 hover:scale-105"
            >
              <Phone size={22} />
              (678) 463-4893
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              Get a Free Estimate
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce opacity-60">
            <span className="text-white text-xs tracking-widest uppercase">Scroll to see our work</span>
            <div className="w-px h-8 bg-white/50" />
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5 leading-tight">
              What "The Phoenix Way" Actually Means
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Phoenix Construction is a licensed general contractor based in Woodstock, GA — serving Cherokee County, Cobb County, and the greater Metro Atlanta area. Our mission is simple: build exceptional spaces, and earn the trust of the families who live in them. Every project, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-gradient-to-br from-slate-900 to-slate-800 py-20"
      >
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-red-400 font-bold text-sm tracking-widest uppercase">By the Numbers</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 leading-tight">
              The work speaks for itself
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard value={7} suffix="+" label="Services — one contractor for everything your home needs" active={statsVisible} />
            <StatCard value={10} suffix="+" label="Cities and counties served across Metro Atlanta" active={statsVisible} />
            <StatCard value={20} suffix="+" label="Years of pool construction experience" active={statsVisible} />
            <StatCard value={100} suffix="%" label="Of our projects permitted, inspected, and legally documented" active={statsVisible} />
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERIES ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5 leading-tight">
              Real Projects. Real Results.
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Every photo on this page is a project we completed for a homeowner in Woodstock, Cherokee County, or the surrounding Metro Atlanta area.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {galleryGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGalleryTab(g.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeGalleryTab === g.id
                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300 hover:text-red-600'
                }`}
              >
                {g.icon}
                {g.label}
              </button>
            ))}
          </div>

          {/* Active gallery */}
          <div
            key={activeGroup.id}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <MiniGallery group={activeGroup} />
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              View Full Project Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5 leading-tight">
              From First Call to Final Walkthrough
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                step: '01',
                title: 'Thorough Assessment & Planning',
                body: 'We start with a detailed evaluation of your goals, your space, and your budget — building a clear plan with realistic timelines and transparent cost breakdowns before a single nail is pulled.',
              },
              {
                step: '02',
                title: 'Skilled Execution & Coordination',
                body: 'Experienced project managers and in-house crews execute with precision. Every trade is coordinated, every inspection is scheduled, and safety is non-negotiable on every job site.',
              },
              {
                step: '03',
                title: 'Adaptability & Problem-Solving',
                body: 'Every project reveals something unexpected. We have the skills and experience to solve problems in the field without blowing your timeline or your budget. That\'s what a real GC does.',
              },
              {
                step: '04',
                title: 'Delivering Exceptional Results',
                body: 'We don\'t consider a project finished until it\'s right. Every detail is reviewed at the final walkthrough. When you sign off, you\'re signing off on work you\'re proud to show.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 p-7 rounded-2xl border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center">
                    <span className="text-white font-black text-sm">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-red-400 font-bold text-sm tracking-widest uppercase">What We Build</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5 leading-tight">
              One Contractor. Everything Your Home Needs.
            </h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From kitchens to custom pools — you work with one licensed, accountable team from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                className="flex items-center justify-between bg-white/5 border border-white/10 text-white px-6 py-5 rounded-xl hover:bg-white/10 hover:border-red-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-red-500 flex-shrink-0" size={18} />
                  <span className="font-semibold">{s.label}</span>
                </div>
                <ArrowRight className="text-gray-500 group-hover:text-red-400 transition-colors" size={18} />
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl"
            >
              Explore All Services
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Where We Build</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3 mb-4">
            Proudly Serving Metro Atlanta
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Based in Woodstock, we serve homeowners across Cherokee County, Alpharetta, Milton, Roswell, Marietta, and the greater Metro Atlanta area.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Woodstock', 'Canton', 'Holly Springs', 'Marietta', 'Kennesaw', 'Alpharetta', 'Roswell', 'Milton', 'Smyrna', 'Atlanta', 'Newnan'].map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 shadow-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/phoecon6.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/96 via-slate-900/90 to-slate-900/70" />

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <span className="text-red-400 font-bold text-sm tracking-widest uppercase">Let's Build Something</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Call us today for a free consultation. We'll walk your space, understand your goals, and give you an honest, transparent estimate — no pressure, no upsell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:6784634893"
                className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:shadow-red-500/30 hover:scale-105"
              >
                <Phone size={24} />
                Call (678) 463-4893
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-5 rounded-xl font-bold text-lg transition-all shadow-xl"
              >
                Request Free Estimate
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              info@phoenixconstructioninc.com &nbsp;·&nbsp; Woodstock, GA &nbsp;·&nbsp; Cherokee County &nbsp;·&nbsp; Alpharetta &nbsp;·&nbsp; Milton &nbsp;·&nbsp; Metro Atlanta
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
