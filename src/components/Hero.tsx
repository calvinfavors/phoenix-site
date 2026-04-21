import { useState, useEffect } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/IMG_9351.WEBP';
    img.onload = () => setImageLoaded(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url("/IMG_9351.WEBP")',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className={`absolute inset-0 bg-slate-900 transition-opacity duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`} />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-slate-900/75 to-orange-900/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/60" />

      <div className="container mx-auto px-4 z-10 pt-44 md:pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Phoenix Construction
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Your Trusted Builders in Woodstock, GA
            </p>
          </div>

          <div
            className="mb-12 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We specialize in creating beautiful, functional spaces that meet your needs and exceed
              your expectations. From expert kitchen remodeling to stunning bathroom renovations and
              custom home solutions.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={scrollToContact}
              className="group bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <a
              href="tel:6784634893"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>(678) 463-4893</span>
            </a>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <a
              href="tel:6784634893"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors"
            >
              <Phone size={18} />
              <span>(678) 463-4893</span>
            </a>
            <a
              href="mailto:info@phoenixconstructioninc.com"
              className="flex items-center space-x-2 hover:text-red-400 transition-colors"
            >
              <Mail size={18} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
