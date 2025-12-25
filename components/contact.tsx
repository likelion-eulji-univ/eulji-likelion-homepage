"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Instagram, Github, MapPin } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contacts = [
    {
      icon: <Mail size={32} />,
      title: "Email",
      content: "sungmin060618@g.eulji.ac.kr",
      link: "mailto:sungmin060618@g.eulji.ac.kr",
    },
    {
      icon: <Instagram size={32} />,
      title: "Instagram",
      content: "@likelion_eulji",
      link: "https://www.instagram.com/likelion_eulji",
    },
    {
      icon: <Github size={32} />,
      title: "GitHub",
      content: "github.com/likelion-eulji-univ",
      link: "https://github.com/likelion-eulji-univ",
    },
    {
      icon: <MapPin size={32} />,
      title: "Location",
      content: "경기도 성남시 수정구 산성대로 553",
      link: "https://naver.me/xq3aE2xF",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id='연락처'
      className='py-24 bg-secondary relative overflow-hidden'
    >
      <div className='absolute inset-0'>
        <div className='absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float' />
        <div
          className='absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-secondary-foreground'>
            <span
              className={`text-primary transition-all duration-700 inline-block ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              함께
            </span>
            <span
              className={`transition-all duration-700 delay-200 inline-block ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {" "}
              하고 싶나요?
            </span>
          </h2>
          <p
            className={`text-xl text-secondary-foreground/80 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            을지대학교 멋쟁이사자처럼과 함께 성장할 여러분을 기다립니다
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className={`group bg-background p-8 rounded-2xl hover:bg-primary transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer ${
                isVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className='text-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 mb-4'>
                {contact.icon}
              </div>
              <h3 className='text-lg font-bold mb-2 text-foreground group-hover:text-primary-foreground transition-colors duration-300'>
                {contact.title}
              </h3>
              <p className='text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300 text-sm break-all'>
                {contact.content}
              </p>
            </a>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            className='px-12 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-primary/50 hover:shadow-2xl animate-pulse-glow'
            onClick={() => alert("🦁 아기사자 모집 기간이 아닙니다.")}
            style={{ animationDelay: "900ms" }}
          >
            지원서 제출하기
          </button>
        </div>

        {/* sponser */}
        <div>
          <div className='flex justify-center items-center gap-4 mt-12 mb-8'>
            <h3 className='text-secondary-foreground/70 text-sm uppercase tracking-wider'>
              SPONSORED BY
            </h3>
            <div className='flex justify-center items-center gap-12'></div>
            <img
              src='/Upstage_Logo_White.svg'
              alt='Upstage Logo'
              className='h-10 w-auto'
            />
            <p className='text-secondary-foreground/70 text-sm uppercase tracking-wider'>
              (협의 중)
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-12 border-t border-border/20'>
        <div
          className={`text-center text-secondary-foreground/60 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className='mb-2'>
            © 을지대학교 멋쟁이사자처럼. All rights reserved.
          </p>
          <p className='text-sm'>{"Made with 🔥 by LIKELION EULJI UNIV."}</p>
        </div>
      </div>
    </section>
  );
}
