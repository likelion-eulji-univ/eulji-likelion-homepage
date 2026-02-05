"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface PopupSlide {
  image: string;
  link: string;
  alt: string;
}

interface PopupProps {
  slides?: PopupSlide[];
  autoPlayInterval?: number;
}

export default function Popup({
  slides = [
    {
      image: "/hello-friends.JPG",
      link: "https://eulji-hf.netlify.app/",
      alt: "팝업 이미지 1",
    },
    {
      image: "/euljigpt-cardnews.jpg",
      link: "https://euljigpt.com/",
      alt: "팝업 이미지 2",
    },
  ],
  autoPlayInterval = 5000,
}: PopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // 오늘 하루 안보기 체크
    const hideUntil = localStorage.getItem("popup-hide-until");
    if (hideUntil) {
      const hideDate = new Date(hideUntil);
      const now = new Date();
      if (now < hideDate) {
        return; // 팝업을 보여주지 않음
      }
    }

    // 팝업 표시
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible || slides.length <= 1) return;

    // 자동 슬라이드
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isVisible, slides.length, autoPlayInterval, currentSlide]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); // 다음날 자정으로 설정
    localStorage.setItem("popup-hide-until", tomorrow.toISOString());
    setIsVisible(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
      <div className='relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden'>
        {/* 닫기 버튼 */}
        <button
          onClick={handleClose}
          className='absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200'
          aria-label='팝업 닫기'
        >
          <X size={24} />
        </button>

        {/* 슬라이드 컨테이너 */}
        <div className='relative aspect-square bg-gray-100'>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div
                onClick={() => handleSlideClick(slide.link)}
                className='cursor-pointer w-full h-full flex items-center justify-center'
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          ))}

          {/* 이전/다음 버튼 (슬라이드가 2개 이상일 때만) */}
          {slides.length > 1 && (
            <>
              <button
                onClick={handlePrevSlide}
                className='absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200'
                aria-label='이전 슬라이드'
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextSlide}
                className='absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200'
                aria-label='다음 슬라이드'
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* 슬라이드 인디케이터 (슬라이드가 2개 이상일 때만) */}
          {slides.length > 1 && (
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`슬라이드 ${index + 1}로 이동`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 하단 버튼 영역 */}
        <div className='flex border-t border-gray-200 bg-[#FCFCFC]'>
          <button
            onClick={handleHideToday}
            className='flex-1 py-4 text-gray-600 hover:bg-gray-50 transition-colors duration-200 font-medium'
          >
            오늘 하루 안보기
          </button>
          <div className='w-px bg-gray-200' />
          <button
            onClick={handleClose}
            className='flex-1 py-4 text-gray-800 hover:bg-gray-50 transition-colors duration-200 font-medium'
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
