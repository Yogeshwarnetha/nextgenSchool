// components/HomepageCarousel.jsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, MapPin, Calendar, Users, Award } from 'lucide-react';

const images = [
    'https://images.unsplash.com/photo-1705464623602-08eccb6c07cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1626023160253-88d281fc1d72?q=80&w=1659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const HomepageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      <div
        className="relative h-[400px] md:h-[800px] transition-transform duration-500 ease-out"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ pointerEvents: currentSlide === idx ? 'auto' : 'none' }}
          />
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-white/70 hover:bg-blue-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="bg-white/70 hover:bg-white text-gray-700 p-2 rounded-full shadow transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      {/* Swipe Hint for Mobile */}
      <div className="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center text-white/90 text-sm bg-black/30 px-3 py-1 rounded-full">
        <ChevronLeft size={16} className="mr-1" />
        <span>Swipe to navigate</span>
        <ChevronRight size={16} className="ml-1" />
      </div>
      <style jsx>{`
        button:focus {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default HomepageCarousel;