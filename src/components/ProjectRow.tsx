'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Link {
  url: string;
  label: string;
}

interface ProjectSlide {
  id: number;
  title: string;
  subtitle?: string;
  descriptions?: string[];
  imageUrl: string;
  links?: Link[];
  brandLogo?: {
    light: string;
    dark: string;
    alt: string;
  };
}

interface ProjectRowProps {
  project: {
    id: number;
    title: string;
    slides: ProjectSlide[];
  };
}

export default function ProjectRow({ project }: ProjectRowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [imageHeight, setImageHeight] = useState(500);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    console.log('Current theme:', theme);
    console.log('Resolved theme:', resolvedTheme);
    const handleResize = () => {
      const width = window.innerWidth;
      setIsWideScreen(width >= 1024);
      if (width > 1440) {
        // 计算新的图片高度，保持与1440px时的宽高比
        const newHeight = Math.round((width / 1440) * 500);
        setImageHeight(newHeight);
      } else {
        setImageHeight(500);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme, resolvedTheme]); // 添加 resolvedTheme 作为依赖项

  // 如果组件还没挂载，返回一个加载占位符
  if (!mounted) {
    return <div>Loading...</div>; // 或者返回一个骨架屏或其他占位内容
  }

  const scrollTo = (index: number) => {
    setCurrentIndex(index);
    if (scrollRef.current) {
      const slideWidth = isWideScreen ? scrollRef.current.offsetWidth * 0.8333 : scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    scrollTo((currentIndex + 1) % project.slides.length);
  };

  const prevSlide = () => {
    scrollTo((currentIndex - 1 + project.slides.length) % project.slides.length);
  };

  return (
    <div className="relative mt-32 mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="project-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase">
          {project.title}
        </h2>
      </div>
      <div className={`relative overflow-hidden`} style={{ height: isWideScreen ? `${imageHeight}px` : 'auto' }}>
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {project.slides.map((slide) => (
            <div 
              key={slide.id} 
              className={`flex-shrink-0 snap-start ${isWideScreen ? 'w-[83.33%] flex' : 'w-full flex-col'}`}
            >
              <div className={isWideScreen ? `w-3/5 relative` : 'w-full h-[400px] relative'} style={{ height: isWideScreen ? `${imageHeight}px` : '400px' }}>
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={`${isWideScreen ? 'w-2/5 p-8' : 'w-full p-4'} flex flex-col justify-center`}>
                <h3 className="title mb-2">{slide.title}</h3>
                {slide.subtitle && <h4 className="subtitle mb-4">{slide.subtitle}</h4>}
                {slide.descriptions && slide.descriptions.length > 0 && (
                  <div className="space-y-2">
                    {slide.descriptions.map((desc, i) => (
                      <p key={i} className="body-text description-text font-light">{desc}</p>
                    ))}
                  </div>
                )}
                {slide.links && slide.links.length > 0 && (
                  <div className="mt-4 flex flex-col space-y-1">
                    {slide.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-black dark:text-white hover:opacity-70 transition-opacity font-medium"
                      >
                        <span>{link.label}</span>
                        <svg 
                          className="ml-1 w-[16px] h-[16px]" 
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.2071 14.2071L9.79289 12.7929L17.5858 5H13V3H21Z" 
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                )}
                {slide.brandLogo && (
                  <div className="mt-4">
                    <Image
                      src={resolvedTheme === 'dark' ? slide.brandLogo.light : slide.brandLogo.dark}
                      alt={slide.brandLogo.alt}
                      width={150}
                      height={50}
                      objectFit="contain"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white rounded-full p-3 z-10 hover:bg-white/70 dark:hover:bg-black/70 transition-all"
          onClick={prevSlide}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 dark:bg-black/30 backdrop-blur-md text-black dark:text-white rounded-full p-3 z-10 hover:bg-white/70 dark:hover:bg-black/70 transition-all"
          onClick={nextSlide}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}