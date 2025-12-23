"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, Laptop, Trophy, MessageCircle } from "lucide-react";

export default function Activities() {
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

  const activities = [
    {
      icon: <BookOpen size={48} />,
      title: "정기 세션",
      description: "매주 진행되는 체계적인 학습 세션으로 기초부터 심화까지",
      color: "bg-primary",
    },
    {
      icon: <Laptop size={48} />,
      title: "해커톤",
      description:
        "중앙 해커톤과 연합 해커톤을 통해 아이디어를 실제 서비스로 구현하는 집중 개발",
      color: "bg-secondary",
    },
    {
      icon: <Trophy size={48} />,
      title: "프로젝트",
      description: "팀 단위로 진행하는 실전 프로젝트 경험",
      color: "bg-primary",
    },
    {
      icon: <MessageCircle size={48} />,
      title: "네트워킹",
      description: "전국 멋대들과 함께하는 교류와 협업의 장",
      color: "bg-secondary",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id='활동'
      className='py-24 bg-secondary relative overflow-hidden'
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float' />
        <div
          className='absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "2s" }}
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
              className={`transition-all duration-700 inline-block ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              주요{" "}
            </span>
            <span
              className={`text-primary transition-all duration-700 delay-200 inline-block ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              활동
            </span>
          </h2>
          <p
            className={`text-xl text-secondary-foreground/80 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            다양한 활동을 통해 실력을 키우고 네트워크를 확장합니다
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer ${
                isVisible ? "animate-rotate-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${activity.color} p-12 h-full relative z-10`}>
                <div className='text-primary-foreground mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3'>
                  {activity.icon}
                </div>
                <h3 className='text-3xl font-bold mb-4 text-primary-foreground'>
                  {activity.title}
                </h3>
                <p className='text-lg text-primary-foreground/90 leading-relaxed'>
                  {activity.description}
                </p>
              </div>
              <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <div
                className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-all duration-700`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
