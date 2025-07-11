import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Photos/Religious/Religious1.jpeg";
import img2 from "../Photos/Religious/Religious2.jpeg";
import img3 from "../Photos/Religious/Religious3.jpeg";
import img4 from "../Photos/Religious/Religious4.jpeg";
import img5 from "../Photos/Religious/Religious5.jpeg";
import img6 from "../Photos/Religious/Religious6.jpeg";
import img7 from "../Photos/Religious/Religious7.jpeg";

const ReligiousPhotos = () => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6, img7];

  const onSelect = useCallback(() => {
    if (!emblaMain || !emblaThumbs) return;
    setSelectedIndex(emblaMain.selectedScrollSnap());
    emblaThumbs.scrollTo(emblaMain.selectedScrollSnap());
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
    <div className="p-4 max-w-4xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-2">Religious</h1>
      {/* <p className="text-gray-600 mb-4">Jul 01, 2025</p> */}
      <div
        className="overflow-hidden rounded-xl shadow-xl mb-4 relative"
        ref={emblaMainRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] aspect-[16/9]" key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
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
      </div>
      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex gap-2">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => onThumbClick(index)}
              className={`flex-[0_0_20%] sm:flex-[0_0_15%] cursor-pointer border-2 ${
                selectedIndex === index
                  ? "border-blue-600"
                  : "border-transparent"
              } rounded-md overflow-hidden`}
            >
              <img
                src={src}
                alt={`thumb-${index}`}
                className="w-full h-16 object-contain bg-black"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ReligiousPhotos;