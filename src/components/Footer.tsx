import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="/phoenix_construction_no_bg.png"
              alt="Phoenix Construction"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed mb-4">
              Your trusted construction partner in Woodstock, GA. Delivering exceptional quality and
              craftsmanship since day one.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-red-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-red-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-red-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/bathroom-remodeling-in-woodstock-ga" className="text-gray-300 hover:text-red-400 transition-colors">
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link to="/kitchen-remodeling-in-woodstock-ga" className="text-gray-300 hover:text-red-400 transition-colors">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link to="/basement-remodeling-in-woodstock-ga" className="text-gray-300 hover:text-red-400 transition-colors">
                  Basement Remodeling
                </Link>
              </li>
              <li>
                <Link to="/home-construction-in-woodstock-ga" className="text-gray-300 hover:text-red-400 transition-colors">
                  Home Construction
                </Link>
              </li>
              <li>
                <Link to="/roofing-in-woodstock-ga" className="text-gray-300 hover:text-red-400 transition-colors">
                  Roofing
                </Link>
              </li>
              <li>
                <Link to="/deck-installation-and-repair-in-woodstock-ga" className="text-gray-300 hover:text-red-400 transition-colors">
                  Deck Installation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-500 flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-300 text-sm">
                  2295 Towne Lake Pkwy Suite 116-164
                  <br />
                  Woodstock, GA 30188
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-red-500 flex-shrink-0" size={20} />
                <a
                  href="tel:6784634893"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  (678) 463-4893
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500 flex-shrink-0" size={20} />
                <a
                  href="mailto:phoecon2018@gmail.com"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  phoecon2018@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {new Date().getFullYear()} Phoenix Construction, Inc. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link to="/atlanta" className="text-gray-400 hover:text-red-400 transition-colors">
                Atlanta
              </Link>
              <Link to="/kennesaw" className="text-gray-400 hover:text-red-400 transition-colors">
                Kennesaw
              </Link>
              <Link to="/marietta" className="text-gray-400 hover:text-red-400 transition-colors">
                Marietta
              </Link>
              <Link to="/newnan" className="text-gray-400 hover:text-red-400 transition-colors">
                Newnan
              </Link>
              <Link to="/smyrna" className="text-gray-400 hover:text-red-400 transition-colors">
                Smyrna
              </Link>
              <Link to="/cherokee-county" className="text-gray-400 hover:text-red-400 transition-colors">
                Cherokee County
              </Link>
              <Link to="/alpharetta" className="text-gray-400 hover:text-red-400 transition-colors">
                Alpharetta
              </Link>
              <Link to="/milton" className="text-gray-400 hover:text-red-400 transition-colors">
                Milton
              </Link>
              <Link to="/roswell" className="text-gray-400 hover:text-red-400 transition-colors">
                Roswell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
