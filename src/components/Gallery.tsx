import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: '/PhoenixLogo1.jpg', alt: 'Custom kitchen remodel Woodstock' },
    { src: '/PhoenixLogo2.jpg', alt: 'Woodstock kitchen renovation' },
    { src: '/phoecon1.jpeg', alt: 'Custom marble shower with glass enclosure' },
    { src: '/phoecon4.jpeg', alt: 'Finished basement living area' },
    { src: '/PhoenixLogo3.jpg', alt: 'Kitchen transformation Woodstock GA' },
    { src: '/phoenix5.jpeg', alt: 'Exterior house painting' },
    { src: '/phoecon3.jpeg', alt: 'Elegant bathroom vanity' },
    { src: '/PhoenixLogo4.jpg', alt: 'Completed Woodstock kitchen project' },
  ];

  const barImages = [
    { src: '/IMG_9316.JPG', alt: 'Custom Irish bar - Full view' },
    { src: '/IMG_9319.JPG', alt: 'Custom Irish bar - Bar detail' },
    { src: '/IMG_9320.JPG', alt: 'Custom Irish bar - Seating area' },
    { src: '/IMG_9322.JPG', alt: 'Custom Irish bar - Wine room' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Explore our portfolio of completed projects showcasing quality craftsmanship and attention
            to detail
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
          >
            View Full Gallery
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="grid grid-cols-2 gap-2 p-2">
                {barImages.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-white text-lg leading-relaxed mb-6">
                  "We hired Phoenix Construction for a huge basement overhaul. This was a lifetime dream basement for my husband that included a sports memorabilia room, a custom built Irish bar, an exquisite wine room and so much more. Mitch and his team were incredible and the attention to detail was like no other. If you want your job done to perfection, this is the team. Also, Mitch has great vision for your dream and helps make your dream better."
                </blockquote>
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-white font-semibold text-lg">Carolyn Russell</p>
                  <p className="text-gray-400">Google Review - July 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <X size={40} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <ChevronRight size={48} />
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
