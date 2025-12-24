"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Users, Rocket, Heart } from "lucide-react";
import { Description } from "@radix-ui/react-toast";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedStack, setSelectedStack] = useState<number | null>(null);

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

  const features = [
    {
      icon: <Code2 size={40} />,
      title: "실전 개발",
      description: "실무 중심의 프로젝트로 진짜 개발 경험을 쌓습니다",
    },
    {
      icon: <Users size={40} />,
      title: "협업",
      description: "팀원들과 함께 성장하는 협업 환경",
    },
    {
      icon: <Rocket size={40} />,
      title: "빠른 성장",
      description: "체계적인 커리큘럼과 멘토링으로 빠르게 성장",
    },
    {
      icon: <Heart size={40} />,
      title: "열정",
      description: "개발에 대한 열정으로 함께 도전하고 성장",
    },
  ];

  const stack = [
    {
      image: "/js.svg",
      name: "프론트엔드",
      tools: "JavaScript, React",
      detail: "사용자 인터페이스를 개발하고, 사용자 경험을 최적화합니다.",
    },
    {
      image: "/be.svg",
      name: "백엔드",
      tools: "AWS, SpringBoot, MySQL",
      detail:
        "서버, 데이터베이스 등의 로직을 관리하여 안정적인 서비스 제공을 담당합니다.",
    },
    {
      image: "/upstage.svg",
      name: "인공지능",
      tools: "Upstage, Agentic AI, SLM",
      detail:
        "인공지능 모델을 활용 및 개발하여 사용자에게 맞춤형 서비스를 제공합니다.",
    },
    {
      image: "/design.svg",
      name: "디자인",
      tools: "Figma",
      detail:
        "사용자 경험(UX)과 사용자 인터페이스(UI)를 설계하여 시각적으로 매력적이고 사용하기 쉬운 디자인을 만듭니다.",
    },
  ];
  const handleStackClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedStack(selectedStack === index ? null : index);
  };

  const handleBackgroundClick = () => {
    setSelectedStack(null);
  };

  return (
    <section
      ref={sectionRef}
      id='소개'
      className='py-24 bg-background relative overflow-hidden'
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float' />
        <div
          className='absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground'>
            <span
              className={`text-primary transition-all duration-700 inline-block ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              멋쟁이사자처럼
            </span>
            <span
              className={`transition-all duration-700 delay-200 inline-block ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              은
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            대학생 IT 창업 동아리로, 아이디어를 실제 서비스로 구현하는 전 과정을
            경험합니다.
            <br />
            함께 배우고, 함께 만들고, 함께 성장하는 개발 & 창업 동아리입니다.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-card hover:bg-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer ${
                isVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='text-primary group-hover:text-primary-foreground transition-all duration-300 mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary-foreground transition-colors duration-300'>
                {feature.title}
              </h3>
              <p className='text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />

        <hr />

        <br />
        <br />
        <br />

        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground'>
            <span
              className={`text-primary transition-all duration-700 inline-block ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              트랙
            </span>
            <span
              className={`transition-all duration-700 delay-200 inline-block ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              소개
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            서비스를 구축하는 데 필요한 다양한 기술 스택을 경험할 수 있습니다.
            <br />
            클릭 시 세부 내용을 확인하실 수 있습니다.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stack.map((feature, index) => (
            <div
              key={index}
              onClick={(e) => handleStackClick(index, e)}
              className={`group p-8 rounded-2xl bg-card hover:bg-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer relative ${
                isVisible ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* 앞면 */}
              <div
                className={`transition-opacity duration-300 ${
                  selectedStack === index
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100"
                }`}
              >
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.name}
                  className={`w-full h-auto max-w-full object-contain transition-all duration-700 pb-4 pl-4 pr-4
        }`}
                />
                <h3 className='text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary-foreground transition-colors duration-300'>
                  {feature.name}
                </h3>
                <p className='text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300 leading-relaxed'>
                  {feature.tools}
                </p>
              </div>

              {/* 뒷면 */}
              <div
                style={{ backgroundColor: "#F74A00", borderRadius: "1rem" }}
                className={`absolute inset-0 p-8 flex flex-col justify-center transition-opacity duration-300 ${
                  selectedStack === index
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <p className='text-white transition-colors duration-300 leading-relaxed text-center text-xl font-bold'>
                  {feature.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
