import { FolderOpen, Camera, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="min-h-screen pt-24">
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of successful construction and remodeling projects
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 md:p-16 shadow-xl border border-gray-100">
            <div className="bg-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <FolderOpen className="text-red-600" size={48} />
            </div>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">Coming Soon</h2>

            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              This is where Phoenix Construction will showcase our project spotlights. We're currently documenting our best work to give you an in-depth look at our craftsmanship, process, and the transformations we create for homeowners throughout the Atlanta metro area.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Camera className="text-red-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Before & After</h3>
                <p className="text-gray-600 text-sm">Dramatic transformation photos</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <FolderOpen className="text-red-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Project Details</h3>
                <p className="text-gray-600 text-sm">Scope, timeline, and materials</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ArrowRight className="text-red-600 mx-auto mb-3" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Client Stories</h3>
                <p className="text-gray-600 text-sm">Testimonials and experiences</p>
              </div>
            </div>

            <p className="text-gray-500 mb-8">
              In the meantime, check out our gallery or contact us to discuss your upcoming project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#gallery"
                className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all"
              >
                View Gallery
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Don't wait - call Phoenix Construction today for a free consultation
          </p>
          <a
            href="tel:6784634893"
            className="inline-flex items-center justify-center bg-white text-red-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <Phone size={24} className="mr-3" />
            Call Now: (678) 463-4893
          </a>
        </div>
      </div>
    </div>
  );
}
