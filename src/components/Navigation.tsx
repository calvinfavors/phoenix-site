import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Flame } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/phoenix_construction_no_bg.png"
              alt="Phoenix Construction"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}
            >
              Home
            </Link>

            <div className="relative group">
              <button
                className={`font-medium transition-colors flex items-center ${
                  isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                }`}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    All Services
                  </Link>
                  <Link to="/bathroom-remodeling-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Bathroom Remodeling
                  </Link>
                  <Link to="/kitchen-remodeling-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Kitchen Remodeling
                  </Link>
                  <Link to="/basement-remodeling-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Basement Remodeling
                  </Link>
                  <Link to="/home-construction-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Custom Home Construction
                  </Link>
                  <Link to="/roofing-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Roofing Services
                  </Link>
                  <Link to="/deck-installation-and-repair-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Deck Installation & Repair
                  </Link>
                  <Link to="/pool-construction-in-woodstock-ga" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Pool Construction
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className={`font-medium transition-colors flex items-center ${
                  isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                }`}
              >
                About
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    About Us
                  </Link>
                  <Link to="/the-phoenix-way" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-semibold">
                    <Flame size={14} className="text-red-500" />
                    The Phoenix Way
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className={`font-medium transition-colors flex items-center ${
                  isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
                }`}
              >
                Service Areas
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/atlanta" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Atlanta
                  </Link>
                  <Link to="/kennesaw" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Kennesaw
                  </Link>
                  <Link to="/marietta" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Marietta
                  </Link>
                  <Link to="/newnan" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Newnan
                  </Link>
                  <Link to="/smyrna" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Smyrna
                  </Link>
                  <Link to="/cherokee-county" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Cherokee County
                  </Link>
                  <Link to="/alpharetta" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Alpharetta
                  </Link>
                  <Link to="/milton" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Milton
                  </Link>
                  <Link to="/roswell" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Roswell
                  </Link>
                  <Link to="/woodstock" className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600">
                    Woodstock
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className={`font-medium transition-colors ${
                isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/blog"
              className={`font-medium transition-colors ${
                isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/case-studies"
              className={`font-medium transition-colors ${
                isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}
            >
              Case Studies
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isScrolled || !isHome ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-400'
              }`}
            >
              Contact
            </Link>

            <a
              href="tel:6784634893"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Phone size={18} />
              <span className="hidden xl:inline">Call Us Now</span>
            </a>
          </div>

          <button
            className={`lg:hidden p-2 ${isScrolled || !isHome ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col p-4">
              <Link to="/" className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100">
                Home
              </Link>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100 flex items-center justify-between"
              >
                Services
                <ChevronDown size={18} className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 bg-gray-50">
                  <Link to="/services" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    All Services
                  </Link>
                  <Link to="/bathroom-remodeling-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Bathroom Remodeling
                  </Link>
                  <Link to="/kitchen-remodeling-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Kitchen Remodeling
                  </Link>
                  <Link to="/basement-remodeling-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Basement Remodeling
                  </Link>
                  <Link to="/home-construction-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Custom Home Construction
                  </Link>
                  <Link to="/roofing-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Roofing Services
                  </Link>
                  <Link to="/deck-installation-and-repair-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Deck Installation
                  </Link>
                  <Link to="/pool-construction-in-woodstock-ga" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Pool Construction
                  </Link>
                </div>
              )}

              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100 flex items-center justify-between w-full"
              >
                About
                <ChevronDown size={18} className={`transform transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 bg-gray-50">
                  <Link to="/about" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    About Us
                  </Link>
                  <Link to="/the-phoenix-way" className="flex items-center gap-2 text-gray-600 hover:text-red-600 py-2 text-sm font-semibold">
                    <Flame size={13} className="text-red-500" />
                    The Phoenix Way
                  </Link>
                </div>
              )}

              <button
                onClick={() => setAreasOpen(!areasOpen)}
                className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100 flex items-center justify-between"
              >
                Service Areas
                <ChevronDown size={18} className={`transform transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="pl-4 bg-gray-50">
                  <Link to="/atlanta" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Atlanta
                  </Link>
                  <Link to="/kennesaw" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Kennesaw
                  </Link>
                  <Link to="/marietta" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Marietta
                  </Link>
                  <Link to="/newnan" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Newnan
                  </Link>
                  <Link to="/smyrna" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Smyrna
                  </Link>
                  <Link to="/cherokee-county" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Cherokee County
                  </Link>
                  <Link to="/alpharetta" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Alpharetta
                  </Link>
                  <Link to="/milton" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Milton
                  </Link>
                  <Link to="/roswell" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Roswell
                  </Link>
                  <Link to="/woodstock" className="block text-gray-600 hover:text-red-600 py-2 text-sm">
                    Woodstock
                  </Link>
                </div>
              )}

              <Link to="/gallery" className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100">
                Gallery
              </Link>

              <Link to="/blog" className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100">
                Blog
              </Link>

              <Link to="/case-studies" className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100">
                Case Studies
              </Link>

              <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium py-3 border-b border-gray-100">
                Contact
              </Link>

              <a
                href="tel:6784634893"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 mt-4"
              >
                <Phone size={18} />
                <span>(678) 463-4893</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
