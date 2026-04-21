import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Phone, Filter } from 'lucide-react';

type Category = 'all' | 'kitchen' | 'bathroom' | 'basement' | 'exterior' | 'custom' | 'pool';

interface GalleryImage {
  src: string;
  alt: string;
  category: Category;
}

const allImages: GalleryImage[] = [
  { src: '/PhoenixLogo1.jpg', alt: 'Custom kitchen remodel in Woodstock - white cabinetry with granite', category: 'kitchen' },
  { src: '/PhoenixLogo2.jpg', alt: 'Woodstock kitchen renovation - modern appliances and island', category: 'kitchen' },
  { src: '/PhoenixLogo3.jpg', alt: 'Kitchen transformation Woodstock GA - bright open layout', category: 'kitchen' },
  { src: '/PhoenixLogo4.jpg', alt: 'Completed Woodstock kitchen project - premium finishes', category: 'kitchen' },
  { src: '/IMG_9350.WEBP', alt: 'Modern kitchen with island and pendant lighting', category: 'kitchen' },
  { src: '/IMG_9351.WEBP', alt: 'Living room with stone fireplace and built-ins', category: 'custom' },
  { src: '/IMG_9352.WEBP', alt: 'Luxury master bathroom with soaking tub', category: 'bathroom' },
  { src: '/IMG_9354.WEBP', alt: 'Elegant dining room with chandelier', category: 'custom' },
  { src: '/IMG_9316.JPG', alt: 'Custom Irish bar - Full view', category: 'basement' },
  { src: '/IMG_9317.JPG', alt: 'Custom bar cabinetry', category: 'basement' },
  { src: '/IMG_9318.JPG', alt: 'Basement entertainment area', category: 'basement' },
  { src: '/IMG_9319.JPG', alt: 'Custom bar detail', category: 'basement' },
  { src: '/IMG_9320.JPG', alt: 'Basement seating area', category: 'basement' },
  { src: '/IMG_9321.JPG', alt: 'Wine storage room', category: 'basement' },
  { src: '/IMG_9322.JPG', alt: 'Wine room entrance', category: 'basement' },
  { src: '/IMG_9347.JPG', alt: 'Custom home construction', category: 'custom' },
  { src: '/IMG_9355.JPG', alt: 'Exterior home renovation', category: 'exterior' },
  { src: '/IMG_1359.JPG', alt: 'Custom renovation project', category: 'custom' },
  { src: '/IMG_1361.JPG', alt: 'Home improvement project', category: 'custom' },
  { src: '/IMG_1375.JPG', alt: 'Completed renovation', category: 'custom' },
  { src: '/IMG_8974.jpg', alt: 'Professional construction work', category: 'custom' },
  { src: '/IMG_8975.jpg', alt: 'Home remodeling progress', category: 'custom' },
  { src: '/IMG_8987.jpg', alt: 'Construction project', category: 'custom' },
  { src: '/IMG_8988.jpg', alt: 'Building project completion', category: 'custom' },
  { src: '/phoenix2.jpeg', alt: 'Exterior house painting in progress', category: 'exterior' },
  { src: '/phoenix3.jpeg', alt: 'Professional painters at work', category: 'exterior' },
  { src: '/phoenix4.jpeg', alt: 'Exterior painting project', category: 'exterior' },
  { src: '/phoenix5.jpeg', alt: 'Completed exterior painting', category: 'exterior' },
  { src: '/phoenix6.jpeg', alt: 'Premium home exterior work', category: 'exterior' },
  { src: '/phoecon1.jpeg', alt: 'Custom marble shower with glass enclosure', category: 'bathroom' },
  { src: '/phoecon3.jpeg', alt: 'Elegant bathroom vanity with marble countertop', category: 'bathroom' },
  { src: '/phoecon4.jpeg', alt: 'Finished basement living area', category: 'basement' },
  { src: '/phoecon6.jpeg', alt: 'Basement entertainment space with wet bar', category: 'basement' },
  { src: '/image000000.jpg', alt: 'Home construction project', category: 'custom' },
  { src: '/PhoenixPool1.jpeg', alt: 'Custom pool excavation and steel framework', category: 'pool' },
  { src: '/phoenixpool2.jpeg', alt: 'Pool construction with spa feature', category: 'pool' },
  { src: '/phoenixpool3.jpeg', alt: 'Professional pool plumbing installation', category: 'pool' },
  { src: '/phoenixpool4.jpeg', alt: 'Spa detail with steel reinforcement', category: 'pool' },
];

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'kitchen', label: 'Kitchens' },
  { key: 'bathroom', label: 'Bathrooms' },
  { key: 'basement', label: 'Basements' },
  { key: 'pool', label: 'Pools' },
  { key: 'exterior', label: 'Exterior & Painting' },
  { key: 'custom', label: 'Custom Work' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredImages = activeCategory === 'all'
    ? allImages
    : allImages.filter(img => img.category === activeCategory);

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
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project Gallery
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our portfolio of completed projects across Metro Atlanta. From kitchen and bathroom
            remodels to custom basements and exterior painting, see the quality craftsmanship that sets
            Phoenix Construction apart.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2 text-gray-600 mr-4">
            <Filter size={20} />
            <span className="font-medium">Filter:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-500 mb-8">
          Showing {filteredImages.length} project{filteredImages.length !== 1 ? 's' : ''}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
                <span className="text-red-400 text-xs mt-1 capitalize">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you're dreaming of a new kitchen, a luxurious bathroom, or a complete home
            transformation, we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Your Free Estimate
            </Link>
            <a
              href="tel:6784634893"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              (678) 463-4893
            </a>
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
            className="absolute left-4 text-white hover:text-red-500 transition-colors z-10 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-red-500 transition-colors z-10 p-2"
          >
            <ChevronRight size={48} />
          </button>

          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg"
            />
            <p className="text-white text-lg mt-4">{filteredImages[selectedImage].alt}</p>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
