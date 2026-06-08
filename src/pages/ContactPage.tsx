import Contact from '../components/Contact';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24">
      <SEO
        title="Contact Phoenix Construction | Free Estimates Woodstock GA | (678) 463-4893"
        description="Contact Phoenix Construction for a free estimate on kitchen remodeling, bathroom renovations, basement finishing, custom home construction, roofing, or deck building in Woodstock GA. Call (678) 463-4893 or fill out our online form."
        canonical="/contact"
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]}
      />
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to start your project? Get in touch with Phoenix Construction today
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-red-600" size={28} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
              <a
                href="tel:6784634893"
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                (678) 463-4893
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-red-600" size={28} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <a
                href="mailto:phoecon2018@gmail.com"
                className="text-red-600 hover:text-red-700 font-semibold text-sm"
              >
                phoecon2018@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-red-600" size={28} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                2295 Towne Lake Pkwy
                <br />
                Suite 116-164
                <br />
                Woodstock, GA 30188
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-red-600" size={28} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Friday
                <br />
                8:00 AM - 6:00 PM
                <br />
                Saturday by Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact />

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Service Areas</h2>
            <p className="text-gray-600 mb-8">
              Phoenix Construction proudly serves Woodstock and the surrounding communities
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
              <div>Woodstock, GA</div>
              <div>Kennesaw, GA</div>
              <div>Marietta, GA</div>
              <div>Acworth, GA</div>
              <div>Canton, GA</div>
              <div>Roswell, GA</div>
              <div>Alpharetta, GA</div>
              <div>Cherokee County</div>
              <div>Cobb County</div>
              <div>Forsyth County</div>
              <div>Fulton County</div>
              <div>North Atlanta Area</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
