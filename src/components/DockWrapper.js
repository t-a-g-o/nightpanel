'use client';

import { useEffect, useState } from 'react';
import { Dock, DockIcon } from '@/components/magicui/dock';

export default function DockWrapper() {
  const [isSmall, setIsSmall] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsSmall(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
  };

  return (
    <div 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 text-sm md:text-base"
      style={{
        transform: `translate(-50%, ${isSmall ? '-10px' : '0'}) scale(${isSmall ? 0.9 : 1})`,
      }}
    >
      <Dock>
        {!isSmallScreen ? (
          <>
            <DockIcon name="Header 1" href="/" />
            <DockIcon name="Header 2" href="/" />
            <DockIcon name="Header 3" href="/" />
          </>
        ) : (
          <div className="relative">
            <DockIcon name="More" href="#" onClick={toggleMoreMenu} />
            {/* Dropdown Menu for Small Screens */}
            {showMoreMenu && (
              <div className="absolute top-full text-black left-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Header 1</a>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Header 2</a>
                <a href="/" className="block px-4 py-2 hover:bg-gray-100">Header 3</a>
              </div>
            )}
          </div>
        )}
        <DockIcon name="Download" href="/" highlight={true} />
      </Dock>
    </div>
  );
}