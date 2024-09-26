'use client';

import { useEffect, useState } from 'react';
import { Dock, DockIcon } from '@/components/magicui/dock';

export default function DockWrapper() {
  const [isSmall, setIsSmall] = useState(false);
  const [apiStatus, setApiStatus] = useState();


  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsSmall(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        transform: `translate(-50%, ${isSmall ? '-10px' : '0'}) scale(${isSmall ? 0.9 : 1})`,
      }}
    >
      <Dock>
        <DockIcon name="Header 1" href="/" />
        <DockIcon name="Header 2" href="/" />
        <DockIcon name="Header 3" href="/" />
        <DockIcon name="Home" href="/" highlight={true} />
      </Dock>
    </div>
  );
}