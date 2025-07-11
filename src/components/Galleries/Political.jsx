import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Photos/Political/Political1.jpeg";
import img2 from "../Photos/Political/Political2.jpeg";
import img3 from "../Photos/Political/Political3.jpeg";
import img4 from "../Photos/Political/Political4.jpeg";
import img5 from "../Photos/Political/Political5.jpeg";
import img6 from "../Photos/Political/Political6.jpeg";
import img7 from "../Photos/Political/Political7.jpeg";
import img8 from "../Photos/Political/Political8.jpeg";
import img9 from "../Photos/Political/Political9.jpeg";
import img10 from "../Photos/Political/Political10.jpeg";
import img11 from "../Photos/Political/Political11.jpeg";
import img12 from "../Photos/Political/Political12.jpeg";
import img13 from "../Photos/Political/Political13.jpeg";

const Podcast = () => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13
  ];

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
      <h1 className="text-2xl font-bold mb-2">Political</h1>
      <div
        className="overflow-hidden rounded-xl shadow-xl mb-4 relative"
        ref={emblaMainRef}
      >
        <div className="flex">
          {images.map((src, index) => (
            <div className="flex-[0_0_100%] aspect-[16/9]" key={index}>
              <img
                src={src}
                alt={`Political image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 focus:outline focus:outline-2 focus:outline-blue-600"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1 focus:outline focus:outline-2 focus:outline-blue-600"
          aria-label="Next slide"
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
                alt={`Thumbnail for political image ${index + 1}`}
                className="w-full h-16 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
