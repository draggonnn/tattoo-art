import { useState } from "react";

const Gallery = () => {
  // Placeholder images - replace with actual tattoo work photos
  const galleryImages = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg"
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 bg-tattoo-dark-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Galeria de <span className="text-gold">Trabalhos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada tatuagem é uma obra de arte única, criada com paixão e dedicação aos detalhes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-hover cursor-pointer group relative overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Trabalho de tatuagem ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-gold text-xl">+</span>
                  </div>
                  <p className="text-sm">Ver Detalhes</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-6">
            Gostou do que viu? Entre em contato para criar sua arte personalizada!
          </p>
          <button
            onClick={() => window.open("https://wa.me/5562983208180", "_blank")}
            className="btn-gold text-lg px-8 py-4 font-semibold inline-flex items-center gap-2"
          >
            <span>💬</span>
            Conversar no WhatsApp
          </button>
        </div>
      </div>

      {/* Modal for viewing images */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gold transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;