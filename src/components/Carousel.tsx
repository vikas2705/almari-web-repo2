"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Carousel({
  imageList = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr(curr === 0 ? imageList.length - 1 : curr - 1);
  };
  const next = () => {
    setCurr(curr === imageList.length - 1 ? 0 : curr + 1);
  };

  const setIndex = (index: number) => {
    setCurr(index);
  };

  /* useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  */

  const currentItem = imageList[curr];
  return (
    <div className="overflow-hidden relative min-h-[380px]">
      <div className="transition-transform ease-out duration-500">
        <div className="flex justify-center">
          <img
            src={currentItem?.src}
            alt="img1"
            className="custom-img-slider"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between py-4">
        <button
          onClick={() => {
            prev();
          }}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={() => {
            next();
          }}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imageList.map((item, index: number) => (
            <div
              onClick={() => {
                setIndex(index);
              }}
              className={`
              transition-all w-8 h-2 bg-black cursor-pointer
              ${curr === index ? "p-1" : "bg-opacity-50"}
            `}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
