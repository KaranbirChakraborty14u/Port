import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Photos/Bodoland International/Bodoland1.jpeg";
import img2 from "../Photos/Bodoland International/Bodoland2.jpeg";

const Bodoland = () => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1, img2];

  const onSelect = useCallback(() => {
    if (!emblaMain || !emblaThumbs) return;
    const index = emblaMain.selectedScrollSnap();
    setSelectedIndex(index);
    emblaThumbs.scrollTo(index);
  }, [emblaMain, emblaThumbs]);

  useEffect(() => {
    if (!emblaMain) return;
    emblaMain.on("select", onSelect);
    onSelect();
  }, [emblaMain, onSelect]);

  const scrollPrev = () => emblaMain && emblaMain.scrollPrev();
  const scrollNext = () => emblaMain && emblaMain.scrollNext();
  const onThumbClick = (index) => emblaMain && emblaMain.scrollTo(index);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Bodoland International</h1>

      {/* Main Carousel */}
      <div
        className="overflow-hidden rounded-xl shadow-xl mb-4 relative"
        ref={emblaMainRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div
              className="flex-[0_0_100%] aspect-[16/9]"
              key={index}
            >
              <img
                src={src}
                alt={`Bodoland image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 focus:outline"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 focus:outline"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Thumbnail Row */}
      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex gap-2">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => onThumbClick(index)}
              className={`flex-[0_0_25%] sm:flex-[0_0_15%] cursor-pointer border-2 ${
                selectedIndex === index
                  ? "border-blue-600"
                  : "border-transparent"
              } rounded-md overflow-hidden`}
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-16 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bodoland;
