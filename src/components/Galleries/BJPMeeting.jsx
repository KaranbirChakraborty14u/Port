import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../Photos/BJP Meeting/BJP meeting.jpeg";
import img2 from "../Photos/BJP Meeting/BJP meeting2.jpeg";
import img3 from "../Photos/BJP Meeting/BJP meeting3.jpeg";

const BJPMeeting = () => {
  const [emblaMainRef, emblaMain] = useEmblaCarousel({ loop: true });
  const [emblaThumbsRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "trimSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1, img2, img3];

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
      <h1 className="text-2xl font-bold mb-4">BJP Meeting</h1>

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
                alt={`BJP Meeting image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Thumbnail Carousel */}
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

export default BJPMeeting;
