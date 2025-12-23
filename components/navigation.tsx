"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["소개", "활동", "프로젝트", "연락처"];

  // 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex-shrink-0'>
            <h1 className='text-2xl font-bold' onClick={scrollToTop}>
              <span className='text-primary'>멋쟁이</span>
              <span className='text-secondary-foreground'>
                사자처럼 ⨉ 을지대학교
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className='text-secondary-foreground hover:text-primary transition-colors duration-300 font-medium'
              >
                {item}
              </a>
            ))}
            <Button className='bg-primary hover:bg-primary/90 text-primary-foreground'>
              지원하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-secondary-foreground'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-secondary/95 backdrop-blur-md border-t border-border'>
          <div className='px-4 pt-2 pb-4 space-y-3'>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className='block text-secondary-foreground hover:text-primary transition-colors duration-300 py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-2'>
              지원하기
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
