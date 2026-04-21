import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We've received your message and will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What Happens Next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">We Review Your Request</h3>
                  <p className="text-gray-600">Our team will review your project details and requirements.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">We Contact You</h3>
                  <p className="text-gray-600">A Phoenix Construction team member will reach out to discuss your project.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Free Consultation</h3>
                  <p className="text-gray-600">We'll schedule a free on-site consultation to provide an accurate estimate.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-300 mb-6">
              Call us directly and speak with a team member right away.
            </p>
            <a
              href="tel:6784634893"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone size={20} className="mr-2" />
              Call (678) 463-4893
            </a>
          </div>

          <Link
            to="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            <ArrowRight className="mr-2 rotate-180" size={20} />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
