'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const tabs = ['All Projects', 'Arts', 'Commercials', 'Experimentals'];

interface TopBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TopBar({ activeTab, setActiveTab }: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
      setIsNarrowScreen(window.innerWidth < 570);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    handleScroll();
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-16' : isWideScreen ? 'h-64' : 'h-auto'}`}>
      <div className={`absolute inset-0 backdrop-blur-md bg-white/80 dark:bg-black/60 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col justify-between">
        <div className={`flex items-center justify-end transition-all duration-300 ${scrolled ? 'h-full' : isWideScreen ? 'h-48' : 'h-auto'}`}>
          <div className={`flex ${isWideScreen ? 'items-center justify-end' : 'flex-col items-end'} w-full ${scrolled ? 'hidden' : 'block'}`}>
            {!isWideScreen && (
              <div className={`rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 ${scrolled ? 'w-12 h-12' : 'w-32 h-32'} mb-4 mt-4`}>
                <Image
                  src="/images/avatar.jpg"
                  alt="Race Li"
                  width={scrolled ? 48 : 128}
                  height={scrolled ? 48 : 128}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className={`flex flex-col ${isWideScreen ? 'items-end mr-6 max-w-[60%]' : 'items-end w-full'}`}>
              <h1 className={`title mb-2 ${isWideScreen ? 'text-3xl' : 'text-4xl'}`}>Race Li</h1>
              <p className={`subtitle text-base text-right leading-tight`}>
                Founder of the creator community magipop, previously developed an AI music app with over a million downloads, published a sci-fi book, enjoys playing electronic music, and hopes to have fun and be chill with fellow creators.
              </p>
            </div>
            {isWideScreen && (
              <div className={`rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 ${scrolled ? 'w-12 h-12' : 'w-32 h-32'}`}>
                <Image
                  src="/images/avatar.jpg"
                  alt="Race Li"
                  width={scrolled ? 48 : 128}
                  height={scrolled ? 48 : 128}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
          <div className={`flex items-center ${scrolled ? 'ml-auto' : 'hidden'}`}>
            <h1 className="title transition-all duration-300 mr-4 text-xl leading-none">Race Li</h1>
            <div className="rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 w-12 h-12">
              <Image
                src="/images/avatar.jpg"
                alt="Race Li"
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <nav className={`flex justify-start items-center ${scrolled ? 'absolute left-0 top-1/2 -translate-y-1/2 w-full px-4 sm:px-6 lg:px-8' : isWideScreen ? 'mb-6' : 'mt-4'}`}>
          {!isNarrowScreen ? (
            tabs.map((tab, index) => (
              <button
                key={tab}
                className={`
                  px-3 py-2 text-sm font-light transition-colors duration-200
                  ${activeTab === tab 
                    ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-md' 
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                  ${isWideScreen ? (index === 0 ? '' : 'ml-4') : 'mr-2 mb-2'}
                  ${isWideScreen && index !== 0 && activeTab !== tab ? '-ml-3' : ''}
                `}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))
          ) : (
            <div ref={dropdownRef} className="relative">
              <button
                className={`
                  px-3 py-2 text-sm font-light transition-colors duration-200 flex items-center
                  ${activeTab === activeTab 
                    ? 'bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 rounded-md' 
                    : 'text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                `}
                onClick={toggleDropdown}
              >
                {activeTab}
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      className={`
                        block w-full text-left px-4 py-2 text-sm
                        ${activeTab === tab
                          ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                        }
                      `}
                      onClick={() => {
                        setActiveTab(tab);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}