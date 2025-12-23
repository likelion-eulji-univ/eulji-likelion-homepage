"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float' />
        <div
          className='absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "1s" }}
        />
        <div
          className='absolute top-1/2 left-1/3 w-64 h-64 bg-primary/15 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className='relative inline-block'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-secondary-foreground'>
              <span
                className={`block mb-2 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{
                  textShadow:
                    "0 0 15px rgba(255, 96, 0, 0.3), 0 0 30px rgba(255, 96, 0, 0.2)",
                }}
              >
                LIKE
              </span>
              <span
                className={`block text-primary transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
                style={{
                  textShadow:
                    "0 0 20px rgba(255, 96, 0, 0.6), 0 0 40px rgba(255, 96, 0, 0.4), 0 0 60px rgba(255, 96, 0, 0.2)",
                }}
              >
                LION
              </span>
            </h1>
          </div>
          {/* </CHANGE> */}

          <p
            className={`text-xl sm:text-2xl md:text-3xl text-secondary-foreground/90 mb-4 font-light transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            멋쟁이사자처럼 ⨉ 을지대학교
          </p>

          <p
            className={`text-lg sm:text-xl text-secondary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {"코딩으로 세상을 바꾸는 청년들의 열정과 도전"}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              className={`px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:shadow-2xl ${
                isVisible ? "animate-scale-in-bounce" : "opacity-0"
              }`}
              style={{ animationDelay: "900ms" }}
            >
              지원서 제출하기
            </button>
            <button
              className={`px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
                isVisible ? "animate-scale-in-bounce" : "opacity-0"
              }`}
              style={{ animationDelay: "1000ms" }}
            >
              더 알아보기
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce'>
        <ChevronDown size={40} className='text-primary' />
      </div>
    </section>
  );
}
