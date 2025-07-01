import React from "react";

const images = [
  "https://via.placeholder.com/600x800?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x600?text=Image+3",
  "https://via.placeholder.com/600x800?text=Image+4",
  "https://via.placeholder.com/600x400?text=Image+5",
  "https://via.placeholder.com/600x600?text=Image+6",
];

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:opacity-90 transition duration-300 break-inside-avoid"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Text block like Photon */}
      <div className="max-w-3xl mx-auto text-center mt-12 space-y-4">
        <h3 className="text-2xl font-semibold">Our Portfolio</h3>
        <p className="text-gray-600">
          Explore our photography work, crafted with creativity and passion.
        </p>
      </div>

      {/* Another set of images */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-12">
        {images.map((src, index) => (
          <div
            key={`second-${index}`}
            className="overflow-hidden rounded-2xl shadow-lg hover:opacity-90 transition duration-300 break-inside-avoid"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Second text block */}
      <div className="max-w-3xl mx-auto text-center mt-12 space-y-4">
        <h3 className="text-2xl font-semibold">Let's Work Together</h3>
        <p className="text-gray-600">
          Contact us for custom photography packages tailored to your needs.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
