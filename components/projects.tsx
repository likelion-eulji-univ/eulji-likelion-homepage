"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

  const projects = [
    {
      title: "을지대 멋사 홈페이지",
      description: "을지대학교 멋쟁이사자처럼 홈페이지 제작",
      tags: ["Typescript", "AWS", "Figma"],
      image: "/eulji-likelion-page.png",
    },
    {
      title: "무제",
      description: "내용없음",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "/likelion-eulji.png",
    },
    {
      title: "무제",
      description: "내용없음",
      tags: ["Vue.js", "Express", "MySQL"],
      image: "/likelion-eulji.png",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id='프로젝트'
      className='py-24 bg-background relative overflow-hidden'
    >
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float' />
        <div
          className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float'
          style={{ animationDelay: "1s" }}
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
              className={`transition-all duration-700 inline-block ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              우리의{" "}
            </span>
            <span
              className={`text-primary transition-all duration-700 delay-200 inline-block ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              프로젝트
            </span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            멋쟁이사자처럼에서 탄생한 다양한 프로젝트들을 만나보세요
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-3 cursor-pointer ${
                isVisible ? "animate-scale-in-bounce" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className='relative overflow-hidden'>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-all duration-700 ${
                    hoveredIndex === index ? "scale-125 rotate-3" : "scale-100"
                  }`}
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                <div
                  className={`absolute top-4 right-4 transition-all duration-500 ${
                    hoveredIndex === index
                      ? "opacity-100 translate-x-0 rotate-0"
                      : "opacity-0 translate-x-4 rotate-45"
                  }`}
                >
                  <ExternalLink
                    size={24}
                    className='text-white drop-shadow-lg'
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
                    hoveredIndex === index
                      ? "translate-x-full"
                      : "-translate-x-full"
                  }`}
                />
              </div>

              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-all duration-500'>
                  {project.title}
                </h3>
                <p className='text-muted-foreground mb-4 leading-relaxed transition-all duration-300'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-pointer ${
                        isVisible ? "animate-scale-in" : "opacity-0"
                      }`}
                      style={{
                        animationDelay: `${
                          index * 150 + tagIndex * 50 + 500
                        }ms`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
