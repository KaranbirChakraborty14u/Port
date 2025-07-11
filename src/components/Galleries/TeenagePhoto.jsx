import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Photos/Teenage photo/Teenage photo.jpeg";

const TeenagePhoto = () => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1]; // Add more images here if needed

  const onSelect = useCallback(() => {
    if (!emblaMain) return;
    setSelectedIndex(emblaMain.selectedScrollSnap());
  }, [emblaMain]);

  useEffect(() => {
    if (!emblaMain) return;
    emblaMain.on("select", onSelect);
    onSelect();
  }, [emblaMain, onSelect]);

  const scrollPrev = () => emblaMain && emblaMain.scrollPrev();
  const scrollNext = () => emblaMain && emblaMain.scrollNext();

  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-4">Teenage Photo</h1>

      <div
        className="overflow-hidden rounded-xl shadow-xl mb-4 relative"
        ref={emblaMainRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] aspect-[16/9]" key={index}>
              <img
                src={src}
                alt={`Teenage Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TeenagePhoto;
