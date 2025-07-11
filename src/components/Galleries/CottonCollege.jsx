import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Photos/Cotton College/Cotton College.jpeg";

const CottonCollege = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1]; // Add more if needed

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="p-4 max-w-4xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-4">Cotton College</h1>

      <div
        className="overflow-hidden rounded-xl shadow-xl mb-4 relative bg-black"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] aspect-[16/9] flex items-center justify-center bg-black">
              <img
                src={src}
                alt={`Cotton College ${index + 1}`}
                className="max-h-full max-w-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CottonCollege;
